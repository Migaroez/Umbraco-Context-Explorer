import { html as d, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as g } from "@umbraco-cms/backoffice/lit-element";
import { UMB_CONTEXT_EXPLORER_CONTEXT as m } from "./context-BPGWs9n-.js";
var x = Object.defineProperty, E = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, C = (e, t, r, a) => {
  for (var o = a > 1 ? void 0 : a ? E(t, r) : t, n = e.length - 1, i; n >= 0; n--)
    (i = e[n]) && (o = (a ? i(t, r, o) : i(o)) || o);
  return a && o && x(t, r, o), o;
}, _ = (e, t, r) => t.has(e) || c("Cannot " + r), u = (e, t, r) => (_(e, t, "read from private field"), t.get(e)), l = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, a) => (_(e, t, "write to private field"), t.set(e, r), r), T = (e, t, r) => (_(e, t, "access private method"), r), s, p, h;
let v = class extends g {
  constructor() {
    super(), l(this, p), l(this, s), this.consumeContext(m, (e) => {
      O(this, s, e);
    });
  }
  render() {
    return d`
            <div @click="${T(this, p, h)}" style="color:red">TOGGLE</div>
        `;
  }
};
s = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
h = function() {
  var e;
  (e = u(this, s)) == null || e.toggle();
};
v = C([
  f("umb-context-explorer-toggle")
], v);
export {
  v as UmbContextExplorerToggle,
  v as element
};
//# sourceMappingURL=toggle-COMKuPz0.js.map
