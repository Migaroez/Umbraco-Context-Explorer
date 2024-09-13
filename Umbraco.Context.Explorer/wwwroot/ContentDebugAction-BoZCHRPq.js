var x = (o) => {
  throw TypeError(o);
};
var C = (o, e, t) => e.has(o) || x("Cannot " + t);
var i = (o, e, t) => (C(o, e, "read from private field"), t ? t.call(o) : e.get(o)), m = (o, e, t) => e.has(o) ? x("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, t), c = (o, e, t, s) => (C(o, e, "write to private field"), s ? s.call(o, t) : e.set(o, t), t);
import { UmbEntityActionBase as a } from "@umbraco-cms/backoffice/entity-action";
import { UMB_CONTEXT_EXPLORER_CONTEXT as l } from "./context-BPGWs9n-.js";
import { UmbContextConsumerController as u } from "@umbraco-cms/backoffice/context-api";
var n, r;
class d extends a {
  constructor(t, s) {
    super(t, s);
    m(this, n);
    m(this, r);
    c(this, r, t), new u(t, l, (p) => {
      c(this, n, p);
    });
  }
  async execute() {
    var t;
    (t = i(this, n)) == null || t.displayHostContexts(i(this, r));
  }
}
n = new WeakMap(), r = new WeakMap();
export {
  d as ContentDebugAction,
  d as default
};
//# sourceMappingURL=ContentDebugAction-BoZCHRPq.js.map
