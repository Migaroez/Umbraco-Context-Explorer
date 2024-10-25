import { html as s, customElement as u } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as x } from "@umbraco-cms/backoffice/lit-element";
var v = Object.defineProperty, b = Object.getOwnPropertyDescriptor, c = (l, r, n, t) => {
  for (var e = t > 1 ? void 0 : t ? b(r, n) : r, o = l.length - 1, m; o >= 0; o--)
    (m = l[o]) && (e = (t ? m(r, n, e) : m(e)) || e);
  return t && e && v(r, n, e), e;
};
let p = class extends x {
  render() {
    return s`
            <h3>Menu</h3>
            <div>
                <umb-context-explorer></umb-context-explorer>
            </div>
        `;
  }
};
p = c([
  u("umb-context-explorer-menu")
], p);
export {
  p as UmbExtensionExplorerMenu,
  p as element
};
//# sourceMappingURL=menu-Bar5o21y.js.map
