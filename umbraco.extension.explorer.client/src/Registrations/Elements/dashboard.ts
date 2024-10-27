import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-package-explorer-dashboard')
export class UmbExtensionExplorerDashboard extends UmbLitElement {

    override render() {
        return html`
            <h3>Dashboard</h3>
            <div>
            <umb-package-explorer registrationAlias="Our.ExtensionExplorer.dashboard"></umb-package-explorer>
            </div>
        `;
    }
}

export {UmbExtensionExplorerDashboard as element};