import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-context-explorer-dashboard')
export class UmbContextExplorerDashboard extends UmbLitElement {

    override render() {
        return html`
            <h3>Dashboard</h3>
            <div>
                <umb-context-explorer/>
            </div>
        `;
    }
}

export {UmbContextExplorerDashboard as element};