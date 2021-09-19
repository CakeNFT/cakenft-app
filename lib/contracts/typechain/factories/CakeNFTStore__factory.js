"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeNFTStore__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class CakeNFTStore__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_cake, _cakeStaker, _ownerVault, _vault, overrides) {
        return super.deploy(_cake, _cakeStaker, _ownerVault, _vault, overrides || {});
    }
    getDeployTransaction(_cake, _cakeStaker, _ownerVault, _vault, overrides) {
        return super.getDeployTransaction(_cake, _cakeStaker, _ownerVault, _vault, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.CakeNFTStore__factory = CakeNFTStore__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_cake",
                type: "address",
            },
            {
                internalType: "contract ICakeStaker",
                name: "_cakeStaker",
                type: "address",
            },
            {
                internalType: "contract ICakeOwnerVault",
                name: "_ownerVault",
                type: "address",
            },
            {
                internalType: "contract ICakeVault",
                name: "_vault",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "acceptor",
                type: "address",
            },
        ],
        name: "AcceptOffer",
        type: "event",
    },
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
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startPrice",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
        ],
        name: "Auction",
        type: "event",
    },
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
                name: "bidder",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "Bid",
        type: "event",
    },
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
                name: "buyer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "Buy",
        type: "event",
    },
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
                name: "owner",
                type: "address",
            },
        ],
        name: "CancelAuction",
        type: "event",
    },
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
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "offeror",
                type: "address",
            },
        ],
        name: "CancelOffer",
        type: "event",
    },
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
                name: "owner",
                type: "address",
            },
        ],
        name: "CancelSale",
        type: "event",
    },
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
                name: "bidder",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "Claim",
        type: "event",
    },
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
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "offeror",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "Offer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
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
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "Sell",
        type: "event",
    },
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
                name: "minter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "mintPrice",
                type: "uint256",
            },
        ],
        name: "UserMint",
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
            {
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
            },
        ],
        name: "acceptOffer",
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
            {
                internalType: "uint256",
                name: "startPrice",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
        ],
        name: "auction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ICakeNFT",
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "startPrice",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "auctionWithPermit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "auctions",
        outputs: [
            {
                internalType: "address",
                name: "seller",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "startPrice",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endBlock",
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
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "bid",
        outputs: [
            {
                internalType: "uint256",
                name: "biddingId",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "biddings",
        outputs: [
            {
                internalType: "address",
                name: "bidder",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "price",
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
        name: "buy",
        outputs: [],
        stateMutability: "nonpayable",
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
        stateMutability: "view",
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
        name: "cancelAuction",
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
            {
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
            },
        ],
        name: "cancelOffer",
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
        name: "cancelSale",
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
        name: "checkAuction",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
        name: "checkSelling",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
        name: "claim",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "claimed",
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
                name: "",
                type: "address",
            },
        ],
        name: "initSolds",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "",
                type: "address",
            },
        ],
        name: "nftDeployers",
        outputs: [
            {
                internalType: "address",
                name: "deployer",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "staking",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee",
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
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "offer",
        outputs: [
            {
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "offers",
        outputs: [
            {
                internalType: "address",
                name: "offeror",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ownerFee",
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
        name: "ownerVault",
        outputs: [
            {
                internalType: "contract ICakeOwnerVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "pointsCorrection",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "sales",
        outputs: [
            {
                internalType: "address",
                name: "seller",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "price",
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
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "sell",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ICakeNFT",
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "sellWithPermit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ICakeNFT",
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "staking",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "set",
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
                internalType: "address",
                name: "deployer",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "staking",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "setNFTDeployer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "setOwnerFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IUserMintNFT",
                name: "nft",
                type: "address",
            },
        ],
        name: "userMint",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "vault",
        outputs: [
            {
                internalType: "contract ICakeVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x61010060405260006001556000600255600060045560fa6007553480156200002657600080fd5b50604051620036c4380380620036c48339810160408190526200004991620000d7565b8383620000563362000087565b6001600160601b0319606092831b811660805290821b811660a05292811b831660c0521b1660e05250620001589050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060008060808587031215620000ee57600080fd5b8451620000fb816200013f565b60208601519094506200010e816200013f565b604086015190935062000121816200013f565b606086015190925062000134816200013f565b939692955090935050565b6001600160a01b03811681146200015557600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c61345b62000269600039600081816107090152818161080101528181610a6e01528181610ca901528181610d3c0152818161105b015281816117e80152818161187b0152611fc30152600081816103590152818161285301526128e601526000818161031a0152818161268201528181612bf401528181612df30152612e8601526000818161065e0152818161087201528181610aee01528181610bd801528181610c7c015281816112f201528181611719015281816117bb01528181611cbf01528181612404015281816125e401528181612826015281816129c101528181612ac601528181612c6f0152612dc6015261345b6000f3fe608060405234801561001057600080fd5b50600436106102485760003560e01c806374ddaeb11161013b578063c8cfe2c9116100b8578063f2fde38b1161007c578063f2fde38b14610693578063f7372ea0146106a6578063fa9f83c7146106b9578063fbf0ade1146106f1578063fbfa77cf1461070457600080fd5b8063c8cfe2c91461062a578063cce7ec131461063d578063d5b2a01a14610650578063dce1748414610659578063e3b436771461068057600080fd5b80639eebfb26116100ff5780639eebfb2614610590578063a11269e5146105a3578063a53b9eea146105ce578063aad3ec9614610604578063baa283d31461061757600080fd5b806374ddaeb11461050e5780638308d7e914610521578063859b97fe146105345780638da5cb5b14610547578063968a4f221461055857600080fd5b806344f91c1e116101c95780635b2e221b1161018d5780635b2e221b146104a25780635f102f9c146104cd5780636a272462146104e0578063715018a6146104f357806374a46050146104fb57600080fd5b806344f91c1e146103da578063453e93e51461041e5780634c33aa2e146104315780634dd6c8de146104445780635419258d1461046f57600080fd5b806316f3a95b1161021057806316f3a95b146103025780631d1dc6971461031557806320e57371146103545780633a1c83ac1461037b5780633c6fc817146103c757600080fd5b80630a00e5461461024d5780630affa6f1146102b05780630e030d6a146102c75780630f41ba4b146102dc57806314738d3b146102ef575b600080fd5b61028661025b366004613037565b6008602052600090815260409020805460018201546002909201546001600160a01b03909116919083565b604080516001600160a01b0390941684526020840192909252908201526060015b60405180910390f35b6102b960025481565b6040519081526020016102a7565b6102da6102d536600461309a565b61072b565b005b6102b96102ea36600461309a565b61094e565b6102b96102fd3660046131e9565b610df7565b6102da6103103660046131e9565b610e38565b61033c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102a7565b61033c7f000000000000000000000000000000000000000000000000000000000000000081565b6103b96103893660046131e9565b600a602090815260009283526040808420909152908252902080546001909101546001600160a01b039091169082565b6040516102a79291906132a6565b6102da6103d536600461309a565b610f32565b6102866103e83660046131e9565b600c6020908152600092835260408084209091529082529020805460018201546002909201546001600160a01b03909116919083565b6103b961042c36600461309a565b611102565b6102da61043f36600461313e565b611156565b6102b96104523660046131e9565b600660209081526000928352604080842090915290825290205481565b61049261047d366004613037565b60096020526000908152604090205460ff1681565b60405190151581526020016102a7565b6102b96104b03660046131e9565b600360209081526000928352604080842090915290825290205481565b6102b96104db366004613037565b6111e8565b6102da6104ee36600461309a565b61144e565b6102da611628565b6102b961050936600461309a565b611667565b6102da61051c3660046131a3565b61191c565b6102da61052f36600461309a565b6119ca565b6102da6105423660046131e9565b611adc565b6000546001600160a01b031661033c565b6104926105663660046131e9565b6001600160a01b039182166000908152600c60209081526040808320938352929052205416151590565b6102da61059e3660046131e9565b611c0b565b6102b96105b13660046131e9565b600560209081526000928352604080842090915290825290205481565b6102b96105dc3660046131e9565b6001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6102da6106123660046131e9565b611dd1565b6102da610625366004613215565b61209a565b6102da6106383660046130cf565b61227e565b6102da61064b3660046131e9565b612312565b6102b960075481565b61033c7f000000000000000000000000000000000000000000000000000000000000000081565b6103b961068e36600461309a565b6124fa565b6102da6106a1366004613037565b612522565b6102b96106b43660046131e9565b6125bd565b6104926106c73660046131e9565b6001600160a01b039182166000908152600a60209081526040808320938352929052205416151590565b6102da6106ff366004613250565b6127c0565b61033c7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b0383166000908152600b6020908152604080832085845290915281208054909190829084908110610765576107656133fa565b60009182526020918290206040805180820190915260029092020180546001600160a01b031680835260019091015492820192909252915033146107a857600080fd5b602081015182548390859081106107c1576107c16133fa565b6000918252602082206002919091020180546001600160a01b031916815560010155604051632e1a7d4d60e01b8152600481018290526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e1a7d4d90602401600060405180830381600087803b15801561084557600080fd5b505af1158015610859573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016925063a9059cbb91506108ab90339085906004016132a6565b602060405180830381600087803b1580156108c557600080fd5b505af11580156108d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fd9190613078565b5081516040516001600160a01b03918216815285918791908916907f1a99e8401ad0f5c42a44ff151af1dd043e4abef0362617d113662727868e64ce906020015b60405180910390a4505050505050565b6001600160a01b038084166000908152600c602090815260408083208684528252808320815160608101835281549095168086526001820154938601939093526002015490840152909190158015906109aa5750806040015143105b6109b357600080fd5b6001600160a01b0385166000908152600d60209081526040808320878452909152902080549250826109f55783826020015111156109f057600080fd5b610b7a565b600081610a036001866133cd565b81548110610a1357610a136133fa565b60009182526020918290206040805180820190915260029092020180546001600160a01b031682526001015491810182905291508511610a5257600080fd5b6020810151604051632e1a7d4d60e01b815260048101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d90602401600060405180830381600087803b158015610aba57600080fd5b505af1158015610ace573d6000803e3d6000fd5b50508251602084015160405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016945063a9059cbb9350610b259291906004016132a6565b602060405180830381600087803b158015610b3f57600080fd5b505af1158015610b53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b779190613078565b50505b6040805180820182523380825260208083018881528554600180820188556000888152939093209451600290910290940180546001600160a01b0319166001600160a01b03958616178155905191015591516323b872dd60e01b81527f0000000000000000000000000000000000000000000000000000000000000000909116916323b872dd91610c12919030908990600401613282565b602060405180830381600087803b158015610c2c57600080fd5b505af1158015610c40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c649190613078565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390610cd3907f00000000000000000000000000000000000000000000000000000000000000009088906004016132a6565b602060405180830381600087803b158015610ced57600080fd5b505af1158015610d01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d259190613078565b5060405163b6b55f2560e01b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6b55f2590602401600060405180830381600087803b158015610d8857600080fd5b505af1158015610d9c573d6000803e3d6000fd5b50505050336001600160a01b031685876001600160a01b03167f7f863cab1b412077be133ef69af7df0e6aca4c67ff7d89db843d601f124a025d87604051610de691815260200190565b60405180910390a450509392505050565b6001600160a01b0382166000908152600660209081526040808320848452909152812054610e2584846125bd565b610e2f91906133cd565b90505b92915050565b6001600160a01b038083166000908152600a6020908152604080832085845290915290205416338114610e6a57600080fd5b6040516323b872dd60e01b81526001600160a01b038416906323b872dd90610e9a90309085908790600401613282565b600060405180830381600087803b158015610eb457600080fd5b505af1158015610ec8573d6000803e3d6000fd5b5050506001600160a01b0384166000818152600a6020908152604080832087845290915280822080546001600160a01b0319168155600101829055513393508592917fc14de1e0640c6a4e914f570610341c22dcf6a3a940582f767b41c8802a94b4b491a4505050565b6001600160a01b0383166000908152600b6020908152604080832085845290915281208054909190829084908110610f6c57610f6c6133fa565b6000918252602091829020604080518082018252600290930290910180546001600160a01b039081168085526001909201549484019490945290516323b872dd60e01b8152919350918716916323b872dd91610fce9133918990600401613282565b600060405180830381600087803b158015610fe857600080fd5b505af1158015610ffc573d6000803e3d6000fd5b5050505060008160200151905082848154811061101b5761101b6133fa565b6000918252602082206002919091020180546001600160a01b031916815560010155604051632e1a7d4d60e01b8152600481018290526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e1a7d4d90602401600060405180830381600087803b15801561109f57600080fd5b505af11580156110b3573d6000803e3d6000fd5b505050506110c3868633846127ef565b604051338152849086906001600160a01b038916907f464e2668c1227b2db98a77a3752380089500f8cd3e641a33e0aa2437c978a1a99060200161093e565b600d602052826000526040600020602052816000526040600020818154811061112a57600080fd5b6000918252602090912060029091020180546001909101546001600160a01b0390911693509150839050565b604051637ac2ff7b60e01b8152306004820152602481018790526044810185905260ff841660648201526084810183905260a481018290526001600160a01b03881690637ac2ff7b9060c401600060405180830381600087803b1580156111bc57600080fd5b505af11580156111d0573d6000803e3d6000fd5b505050506111df87878761144e565b50505050505050565b600080826001600160a01b0316636817c76c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561122457600080fd5b505afa158015611238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125c9190613269565b6040516335313c2160e11b81523360048201529091506001600160a01b03841690636a62784290602401602060405180830381600087803b1580156112a057600080fd5b505af11580156112b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d89190613269565b6040516323b872dd60e01b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061132b90339030908690600401613282565b602060405180830381600087803b15801561134557600080fd5b505af1158015611359573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137d9190613078565b506113fa8383856001600160a01b031663d5f394886040518163ffffffff1660e01b815260040160206040518083038186803b1580156113bc57600080fd5b505afa1580156113d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f4919061305b565b846127ef565b336001600160a01b031682846001600160a01b03167f6b7718bbd8461683e1304f0e70287ff54fd29521002870719e04d687ae4318be8460405161144091815260200190565b60405180910390a450919050565b6001600160a01b0380841660009081526008602052604090205484911661147457600080fd5b6040516331a9108f60e11b81526004810184905233906001600160a01b03861690636352211e9060240160206040518083038186803b1580156114b657600080fd5b505afa1580156114ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ee919061305b565b6001600160a01b031614801561152c57506001600160a01b038481166000908152600c60209081526040808320878452909152902054161515600114155b61153557600080fd5b6040516323b872dd60e01b81526001600160a01b038516906323b872dd9061156590339030908890600401613282565b600060405180830381600087803b15801561157f57600080fd5b505af1158015611593573d6000803e3d6000fd5b50506040805180820182523380825260208083018881526001600160a01b038b81166000818152600a85528781208d82528552879020955186546001600160a01b03191692169190911785559051600190940193909355925187815290945087935090917f463904c4b0359ad674399537c3d4e4e44acc0b0dd259453d17329fd9b4be52c0910160405180910390a450505050565b6000546001600160a01b0316331461165b5760405162461bcd60e51b8152600401611652906132bf565b60405180910390fd5b6116656000612b86565b565b6001600160a01b03808416600090815260086020526040812054909185911661168f57600080fd5b6000831161169c57600080fd5b6001600160a01b038581166000908152600b602090815260408083208884528252808320805482518084018452338082528186018b8152600180850186558589529690972091516002840290920180546001600160a01b031916928916929092178255955194019390935590516323b872dd60e01b8152919550927f000000000000000000000000000000000000000000000000000000000000000016916323b872dd91611751919030908990600401613282565b602060405180830381600087803b15801561176b57600080fd5b505af115801561177f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a39190613078565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390611812907f00000000000000000000000000000000000000000000000000000000000000009088906004016132a6565b602060405180830381600087803b15801561182c57600080fd5b505af1158015611840573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118649190613078565b5060405163b6b55f2560e01b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6b55f2590602401600060405180830381600087803b1580156118c757600080fd5b505af11580156118db573d6000803e3d6000fd5b505050508285876001600160a01b03167f3498cca8289a0669e68756645378ec9f14f109147d58fc24e0bbbca63969ac2a3388604051610de69291906132a6565b6000546001600160a01b031633146119465760405162461bcd60e51b8152600401611652906132bf565b6103e8821015801561195a57506127108211155b801561196857506103e88111155b61197157600080fd5b604080516060810182526001600160a01b0394851681526020808201948552818301938452958516600090815260089096529420935184546001600160a01b031916931692909217835551600183015551600290910155565b336001600160a01b0316836001600160a01b031663d5f394886040518163ffffffff1660e01b815260040160206040518083038186803b158015611a0d57600080fd5b505afa158015611a21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a45919061305b565b6001600160a01b0316148015611a5d57506103e88210155b8015611a6b57506127108211155b8015611a7957506103e88111155b611a8257600080fd5b6040805160608101825233815260208082019485528183019384526001600160a01b039586166000908152600890915291909120905181546001600160a01b03191694169390931783559051600183015551600290910155565b6001600160a01b0382166000908152600d6020908152604080832084845290915290205415611b0a57600080fd5b6001600160a01b038083166000908152600c6020908152604080832085845290915290205416338114611b3c57600080fd5b6040516323b872dd60e01b81526001600160a01b038416906323b872dd90611b6c90309085908790600401613282565b600060405180830381600087803b158015611b8657600080fd5b505af1158015611b9a573d6000803e3d6000fd5b5050506001600160a01b0384166000818152600c6020908152604080832087845290915280822080546001600160a01b031916815560018101839055600201829055513393508592917f26d4510b556e779d6507640413e013206e44c8f5d018c7c74ed8926f3f024a9c91a4505050565b611c13612bd6565b6000611c1f8383612d79565b90508015611dcc576001600160a01b038316600090815260066020908152604080832085845290915281208054839290611c5a908490613335565b9091555050604051818152339083906001600160a01b038616907ff371029fbeb9d5ccc35b0e98232fa84414b7f053cebed0eb401b6640fbf9716c9060200160405180910390a46040516331a9108f60e11b8152600481018390526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169163a9059cbb91861690636352211e9060240160206040518083038186803b158015611d0b57600080fd5b505afa158015611d1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d43919061305b565b836040518363ffffffff1660e01b8152600401611d619291906132a6565b602060405180830381600087803b158015611d7b57600080fd5b505af1158015611d8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db39190613078565b508060016000828254611dc691906133cd565b90915550505b505050565b6001600160a01b038083166000818152600c6020908152604080832086845282528083208151606081018352815490961686526001810154868401526002015485820152928252600d8152828220858352815282822080548451818402810184019095528085529293929091849084015b82821015611e8a576000848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101611e42565b50505050905060008160018351611ea191906133cd565b81518110611eb157611eb16133fa565b60200260200101519050336001600160a01b031681600001516001600160a01b0316148015611ee4575082604001514310155b611eed57600080fd5b6001600160a01b0385166000818152600c60209081526040808320888452825280832080546001600160a01b031916815560018101849055600201839055928252600d81528282208783529052908120611f4691612fdb565b6040516323b872dd60e01b81526001600160a01b038616906323b872dd90611f7690309033908990600401613282565b600060405180830381600087803b158015611f9057600080fd5b505af1158015611fa4573d6000803e3d6000fd5b5050506020820151604051632e1a7d4d60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169250632e1a7d4d91611ffb9160040190815260200190565b600060405180830381600087803b15801561201557600080fd5b505af1158015612029573d6000803e3d6000fd5b505050506120418585856000015184602001516127ef565b336001600160a01b031684866001600160a01b03167fad03f837a9207e368d73ec028e1f54428184da8cfea258cc116da2225f3ac5eb846020015160405161208b91815260200190565b60405180910390a45050505050565b6001600160a01b038085166000908152600860205260409020548591166120c057600080fd5b6040516331a9108f60e11b81526004810185905233906001600160a01b03871690636352211e9060240160206040518083038186803b15801561210257600080fd5b505afa158015612116573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213a919061305b565b6001600160a01b031614801561217857506001600160a01b038581166000908152600a60209081526040808320888452909152902054161515600114155b61218157600080fd5b6040516323b872dd60e01b81526001600160a01b038616906323b872dd906121b190339030908990600401613282565b600060405180830381600087803b1580156121cb57600080fd5b505af11580156121df573d6000803e3d6000fd5b5050604080516060810182523380825260208083018981528385018981526001600160a01b038d81166000818152600c86528881208f82528652889020965187546001600160a01b03191692169190911786559151600186015551600290940193909355835189815290810188905290945088935090917f9b80d6af20a468c7a9f15b75aac831f1f047746133d24ee55cd289442114a990910161208b565b604051637ac2ff7b60e01b8152306004820152602481018890526044810185905260ff841660648201526084810183905260a481018290526001600160a01b03891690637ac2ff7b9060c401600060405180830381600087803b1580156122e457600080fd5b505af11580156122f8573d6000803e3d6000fd5b505050506123088888888861209a565b5050505050505050565b6001600160a01b038083166000908152600a6020908152604080832085845282529182902082518084019093528054909316808352600190930154908201529061235b57600080fd5b6001600160a01b0383166000818152600a6020908152604080832086845290915280822080546001600160a01b031916815560010191909155516323b872dd60e01b81526323b872dd906123b790309033908790600401613282565b600060405180830381600087803b1580156123d157600080fd5b505af11580156123e5573d6000803e3d6000fd5b50505060208201516040516323b872dd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692506323b872dd9161243c9133913091600401613282565b602060405180830381600087803b15801561245657600080fd5b505af115801561246a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061248e9190613078565b506124a38383836000015184602001516127ef565b336001600160a01b031682846001600160a01b03167fa76261e4127b2ebc809716d704216602fdaee4ae5b72745ed9aec0d7bd73b75d84602001516040516124ed91815260200190565b60405180910390a4505050565b600b602052826000526040600020602052816000526040600020818154811061112a57600080fd5b6000546001600160a01b0316331461254c5760405162461bcd60e51b8152600401611652906132bf565b6001600160a01b0381166125b15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401611652565b6125ba81612b86565b50565b60045460025460009190156127b6576040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561262e57600080fd5b505afa158015612642573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126669190613269565b604051631175a1dd60e01b8152600060048201523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631175a1dd9060440160206040518083038186803b1580156126cc57600080fd5b505afa1580156126e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127049190613269565b61270e9190613335565b905060006001548261272091906133cd565b9050801561275057600254612739600160801b8361336f565b612743919061334d565b61274d9084613335565b92505b6001600160a01b038616600081815260056020908152604080832089845282528083205493835260038252808320898452909152902054600160801b9190612798908661336f565b6127a291906132f4565b6127ac919061334d565b9350505050610e32565b5060009392505050565b6000546001600160a01b031633146127ea5760405162461bcd60e51b8152600401611652906132bf565b600755565b600061271060075483612802919061336f565b61280c919061334d565b60405163095ea7b360e01b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b39061287d907f00000000000000000000000000000000000000000000000000000000000000009085906004016132a6565b602060405180830381600087803b15801561289757600080fd5b505af11580156128ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128cf9190613078565b5060405163b6b55f2560e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6b55f2590602401600060405180830381600087803b15801561293257600080fd5b505af1158015612946573d6000803e3d6000fd5b505050506001600160a01b0385811660009081526008602090815260408083208151606081018352815490951685526001810154928501929092526002909101549083018190526127109061299b908661336f565b6129a5919061334d565b825160405163a9059cbb60e01b81529192506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb916129f69185906004016132a6565b602060405180830381600087803b158015612a1057600080fd5b505af1158015612a24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a489190613078565b506001600160a01b03871660009081526009602052604081205460ff161515600114612abc57612710836020015186612a81919061336f565b612a8b919061334d565b9050612a98888883612da7565b6001600160a01b0388166000908152600960205260409020805460ff191660011790555b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb878385612af8898b6133cd565b612b0291906133cd565b612b0c91906133cd565b6040518363ffffffff1660e01b8152600401612b299291906132a6565b602060405180830381600087803b158015612b4357600080fd5b505af1158015612b57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b7b9190613078565b505050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6002541561166557604051631058d28160e01b8152600060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631058d28190602401600060405180830381600087803b158015612c4057600080fd5b505af1158015612c54573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691506370a082319060240160206040518083038186803b158015612cba57600080fd5b505afa158015612cce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cf29190613269565b9050600060015482612d0491906133cd565b90508015612d7357600254612d1d600160801b8361336f565b612d27919061334d565b60046000828254612d389190613335565b909155505060405181815233907f7e3443847968b8ae43a305870aa25aa7fc542ea63833182a4b715b3f82cd01619060200160405180910390a25b50600155565b6001600160a01b0382166000908152600660209081526040808320848452909152812054610e258484612f7a565b612daf612bd6565b60405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390612e1d907f00000000000000000000000000000000000000000000000000000000000000009085906004016132a6565b602060405180830381600087803b158015612e3757600080fd5b505af1158015612e4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e6f9190613078565b506040516341441d3b60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906341441d3b90602401600060405180830381600087803b158015612ed257600080fd5b505af1158015612ee6573d6000803e3d6000fd5b505050508060026000828254612efc9190613335565b90915550506001600160a01b038316600090815260036020908152604080832085845290915281208054839290612f34908490613335565b9091555050600454612f4790829061336f565b6001600160a01b038416600090815260056020908152604080832086845290915281208054909190611dc690849061338e565b6001600160a01b0382166000818152600560209081526040808320858452825280832054938352600382528083208584529091528120546004549192600160801b929091612fc79161336f565b612fd191906132f4565b610e2f919061334d565b50805460008255600202906000526020600020908101906125ba91905b8082111561301d5780546001600160a01b031916815560006001820155600201612ff8565b5090565b803560ff8116811461303257600080fd5b919050565b60006020828403121561304957600080fd5b813561305481613410565b9392505050565b60006020828403121561306d57600080fd5b815161305481613410565b60006020828403121561308a57600080fd5b8151801515811461305457600080fd5b6000806000606084860312156130af57600080fd5b83356130ba81613410565b95602085013595506040909401359392505050565b600080600080600080600080610100898b0312156130ec57600080fd5b88356130f781613410565b97506020890135965060408901359550606089013594506080890135935061312160a08a01613021565b925060c0890135915060e089013590509295985092959890939650565b600080600080600080600060e0888a03121561315957600080fd5b873561316481613410565b965060208801359550604088013594506060880135935061318760808901613021565b925060a0880135915060c0880135905092959891949750929550565b600080600080608085870312156131b957600080fd5b84356131c481613410565b935060208501356131d481613410565b93969395505050506040820135916060013590565b600080604083850312156131fc57600080fd5b823561320781613410565b946020939093013593505050565b6000806000806080858703121561322b57600080fd5b843561323681613410565b966020860135965060408601359560600135945092505050565b60006020828403121561326257600080fd5b5035919050565b60006020828403121561327b57600080fd5b5051919050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600080821280156001600160ff1b0384900385131615613316576133166133e4565b600160ff1b839003841281161561332f5761332f6133e4565b50500190565b60008219821115613348576133486133e4565b500190565b60008261336a57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615613389576133896133e4565b500290565b60008083128015600160ff1b8501841216156133ac576133ac6133e4565b6001600160ff1b03840183138116156133c7576133c76133e4565b50500390565b6000828210156133df576133df6133e4565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03811681146125ba57600080fdfea26469706673582212204d6b6cca5a936df87001339a6161da810a07e3a22ebbb198b8ec3f798a804c3c64736f6c63430008050033";
//# sourceMappingURL=CakeNFTStore__factory.js.map