import { UmbConditionBase as i } from "@umbraco-cms/backoffice/extension-registry";
import { UMB_CONTEXT_EXPLORER_CONTEXT as r } from "./context-CzoDVYt5.js";
class C extends i {
  constructor(t, e) {
    super(t, e), this.consumeContext(r, (o) => {
      this.observe(o.hide, (s) => {
        this.permitted = !s;
      });
    });
  }
}
export {
  C as ContextDebugCondition,
  C as default
};
//# sourceMappingURL=DebugCondition-tksilTbs.js.map
