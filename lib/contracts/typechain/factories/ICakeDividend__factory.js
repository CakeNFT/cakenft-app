"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICakeDividend__factory = void 0;
const ethers_1 = require("ethers");
class ICakeDividend__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICakeDividend__factory = ICakeDividend__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract IERC721",
                name: "nft",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "claimed",
                type: "uint256",
            },
        ],
        name: "ClaimCake",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "by",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "distributed",
                type: "uint256",
            },
        ],
        name: "DistributeCake",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
        ],
        name: "accumulativeCakeOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
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
        inputs: [
            {
                internalType: "contract IERC721",
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
        ],
        name: "claimCake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
        ],
        name: "claimableCakeOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
        ],
        name: "claimedCakeOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
        ],
        name: "stakedCakeBalances",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalStakedCakeBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
//# sourceMappingURL=ICakeDividend__factory.js.map