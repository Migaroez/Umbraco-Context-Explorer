import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-package-explorer-sidebar-app-menu')
export class UmbExtensionExplorerMenuSidebarApp extends UmbLitElement {

    override render() {
        return html`
            <h3>Menu Sidebar app</h3>
            <div>
                <umb-package-explorer registrationAlias="Our.ExtensionExplorer.SectionSidebarApp.MenuApp"></umb-package-explorer>
            </div>
        `;
    }
}

export {UmbExtensionExplorerMenuSidebarApp as element};