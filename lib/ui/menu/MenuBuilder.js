"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("../../view/ViewUtil"));
class MenuBuilder {
    build(menus, address) {
        const els = [];
        for (const menuItem of menus) {
            const uri = address === undefined ? menuItem.uri : menuItem.uri.replace(/{address}/g, address);
            els.push((0, skynode_1.el)(`a${location.pathname === `/${uri}` ? ".on" : ""}`, menuItem.name, { click: () => ViewUtil_1.default.go(`/${uri}`) }));
        }
        return els;
    }
}
exports.default = new MenuBuilder();
//# sourceMappingURL=MenuBuilder.js.map