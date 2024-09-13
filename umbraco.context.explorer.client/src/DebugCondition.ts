import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import type {
    ManifestCondition,
    UmbConditionConfigBase,
    UmbConditionControllerArguments,
    UmbExtensionCondition,
} from '@umbraco-cms/backoffice/extension-api';
import { UmbConditionBase } from '@umbraco-cms/backoffice/extension-registry';
import { UMB_CONTEXT_EXPLORER_CONTEXT } from './context';

export class ContextDebugCondition
    extends UmbConditionBase<SectionAliasConditionConfig>
    implements UmbExtensionCondition
{
    constructor(host: UmbControllerHost, args: UmbConditionControllerArguments<SectionAliasConditionConfig>) {
        super(host, args);

        this.consumeContext(UMB_CONTEXT_EXPLORER_CONTEXT, (context) =>{
            this.observe(context.hide, (value) =>{
                this.permitted = !value;    
            });
        })
    }
}

export type SectionAliasConditionConfig = UmbConditionConfigBase<'Our.ContextExplorer.DebugCondition'> & {
};

export default ContextDebugCondition;
