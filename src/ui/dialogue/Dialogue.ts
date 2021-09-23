import { DomNode, el, Popup } from "@hanul/skynode";

export default class Dialogue extends Popup {

    public content: DomNode;

    constructor(
        tag: string,
        title: string,
        confirmTitle: string,
        confirm: () => void | boolean,
    ) {
        super(".popup-background.dialogue-background");
        this.append(
            this.content = el(`.dialogue${tag}`,
                el("h1", title),
                el("a.cancel-button", "Cancel", {
                    click: () => this.delete(),
                }),
                el("a.confirm-button", confirmTitle, {
                    click: () => {
                        if (confirm() !== false) {
                            this.delete();
                        }
                    },
                }),
            ),
        );
    }
}
