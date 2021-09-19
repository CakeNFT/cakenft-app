import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CakeDividend } from "../CakeDividend";
export declare class CakeDividend__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cake: string, _cakeStaker: string, overrides?: Overrides): Promise<CakeDividend>;
    getDeployTransaction(_cake: string, _cakeStaker: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CakeDividend;
    connect(signer: Signer): CakeDividend__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CakeDividend;
}
//# sourceMappingURL=CakeDividend__factory.d.ts.map