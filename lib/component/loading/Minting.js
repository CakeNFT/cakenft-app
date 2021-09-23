"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const lottie_web_1 = __importDefault(require("lottie-web"));
class Minting extends skynode_1.DomNode {
    constructor() {
        super(".minting");
        const animationContainer = (0, skynode_1.el)(".animation").appendTo(this);
        const animation = lottie_web_1.default.loadAnimation({
            container: animationContainer.domElement,
            loop: true,
            autoplay: true,
            animationData: require("./minting.json"),
        });
        animation.setSpeed(3);
        animationContainer.style({
            width: 180,
            height: 180,
        });
        this.append((0, skynode_1.el)("span", "Minting..."));
        this.appendTo(skynode_1.BodyNode);
    }
}
exports.default = Minting;
//# sourceMappingURL=Minting.js.map