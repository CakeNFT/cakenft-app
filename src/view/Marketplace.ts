import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Wallet from "../bsc/Wallet";
import CakeNFTStoreContract from "../contracts/CakeNFTStoreContract";
import CakeSimpleNFTV1Contract from "../contracts/CakeSimpleNFTV1Contract";
import Layout from "./Layout";

export default class Marketplace implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el(".marketplace-view",
        ));
        this.load();
    }

    private async load() {
        const count = await CakeNFTStoreContract.nftCount();
        console.log(count);

        CakeNFTStoreContract.setNFTDeployer(
            CakeSimpleNFTV1Contract.address,
            await Wallet.loadAddress(),
            3000,
            0,
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
