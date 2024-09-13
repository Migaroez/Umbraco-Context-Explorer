import { html as s, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as v } from "@umbraco-cms/backoffice/lit-element";
var x = Object.defineProperty, f = Object.getOwnPropertyDescriptor, b = (l, r, m, t) => {
  for (var e = t > 1 ? void 0 : t ? f(r, m) : r, n = l.length - 1, o; n >= 0; n--)
    (o = l[n]) && (e = (t ? o(r, m, e) : o(e)) || e);
  return t && e && x(r, m, e), e;
};
let p = class extends v {
  render() {
    return s`
            <h3>Menu</h3>
            <div><umb-context-explorer/></div> 
        `;
  }
};
p = b([
  u("umb-context-explorer-menu")
], p);
export {
  p as UmbContextExplorerMenu,
  p as element
};
//# sourceMappingURL=menu-1uhUjr0Q.js.map
