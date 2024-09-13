import { html as d, state as c, customElement as x } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UMB_CONTEXT_EXPLORER_CONTEXT as f } from "./context-BPGWs9n-.js";
var m = Object.defineProperty, C = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, l = (e, t, r, s) => {
  for (var o = s > 1 ? void 0 : s ? C(t, r) : t, i = e.length - 1, p; i >= 0; i--)
    (p = e[i]) && (o = (s ? p(t, r, o) : p(o)) || o);
  return s && o && m(t, r, o), o;
}, h = (e, t, r) => t.has(e) || v("Cannot " + r), _ = (e, t, r) => (h(e, t, "read from private field"), t.get(e)), E = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, s) => (h(e, t, "write to private field"), t.set(e, r), r), a;
let n = class extends u {
  constructor() {
    super(), this._explorerHide = !0, E(this, a), this.consumeContext(f, (e) => {
      O(this, a, e), this._observeState();
    });
  }
  async _observeState() {
    _(this, a) && this.observe(
      _(this, a).hide,
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
a = /* @__PURE__ */ new WeakMap();
l([
  c()
], n.prototype, "_explorerHide", 2);
n = l([
  x("umb-context-explorer")
], n);
export {
  n as UmbContextExplorerToggle,
  n as element
};
//# sourceMappingURL=explorer-DwamY_-a.js.map
