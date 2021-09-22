"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const PropertyForm_1 = __importDefault(require("./PropertyForm"));
class PropertiesForm extends skynode_1.DomNode {
    constructor(attributes) {
        super(".properties-form");
        this.append((0, skynode_1.el)("h4", "Properties"), (0, skynode_1.el)("p", "Textual traits that show up as rectangles"), this.list = (0, skynode_1.el)(".property-form-list"), (0, skynode_1.el)("a.add-button", "Add Property", { click: () => this.add(undefined, undefined) }));
        if (attributes.length === 0) {
            this.add(undefined, undefined);
        }
        else {
            for (const attribute of attributes) {
                this.add(attribute.trait_type, attribute.value);
            }
        }
    }
    add(trait_type, value) {
        new PropertyForm_1.default(trait_type, value).appendTo(this.list);
    }
    get attributes() {
        const attributes = [];
        for (const child of this.list.children) {
            if (child instanceof PropertyForm_1.default) {
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
exports.default = PropertiesForm;
//# sourceMappingURL=PropertiesForm.js.map