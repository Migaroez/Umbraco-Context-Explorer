import { html as s, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
var a = Object.defineProperty, i = Object.getOwnPropertyDescriptor, v = (o, r, p, t) => {
  for (var e = t > 1 ? void 0 : t ? i(r, p) : r, m = o.length - 1, n; m >= 0; m--)
    (n = o[m]) && (e = (t ? n(r, p, e) : n(e)) || e);
  return t && e && a(r, p, e), e;
};
let l = class extends u {
  render() {
    return s`
            <h3>Menu Sidebar app</h3>
            <div><umb-context-explorer/></div> 
        `;
  }
};
l = v([
  b("umb-context-explorer-sidebar-app-menu")
], l);
export {
  l as UmbContextExplorerMenuSidebarApp,
  l as element
};
//# sourceMappingURL=menuSidebarApp-ZzjAspcL.js.map
