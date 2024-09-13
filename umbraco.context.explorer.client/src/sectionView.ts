import { customElement, html, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import {UmbContextExplorerToggle} from "./explorer"

@customElement('umb-context-explorer-section-view')
export class UmbContextExplorerSectionView extends UmbLitElement{
    
    override render(){
        return html`
            <h3>Section view</h3>
            <div><umb-context-explorer/></div> 
        `;
    }
}

export { UmbContextExplorerSectionView as element };