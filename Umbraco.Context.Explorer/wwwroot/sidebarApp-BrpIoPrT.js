import { html as s, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
var i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, v = (l, r, p, t) => {
  for (var e = t > 1 ? void 0 : t ? a(r, p) : r, o = l.length - 1, m; o >= 0; o--)
    (m = l[o]) && (e = (t ? m(r, p, e) : m(e)) || e);
  return t && e && i(r, p, e), e;
};
let n = class extends x {
  render() {
    return s`
            <h3>Sidebar app</h3>
            <div>
                <umb-context-explorer></umb-context-explorer>
            </div>
        `;
  }
};
n = v([
  b("umb-context-explorer-sidebar-app")
], n);
export {
  n as UmbExtensionExplorerSidebarApp,
  n as element
};
//# sourceMappingURL=sidebarApp-BrpIoPrT.js.map
