import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import CommonUtil from "../../CommonUtil";
import NFTContract from "../../contracts/NFTContract";
import NFTMetatdata from "../../NFTMetatdata";
import NFTLoading from "../../ui/loading/NFTLoading";
import Layout from "../Layout";

export default class Detail implements View {

    private container: DomNode;
    private contract: NFTContract | undefined;
    private loading: NFTLoading | undefined;

    constructor(params: ViewParams) {
        Layout.current.content.append(this.container = el(".detail-view"));
        this.loading = new NFTLoading();
        this.loading.on("delete", () => this.loading = undefined);
        this.load(params.address, params.id);
    }

    public changeParams(params: ViewParams, uri: string): void {
        this.load(params.address, params.id);
    }

    private async load(address: string | undefined, id: string | undefined) {
        if (address !== undefined && id !== undefined) {

            if (this.contract?.address !== address) {
                this.contract = new NFTContract(address);
            }

            const uri = await this.contract.getTokenURI(id);
            const owner = await this.contract.ownerOf(id);
            const result = await fetch(uri);
            const metadata: NFTMetatdata = await result.json();

            this.container.empty().append(
                el(".art",
                    el("img", { src: metadata.image }),
                ),
                el(".info",
                    el("h1", metadata.name),
                    el(".owner", "Owned by ", el("a", CommonUtil.shortenAddress(owner))),
                ),
            );
        }
        this.loading?.delete();
    }

    public close(): void {
        this.loading?.delete();
        this.container.delete();
    }
}
