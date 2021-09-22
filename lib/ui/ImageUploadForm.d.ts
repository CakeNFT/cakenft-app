import { DomNode } from "@hanul/skynode";
export default class ImageUploadForm extends DomNode {
    url?: string | undefined;
    private guide;
    private error;
    private percent;
    private percentFluid;
    private percentNumber;
    private uploading;
    constructor(url?: string | undefined);
    private setImage;
    private clear;
    private setPercent;
    private clearPercent;
    private fileHandler;
    private highlight;
    private unhighlight;
    private dropHandler;
}
//# sourceMappingURL=ImageUploadForm.d.ts.map