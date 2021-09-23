"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const lottie_web_1 = __importDefault(require("lottie-web"));
class NFTLoading extends skynode_1.DomNode {
    constructor() {
        super(".nft-loading");
        const animationContainer = (0, skynode_1.el)(".animation").appendTo(this);
        lottie_web_1.default.loadAnimation({
            container: animationContainer.domElement,
            loop: true,
            autoplay: true,
            animationData: require("./NFTLoading.json"),
        });
        animationContainer.style({
            width: 220,
            height: 220,
        });
        this.append((0, skynode_1.el)("span", "Loading from contract..."));
        this.appendTo(skynode_1.BodyNode);
    }
}
exports.default = NFTLoading;
//# sourceMappingURL=NFTLoading.js.map