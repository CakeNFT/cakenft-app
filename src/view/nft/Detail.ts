import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import CommonUtil from "../../CommonUtil";
import Config from "../../Config";
import CakeSimpleNFTV1Contract from "../../contracts/CakeSimpleNFTV1Contract";
import NFTContract from "../../contracts/NFTContract";
import NFTMetatdata from "../../NFTMetatdata";
import NFTLoading from "../../component/loading/NFTLoading";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

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

            const isCakeNFT = this.contract.address === Config.contracts.CakeSimpleNFTV1;

            const collectionName = isCakeNFT ?
                CommonUtil.shortenAddress(await CakeSimpleNFTV1Contract.getArtist(id)) :
                await this.contract.getName();

            const uri = await this.contract.getTokenURI(id);
            const owner = await this.contract.ownerOf(id);
            const result = await fetch(uri);
            const metadata: NFTMetatdata = await result.json();

            this.container.empty().append(
                el(".art-container",
                    el(".art",
                        el("img", { src: metadata.image }),
                    ),
                ),
                el(".info",
                    el("a.collection", collectionName, {
                        click: () => ViewUtil.go(isCakeNFT ? `/user/${owner}/arts`: `/${address}`),
                    }),
                    el("h1", metadata.name),
                    el(".owner", "Owned by ", el("a", CommonUtil.shortenAddress(owner)), {
                        click: () => ViewUtil.go(`/user/${owner}/nfts`),
                    }),
                    el(".controller",
                        el("a.offer-button", "Make Offer"),
                    ),
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
