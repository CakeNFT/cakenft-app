import { DomNode, el } from "@hanul/skynode";
import PropertyForm from "./PropertyForm";

export default class PropertiesForm extends DomNode {

    private list: DomNode;

    constructor(attributes: { trait_type: string, value: string }[]) {
        super(".properties-form");
        this.append(
            el("h4", "Properties"),
            el("p", "Textual traits that show up as rectangles"),
            this.list = el(".property-form-list"),
            el("a.add-button", "Add Property", { click: () => this.add(undefined, undefined) }),
        );
        if (attributes.length === 0) {
            this.add(undefined, undefined);
        } else {
            for (const attribute of attributes) {
                this.add(attribute.trait_type, attribute.value);
            }
        }
    }

    private add(trait_type: undefined | string, value: undefined | string) {
        new PropertyForm(trait_type, value).appendTo(this.list);
    }

    public get attributes() {
        const attributes: { trait_type: string, value: string }[] = [];
        for (const child of this.list.children) {
            if (child instanceof PropertyForm) {
                const trait_type = child.trait_type.trim();
                const value = child.value.trim();
                if (trait_type !== "" && value !== "") {
                    attributes.push({ trait_type, value });
                }
            }
        }
        return attributes;
    }
}
