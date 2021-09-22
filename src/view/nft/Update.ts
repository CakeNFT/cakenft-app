import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import Config from "../../Config";
import ImageUploadForm from "../../ui/ImageUploadForm";
import PropertiesForm from "../../ui/properties-form/PropertiesForm";
import Layout from "../Layout";

export default class Update implements View {

    private container: DomNode;

    constructor(params: ViewParams) {
        Layout.current.content.append(this.container = el(".update-view"));
        this.load(params.id);
    }

    private async load(id: undefined | string) {
        if (id !== undefined) {

            let imageUploadForm: ImageUploadForm;
            let propertiesForm: PropertiesForm;

            this.container.empty().append(el("form",
                el("h1", "Update NFT Information"),
                imageUploadForm = new ImageUploadForm(),
                el("label",
                    "Name *",
                    el("input", { name: "name", placeholder: "Item Name" }),
                ),
                el("label",
                    "External Link",
                    el("p",
                        "CakeNFT will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.",
                    ),
                    el("input", { name: "external_url", placeholder: "https://yournft.org/item/123" }),
                ),
                el("label",
                    "Description",
                    el("p",
                        "The description will be included on the item's detail page underneath its image. ",
                        el("a", "Markdown", { href: "https://www.markdownguide.org/cheat-sheet/", target: "_blank" }),
                        " syntax is supported.",
                    ),
                    el("textarea", { name: "description", placeholder: "Provide a detailed description of your item." }),
                ),
                propertiesForm = new PropertiesForm([]),
                el("input", { type: "submit", value: "Save" }),
                {
                    submit: async (event: FormDataEvent, form) => {
                        event.preventDefault();
                        const formData = new FormData(form.domElement as HTMLFormElement);
                        const response = await fetch(`${Config.api}/nft/v1/${id}/update`, {
                            method: "POST",
                            body: JSON.stringify({
                                image: imageUploadForm.url,
                                name: formData.get("name"),
                                external_url: formData.get("external_url"),
                                description: formData.get("description"),
                                attributes: propertiesForm.attributes,
                            }),
                        });
                        if (response.status === 500) {
                            alert(await response.text());
                        }
                    },
                },
            ));
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
        this.load(params.id);
    }

    public close(): void {
        this.container.delete();
    }
}
