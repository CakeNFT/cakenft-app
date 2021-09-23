import { BodyNode, DomNode, el } from "@hanul/skynode";
import Lottie from "lottie-web";

export default class Minting extends DomNode {

    constructor() {
        super(".minting");
        const animationContainer = el(".animation").appendTo(this);
        const animation = Lottie.loadAnimation({
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
        this.append(
            el("span", "Minting..."),
        );
        this.appendTo(BodyNode);
    }
}
