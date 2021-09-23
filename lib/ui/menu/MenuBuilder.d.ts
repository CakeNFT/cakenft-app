import { DomNode } from "@hanul/skynode";
interface Menu {
    uri: string;
    name: string;
}
declare class MenuBuilder {
    build(menus: Menu[], address?: string): DomNode<HTMLElement>[];
}
declare const _default: MenuBuilder;
export default _default;
//# sourceMappingURL=MenuBuilder.d.ts.map