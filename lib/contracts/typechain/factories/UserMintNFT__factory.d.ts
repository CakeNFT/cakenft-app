import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { UserMintNFT } from "../UserMintNFT";
export declare class UserMintNFT__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_storeAddress: string, name: string, symbol: string, _version: string, baseURI_: string, _mintPrice: BigNumberish, _maxMintCount: BigNumberish, overrides?: Overrides): Promise<UserMintNFT>;
    getDeployTransaction(_storeAddress: string, name: string, symbol: string, _version: string, baseURI_: string, _mintPrice: BigNumberish, _maxMintCount: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): UserMintNFT;
    connect(signer: Signer): UserMintNFT__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UserMintNFT;
}
//# sourceMappingURL=UserMintNFT__factory.d.ts.map