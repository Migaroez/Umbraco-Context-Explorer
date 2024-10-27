import { html as m, customElement as n } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as s } from "@umbraco-cms/backoffice/lit-element";
var b = Object.defineProperty, x = Object.getOwnPropertyDescriptor, c = (i, r, t, p) => {
  for (var e = p > 1 ? void 0 : p ? x(r, t) : r, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (e = (p ? o(r, t, e) : o(e)) || e);
  return p && e && b(r, t, e), e;
};
let l = class extends s {
  render() {
    return m`
            <h3>Sidebar app</h3>
            <div>
                <umb-package-explorer registrationAlias="Our.ExtensionExplorer.SectionSidebarApp"></umb-package-explorer>
            </div>
        `;
  }
};
l = c([
  n("umb-package-explorer-sidebar-app")
], l);
export {
  l as UmbExtensionExplorerSidebarApp,
  l as element
};
//# sourceMappingURL=sidebarApp-BH6QDSRa.js.map
