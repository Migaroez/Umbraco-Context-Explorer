var p = (s) => {
  throw TypeError(s);
};
var n = (s, r, e) => r.has(s) || p("Cannot " + e);
var l = (s, r, e) => (n(s, r, "read from private field"), e ? e.call(s) : r.get(s)), u = (s, r, e) => r.has(s) ? p("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(s) : r.set(s, e), C = (s, r, e, t) => (n(s, r, "write to private field"), t ? t.call(s, e) : r.set(s, e), e), d = (s, r, e) => (n(s, r, "access private method"), e);
import { UmbContextBase as c } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as v, UmbContextDebugRequest as $, contextData as E, UmbContextConsumerController as U } from "@umbraco-cms/backoffice/context-api";
import { filter as f } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbObjectState as y } from "@umbraco-cms/backoffice/observable-api";
import { UMB_MODAL_MANAGER_CONTEXT as O, UMB_CONTEXT_DEBUGGER_MODAL as g } from "@umbraco-cms/backoffice/modal";
import { html as o, map as h } from "@umbraco-cms/backoffice/external/lit";
const T = new v("UmbContextExplorerContext");
var a, m, b, x;
class R extends c {
  constructor(e) {
    var t;
    super(e, T);
    u(this, m);
    u(this, a);
    C(this, a, new y(void 0)), this.state = l(this, a).asObservable().pipe(f((i) => !!i)), this.hide = l(this, a).asObservablePart((i) => i == null ? void 0 : i.hide), (t = l(this, a)) == null || t.setValue({ hide: !0 });
  }
  toggle() {
    var e, t, i;
    (i = l(this, a)) == null || i.setValue({ hide: !((t = (e = l(this, a)) == null ? void 0 : e.value) != null && t.hide) });
  }
  getHostContexts(e, t) {
    e.dispatchEvent(
      new $((i) => {
        t(E(i));
      })
    );
  }
  displayHostContexts(e) {
    this.getHostContexts(e, (t) => {
      new U(e, O, (i) => {
        console.log(e), i == null || i.open(e, g, {
          data: {
            content: d(this, m, b).call(this, t)
          }
        });
      });
    });
  }
}
a = new WeakMap(), m = new WeakSet(), b = function(e) {
  return o`<div class="events">
			${h(e, (t) => o`
					<details>
						<summary><strong>${t.alias}</strong></summary>
						${d(this, m, x).call(this, t.data)}
					</details>
				`)}
		</div>`;
}, x = function(e) {
  switch (e.type) {
    case "function":
      return o`<h3>Callable Function</h3>`;
    case "object":
      return o`
					<details>
						<summary>Methods</summary>
						<ul>
							${h(e.methods, (t) => o`<li>${t}</li>`)}
						</ul>
					</details>

					<details>
						<summary>Properties</summary>
						<ul>
							${h(e.properties, (t) => {
        switch (t.type) {
          case "string":
          case "number":
          case "boolean":
          case "object":
            return o`<li>${t.key} <em>(${t.type})</em> = ${t.value}</li>`;
          default:
            return o`<li>${t.key} <em>(${t.type})</em></li>`;
        }
      })}
						</ul>
					</details>
				`;
    case "primitive":
      return o`<p>Context is a primitive with value: ${e.value}</p>`;
    default:
      return o`<p>Unknown type: ${e.type}</p>`;
  }
};
export {
  T as UMB_CONTEXT_EXPLORER_CONTEXT,
  R as UmbContextExplorerContext,
  R as default
};
//# sourceMappingURL=context-BPGWs9n-.js.map
