var m = (o) => {
  throw TypeError(o);
};
var c = (o, e, t) => e.has(o) || m("Cannot " + t);
var i = (o, e, t) => (c(o, e, "read from private field"), t ? t.call(o) : e.get(o)), E = (o, e, t) => e.has(o) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, t), x = (o, e, t, s) => (c(o, e, "write to private field"), s ? s.call(o, t) : e.set(o, t), t);
import { UmbEntityActionBase as l } from "@umbraco-cms/backoffice/entity-action";
import { UMB_EXTENSION_EXPLORER_CONTEXT as a } from "./context-CGWozyDb.js";
import { UmbContextConsumerController as u } from "@umbraco-cms/backoffice/context-api";
var n, r;
class d extends l {
  constructor(t, s) {
    super(t, s);
    E(this, n);
    E(this, r);
    x(this, r, t), new u(t, a, (p) => {
      x(this, n, p);
    });
  }
  async execute() {
    var t;
    (t = i(this, n)) == null || t.displayHostContexts(i(this, r), "Our.ExtensionExplorer.EntityAction");
  }
}
n = new WeakMap(), r = new WeakMap();
export {
  d as EntityAction,
  d as default
};
//# sourceMappingURL=EntityAction-Jaq34hm7.js.map
