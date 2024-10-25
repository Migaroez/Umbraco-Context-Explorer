import { html as s, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
var f = Object.defineProperty, i = Object.getOwnPropertyDescriptor, b = (m, r, t, o) => {
  for (var e = o > 1 ? void 0 : o ? i(r, t) : r, p = m.length - 1, l; p >= 0; p--)
    (l = m[p]) && (e = (o ? l(r, t, e) : l(e)) || e);
  return o && e && f(r, t, e), e;
};
let n = class extends x {
  render() {
    return s`
            <uui-box headline="User Profile App">
                <umb-context-explorer></umb-context-explorer>
            </uui-box>
        `;
  }
};
n = b([
  u("umb-context-explorer-user-profile-app")
], n);
export {
  n as UmbExtensionExplorerUserProfileApp,
  n as element
};
//# sourceMappingURL=userProfileApp-Cto1eR29.js.map
