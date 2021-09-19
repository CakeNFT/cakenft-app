"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICakeOwnerVault__factory = void 0;
const ethers_1 = require("ethers");
class ICakeOwnerVault__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICakeOwnerVault__factory = ICakeOwnerVault__factory;
const _abi = [
    {
        inputs: [],
        name: "cake",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cakeStaker",
        outputs: [
            {
                internalType: "contract ICakeStaker",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=ICakeOwnerVault__factory.js.map