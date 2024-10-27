import { html as m, customElement as s } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as a } from "@umbraco-cms/backoffice/lit-element";
var c = Object.defineProperty, v = Object.getOwnPropertyDescriptor, x = (p, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? v(r, o) : r, i = p.length - 1, n; i >= 0; i--)
    (n = p[i]) && (e = (t ? n(r, o, e) : n(e)) || e);
  return t && e && c(r, o, e), e;
};
let l = class extends a {
  render() {
    return m`
            <h3>Section view</h3>
            <div>
                <umb-package-explorer registrationAlias="Our.ExtensionExplorer.SectionView"></umb-package-explorer>
            </div>
        `;
  }
};
l = x([
  s("umb-package-explorer-section-view")
], l);
export {
  l as UmbExtensionExplorerSectionView,
  l as element
};
//# sourceMappingURL=sectionView-TB4PtYvw.js.map
