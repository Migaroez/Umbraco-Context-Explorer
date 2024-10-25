import { html as p, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
var a = Object.defineProperty, v = Object.getOwnPropertyDescriptor, c = (n, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? v(r, o) : r, m = n.length - 1, l; m >= 0; m--)
    (l = n[m]) && (e = (t ? l(r, o, e) : l(e)) || e);
  return t && e && a(r, o, e), e;
};
let s = class extends x {
  render() {
    return p`
            <h3>Dashboard</h3>
            <div>
            <umb-context-explorer></umb-context-explorer>
            </div>
        `;
  }
};
s = c([
  b("umb-context-explorer-dashboard")
], s);
export {
  s as UmbExtensionExplorerDashboard,
  s as element
};
//# sourceMappingURL=dashboard-CkPY0ELr.js.map
