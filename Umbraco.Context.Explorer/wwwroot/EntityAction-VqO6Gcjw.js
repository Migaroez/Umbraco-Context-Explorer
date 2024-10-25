var E = (o) => {
  throw TypeError(o);
};
var c = (o, e, t) => e.has(o) || E("Cannot " + t);
var i = (o, e, t) => (c(o, e, "read from private field"), t ? t.call(o) : e.get(o)), m = (o, e, t) => e.has(o) ? E("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, t), x = (o, e, t, r) => (c(o, e, "write to private field"), r ? r.call(o, t) : e.set(o, t), t);
import { UmbEntityActionBase as C } from "@umbraco-cms/backoffice/entity-action";
import { UMB_CONTEXT_EXPLORER_CONTEXT as a } from "./context-CzoDVYt5.js";
import { UmbContextConsumerController as l } from "@umbraco-cms/backoffice/context-api";
var s, n;
class d extends C {
  constructor(t, r) {
    super(t, r);
    m(this, s);
    m(this, n);
    x(this, n, t), new l(t, a, (p) => {
      x(this, s, p);
    });
  }
  async execute() {
    var t;
    (t = i(this, s)) == null || t.displayHostContexts(i(this, n));
  }
}
s = new WeakMap(), n = new WeakMap();
export {
  d as EntityAction,
  d as default
};
//# sourceMappingURL=EntityAction-VqO6Gcjw.js.map
