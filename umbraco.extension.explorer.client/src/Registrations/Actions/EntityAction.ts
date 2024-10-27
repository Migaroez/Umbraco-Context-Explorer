import {UmbEntityActionArgs, UmbEntityActionBase} from '@umbraco-cms/backoffice/entity-action';
import {UmbControllerHostElement} from '@umbraco-cms/backoffice/controller-api';
import {UMB_EXTENSION_EXPLORER_CONTEXT} from '../../Core/context';
import {UmbContextConsumerController} from "@umbraco-cms/backoffice/context-api";

export class EntityAction extends UmbEntityActionBase<never> {

    #ExtensionExplorerContext?: typeof UMB_EXTENSION_EXPLORER_CONTEXT.TYPE;

    #host?: UmbControllerHostElement;

    constructor(host: UmbControllerHostElement, args: UmbEntityActionArgs<never>) {
        super(host, args);
        this.#host = host;

        new UmbContextConsumerController(host, UMB_EXTENSION_EXPLORER_CONTEXT, (instance) => {
            this.#ExtensionExplorerContext = instance;
        });
    }

    async execute() {
        this.#ExtensionExplorerContext?.displayHostContexts(this.#host!, 'Our.ExtensionExplorer.EntityAction')
    }
}

export default EntityAction;