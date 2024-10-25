import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-package-explorer-user-profile-app')
export class UmbExtensionExplorerUserProfileApp extends UmbLitElement {

    override render() {
        return html`
            <uui-box headline="User Profile App">
                <umb-package-explorer registrationAlias="Our.ExtensionExplorer.EntityAction.UserProfileApp"></umb-package-explorer>
            </uui-box>
        `;
    }
}

export {UmbExtensionExplorerUserProfileApp as element};