import { html as d, state as x, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UMB_CONTEXT_EXPLORER_CONTEXT as f } from "./context-CzoDVYt5.js";
var m = Object.defineProperty, E = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, l = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? E(t, r) : t, a = e.length - 1, n; a >= 0; a--)
    (n = e[a]) && (s = (o ? n(t, r, s) : n(s)) || s);
  return o && s && m(t, r, s), s;
}, h = (e, t, r) => t.has(e) || v("Cannot " + r), _ = (e, t, r) => (h(e, t, "read from private field"), t.get(e)), C = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, o) => (h(e, t, "write to private field"), t.set(e, r), r), i;
let p = class extends u {
  constructor() {
    super(), this._explorerHide = !0, C(this, i), this.consumeContext(f, (e) => {
      O(this, i, e), this._observeState();
    });
  }
  async _observeState() {
    _(this, i) && this.observe(
      _(this, i).hide,
      (e) => {
        this._explorerHide = e ?? !0;
      },
      "umbContextStateObserver"
    );
  }
  render() {
    return d`
            <umb-debug .visible="${!this._explorerHide}" dialog=true/>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
l([
  x()
], p.prototype, "_explorerHide", 2);
p = l([
  c("umb-context-explorer")
], p);
export {
  p as UmbExtensionExplorerToggle,
  p as element
};
//# sourceMappingURL=explorer-BEWy0vo6.js.map
