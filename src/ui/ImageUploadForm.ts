import { DomNode, el } from "@hanul/skynode";
import superagent from "superagent";
import Config from "../Config";

export default class ImageUploadForm extends DomNode {

    private guide: DomNode;
    private error: DomNode;
    private percent: DomNode;
    private percentFluid: DomNode;
    private percentNumber: DomNode;

    private uploading = false;

    constructor(public url?: string) {
        super(".image-upload-form");

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

        this.append(
            this.guide = el(".guide",
                el("i.fas.fa-file-image"),
                el("header", "Drag & drop file"),
                el("p", "or browse media on your device"),
            ),
            this.error = el(".error",
                el("p", "Upload Error"),
            ),
            this.percent = el(".percent",
                el(".bar", this.percentFluid = el(".fluid")),
                this.percentNumber = el("span.number"),
                el("p", "Uploading..."),
            ),
        );

        this.onDom("click", () => fakeInput.click());
        this.onDom("dragenter", (event: DragEvent) => { this.highlight(); event.preventDefault(); });
        this.onDom("dragover", (event: DragEvent) => { this.highlight(); event.preventDefault(); });
        this.onDom("dragleave", (event: DragEvent) => { this.unhighlight(); event.preventDefault(); });
        this.onDom("drop", (event: DragEvent) => { this.dropHandler(event); this.unhighlight(); event.preventDefault(); });

        this.error.style({ display: "none" });
        this.percent.style({ display: "none" });

        if (url !== undefined) {
            this.setImage(url);
        }
    }

    private setImage(url: string) {
        this.url = url;
        this.guide.style({ display: "none" });
        this.style({
            backgroundImage: `url("${url}")`,
            border: "none",
        });
    }

    private clear() {
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

    private setPercent(percent: number) {
        this.percentNumber.empty().appendText(`${percent}%`);
        this.percentFluid.style({ width: `${percent}%` });
    }

    private clearPercent() {
        this.uploading = false;
        this.guide.style({ display: "block" });
        this.percent.style({ display: "none" });
    }

    private fileHandler(file: File) {

        this.clear();
        this.uploading = true;
        this.guide.style({ display: "none" });
        this.percent.style({ display: "block" });
        this.setPercent(0);

        const request = superagent.post(`${Config.api}/image-upload`);
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
            } else {
                alert(`Upload Error\nError Message: ${error.response.text}`);
            }
        });
    }

    private highlight() { this.addClass("highlight"); }
    private unhighlight() { this.deleteClass("highlight"); }

    private dropHandler(event: DragEvent) {
        const file = event.dataTransfer?.files[0];
        if (file !== undefined) {
            this.fileHandler(file);
        }
    }
}
