import { DomNode, el } from "@hanul/skynode";
import { constants } from "ethers";
import { View, ViewParams } from "skyrouter";
import CakeNFTStoreContract from "../contracts/CakeNFTStoreContract";
import NFTContract from "../contracts/NFTContract";
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

        const promises1: Promise<string>[] = [];
        for (let i = 0; i < count.toNumber(); i += 1) {
            promises1.push(new Promise(async (resolve) => {
                resolve(await CakeNFTStoreContract.nfts(i));
            }));
        }
        const addresses = await Promise.all(promises1);
        for (const address of addresses) {
            const contract = new NFTContract(address);
            contract.getMintedIds();
        }

        /*const promises2: Promise<{ address: string, id: number }>[] = [];
        for (const address of addresses) {
            for (let id = 0; id < 10000; id += 1) {
                promises2.push(new Promise(async (resolve) => {
                    const owner = await new NFTContract(address).ownerOf(id);
                    if (owner !== constants.AddressZero) {
                        resolve({ address, id });
                    }
                }));
            }
        }
        const nfts = await Promise.all(promises2);
        console.log(nfts);*/
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
