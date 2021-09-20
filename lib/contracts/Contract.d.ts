import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
export default abstract class Contract<CT extends ethers.Contract> extends EventContainer {
    address: string;
    private abi;
    protected walletContract: CT | undefined;
    protected contract: CT;
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    loadWalletContract(): Promise<CT | undefined>;
    static deployContract(abi: any, bytecode: string, ...args: any[]): Promise<string | undefined>;
}
//# sourceMappingURL=Contract.d.ts.map