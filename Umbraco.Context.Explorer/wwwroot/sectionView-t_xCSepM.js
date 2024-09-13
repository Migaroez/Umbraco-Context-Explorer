import { html as p, customElement as s } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var c = Object.defineProperty, x = Object.getOwnPropertyDescriptor, f = (l, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? x(r, o) : r, n = l.length - 1, m; n >= 0; n--)
    (m = l[n]) && (e = (t ? m(r, o, e) : m(e)) || e);
  return t && e && c(r, o, e), e;
};
let i = class extends v {
  render() {
    return p`
            <h3>Section view</h3>
            <div><umb-context-explorer/></div> 
        `;
  }
};
i = f([
  s("umb-context-explorer-section-view")
], i);
export {
  i as UmbContextExplorerSectionView,
  i as element
};
//# sourceMappingURL=sectionView-t_xCSepM.js.map
