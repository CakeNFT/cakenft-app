import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import UserMintNFTArtifact from "../../contracts/artifacts/contracts/UserMintNFT.sol/UserMintNFT.json";
import CakeNFTStoreContract from "../../contracts/CakeNFTStoreContract";
import Contract from "../../contracts/Contract";
import Layout from "../Layout";

export default class CreateUserMintNFT implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el(".create-user-mint-nft-view",
            el("h1", "Create User Mint NFT"),
            el("form",
                el("label",
                    "Name *",
                    el("input", { name: "name", placeholder: "NFT Name" }),
                ),
                el("label",
                    "Symbol *",
                    el("input", { placeholder: "NFT Symbol" }),
                ),
                el("label",
                    "Version *",
                    el("input", { placeholder: "NFT Version" }),
                ),
                el("label",
                    "Base URI *",
                    el("input", { placeholder: "NFT Base URI" }),
                ),
                el("label",
                    "Mint Price *",
                    el("input", { placeholder: "NFT Mint Price" }),
                ),
                el("label",
                    "Max Mint Count *",
                    el("input", { placeholder: "NFT Max Mint Count" }),
                ),
                el("input", { type: "submit", value: "Create" }),
                {
                    submit: (event: FormDataEvent, form) => {
                        const formData = new FormData(form.domElement as HTMLFormElement);
                        const address = Contract.deployContract(
                            UserMintNFTArtifact.abi,
                            UserMintNFTArtifact.bytecode,
                            CakeNFTStoreContract.address,
                            formData.get("name"),
                            formData.get("symbol"),
                            formData.get("version"),
                            formData.get("baseURI"),
                            utils.formatEther(formData.get("mintPrice") as string),
                            formData.get("maxMintCount"),
                        );
                        console.log(address);
                        event.preventDefault();
                    },
                },
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
