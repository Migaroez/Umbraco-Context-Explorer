import { html as s, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
var x = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = (m, r, p, t) => {
  for (var e = t > 1 ? void 0 : t ? i(r, p) : r, n = m.length - 1, o; n >= 0; n--)
    (o = m[n]) && (e = (t ? o(r, p, e) : o(e)) || e);
  return t && e && x(r, p, e), e;
};
let l = class extends u {
  render() {
    return s`
            <h3>Menu Sidebar app</h3>
            <div>
                <umb-context-explorer></umb-context-explorer>
            </div>
        `;
  }
};
l = a([
  b("umb-context-explorer-sidebar-app-menu")
], l);
export {
  l as UmbExtensionExplorerMenuSidebarApp,
  l as element
};
//# sourceMappingURL=menuSidebarApp-omP9xFsV.js.map
