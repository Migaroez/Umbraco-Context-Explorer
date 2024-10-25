import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-package-explorer-sidebar-app')
export class UmbExtensionExplorerSidebarApp extends UmbLitElement {

    override render() {
        return html`
            <h3>Sidebar app</h3>
            <div>
                <umb-package-explorer registrationAlias="Our.ExtensionExplorer.SectionSidebarApp"></umb-package-explorer>
            </div>
        `;
    }
}

export {UmbExtensionExplorerSidebarApp as element};