import {customElement, html, state} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';
import {UMB_CONTEXT_EXPLORER_CONTEXT} from './context';

@customElement('umb-context-explorer')
export class UmbExtensionExplorerToggle extends UmbLitElement {
    @state()
    private _explorerHide: boolean = true;

    #ExtensionExplorerContext?: typeof UMB_CONTEXT_EXPLORER_CONTEXT.TYPE;

    constructor() {
        super();
        this.consumeContext(UMB_CONTEXT_EXPLORER_CONTEXT, (instance) => {
            this.#ExtensionExplorerContext = instance;
            this._observeState();
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

    override render() {
        return html`
            <umb-debug .visible="${!this._explorerHide}" dialog=true/>`;
    }
}

export {UmbExtensionExplorerToggle as element};