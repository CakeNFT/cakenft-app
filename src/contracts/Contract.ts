import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
import NetworkProvider from "../bsc/NetworkProvider";
import Wallet from "../bsc/Wallet";
import Config from "../Config";

export default abstract class Contract<CT extends ethers.Contract> extends EventContainer {

    protected walletContract: CT | undefined;
    protected contract: CT;

    constructor(public address: string, private abi: ContractInterface, eventNames: string[]) {
        super();
        this.contract = new ethers.Contract(address, abi, NetworkProvider.provider).connect(NetworkProvider.signer) as CT;
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        Wallet.on("chainChanged", () => this.walletContract = undefined);
    }

    public async loadWalletContract() {
        if (await Wallet.loadChainId() !== Config.chainId) {
            alert("Wrong Network");
        } else {
            if (await Wallet.connected() !== true) {
                await Wallet.connect();
            }
            if (this.walletContract === undefined && Wallet.signer !== undefined) {
                this.walletContract = new ethers.Contract(this.address, this.abi, Wallet.provider).connect(Wallet.signer) as CT;
            }
            return this.walletContract;
        }
    }

    public static async deployContract(abi: any, bytecode: string, ...args: any[]) {
        if (await Wallet.loadChainId() !== Config.chainId) {
            alert("Wrong Network");
        } else {
            if (await Wallet.connected() !== true) {
                await Wallet.connect();
            }
            const factory = new ethers.ContractFactory(abi, bytecode, Wallet.signer);
            const contract = await factory.deploy(...args);
            return contract.address;
        }
    }
}
