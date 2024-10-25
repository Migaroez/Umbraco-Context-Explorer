import { html as l, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as s } from "@umbraco-cms/backoffice/lit-element";
var u = Object.defineProperty, b = Object.getOwnPropertyDescriptor, x = (o, r, t, p) => {
  for (var e = p > 1 ? void 0 : p ? b(r, t) : r, n = o.length - 1, a; n >= 0; n--)
    (a = o[n]) && (e = (p ? a(r, t, e) : a(e)) || e);
  return p && e && u(r, t, e), e;
};
let i = class extends s {
  render() {
    return l`
            <h3>Menu Sidebar app</h3>
            <div>
                <umb-package-explorer registrationAlias="Our.ExtensionExplorer.SectionSidebarApp.MenuApp"></umb-package-explorer>
            </div>
        `;
  }
};
i = x([
  m("umb-package-explorer-sidebar-app-menu")
], i);
export {
  i as UmbExtensionExplorerMenuSidebarApp,
  i as element
};
//# sourceMappingURL=menuSidebarApp-BjjHrrgr.js.map
