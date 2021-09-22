import { DomNode, el } from "@hanul/skynode";

export default class PropertyForm extends DomNode {

    private traitTypeInput: DomNode<HTMLInputElement>;
    private valueInput: DomNode<HTMLInputElement>;

    constructor(trait_type: undefined | string, value: undefined | string) {
        super(".property-form");
        this.append(
            el("a.delete-button", el("i.fas.fa-times"), {
                click: () => this.delete(),
            }),
            this.traitTypeInput = el("input", { placeholder: "Character", value: trait_type }),
            this.valueInput = el("input", { placeholder: "Male", value }),
        );
    }

    public get trait_type() {
        return this.traitTypeInput.domElement.value;
    }

    public get value() {
        return this.valueInput.domElement.value;
    }
}
