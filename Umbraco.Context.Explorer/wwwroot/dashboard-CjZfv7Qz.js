import { html as p, customElement as a } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as b } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, x = Object.getOwnPropertyDescriptor, f = (s, r, o, t) => {
  for (var e = t > 1 ? void 0 : t ? x(r, o) : r, m = s.length - 1, l; m >= 0; m--)
    (l = s[m]) && (e = (t ? l(r, o, e) : l(e)) || e);
  return t && e && v(r, o, e), e;
};
let n = class extends b {
  render() {
    return p`
            <h3>Dashboard</h3>
            <div><umb-context-explorer/></div> 
        `;
  }
};
n = f([
  a("umb-context-explorer-dashboard")
], n);
export {
  n as UmbContextExplorerDashboard,
  n as element
};
//# sourceMappingURL=dashboard-CjZfv7Qz.js.map
