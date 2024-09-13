import { customElement, html } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UMB_CONTEXT_EXPLORER_CONTEXT } from './context';

@customElement('umb-context-explorer-toggle')
export class UmbContextExplorerToggle extends UmbLitElement{

    #contextExplorerContext?: typeof UMB_CONTEXT_EXPLORER_CONTEXT.TYPE;

    constructor() {
        super();
        this.consumeContext(UMB_CONTEXT_EXPLORER_CONTEXT, (instance) => {
            this.#contextExplorerContext = instance;
        });
    }

    #toggle(){
        this.#contextExplorerContext?.toggle();
    }
    
    override render(){
        return html`
            <div @click="${this.#toggle}" style="color:red">TOGGLE</div>
        `;
    }
}

export { UmbContextExplorerToggle as element };