import {customElement, html, state} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';
import {UMB_CONTEXT_EXPLORER_CONTEXT} from './context';

@customElement('umb-context-explorer')
export class UmbContextExplorerToggle extends UmbLitElement {
    @state()
    private _explorerHide: boolean = true;

    #contextExplorerContext?: typeof UMB_CONTEXT_EXPLORER_CONTEXT.TYPE;

    constructor() {
        super();
        this.consumeContext(UMB_CONTEXT_EXPLORER_CONTEXT, (instance) => {
            this.#contextExplorerContext = instance;
            this._observeState();
        });
    }

    private async _observeState() {
        if (!this.#contextExplorerContext) return;

        this.observe(
            this.#contextExplorerContext.hide,
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

export {UmbContextExplorerToggle as element};