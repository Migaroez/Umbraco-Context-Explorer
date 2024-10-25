import { html as g, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { UMB_EXTENSION_EXPLORER_CONTEXT as E } from "./context-CGWozyDb.js";
var m = Object.defineProperty, x = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, u = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? x(t, r) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (a = (o ? i(t, r, a) : i(a)) || a);
  return o && a && m(t, r, a), a;
}, _ = (e, t, r) => t.has(e) || v("Cannot " + r), O = (e, t, r) => (_(e, t, "read from private field"), t.get(e)), c = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r, o) => (_(e, t, "write to private field"), t.set(e, r), r), P = (e, t, r) => (_(e, t, "access private method"), r), s, p, h;
let l = class extends f {
  constructor() {
    super(), c(this, p), c(this, s), this.consumeContext(E, (e) => {
      C(this, s, e);
    });
  }
  render() {
    return g`
            <div @click="${P(this, p, h)}" style="color:red">TOGGLE</div>
        `;
  }
};
s = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
h = function() {
  var e;
  (e = O(this, s)) == null || e.toggle();
};
l = u([
  d("umb-package-explorer-toggle")
], l);
export {
  l as UmbPackageExplorerToggle,
  l as element
};
//# sourceMappingURL=toggle-DEvqw7aM.js.map
