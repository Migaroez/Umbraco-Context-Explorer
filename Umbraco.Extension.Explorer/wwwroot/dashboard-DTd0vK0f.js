import { html as m, customElement as n } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
var i = Object.defineProperty, x = Object.getOwnPropertyDescriptor, d = (p, r, a, o) => {
  for (var e = o > 1 ? void 0 : o ? x(r, a) : r, t = p.length - 1, s; t >= 0; t--)
    (s = p[t]) && (e = (o ? s(r, a, e) : s(e)) || e);
  return o && e && i(r, a, e), e;
};
let l = class extends b {
  render() {
    return m`
            <h3>Dashboard</h3>
            <div>
            <umb-package-explorer registrationAlias="Our.ExtensionExplorer.dashboard"></umb-package-explorer>
            </div>
        `;
  }
};
l = d([
  n("umb-package-explorer-dashboard")
], l);
export {
  l as UmbExtensionExplorerDashboard,
  l as element
};
//# sourceMappingURL=dashboard-DTd0vK0f.js.map
