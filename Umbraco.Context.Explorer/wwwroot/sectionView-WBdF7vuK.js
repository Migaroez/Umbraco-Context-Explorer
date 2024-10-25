import { html as p, customElement as s } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, x = Object.getOwnPropertyDescriptor, b = (l, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? x(r, o) : r, n = l.length - 1, m; n >= 0; n--)
    (m = l[n]) && (e = (t ? m(r, o, e) : m(e)) || e);
  return t && e && v(r, o, e), e;
};
let i = class extends c {
  render() {
    return p`
            <h3>Section view</h3>
            <div>
                <umb-context-explorer></umb-context-explorer>
            </div>
        `;
  }
};
i = b([
  s("umb-context-explorer-section-view")
], i);
export {
  i as UmbExtensionExplorerSectionView,
  i as element
};
//# sourceMappingURL=sectionView-WBdF7vuK.js.map
