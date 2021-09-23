import { BodyNode, DomNode, el } from "@hanul/skynode";
import Lottie from "lottie-web";

export default class NFTLoading extends DomNode {

    constructor() {
        super(".nft-loading");
        const animationContainer = el(".animation").appendTo(this);
        Lottie.loadAnimation({
            container: animationContainer.domElement,
            loop: true,
            autoplay: true,
            animationData: require("./NFTLoading.json"),
        });
        animationContainer.style({
            width: 220,
            height: 220,
        });
        this.append(
            el("span", "Loading from contract..."),
        );
        this.appendTo(BodyNode);
    }
}
