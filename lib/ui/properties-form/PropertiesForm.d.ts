import { DomNode } from "@hanul/skynode";
export default class PropertiesForm extends DomNode {
    private list;
    constructor(attributes: {
        trait_type: string;
        value: string;
    }[]);
    private add;
    get attributes(): {
        trait_type: string;
        value: string;
    }[];
}
//# sourceMappingURL=PropertiesForm.d.ts.map