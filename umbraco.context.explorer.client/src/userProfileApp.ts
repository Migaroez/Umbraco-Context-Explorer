import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-context-explorer-user-profile-app')
export class UmbExtensionExplorerUserProfileApp extends UmbLitElement {

    override render() {
        return html`
            <uui-box headline="User Profile App">
                <umb-context-explorer></umb-context-explorer>
            </uui-box>
        `;
    }
}

export {UmbExtensionExplorerUserProfileApp as element};