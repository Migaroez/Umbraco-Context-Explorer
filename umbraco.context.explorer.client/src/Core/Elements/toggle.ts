import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';
import {UMB_EXTENSION_EXPLORER_CONTEXT} from '../context';

@customElement('umb-package-explorer-toggle')
export class UmbPackageExplorerToggle extends UmbLitElement {

    #ExtensionExplorerContext?: typeof UMB_EXTENSION_EXPLORER_CONTEXT.TYPE;

    constructor() {
        super();
        this.consumeContext(UMB_EXTENSION_EXPLORER_CONTEXT, (instance) => {
            this.#ExtensionExplorerContext = instance;
        });
    }

    #toggle() {
        this.#ExtensionExplorerContext?.toggle();
    }

    override render() {
        return html`
            <div @click="${this.#toggle}" style="color:red">TOGGLE</div>
        `;
    }
}

export {UmbPackageExplorerToggle as element};