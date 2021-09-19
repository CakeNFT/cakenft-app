import { View, ViewParams } from "skyrouter";
export default class Collection implements View {
    private container;
    constructor(params: ViewParams);
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Collection.d.ts.map