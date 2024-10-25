import {customElement, html} from '@umbraco-cms/backoffice/external/lit';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';

@customElement('umb-context-explorer-section-view')
export class UmbContextExplorerSectionView extends UmbLitElement {

    override render() {
        return html`
            <h3>Section view</h3>
            <div>
                <umb-context-explorer></umb-context-explorer>
            </div>
        `;
    }
}

export {UmbContextExplorerSectionView as element};