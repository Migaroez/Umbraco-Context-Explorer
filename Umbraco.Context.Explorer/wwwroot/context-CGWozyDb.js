var v = (s) => {
  throw TypeError(s);
};
var d = (s, r, e) => r.has(s) || v("Cannot " + e);
var m = (s, r, e) => (d(s, r, "read from private field"), e ? e.call(s) : r.get(s)), h = (s, r, e) => r.has(s) ? v("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(s) : r.set(s, e), C = (s, r, e, t) => (d(s, r, "write to private field"), t ? t.call(s, e) : r.set(s, e), e), l = (s, r, e) => (d(s, r, "access private method"), e);
import { UmbContextBase as $ } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken as c, UmbContextDebugRequest as E, contextData as f, UmbContextConsumerController as y } from "@umbraco-cms/backoffice/context-api";
import { filter as U } from "@umbraco-cms/backoffice/external/rxjs";
import { UmbObjectState as O } from "@umbraco-cms/backoffice/observable-api";
import { UMB_MODAL_MANAGER_CONTEXT as _ } from "@umbraco-cms/backoffice/modal";
import { html as o, map as p } from "@umbraco-cms/backoffice/external/lit";
import { UMB_CONTEXT_DEBUGGER_MODAL as w } from "@umbraco-cms/backoffice/debug";
import { umbExtensionsRegistry as D } from "@umbraco-cms/backoffice/extension-registry";
const R = new c("UmbExtensionExplorerContext");
var a, n, b, x, g;
class H extends $ {
  constructor(e) {
    var t;
    super(e, R);
    h(this, n);
    h(this, a);
    C(this, a, new O(void 0)), this.state = m(this, a).asObservable().pipe(U((i) => !!i)), this.hide = m(this, a).asObservablePart((i) => i == null ? void 0 : i.hide), (t = m(this, a)) == null || t.setValue({ hide: !0 });
  }
  toggle() {
    var e, t, i;
    (i = m(this, a)) == null || i.setValue({ hide: !((t = (e = m(this, a)) == null ? void 0 : e.value) != null && t.hide) });
  }
  getHostContexts(e, t) {
    e.dispatchEvent(
      new E((i) => {
        t(f(i));
      })
    );
  }
  displayHostContexts(e, t) {
    this.getHostContexts(e, (i) => {
      new y(e, _, (u) => {
        u == null || u.open(e, w, {
          data: {
            content: this.generateDialogContent(i, t)
          }
        });
      });
    });
  }
  generateDialogContent(e, t) {
    return o`
        <div class="events">
			${l(this, n, b).call(this, e)}
            ${l(this, n, x).call(this, t)}
		</div>`;
  }
}
a = new WeakMap(), n = new WeakSet(), b = function(e) {
  return o`<div class="events">
            <h3>Available Contexts</h3>
			${p(e, (t) => o`
					<details>
						<summary><strong>${t.alias}</strong></summary>
						${l(this, n, g).call(this, t.data)}
					</details>
				`)}
		</div>`;
}, x = function(e) {
  const t = D.getByAlias(e);
  if (t)
    return o`<div class="events">
            <h3>Registration</h3>
			<details>
                <summary><strong>${e}</strong></summary>
                <pre>${JSON.stringify(t, void 0, 2)}</pre>
            </details>
		</div>`;
}, g = function(e) {
  switch (e.type) {
    case "function":
      return o`<h3>Callable Function</h3>`;
    case "object":
      return o`
					<details>
						<summary>Methods</summary>
						<ul>
							${p(e.methods, (t) => o`<li>${t}</li>`)}
						</ul>
					</details>

					<details>
						<summary>Properties</summary>
						<ul>
							${p(e.properties, (t) => {
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
  R as UMB_EXTENSION_EXPLORER_CONTEXT,
  H as UmbExtensionExplorerContext,
  H as default
};
//# sourceMappingURL=context-CGWozyDb.js.map
