import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import ImageUploadForm from "../../ui/ImageUploadForm";
import Layout from "../Layout";

export default class Update implements View {

    private container: DomNode;

    constructor(params: ViewParams) {
        Layout.current.content.append(this.container = el(".update-view",
            el("main",
                el("h1", "Update NFT Information"),
                new ImageUploadForm(),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
