"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Wallet_1 = __importDefault(require("../../bsc/Wallet"));
const Config_1 = __importDefault(require("../../Config"));
const ImageUploadForm_1 = __importDefault(require("../../ui/ImageUploadForm"));
const PropertiesForm_1 = __importDefault(require("../../ui/properties-form/PropertiesForm"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class Update {
    constructor(params) {
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".update-view"));
        this.load(params.address, params.id);
    }
    async load(address, id) {
        if (address !== undefined && id !== undefined) {
            const result = await fetch(`${Config_1.default.api}/nft/v1/${id}`);
            const metadata = await result.json();
            let imageUploadForm;
            let attributesForm;
            this.container.empty().append((0, skynode_1.el)("form", (0, skynode_1.el)("h1", "Update NFT Information"), imageUploadForm = new ImageUploadForm_1.default(metadata.image), (0, skynode_1.el)("label", "Name *", (0, skynode_1.el)("input", { name: "name", placeholder: "Item Name", value: metadata.name })), (0, skynode_1.el)("label", "External Link", (0, skynode_1.el)("p", "CakeNFT will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."), (0, skynode_1.el)("input", { name: "external_url", placeholder: "https://yournft.org/item/123", value: metadata.external_url })), (0, skynode_1.el)("label", "Description", (0, skynode_1.el)("p", "The description will be included on the item's detail page underneath its image. ", (0, skynode_1.el)("a", "Markdown", { href: "https://www.markdownguide.org/cheat-sheet/", target: "_blank" }), " syntax is supported."), (0, skynode_1.el)("textarea", metadata.description, { name: "description", placeholder: "Provide a detailed description of your item." })), attributesForm = new PropertiesForm_1.default(metadata.attributes), (0, skynode_1.el)("input", { type: "submit", value: "Save" }), {
                submit: async (event, form) => {
                    event.preventDefault();
                    const message = "Sign message to confirm owner.";
                    const signedMessage = await Wallet_1.default.signMessage(message);
                    const formData = new FormData(form.domElement);
                    const response = await fetch(`${Config_1.default.api}/nft/v1/${id}/update`, {
                        method: "POST",
                        body: JSON.stringify({
                            image: imageUploadForm.url,
                            name: formData.get("name"),
                            external_url: formData.get("external_url"),
                            description: formData.get("description"),
                            attributes: attributesForm.attributes,
                            message, signedMessage,
                        }),
                    });
                    if (response.status === 500) {
                        alert(await response.text());
                    }
                    else {
                        ViewUtil_1.default.go(`/${address}/${id}`);
                    }
                },
            }));
        }
    }
    changeParams(params, uri) {
        this.load(params.address, params.id);
    }
    close() {
        this.container.delete();
    }
}
exports.default = Update;
//# sourceMappingURL=Update.js.map