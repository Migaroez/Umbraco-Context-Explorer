import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-context-explorer-menu')
export class UmbContextExplorerMenu extends UmbLitElement {

    override render() {
        return html`
            <h3>Menu</h3>
            <div>
                <umb-context-explorer/>
            </div>
        `;
    }
}

export {UmbContextExplorerMenu as element};