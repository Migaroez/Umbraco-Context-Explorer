import {customElement, html, state, nothing, map, css, property} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';
import {UMB_EXTENSION_EXPLORER_CONTEXT} from '../context';
import { UMB_MODAL_MANAGER_CONTEXT, UmbModalManagerContext } from '@umbraco-cms/backoffice/modal';
import { UMB_CONTEXT_DEBUGGER_MODAL } from '@umbraco-cms/backoffice/debug';
import { UmbContextDebugRequest, UmbDebugContextData, UmbDebugContextItemData, contextData } from '@umbraco-cms/backoffice/context-api';
import { umbExtensionsRegistry } from '@umbraco-cms/backoffice/extension-registry';

@customElement('umb-package-explorer')
export class UmbExtensionExplorer extends UmbLitElement {
    @property({ type: String })
	registrationAlias = 'Our.ExtensionExplorer.HeaderApp';

    @state()
    private _explorerHide: boolean = true;

    @state()
	private _contextData = Array<UmbDebugContextData>();

    private _modalContext?: UmbModalManagerContext;

    #ExtensionExplorerContext?: typeof UMB_EXTENSION_EXPLORER_CONTEXT.TYPE;

    constructor() {
        super();
        this.consumeContext(UMB_EXTENSION_EXPLORER_CONTEXT, (instance) => {
            this.#ExtensionExplorerContext = instance;
            this._observeState();
        });
        this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
			this._modalContext = instance;
		});
    }

    private async _observeState() {
        if (!this.#ExtensionExplorerContext) return;

        this.observe(
            this.#ExtensionExplorerContext.hide,
            (state) => {
                this._explorerHide = state ?? true;
                // if (!state) return;
            },
            'umbContextStateObserver',
        );
    }

    #update() {
		this.dispatchEvent(
			new UmbContextDebugRequest((contexts: Map<any, any>) => {
				// The Contexts are collected
				// When travelling up through the DOM from this element
				// to the root of <umb-app> which then uses the callback prop
				// of this event that has been raised to assign the contexts
				// back to this property of the WebComponent

				// Massage the data into a simplier array of objects
				// from a function in the context-api.
				this._contextData = contextData(contexts);
				this.requestUpdate('_contextData');
			}),
		);
	}

    #openDialog() {
		this.#update();

		this._modalContext?.open(this, UMB_CONTEXT_DEBUGGER_MODAL, {
			data: {
				content: this.#ExtensionExplorerContext!.generateDialogContent(this._contextData,this.registrationAlias),

			},
		});
	}

    override render() {
        if(this._explorerHide){
            return nothing;
        }
        return html`
			<div>
				<uui-badge color="danger" look="primary" @click=${this.#openDialog}>
					<uui-icon name="icon-bug"></uui-icon>
					<span>Debug</span>
				</uui-badge>
			</div>
		`;
    }

    static override styles = [
		css`
			:host {
				float: right;
				font-family: monospace;
				position: relative;
				z-index: 10000;
			}

			#container {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
			}

			uui-badge {
				cursor: pointer;
				gap: 0.5rem;
			}

			uui-icon {
				font-size: 15px;
			}

			.events {
				background-color: var(--uui-color-danger);
				color: var(--uui-color-selected-contrast);
				padding: 1rem;
			}

			summary {
				cursor: pointer;
			}

			details > details {
				margin-left: 1rem;
			}

			ul {
				margin-top: 0;
			}
		`,
	];
}

export {UmbExtensionExplorer as element};