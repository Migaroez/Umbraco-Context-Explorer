import { customElement, html, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import {UmbContextExplorerToggle} from "./explorer"

@customElement('umb-context-explorer-sidebar-app')
export class UmbContextExplorerSidebarApp extends UmbLitElement{
    
    override render(){
        return html`
            <h3>Sidebar app</h3>
            <div><umb-context-explorer/></div>
        `;
    }
}

export { UmbContextExplorerSidebarApp as element };