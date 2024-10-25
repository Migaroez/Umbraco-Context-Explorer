import { html as E, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { UMB_CONTEXT_EXPLORER_CONTEXT as g } from "./context-CzoDVYt5.js";
var m = Object.defineProperty, x = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, u = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? x(t, r) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (o = (s ? i(t, r, o) : i(o)) || o);
  return s && o && m(t, r, o), o;
}, _ = (e, t, r) => t.has(e) || c("Cannot " + r), C = (e, t, r) => (_(e, t, "read from private field"), t.get(e)), l = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, s) => (_(e, t, "write to private field"), t.set(e, r), r), T = (e, t, r) => (_(e, t, "access private method"), r), a, p, h;
let v = class extends f {
  constructor() {
    super(), l(this, p), l(this, a), this.consumeContext(g, (e) => {
      O(this, a, e);
    });
  }
  render() {
    return E`
            <div @click="${T(this, p, h)}" style="color:red">TOGGLE</div>
        `;
  }
};
a = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
h = function() {
  var e;
  (e = C(this, a)) == null || e.toggle();
};
v = u([
  d("umb-context-explorer-toggle")
], v);
export {
  v as UmbExtensionExplorerToggle,
  v as element
};
//# sourceMappingURL=toggle-C6D3bXIU.js.map
