import { nothing as g, html as E, css as C, property as D, state as d, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as O } from "@umbraco-cms/backoffice/lit-element";
import { UMB_EXTENSION_EXPLORER_CONTEXT as b } from "./context-CGWozyDb.js";
import { UMB_MODAL_MANAGER_CONTEXT as A } from "@umbraco-cms/backoffice/modal";
import { UMB_CONTEXT_DEBUGGER_MODAL as U } from "@umbraco-cms/backoffice/debug";
import { UmbContextDebugRequest as M, contextData as S } from "@umbraco-cms/backoffice/context-api";
var T = Object.defineProperty, w = Object.getOwnPropertyDescriptor, m = (t) => {
  throw TypeError(t);
}, p = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? w(e, r) : e, c = t.length - 1, l; c >= 0; c--)
    (l = t[c]) && (o = (n ? l(e, r, o) : l(o)) || o);
  return n && o && T(e, r, o), o;
}, u = (t, e, r) => e.has(t) || m("Cannot " + r), _ = (t, e, r) => (u(t, e, "read from private field"), e.get(t)), h = (t, e, r) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), N = (t, e, r, n) => (u(t, e, "write to private field"), e.set(t, r), r), x = (t, e, r) => (u(t, e, "access private method"), r), i, s, v, f;
let a = class extends O {
  constructor() {
    super(), h(this, s), this.registrationAlias = "Our.ExtensionExplorer.HeaderApp", this._explorerHide = !0, this._contextData = Array(), h(this, i), this.consumeContext(b, (t) => {
      N(this, i, t), this._observeState();
    }), this.consumeContext(A, (t) => {
      this._modalContext = t;
    });
  }
  async _observeState() {
    _(this, i) && this.observe(
      _(this, i).hide,
      (t) => {
        this._explorerHide = t ?? !0;
      },
      "umbContextStateObserver"
    );
  }
  render() {
    return this._explorerHide ? g : E`
			<div>
				<uui-badge color="danger" look="primary" @click=${x(this, s, f)}>
					<uui-icon name="icon-bug"></uui-icon>
					<span>Debug</span>
				</uui-badge>
			</div>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
v = function() {
  this.dispatchEvent(
    new M((t) => {
      this._contextData = S(t), this.requestUpdate("_contextData");
    })
  );
};
f = function() {
  var t;
  x(this, s, v).call(this), (t = this._modalContext) == null || t.open(this, U, {
    data: {
      content: _(this, i).generateDialogContent(this._contextData, this.registrationAlias)
    }
  });
};
a.styles = [
  C`
			:host {
				float: right;
				font-family: monospace;
				position: relative;
				z-index: 10000;
			}

			#container {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
			}

			uui-badge {
				cursor: pointer;
				gap: 0.5rem;
			}

			uui-icon {
				font-size: 15px;
			}

			.events {
				background-color: var(--uui-color-danger);
				color: var(--uui-color-selected-contrast);
				padding: 1rem;
			}

			summary {
				cursor: pointer;
			}

			details > details {
				margin-left: 1rem;
			}

			ul {
				margin-top: 0;
			}
		`
];
p([
  D({ type: String })
], a.prototype, "registrationAlias", 2);
p([
  d()
], a.prototype, "_explorerHide", 2);
p([
  d()
], a.prototype, "_contextData", 2);
a = p([
  y("umb-package-explorer")
], a);
export {
  a as UmbExtensionExplorer,
  a as element
};
//# sourceMappingURL=explorer-CDwkKfuH.js.map
