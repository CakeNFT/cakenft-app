"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeNFTStore__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class CakeNFTStore__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_cake, _cakeStaker, _ownerVault, _vault, _oracle, overrides) {
        return super.deploy(_cake, _cakeStaker, _ownerVault, _vault, _oracle, overrides || {});
    }
    getDeployTransaction(_cake, _cakeStaker, _ownerVault, _vault, _oracle, overrides) {
        return super.getDeployTransaction(_cake, _cakeStaker, _ownerVault, _vault, _oracle, overrides || {});
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
            {
                internalType: "address",
                name: "_oracle",
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
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
        ],
        name: "biddingCount",
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
        inputs: [],
        name: "nftCount",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "nfts",
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
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
        ],
        name: "offerCount",
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
        name: "oracle",
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
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
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
                internalType: "address",
                name: "_oracle",
                type: "address",
            },
        ],
        name: "setOracle",
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
const _bytecode = "0x61010060405260006001556000600255600060045560fa6008553480156200002657600080fd5b5060405162003bfb38038062003bfb8339810160408190526200004991620000fc565b84846200005633620000ac565b606091821b6001600160601b031990811660805290821b811660a05293811b841660c0529190911b90911660e052600780546001600160a01b0319166001600160a01b0390921691909117905550620001959050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080600060a086880312156200011557600080fd5b855162000122816200017c565b602087015190955062000135816200017c565b604087015190945062000148816200017c565b60608701519093506200015b816200017c565b60808701519092506200016e816200017c565b809150509295509295909350565b6001600160a01b03811681146200019257600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c613955620002a6600039600081816107f4015281816108ec01528181610e5e015281816110990152818161112c0152818161147501528181611bf901528181611c8c01526123de0152600081816103b201528181612c6e0152612d0101526000818161037301528181612a9d0152818161300f0152818161320e01526132a10152600081816107490152818161095d01528181610ede01528181610fc80152818161106c0152818161170c01528181611b2a01528181611bcc015281816120da0152818161281f015281816129ff01528181612c4101528181612ddc01528181612ee10152818161308a01526131e101526139556000f3fe608060405234801561001057600080fd5b506004361061028a5760003560e01c806374a460501161015c578063aad3ec96116100ce578063e3b4367711610087578063e3b436771461076b578063f2fde38b1461077e578063f7372ea014610791578063fa9f83c7146107a4578063fbf0ade1146107dc578063fbfa77cf146107ef57600080fd5b8063aad3ec96146106ef578063baa283d314610702578063c8cfe2c914610715578063cce7ec1314610728578063d5b2a01a1461073b578063dce174841461074457600080fd5b80638c64628c116101205780638c64628c146105fc5780638da5cb5b14610632578063968a4f22146106435780639eebfb261461067b578063a11269e51461068e578063a53b9eea146106b957600080fd5b806374a460501461059d5780637adbf973146105b05780637dc0d1d0146105c35780638308d7e9146105d6578063859b97fe146105e957600080fd5b806337afaf49116102005780634dd6c8de116101b95780634dd6c8de146104e65780635419258d146105115780635b2e221b146105445780635f102f9c1461056f5780636a27246214610582578063715018a61461059557600080fd5b806337afaf49146103e75780633a1c83ac1461041d5780633c6fc8171461046957806344f91c1e1461047c578063453e93e5146104c05780634c33aa2e146104d357600080fd5b80630f41ba4b116102525780630f41ba4b1461033557806314738d3b1461034857806316f3a95b1461035b5780631d1dc6971461036e57806320e57371146103ad578063265aa621146103d457600080fd5b80630a00e5461461028f5780630af2c6ca146102f25780630affa6f1146103045780630e030d6a1461030d5780630ed23e7814610322575b600080fd5b6102c861029d366004613452565b6009602052600090815260409020805460018201546002909201546001600160a01b03909116919083565b604080516001600160a01b0390941684526020840192909252908201526060015b60405180910390f35b600b545b6040519081526020016102e9565b6102f660025481565b61032061031b3660046134b5565b610816565b005b6103206103303660046135be565b610a39565b6102f66103433660046134b5565b610d3e565b6102f66103563660046136a8565b6111e7565b6103206103693660046136a8565b611228565b6103957f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102e9565b6103957f000000000000000000000000000000000000000000000000000000000000000081565b6103956103e236600461370f565b611322565b6102f66103f53660046136a8565b6001600160a01b03919091166000908152600d60209081526040808320938352929052205490565b61045b61042b3660046136a8565b600c602090815260009283526040808420909152908252902080546001909101546001600160a01b039091169082565b6040516102e9929190613765565b6103206104773660046134b5565b61134c565b6102c861048a3660046136a8565b600e6020908152600092835260408084209091529082529020805460018201546002909201546001600160a01b03909116919083565b61045b6104ce3660046134b5565b61151c565b6103206104e1366004613559565b611570565b6102f66104f43660046136a8565b600660209081526000928352604080842090915290825290205481565b61053461051f366004613452565b600a6020526000908152604090205460ff1681565b60405190151581526020016102e9565b6102f66105523660046136a8565b600360209081526000928352604080842090915290825290205481565b6102f661057d366004613452565b611602565b6103206105903660046134b5565b611868565b610320611a42565b6102f66105ab3660046134b5565b611a78565b6103206105be366004613452565b611d2d565b600754610395906001600160a01b031681565b6103206105e43660046134b5565b611d79565b6103206105f73660046136a8565b611ef7565b6102f661060a3660046136a8565b6001600160a01b03919091166000908152600f60209081526040808320938352929052205490565b6000546001600160a01b0316610395565b6105346106513660046136a8565b6001600160a01b039182166000908152600e60209081526040808320938352929052205416151590565b6103206106893660046136a8565b612026565b6102f661069c3660046136a8565b600560209081526000928352604080842090915290825290205481565b6102f66106c73660046136a8565b6001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6103206106fd3660046136a8565b6121ec565b6103206107103660046136d4565b6124b5565b6103206107233660046134ea565b612699565b6103206107363660046136a8565b61272d565b6102f660085481565b6103957f000000000000000000000000000000000000000000000000000000000000000081565b61045b6107793660046134b5565b612915565b61032061078c366004613452565b61293d565b6102f661079f3660046136a8565b6129d8565b6105346107b23660046136a8565b6001600160a01b039182166000908152600c60209081526040808320938352929052205416151590565b6103206107ea36600461370f565b612bdb565b6103957f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b0383166000908152600d6020908152604080832085845290915281208054909190829084908110610850576108506138de565b60009182526020918290206040805180820190915260029092020180546001600160a01b0316808352600190910154928201929092529150331461089357600080fd5b602081015182548390859081106108ac576108ac6138de565b6000918252602082206002919091020180546001600160a01b031916815560010155604051632e1a7d4d60e01b8152600481018290526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e1a7d4d90602401600060405180830381600087803b15801561093057600080fd5b505af1158015610944573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016925063a9059cbb91506109969033908590600401613765565b602060405180830381600087803b1580156109b057600080fd5b505af11580156109c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e89190613493565b5081516040516001600160a01b03918216815285918791908916907f1a99e8401ad0f5c42a44ff151af1dd043e4abef0362617d113662727868e64ce906020015b60405180910390a4505050505050565b8051604114610a8f5760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e677468000000000000000060448201526064015b60405180910390fd5b6040516bffffffffffffffffffffffff1933606090811b8216602084015287811b8216603484015286901b166048820152605c8101849052607c8101839052600090609c0160408051601f198184030181529082905280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000091830191909152603c82018190529150605c0160408051601f19818403018152918152815160209283012091840151908401516060850151929350909160001a601b811015610b6557610b62601b8261380c565b90505b8060ff16601b1480610b7a57508060ff16601c145b610bc65760405162461bcd60e51b815260206004820152601960248201527f696e76616c6964207369676e61747572652076657273696f6e000000000000006044820152606401610a86565b60075460408051600081526020810180835287905260ff84169181019190915260608101859052608081018490526001600160a01b039091169060019060a0016020604051602081039080840390855afa158015610c28573d6000803e3d6000fd5b505050602060405103516001600160a01b031614610c4557600080fd5b6103e88710158015610c5957506127108711155b8015610c6757506103e88611155b610c7057600080fd5b6001600160a01b038981166000908152600960205260409020541615610cdc57600b80546001810182556000919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90180546001600160a01b0319166001600160a01b038b161790555b5050604080516060810182526001600160a01b0397881681526020808201978852818301968752988816600090815260099099529720965187546001600160a01b03191696169590951786555050905160018401555160029092019190915550565b6001600160a01b038084166000908152600e60209081526040808320868452825280832081516060810183528154909516808652600182015493860193909352600201549084015290919015801590610d9a5750806040015143105b610da357600080fd5b6001600160a01b0385166000908152600f6020908152604080832087845290915290208054925082610de5578382602001511115610de057600080fd5b610f6a565b600081610df36001866138b1565b81548110610e0357610e036138de565b60009182526020918290206040805180820190915260029092020180546001600160a01b031682526001015491810182905291508511610e4257600080fd5b6020810151604051632e1a7d4d60e01b815260048101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d90602401600060405180830381600087803b158015610eaa57600080fd5b505af1158015610ebe573d6000803e3d6000fd5b50508251602084015160405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016945063a9059cbb9350610f15929190600401613765565b602060405180830381600087803b158015610f2f57600080fd5b505af1158015610f43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f679190613493565b50505b6040805180820182523380825260208083018881528554600180820188556000888152939093209451600290910290940180546001600160a01b0319166001600160a01b03958616178155905191015591516323b872dd60e01b81527f0000000000000000000000000000000000000000000000000000000000000000909116916323b872dd91611002919030908990600401613741565b602060405180830381600087803b15801561101c57600080fd5b505af1158015611030573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110549190613493565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906110c3907f0000000000000000000000000000000000000000000000000000000000000000908890600401613765565b602060405180830381600087803b1580156110dd57600080fd5b505af11580156110f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111159190613493565b5060405163b6b55f2560e01b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6b55f2590602401600060405180830381600087803b15801561117857600080fd5b505af115801561118c573d6000803e3d6000fd5b50505050336001600160a01b031685876001600160a01b03167f7f863cab1b412077be133ef69af7df0e6aca4c67ff7d89db843d601f124a025d876040516111d691815260200190565b60405180910390a450509392505050565b6001600160a01b038216600090815260066020908152604080832084845290915281205461121584846129d8565b61121f91906138b1565b90505b92915050565b6001600160a01b038083166000908152600c602090815260408083208584529091529020541633811461125a57600080fd5b6040516323b872dd60e01b81526001600160a01b038416906323b872dd9061128a90309085908790600401613741565b600060405180830381600087803b1580156112a457600080fd5b505af11580156112b8573d6000803e3d6000fd5b5050506001600160a01b0384166000818152600c6020908152604080832087845290915280822080546001600160a01b0319168155600101829055513393508592917fc14de1e0640c6a4e914f570610341c22dcf6a3a940582f767b41c8802a94b4b491a4505050565b600b818154811061133257600080fd5b6000918252602090912001546001600160a01b0316905081565b6001600160a01b0383166000908152600d6020908152604080832085845290915281208054909190829084908110611386576113866138de565b6000918252602091829020604080518082018252600290930290910180546001600160a01b039081168085526001909201549484019490945290516323b872dd60e01b8152919350918716916323b872dd916113e89133918990600401613741565b600060405180830381600087803b15801561140257600080fd5b505af1158015611416573d6000803e3d6000fd5b50505050600081602001519050828481548110611435576114356138de565b6000918252602082206002919091020180546001600160a01b031916815560010155604051632e1a7d4d60e01b8152600481018290526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e1a7d4d90602401600060405180830381600087803b1580156114b957600080fd5b505af11580156114cd573d6000803e3d6000fd5b505050506114dd86863384612c0a565b604051338152849086906001600160a01b038916907f464e2668c1227b2db98a77a3752380089500f8cd3e641a33e0aa2437c978a1a990602001610a29565b600f602052826000526040600020602052816000526040600020818154811061154457600080fd5b6000918252602090912060029091020180546001909101546001600160a01b0390911693509150839050565b604051637ac2ff7b60e01b8152306004820152602481018790526044810185905260ff841660648201526084810183905260a481018290526001600160a01b03881690637ac2ff7b9060c401600060405180830381600087803b1580156115d657600080fd5b505af11580156115ea573d6000803e3d6000fd5b505050506115f9878787611868565b50505050505050565b600080826001600160a01b0316636817c76c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561163e57600080fd5b505afa158015611652573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116769190613728565b6040516335313c2160e11b81523360048201529091506001600160a01b03841690636a62784290602401602060405180830381600087803b1580156116ba57600080fd5b505af11580156116ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f29190613728565b6040516323b872dd60e01b81529092506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061174590339030908690600401613741565b602060405180830381600087803b15801561175f57600080fd5b505af1158015611773573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117979190613493565b506118148383856001600160a01b031663d5f394886040518163ffffffff1660e01b815260040160206040518083038186803b1580156117d657600080fd5b505afa1580156117ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061180e9190613476565b84612c0a565b336001600160a01b031682846001600160a01b03167f6b7718bbd8461683e1304f0e70287ff54fd29521002870719e04d687ae4318be8460405161185a91815260200190565b60405180910390a450919050565b6001600160a01b0380841660009081526009602052604090205484911661188e57600080fd5b6040516331a9108f60e11b81526004810184905233906001600160a01b03861690636352211e9060240160206040518083038186803b1580156118d057600080fd5b505afa1580156118e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119089190613476565b6001600160a01b031614801561194657506001600160a01b038481166000908152600e60209081526040808320878452909152902054161515600114155b61194f57600080fd5b6040516323b872dd60e01b81526001600160a01b038516906323b872dd9061197f90339030908890600401613741565b600060405180830381600087803b15801561199957600080fd5b505af11580156119ad573d6000803e3d6000fd5b50506040805180820182523380825260208083018881526001600160a01b038b81166000818152600c85528781208d82528552879020955186546001600160a01b03191692169190911785559051600190940193909355925187815290945087935090917f463904c4b0359ad674399537c3d4e4e44acc0b0dd259453d17329fd9b4be52c0910160405180910390a450505050565b6000546001600160a01b03163314611a6c5760405162461bcd60e51b8152600401610a869061377e565b611a766000612fa1565b565b6001600160a01b038084166000908152600960205260408120549091859116611aa057600080fd5b60008311611aad57600080fd5b6001600160a01b038581166000908152600d602090815260408083208884528252808320805482518084018452338082528186018b8152600180850186558589529690972091516002840290920180546001600160a01b031916928916929092178255955194019390935590516323b872dd60e01b8152919550927f000000000000000000000000000000000000000000000000000000000000000016916323b872dd91611b62919030908990600401613741565b602060405180830381600087803b158015611b7c57600080fd5b505af1158015611b90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bb49190613493565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390611c23907f0000000000000000000000000000000000000000000000000000000000000000908890600401613765565b602060405180830381600087803b158015611c3d57600080fd5b505af1158015611c51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c759190613493565b5060405163b6b55f2560e01b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6b55f2590602401600060405180830381600087803b158015611cd857600080fd5b505af1158015611cec573d6000803e3d6000fd5b505050508285876001600160a01b03167f3498cca8289a0669e68756645378ec9f14f109147d58fc24e0bbbca63969ac2a33886040516111d6929190613765565b6000546001600160a01b03163314611d575760405162461bcd60e51b8152600401610a869061377e565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b0316836001600160a01b031663d5f394886040518163ffffffff1660e01b815260040160206040518083038186803b158015611dbc57600080fd5b505afa158015611dd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611df49190613476565b6001600160a01b0316148015611e0c57506103e88210155b8015611e1a57506127108211155b8015611e2857506103e88111155b611e3157600080fd5b6001600160a01b038381166000908152600960205260409020541615611e9d57600b80546001810182556000919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90180546001600160a01b0319166001600160a01b0385161790555b6040805160608101825233815260208082019485528183019384526001600160a01b039586166000908152600990915291909120905181546001600160a01b03191694169390931783559051600183015551600290910155565b6001600160a01b0382166000908152600f6020908152604080832084845290915290205415611f2557600080fd5b6001600160a01b038083166000908152600e6020908152604080832085845290915290205416338114611f5757600080fd5b6040516323b872dd60e01b81526001600160a01b038416906323b872dd90611f8790309085908790600401613741565b600060405180830381600087803b158015611fa157600080fd5b505af1158015611fb5573d6000803e3d6000fd5b5050506001600160a01b0384166000818152600e6020908152604080832087845290915280822080546001600160a01b031916815560018101839055600201829055513393508592917f26d4510b556e779d6507640413e013206e44c8f5d018c7c74ed8926f3f024a9c91a4505050565b61202e612ff1565b600061203a8383613194565b905080156121e7576001600160a01b0383166000908152600660209081526040808320858452909152812080548392906120759084906137f4565b9091555050604051818152339083906001600160a01b038616907ff371029fbeb9d5ccc35b0e98232fa84414b7f053cebed0eb401b6640fbf9716c9060200160405180910390a46040516331a9108f60e11b8152600481018390526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169163a9059cbb91861690636352211e9060240160206040518083038186803b15801561212657600080fd5b505afa15801561213a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061215e9190613476565b836040518363ffffffff1660e01b815260040161217c929190613765565b602060405180830381600087803b15801561219657600080fd5b505af11580156121aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121ce9190613493565b5080600160008282546121e191906138b1565b90915550505b505050565b6001600160a01b038083166000818152600e6020908152604080832086845282528083208151606081018352815490961686526001810154868401526002015485820152928252600f8152828220858352815282822080548451818402810184019095528085529293929091849084015b828210156122a5576000848152602090819020604080518082019091526002850290910180546001600160a01b0316825260019081015482840152908352909201910161225d565b505050509050600081600183516122bc91906138b1565b815181106122cc576122cc6138de565b60200260200101519050336001600160a01b031681600001516001600160a01b03161480156122ff575082604001514310155b61230857600080fd5b6001600160a01b0385166000818152600e60209081526040808320888452825280832080546001600160a01b031916815560018101849055600201839055928252600f81528282208783529052908120612361916133f6565b6040516323b872dd60e01b81526001600160a01b038616906323b872dd9061239190309033908990600401613741565b600060405180830381600087803b1580156123ab57600080fd5b505af11580156123bf573d6000803e3d6000fd5b5050506020820151604051632e1a7d4d60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169250632e1a7d4d916124169160040190815260200190565b600060405180830381600087803b15801561243057600080fd5b505af1158015612444573d6000803e3d6000fd5b5050505061245c858585600001518460200151612c0a565b336001600160a01b031684866001600160a01b03167fad03f837a9207e368d73ec028e1f54428184da8cfea258cc116da2225f3ac5eb84602001516040516124a691815260200190565b60405180910390a45050505050565b6001600160a01b038085166000908152600960205260409020548591166124db57600080fd5b6040516331a9108f60e11b81526004810185905233906001600160a01b03871690636352211e9060240160206040518083038186803b15801561251d57600080fd5b505afa158015612531573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125559190613476565b6001600160a01b031614801561259357506001600160a01b038581166000908152600c60209081526040808320888452909152902054161515600114155b61259c57600080fd5b6040516323b872dd60e01b81526001600160a01b038616906323b872dd906125cc90339030908990600401613741565b600060405180830381600087803b1580156125e657600080fd5b505af11580156125fa573d6000803e3d6000fd5b5050604080516060810182523380825260208083018981528385018981526001600160a01b038d81166000818152600e86528881208f82528652889020965187546001600160a01b03191692169190911786559151600186015551600290940193909355835189815290810188905290945088935090917f9b80d6af20a468c7a9f15b75aac831f1f047746133d24ee55cd289442114a99091016124a6565b604051637ac2ff7b60e01b8152306004820152602481018890526044810185905260ff841660648201526084810183905260a481018290526001600160a01b03891690637ac2ff7b9060c401600060405180830381600087803b1580156126ff57600080fd5b505af1158015612713573d6000803e3d6000fd5b50505050612723888888886124b5565b5050505050505050565b6001600160a01b038083166000908152600c6020908152604080832085845282529182902082518084019093528054909316808352600190930154908201529061277657600080fd5b6001600160a01b0383166000818152600c6020908152604080832086845290915280822080546001600160a01b031916815560010191909155516323b872dd60e01b81526323b872dd906127d290309033908790600401613741565b600060405180830381600087803b1580156127ec57600080fd5b505af1158015612800573d6000803e3d6000fd5b50505060208201516040516323b872dd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692506323b872dd916128579133913091600401613741565b602060405180830381600087803b15801561287157600080fd5b505af1158015612885573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128a99190613493565b506128be838383600001518460200151612c0a565b336001600160a01b031682846001600160a01b03167fa76261e4127b2ebc809716d704216602fdaee4ae5b72745ed9aec0d7bd73b75d846020015160405161290891815260200190565b60405180910390a4505050565b600d602052826000526040600020602052816000526040600020818154811061154457600080fd5b6000546001600160a01b031633146129675760405162461bcd60e51b8152600401610a869061377e565b6001600160a01b0381166129cc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a86565b6129d581612fa1565b50565b6004546002546000919015612bd1576040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015612a4957600080fd5b505afa158015612a5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a819190613728565b604051631175a1dd60e01b8152600060048201523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631175a1dd9060440160206040518083038186803b158015612ae757600080fd5b505afa158015612afb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b1f9190613728565b612b2991906137f4565b9050600060015482612b3b91906138b1565b90508015612b6b57600254612b54600160801b83613853565b612b5e9190613831565b612b6890846137f4565b92505b6001600160a01b038616600081815260056020908152604080832089845282528083205493835260038252808320898452909152902054600160801b9190612bb39086613853565b612bbd91906137b3565b612bc79190613831565b9350505050611222565b5060009392505050565b6000546001600160a01b03163314612c055760405162461bcd60e51b8152600401610a869061377e565b600855565b600061271060085483612c1d9190613853565b612c279190613831565b60405163095ea7b360e01b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390612c98907f0000000000000000000000000000000000000000000000000000000000000000908590600401613765565b602060405180830381600087803b158015612cb257600080fd5b505af1158015612cc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cea9190613493565b5060405163b6b55f2560e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6b55f2590602401600060405180830381600087803b158015612d4d57600080fd5b505af1158015612d61573d6000803e3d6000fd5b505050506001600160a01b03858116600090815260096020908152604080832081516060810183528154909516855260018101549285019290925260029091015490830181905261271090612db69086613853565b612dc09190613831565b825160405163a9059cbb60e01b81529192506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163a9059cbb91612e11918590600401613765565b602060405180830381600087803b158015612e2b57600080fd5b505af1158015612e3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e639190613493565b506001600160a01b0387166000908152600a602052604081205460ff161515600114612ed757612710836020015186612e9c9190613853565b612ea69190613831565b9050612eb38888836131c2565b6001600160a01b0388166000908152600a60205260409020805460ff191660011790555b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663a9059cbb878385612f13898b6138b1565b612f1d91906138b1565b612f2791906138b1565b6040518363ffffffff1660e01b8152600401612f44929190613765565b602060405180830381600087803b158015612f5e57600080fd5b505af1158015612f72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f969190613493565b505050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60025415611a7657604051631058d28160e01b8152600060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631058d28190602401600060405180830381600087803b15801561305b57600080fd5b505af115801561306f573d6000803e3d6000fd5b50506040516370a0823160e01b8152306004820152600092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691506370a082319060240160206040518083038186803b1580156130d557600080fd5b505afa1580156130e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061310d9190613728565b905060006001548261311f91906138b1565b9050801561318e57600254613138600160801b83613853565b6131429190613831565b6004600082825461315391906137f4565b909155505060405181815233907f7e3443847968b8ae43a305870aa25aa7fc542ea63833182a4b715b3f82cd01619060200160405180910390a25b50600155565b6001600160a01b03821660009081526006602090815260408083208484529091528120546112158484613395565b6131ca612ff1565b60405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390613238907f0000000000000000000000000000000000000000000000000000000000000000908590600401613765565b602060405180830381600087803b15801561325257600080fd5b505af1158015613266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061328a9190613493565b506040516341441d3b60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906341441d3b90602401600060405180830381600087803b1580156132ed57600080fd5b505af1158015613301573d6000803e3d6000fd5b50505050806002600082825461331791906137f4565b90915550506001600160a01b03831660009081526003602090815260408083208584529091528120805483929061334f9084906137f4565b9091555050600454613362908290613853565b6001600160a01b0384166000908152600560209081526040808320868452909152812080549091906121e1908490613872565b6001600160a01b0382166000818152600560209081526040808320858452825280832054938352600382528083208584529091528120546004549192600160801b9290916133e291613853565b6133ec91906137b3565b61121f9190613831565b50805460008255600202906000526020600020908101906129d591905b808211156134385780546001600160a01b031916815560006001820155600201613413565b5090565b803560ff8116811461344d57600080fd5b919050565b60006020828403121561346457600080fd5b813561346f8161390a565b9392505050565b60006020828403121561348857600080fd5b815161346f8161390a565b6000602082840312156134a557600080fd5b8151801515811461346f57600080fd5b6000806000606084860312156134ca57600080fd5b83356134d58161390a565b95602085013595506040909401359392505050565b600080600080600080600080610100898b03121561350757600080fd5b88356135128161390a565b97506020890135965060408901359550606089013594506080890135935061353c60a08a0161343c565b925060c0890135915060e089013590509295985092959890939650565b600080600080600080600060e0888a03121561357457600080fd5b873561357f8161390a565b96506020880135955060408801359450606088013593506135a26080890161343c565b925060a0880135915060c0880135905092959891949750929550565b600080600080600060a086880312156135d657600080fd5b85356135e18161390a565b945060208601356135f18161390a565b93506040860135925060608601359150608086013567ffffffffffffffff8082111561361c57600080fd5b818801915088601f83011261363057600080fd5b813581811115613642576136426138f4565b604051601f8201601f19908116603f0116810190838211818310171561366a5761366a6138f4565b816040528281528b602084870101111561368357600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b600080604083850312156136bb57600080fd5b82356136c68161390a565b946020939093013593505050565b600080600080608085870312156136ea57600080fd5b84356136f58161390a565b966020860135965060408601359560600135945092505050565b60006020828403121561372157600080fd5b5035919050565b60006020828403121561373a57600080fd5b5051919050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600080821280156001600160ff1b03849003851316156137d5576137d56138c8565b600160ff1b83900384128116156137ee576137ee6138c8565b50500190565b60008219821115613807576138076138c8565b500190565b600060ff821660ff84168060ff03821115613829576138296138c8565b019392505050565b60008261384e57634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561386d5761386d6138c8565b500290565b60008083128015600160ff1b850184121615613890576138906138c8565b6001600160ff1b03840183138116156138ab576138ab6138c8565b50500390565b6000828210156138c3576138c36138c8565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146129d557600080fdfea2646970667358221220d126a32f1bd75ef5601a3b8c6905e119a075ec0f906b650e60135647dc9189d864736f6c63430008050033";
//# sourceMappingURL=CakeNFTStore__factory.js.map