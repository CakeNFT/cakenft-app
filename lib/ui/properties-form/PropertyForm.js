"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class PropertyForm extends skynode_1.DomNode {
    constructor(trait_type, value) {
        super(".property-form");
        this.append((0, skynode_1.el)("a.delete-button", (0, skynode_1.el)("i.fas.fa-times"), {
            click: () => this.delete(),
        }), this.traitTypeInput = (0, skynode_1.el)("input", { placeholder: "Character", value: trait_type }), this.valueInput = (0, skynode_1.el)("input", { placeholder: "Male", value }));
    }
    get trait_type() {
        return this.traitTypeInput.domElement.value;
    }
    get value() {
        return this.valueInput.domElement.value;
    }
}
exports.default = PropertyForm;
//# sourceMappingURL=PropertyForm.js.map