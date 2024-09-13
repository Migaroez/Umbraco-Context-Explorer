import {UmbContextBase} from "@umbraco-cms/backoffice/class-api";
import {UmbContextConsumerController, UmbContextDebugRequest, UmbContextToken,
    UmbDebugContextData, UmbDebugContextItemData, contextData} from "@umbraco-cms/backoffice/context-api";
import {UmbControllerHost} from "@umbraco-cms/backoffice/controller-api";
import {filter} from "@umbraco-cms/backoffice/external/rxjs";
import {UmbObjectState} from "@umbraco-cms/backoffice/observable-api";
import {UmbControllerHostElement} from "@umbraco-cms/backoffice/dist-cms/libs/controller-api";
import { UMB_MODAL_MANAGER_CONTEXT, UMB_CONTEXT_DEBUGGER_MODAL, UmbModalManagerContext } from "@umbraco-cms/backoffice/modal";
import { html, map } from "@umbraco-cms/backoffice/external/lit";

export const UMB_CONTEXT_EXPLORER_CONTEXT = new UmbContextToken<UmbContextExplorerContext>('UmbContextExplorerContext');

export class UmbContextExplorerContext extends UmbContextBase<UmbContextExplorerContext> {
    #state = new UmbObjectState<UmbContextExplorerStateModel | undefined>(undefined)
    readonly state = this.#state.asObservable().pipe(filter((state) => !!state));
    readonly hide = this.#state.asObservablePart((state) => state?.hide);

    constructor(host: UmbControllerHost) {
        super(host, UMB_CONTEXT_EXPLORER_CONTEXT);
        this.#state?.setValue({hide: true})
    }

    public toggle(){
        this.#state?.setValue({hide: !this.#state?.value?.hide})
    }
    
    getHostContexts(host: UmbControllerHostElement, callback: {(data:UmbDebugContextData[]):void}){
        host.dispatchEvent(
            new UmbContextDebugRequest((contexts: Map<any, any>) => {
                // The Contexts are collected
                // When travelling up through the DOM from this element
                // to the root of <umb-app> which then uses the callback prop
                // of this event that has been raised to assign the contexts
                // back to this property of the WebComponent

                // Massage the data into a simplier array of objects
                // from a function in the context-api.
                callback(contextData(contexts));
            }),
        );
    }
    
    public displayHostContexts(host: UmbControllerHostElement){
        this.getHostContexts(host,(contexts) =>{
            new UmbContextConsumerController(host, UMB_MODAL_MANAGER_CONTEXT, (instance: UmbModalManagerContext) => {
                console.log(host)
                instance?.open(host, UMB_CONTEXT_DEBUGGER_MODAL, {
                    data:{
                        content: this.#renderContextAliases(contexts)
                    }
                })
            });
        });
    }

    #renderContextAliases(contexts : UmbDebugContextData[]) {
        return html`<div class="events">
			${map(contexts, (context) => {
            return html`
					<details>
						<summary><strong>${context.alias}</strong></summary>
						${this.#renderInstance(context.data)}
					</details>
				`;
        })}
		</div>`;
    }

    #renderInstance(instance: UmbDebugContextItemData) {
        switch (instance.type) {
            case 'function': {
                return html`<h3>Callable Function</h3>`;
            }

            case 'object': {
                return html`
					<details>
						<summary>Methods</summary>
						<ul>
							${map(instance.methods, (methodName) => html`<li>${methodName}</li>`)}
						</ul>
					</details>

					<details>
						<summary>Properties</summary>
						<ul>
							${map(instance.properties, (property) => {
                    switch (property.type) {
                        case 'string':
                        case 'number':
                        case 'boolean':
                        case 'object':
                            return html`<li>${property.key} <em>(${property.type})</em> = ${property.value}</li>`;

                        default:
                            return html`<li>${property.key} <em>(${property.type})</em></li>`;
                    }
                })}
						</ul>
					</details>
				`;
            }

            case 'primitive': {
                return html`<p>Context is a primitive with value: ${instance.value}</p>`;
            }

            default: {
                return html`<p>Unknown type: ${instance.type}</p>`;
            }
        }
    }
}

export interface UmbContextExplorerStateModel {
    hide: boolean
}

export default UmbContextExplorerContext;