import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MockCake } from "../MockCake";
export declare class MockCake__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MockCake>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MockCake;
    connect(signer: Signer): MockCake__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockCake;
}
//# sourceMappingURL=MockCake__factory.d.ts.map