import { html as n, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as a } from "@umbraco-cms/backoffice/lit-element";
var u = Object.defineProperty, f = Object.getOwnPropertyDescriptor, x = (i, r, o, p) => {
  for (var e = p > 1 ? void 0 : p ? f(r, o) : r, t = i.length - 1, l; t >= 0; t--)
    (l = i[t]) && (e = (p ? l(r, o, e) : l(e)) || e);
  return p && e && u(r, o, e), e;
};
let s = class extends a {
  render() {
    return n`
            <uui-box headline="User Profile App">
                <umb-package-explorer registrationAlias="Our.ExtensionExplorer.EntityAction.UserProfileApp"></umb-package-explorer>
            </uui-box>
        `;
  }
};
s = x([
  m("umb-package-explorer-user-profile-app")
], s);
export {
  s as UmbExtensionExplorerUserProfileApp,
  s as element
};
//# sourceMappingURL=userProfileApp-CwPYABOT.js.map
