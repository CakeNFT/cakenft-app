"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
const Config_1 = __importDefault(require("../Config"));
class ImageUploadForm extends skynode_1.DomNode {
    constructor(url) {
        super(".image-upload-form");
        this.url = url;
        this.uploading = false;
        const fakeInput = document.createElement("input");
        fakeInput.type = "file";
        fakeInput.accept = "image/*";
        fakeInput.addEventListener("change", () => {
            if (fakeInput.files !== null) {
                const file = fakeInput.files[0];
                if (file !== undefined) {
                    this.fileHandler(file);
                }
            }
            fakeInput.value = "";
        });
        this.append(this.guide = (0, skynode_1.el)(".guide", (0, skynode_1.el)("i.fas.fa-file-image"), (0, skynode_1.el)("header", "Drag & drop file"), (0, skynode_1.el)("p", "or browse media on your device")), this.error = (0, skynode_1.el)(".error", (0, skynode_1.el)("p", "Upload Error")), this.percent = (0, skynode_1.el)(".percent", (0, skynode_1.el)(".bar", this.percentFluid = (0, skynode_1.el)(".fluid")), this.percentNumber = (0, skynode_1.el)("span.number"), (0, skynode_1.el)("p", "Uploading...")));
        this.onDom("click", () => fakeInput.click());
        this.onDom("dragenter", (event) => { this.highlight(); event.preventDefault(); });
        this.onDom("dragover", (event) => { this.highlight(); event.preventDefault(); });
        this.onDom("dragleave", (event) => { this.unhighlight(); event.preventDefault(); });
        this.onDom("drop", (event) => { this.dropHandler(event); this.unhighlight(); event.preventDefault(); });
        this.error.style({ display: "none" });
        this.percent.style({ display: "none" });
        if (url !== undefined) {
            this.setImage(url);
        }
    }
    setImage(url) {
        this.url = url;
        this.guide.style({ display: "none" });
        this.style({
            backgroundImage: `url("${url}")`,
            border: "none",
        });
    }
    clear() {
        if (this.uploading !== true) {
            this.url = undefined;
            this.guide.style({ display: "block" });
            this.error.style({ display: "none" });
            this.style({
                backgroundImage: undefined,
                border: undefined,
            });
        }
    }
    setPercent(percent) {
        this.percentNumber.empty().appendText(`${percent}%`);
        this.percentFluid.style({ width: `${percent}%` });
    }
    clearPercent() {
        this.uploading = false;
        this.guide.style({ display: "block" });
        this.percent.style({ display: "none" });
    }
    fileHandler(file) {
        this.clear();
        this.uploading = true;
        this.guide.style({ display: "none" });
        this.percent.style({ display: "block" });
        this.setPercent(0);
        const request = superagent_1.default.post(`${Config_1.default.api}/image-upload`);
        request.attach(file.name, file);
        request.on("progress", (event) => {
            if (event.percent !== undefined) {
                this.setPercent(event.percent);
            }
        }).then((response) => {
            this.clearPercent();
            const urls = JSON.parse(response.text);
            this.setImage(urls[0]);
        }).catch((error) => {
            this.clearPercent();
            if (error.response.text === "ERROR: EXCEED_MAX_UPLOAD_SIZE") {
                alert("Exceeded the maximum upload size.\nMaximum upload size is 1mb");
            }
            else {
                alert(`Upload Error\nError Message: ${error.response.text}`);
            }
        });
    }
    highlight() { this.addClass("highlight"); }
    unhighlight() { this.deleteClass("highlight"); }
    dropHandler(event) {
        var _a;
        const file = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files[0];
        if (file !== undefined) {
            this.fileHandler(file);
        }
    }
}
exports.default = ImageUploadForm;
//# sourceMappingURL=ImageUploadForm.js.map