import { BigNumber } from "@ethersproject/bignumber";
import { DomNode, el } from "@hanul/skynode";
import { constants } from "ethers";
import { View, ViewParams } from "skyrouter";
import Wallet from "../bsc/Wallet";
import CakeSimpleNFTV1Contract from "../contracts/CakeSimpleNFTV1Contract";
import Minting from "../component/loading/Minting";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Create implements View {

    private container: DomNode;
    private minting: Minting | undefined;

    constructor() {
        Layout.current.content.append(this.container = el(".create-view",
            el("main",
                el("h1", "Create NFTs"),
                el("section",
                    el("a",
                        el("h3", "Create new art"),
                        el("p", "Create new NFT art Simple & Easy"),
                        {
                            click: async () => {
                                this.minting = new Minting();
                                try {
                                    await CakeSimpleNFTV1Contract.mint();
                                } catch (e) {
                                    this.minting.delete();
                                    this.minting = undefined;
                                }
                            },
                        },
                    ),
                ),
                el("section",
                    el("h2", "Create new smart contract"),
                    el("p", "You need ", el("a", "Base URL")),
                    el("a",
                        el("h3", "Create Deployer Mint NFT"),
                        el("p", "Mint deployer only"),
                        { click: () => ViewUtil.go("/create/deployer-mint-nft") },
                    ),
                    el("a",
                        el("h3", "Create User Mint NFT"),
                        el("p", "Mint everyone"),
                        { click: () => ViewUtil.go("/create/user-mint-nft") },
                    ),
                ),
            ),
        ));

        CakeSimpleNFTV1Contract.on("Transfer", this.transferHandler);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    private async transferHandler(from: string, to: string, id: BigNumber) {
        // mint
        if (from === constants.AddressZero && to === await Wallet.loadAddress()) {
            ViewUtil.go(`/${CakeSimpleNFTV1Contract.address}/${id}/update`);
        }
    }

    public close(): void {
        this.minting?.delete();
        CakeSimpleNFTV1Contract.off("Transfer", this.transferHandler);
        this.container.delete();
    }
}
