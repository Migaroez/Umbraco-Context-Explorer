import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_EXTENSION_EXPLORER_CONTEXT as r } from "./context-CGWozyDb.js";
class p extends i {
  constructor(t, e) {
    super(t, e), this.consumeContext(r, (o) => {
      this.observe(o.hide, (s) => {
        this.permitted = !s;
      });
    });
  }
}
export {
  p as ContextDebugCondition,
  p as default
};
//# sourceMappingURL=DebugCondition-BWoOKohe.js.map
