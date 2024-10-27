import {UmbContextBase} from "@umbraco-cms/backoffice/class-api";
import {
    UmbContextConsumerController, UmbContextDebugRequest, UmbContextToken,
    UmbDebugContextData, UmbDebugContextItemData, contextData
} from "@umbraco-cms/backoffice/context-api";
import {UmbControllerHost, UmbControllerHostElement} from "@umbraco-cms/backoffice/controller-api";
import {filter} from "@umbraco-cms/backoffice/external/rxjs";
import {UmbObjectState} from "@umbraco-cms/backoffice/observable-api";
import {
    UMB_MODAL_MANAGER_CONTEXT,
    UmbModalManagerContext
} from "@umbraco-cms/backoffice/modal";
import {html, map} from "@umbraco-cms/backoffice/external/lit";
import { UMB_CONTEXT_DEBUGGER_MODAL } from "@umbraco-cms/backoffice/debug";
import { umbExtensionsRegistry } from "@umbraco-cms/backoffice/extension-registry";

export const UMB_EXTENSION_EXPLORER_CONTEXT = new UmbContextToken<UmbExtensionExplorerContext>('UmbExtensionExplorerContext');

export class UmbExtensionExplorerContext extends UmbContextBase<UmbExtensionExplorerContext> {
    #state = new UmbObjectState<UmbExtensionExplorerStateModel | undefined>(undefined)
    readonly state = this.#state.asObservable().pipe(filter((state) => !!state));
    readonly hide = this.#state.asObservablePart((state) => state?.hide);

    constructor(host: UmbControllerHost) {
        super(host, UMB_EXTENSION_EXPLORER_CONTEXT);
        this.#state?.setValue({hide: true})
    }

    public toggle() {
        this.#state?.setValue({hide: !this.#state?.value?.hide})
    }

    getHostContexts(host: UmbControllerHostElement, callback: { (data: UmbDebugContextData[]): void }) {
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

    public displayHostContexts(host: UmbControllerHostElement, registrationAlias: string) {
        this.getHostContexts(host, (contexts) => {
            new UmbContextConsumerController(host, UMB_MODAL_MANAGER_CONTEXT, (instance: UmbModalManagerContext) => {
                instance?.open(host, UMB_CONTEXT_DEBUGGER_MODAL, {
                    data: {
                        content: this.generateDialogContent(contexts,registrationAlias)
                    }
                })
            });
        });
    }

    public generateDialogContent(contexts: Array<UmbDebugContextData>, registrationAlias:string){
        return html`
        <div class="events">
			${this.#renderContexts(contexts)}
            ${this.#renderRegistration(registrationAlias)}
		</div>`;
    }

    #renderContexts(contexts: Array<UmbDebugContextData>) {
		return html`<div class="events">
            <h3>Available Contexts</h3>
			${map(contexts, (context) => {
				return html`
					<details>
						<summary><strong>${context.alias}</strong></summary>
						${this.#renderContextData(context.data)}
					</details>
				`;
			})}
		</div>`;
	}

    #renderRegistration(registrationAlias: string) {
        const registration = umbExtensionsRegistry.getByAlias(registrationAlias);
        if(!registration) {return;}

		return html`<div class="events">
            <h3>Registration</h3>
			<details>
                <summary><strong>${registrationAlias}</strong></summary>
                <pre>${JSON.stringify(registration, undefined, 2)}</pre>
            </details>
		</div>`;
	}

    #renderContextData(instance: UmbDebugContextItemData) {
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

export interface UmbExtensionExplorerStateModel {
    hide: boolean
}

export default UmbExtensionExplorerContext;