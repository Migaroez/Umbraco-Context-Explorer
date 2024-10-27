import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-package-explorer-headerapp')
export class UmbExtensionExplorerHeaderApp extends UmbLitElement {

    override render() {
        return html`
            <h3>HeaderApp</h3>
            <div>
            <umb-package-explorer registrationAlias="Our.ExtensionExplorer.HeaderApp"></umb-package-explorer>
            </div>
        `;
    }
}

export {UmbExtensionExplorerHeaderApp as element};