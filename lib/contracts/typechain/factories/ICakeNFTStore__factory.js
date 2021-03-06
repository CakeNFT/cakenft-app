"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICakeNFTStore__factory = void 0;
const ethers_1 = require("ethers");
class ICakeNFTStore__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICakeNFTStore__factory = ICakeNFTStore__factory;
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
                name: "nft",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "nftId",
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
                name: "index",
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
        name: "checkSelling",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
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
                internalType: "uint256",
                name: "index",
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
                name: "index",
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
    {
        inputs: [
            {
                internalType: "contract IERC721",
                name: "nft",
                type: "address",
            },
        ],
        name: "totalTradingVolumes",
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
];
//# sourceMappingURL=ICakeNFTStore__factory.js.map