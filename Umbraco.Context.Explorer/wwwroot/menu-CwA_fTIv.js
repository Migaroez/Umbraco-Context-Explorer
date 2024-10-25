import { html as s, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as a } from "@umbraco-cms/backoffice/lit-element";
var i = Object.defineProperty, x = Object.getOwnPropertyDescriptor, v = (l, r, n, t) => {
  for (var e = t > 1 ? void 0 : t ? x(r, n) : r, o = l.length - 1, p; o >= 0; o--)
    (p = l[o]) && (e = (t ? p(r, n, e) : p(e)) || e);
  return t && e && i(r, n, e), e;
};
let m = class extends a {
  render() {
    return s`
            <h3>Menu</h3>
            <div>
                <umb-package-explorer registrationAlias="Our.ExtensionExplorer.Menu"></umb-package-explorer>
            </div>
        `;
  }
};
m = v([
  u("umb-package-explorer-menu")
], m);
export {
  m as UmbExtensionExplorerMenu,
  m as element
};
//# sourceMappingURL=menu-CwA_fTIv.js.map
