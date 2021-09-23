import { DomNode, el } from "@hanul/skynode";
import ViewUtil from "../../view/ViewUtil";

interface Menu {
    uri: string;
    name: string;
}

class MenuBuilder {

    public build(menus: Menu[], address?: string) {
        const els: DomNode[] = [];
        for (const menuItem of menus) {
            const uri = address === undefined ? menuItem.uri : menuItem.uri.replace(/{address}/g, address);
            els.push(el(`a${location.pathname === `/${uri}` ? ".on" : ""}`,
                menuItem.name,
                { click: () => ViewUtil.go(`/${uri}`) },
            ));
        }
        return els;
    }
}

export default new MenuBuilder();
