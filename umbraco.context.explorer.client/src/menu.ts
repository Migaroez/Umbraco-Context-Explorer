import { customElement, html, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import {UmbContextExplorerToggle} from "./explorer"

@customElement('umb-context-explorer-menu')
export class UmbContextExplorerMenu extends UmbLitElement{
    
    override render(){
        return html`
            <h3>Menu</h3>
            <div><umb-context-explorer/></div> 
        `;
    }
}

export { UmbContextExplorerMenu as element };