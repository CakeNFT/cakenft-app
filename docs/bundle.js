/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@hanul/debouncer/Debouncer.js":
/*!****************************************************!*\
  !*** ./node_modules/@hanul/debouncer/Debouncer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Debouncer {\r\n    constructor(debounceTime, work) {\r\n        this.debounceTime = debounceTime;\r\n        this.work = work;\r\n    }\r\n    run() {\r\n        if (this.debounceTimeout !== undefined) {\r\n            clearTimeout(this.debounceTimeout);\r\n        }\r\n        this.debounceTimeout = setTimeout(() => {\r\n            this.work();\r\n        }, this.debounceTime);\r\n    }\r\n}\r\nexports[\"default\"] = Debouncer;\r\n//# sourceMappingURL=Debouncer.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/debouncer/Debouncer.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/BodyNode.js":
/*!*****************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/BodyNode.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"./node_modules/@hanul/skynode/lib/DomNode.js\"));\r\nclass BodyNode extends DomNode_1.default {\r\n    constructor() {\r\n        super(document.body);\r\n    }\r\n}\r\nexports[\"default\"] = new BodyNode();\r\n//# sourceMappingURL=BodyNode.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/BodyNode.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/ClosableFloatingDomNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/ClosableFloatingDomNode.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst FloatingDomNode_1 = __importDefault(__webpack_require__(/*! ./FloatingDomNode */ \"./node_modules/@hanul/skynode/lib/FloatingDomNode.js\"));\r\nclass ClosableFloatingDomNode extends FloatingDomNode_1.default {\r\n    constructor(position, domElement) {\r\n        super(position, domElement);\r\n        this.touchCloseZone = () => {\r\n            this.delete();\r\n        };\r\n        this.onDom(\"mousedown\", (event) => {\r\n            this.deleteChildren(this);\r\n            event.stopPropagation();\r\n        });\r\n    }\r\n    deleteChildren(domNode) {\r\n        for (const child of domNode.children) {\r\n            if (child instanceof ClosableFloatingDomNode) {\r\n                child.delete();\r\n            }\r\n            else {\r\n                this.deleteChildren(child);\r\n            }\r\n        }\r\n    }\r\n    appendTo(node, index) {\r\n        const that = super.appendTo(node, index);\r\n        if ((node instanceof ClosableFloatingDomNode) !== true) {\r\n            const ancestor = this.findAncestorOf(this);\r\n            if (ancestor !== undefined) {\r\n                this.closeZone = ancestor;\r\n                this.closeZone.onDom(\"mousedown\", this.touchCloseZone);\r\n            }\r\n        }\r\n        return that;\r\n    }\r\n    exceptFromParent() {\r\n        if (this.closeZone !== undefined && this.closeZone.deleted !== true) {\r\n            this.closeZone.offDom(\"mousedown\", this.touchCloseZone);\r\n        }\r\n        super.exceptFromParent();\r\n    }\r\n}\r\nexports[\"default\"] = ClosableFloatingDomNode;\r\n//# sourceMappingURL=ClosableFloatingDomNode.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/ClosableFloatingDomNode.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/DomNode.js":
/*!****************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/DomNode.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"./node_modules/@hanul/skynode/node_modules/skyutil/SkyUtil.js\"));\r\nconst SkyNode_1 = __importDefault(__webpack_require__(/*! ./SkyNode */ \"./node_modules/@hanul/skynode/lib/SkyNode.js\"));\r\nclass DomNode extends SkyNode_1.default {\r\n    constructor(domElement) {\r\n        super();\r\n        this.children = [];\r\n        this.domEventMap = {};\r\n        if (domElement instanceof HTMLElement) {\r\n            this.domElement = domElement;\r\n        }\r\n        else {\r\n            this.domElement = DomNode.createElement(domElement);\r\n        }\r\n    }\r\n    static createElement(tag) {\r\n        let id;\r\n        const idIndex = tag.indexOf(\"#\");\r\n        if (idIndex !== -1) {\r\n            id = tag.substring(idIndex + 1);\r\n            tag = tag.substring(0, idIndex);\r\n            const cindex = id.indexOf(\".\");\r\n            if (cindex !== -1) {\r\n                id = id.substring(0, cindex);\r\n                tag += id.substring(cindex);\r\n            }\r\n        }\r\n        let className;\r\n        const classNameIndex = tag.indexOf(\".\");\r\n        if (classNameIndex !== -1) {\r\n            className = tag.substring(classNameIndex + 1).replace(/\\./g, \" \");\r\n            tag = tag.substring(0, classNameIndex);\r\n        }\r\n        if (tag === \"\") {\r\n            tag = \"div\";\r\n        }\r\n        const element = document.createElement(tag);\r\n        if (id !== undefined) {\r\n            element.id = id;\r\n        }\r\n        if (className !== undefined) {\r\n            element.className = className;\r\n        }\r\n        return element;\r\n    }\r\n    style(style) {\r\n        for (const [key, value] of Object.entries(style)) {\r\n            if (value === undefined) {\r\n                this.domElement.style.removeProperty(key);\r\n            }\r\n            else if (typeof value === \"number\" &&\r\n                key !== \"zIndex\" &&\r\n                key !== \"opacity\" &&\r\n                key !== \"flexGrow\" &&\r\n                key !== \"flexShrink\" &&\r\n                key !== \"gridGap\" &&\r\n                key !== \"order\") {\r\n                this.domElement.style[key] = `${value}px`;\r\n            }\r\n            else {\r\n                this.domElement.style[key] = value;\r\n            }\r\n        }\r\n    }\r\n    get rect() {\r\n        return this.domElement.getBoundingClientRect();\r\n    }\r\n    get innerScrollPosition() {\r\n        let left = 0;\r\n        let top = 0;\r\n        if (this.domElement !== document.body) {\r\n            let parent = this.domElement.parentNode;\r\n            while (parent !== document.body && parent !== null) {\r\n                if (parent instanceof HTMLElement) {\r\n                    left += parent.scrollLeft;\r\n                    top += parent.scrollTop;\r\n                }\r\n                parent = parent.parentNode;\r\n            }\r\n        }\r\n        return { left, top };\r\n    }\r\n    onDom(eventName, eventHandler) {\r\n        if (this.domEventMap[eventName] === undefined) {\r\n            this.domEventMap[eventName] = [];\r\n        }\r\n        const domEventHandler = (event) => eventHandler(event, this);\r\n        this.domEventMap[eventName].push({ eventHandler, domEventHandler });\r\n        this.domElement.addEventListener(eventName, domEventHandler);\r\n    }\r\n    offDom(eventName, eventHandler) {\r\n        const domEvents = this.domEventMap[eventName];\r\n        if (domEvents !== undefined) {\r\n            const domEvent = domEvents.find((de) => de.eventHandler === eventHandler);\r\n            if (domEvent !== undefined) {\r\n                this.domElement.removeEventListener(eventName, domEvent.domEventHandler);\r\n                skyutil_1.default.pull(domEvents, domEvent);\r\n                if (domEvents.length === 0) {\r\n                    delete this.domEventMap[eventName];\r\n                }\r\n            }\r\n        }\r\n    }\r\n    fireDomEvent(eventName, ...params) {\r\n        this.domElement.dispatchEvent(new Event(eventName));\r\n    }\r\n    appendText(text) {\r\n        const fragment = new DocumentFragment();\r\n        const strs = text.split(\"\\n\");\r\n        for (const [index, str] of strs.entries()) {\r\n            if (index > 0) {\r\n                fragment.append(document.createElement(\"br\"));\r\n            }\r\n            fragment.append(str);\r\n        }\r\n        this.domElement.append(fragment);\r\n    }\r\n    checkVisible() {\r\n        if (this.parent !== undefined) {\r\n            if (this.parent.domElement === document.body) {\r\n                return true;\r\n            }\r\n            else {\r\n                return this.parent.checkVisible();\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    fireVisible() {\r\n        this.fireEvent(\"visible\");\r\n        for (const child of this.children) {\r\n            child.fireVisible();\r\n        }\r\n    }\r\n    appendTo(node, index) {\r\n        if (index !== undefined && index < node.children.length) {\r\n            node.domElement.insertBefore(this.domElement, node.children[index].domElement);\r\n        }\r\n        else {\r\n            node.domElement.append(this.domElement);\r\n        }\r\n        const that = super.appendTo(node, index);\r\n        if (this.checkVisible() === true) {\r\n            this.fireVisible();\r\n        }\r\n        return that;\r\n    }\r\n    empty() {\r\n        super.empty();\r\n        while (this.domElement.firstChild) {\r\n            this.domElement.removeChild(this.domElement.firstChild);\r\n        }\r\n        return this;\r\n    }\r\n    addClass(className) { this.domElement.classList.add(className); }\r\n    deleteClass(className) { this.domElement.classList.remove(className); }\r\n    checkClass(className) { return this.domElement.classList.contains(className); }\r\n    delete() {\r\n        this.domElement.remove();\r\n        this.domEventMap = undefined;\r\n        super.delete();\r\n    }\r\n}\r\nexports[\"default\"] = DomNode;\r\n//# sourceMappingURL=DomNode.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/DomNode.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/FloatingDomNode.js":
/*!************************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/FloatingDomNode.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst BodyNode_1 = __importDefault(__webpack_require__(/*! ./BodyNode */ \"./node_modules/@hanul/skynode/lib/BodyNode.js\"));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"./node_modules/@hanul/skynode/lib/DomNode.js\"));\r\nconst Popup_1 = __importDefault(__webpack_require__(/*! ./Popup */ \"./node_modules/@hanul/skynode/lib/Popup.js\"));\r\nclass FloatingDomNode extends DomNode_1.default {\r\n    constructor(position, domElement) {\r\n        super(domElement);\r\n        this.position = position;\r\n        this.style({ left: position.left, top: position.top });\r\n    }\r\n    putInsideWindow() {\r\n        this.style({ left: this.position.left, top: this.position.top });\r\n        const rect = this.domElement.getBoundingClientRect();\r\n        if (rect.left + rect.width > window.innerWidth) {\r\n            this.style({ left: window.innerWidth - rect.width });\r\n        }\r\n        if (rect.top + rect.height > window.innerHeight) {\r\n            this.style({ top: window.innerHeight - rect.height });\r\n        }\r\n    }\r\n    findAncestorOf(node) {\r\n        let ancestor = node.parent;\r\n        while (ancestor !== undefined) {\r\n            if (ancestor === BodyNode_1.default || ancestor instanceof FloatingDomNode) {\r\n                return ancestor;\r\n            }\r\n            else if (ancestor instanceof Popup_1.default) {\r\n                return ancestor.content;\r\n            }\r\n            ancestor = ancestor.parent;\r\n        }\r\n    }\r\n    appendToAncestorOf(node) {\r\n        const ancestor = this.findAncestorOf(node);\r\n        if (ancestor !== undefined) {\r\n            return this.appendTo(ancestor);\r\n        }\r\n    }\r\n    appendTo(node, index) {\r\n        const that = super.appendTo(node, index);\r\n        this.putInsideWindow();\r\n        return that;\r\n    }\r\n}\r\nexports[\"default\"] = FloatingDomNode;\r\n//# sourceMappingURL=FloatingDomNode.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/FloatingDomNode.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/Popup.js":
/*!**************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/Popup.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst BodyNode_1 = __importDefault(__webpack_require__(/*! ./BodyNode */ \"./node_modules/@hanul/skynode/lib/BodyNode.js\"));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"./node_modules/@hanul/skynode/lib/DomNode.js\"));\r\nclass Popup extends DomNode_1.default {\r\n    constructor(domElement) {\r\n        super(domElement);\r\n        this.on(\"mousedown\", (event) => {\r\n            event.stopPropagation();\r\n        });\r\n        BodyNode_1.default.append(this);\r\n    }\r\n}\r\nexports[\"default\"] = Popup;\r\n//# sourceMappingURL=Popup.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/Popup.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/ResponsiveImage.js":
/*!************************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/ResponsiveImage.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"./node_modules/@hanul/skynode/lib/DomNode.js\"));\r\nclass ResponsiveImage extends DomNode_1.default {\r\n    constructor(tag, src) {\r\n        super(tag);\r\n        this.src = src;\r\n    }\r\n    set src(src) {\r\n        this.domElement.src = src;\r\n        const path = src.substring(0, src.lastIndexOf(\".png\"));\r\n        this.domElement.srcset = `${path}@2x.png 2x, ${path}@3x.png 3x`;\r\n    }\r\n}\r\nexports[\"default\"] = ResponsiveImage;\r\n//# sourceMappingURL=ResponsiveImage.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/ResponsiveImage.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/ScrollableDomNode.js":
/*!**************************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/ScrollableDomNode.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ScrollItemDomNode = void 0;\r\nconst debouncer_1 = __importDefault(__webpack_require__(/*! @hanul/debouncer */ \"./node_modules/@hanul/debouncer/Debouncer.js\"));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"./node_modules/@hanul/skynode/node_modules/skyutil/SkyUtil.js\"));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"./node_modules/@hanul/skynode/lib/DomNode.js\"));\r\nclass ScrollItemDomNode extends DomNode_1.default {\r\n}\r\nexports.ScrollItemDomNode = ScrollItemDomNode;\r\nclass ScrollableDomNode extends DomNode_1.default {\r\n    constructor(domElement, options, createChild) {\r\n        super(domElement);\r\n        this.options = options;\r\n        this.createChild = createChild;\r\n        this.nodeDataSet = [];\r\n        this.scrollAreaHeight = 0;\r\n        this.scrollStack = [];\r\n        this.refresh = () => {\r\n            var _a, _b;\r\n            const scrollTop = this.domElement.scrollTop;\r\n            if (this.scrollAreaHeight === 0 || (this.scrollStack.length === 2 &&\r\n                this.scrollStack[0].top === scrollTop &&\r\n                this.scrollStack[1].length === this.nodeDataSet.length)) {\r\n                return;\r\n            }\r\n            this.scrollStack.push({ top: scrollTop, length: this.nodeDataSet.length });\r\n            if (this.scrollStack.length > 2) {\r\n                this.scrollStack.splice(0, 1);\r\n            }\r\n            const startTop = scrollTop;\r\n            const endTop = scrollTop + this.scrollAreaHeight;\r\n            let topPadding = 0;\r\n            let bottomPadding = 0;\r\n            let startIndex = -1;\r\n            let endIndex = -1;\r\n            let top = 0;\r\n            for (const [index, info] of this.nodeDataSet.entries()) {\r\n                if (top + info.height < startTop) {\r\n                    topPadding += info.height;\r\n                }\r\n                else if (top > endTop) {\r\n                    bottomPadding += info.height;\r\n                }\r\n                else {\r\n                    if (startIndex === -1) {\r\n                        startIndex = index;\r\n                    }\r\n                    if (endIndex < index) {\r\n                        endIndex = index;\r\n                    }\r\n                    if (info.dom === undefined) {\r\n                        info.dom = this.createChild(info.data, index);\r\n                        info.dom.appendTo(this);\r\n                        info.height = info.dom.rect.height;\r\n                    }\r\n                }\r\n                top += info.height;\r\n            }\r\n            for (const [index, info] of this.nodeDataSet.entries()) {\r\n                if (startIndex <= index && index <= endIndex) {\r\n                    (_a = info.dom) === null || _a === void 0 ? void 0 : _a.appendTo(this);\r\n                }\r\n                else {\r\n                    (_b = info.dom) === null || _b === void 0 ? void 0 : _b.delete();\r\n                    delete info.dom;\r\n                }\r\n            }\r\n            this.topPaddingNode.domElement.style.height = `${topPadding}px`;\r\n            this.bottomPaddingNode.domElement.style.height = `${bottomPadding}px`;\r\n            this.bottomPaddingNode.appendTo(this);\r\n        };\r\n        this.calculateSize = () => {\r\n            this.scrollAreaHeight = this.domElement.clientHeight;\r\n            this.refresh();\r\n        };\r\n        this.resizeDebouncer = new debouncer_1.default(100, () => this.calculateSize());\r\n        this.resizeHandler = () => this.resizeDebouncer.run();\r\n        this.append(this.topPaddingNode = new DomNode_1.default(document.createElement(options.childTag)), this.bottomPaddingNode = new DomNode_1.default(document.createElement(options.childTag)));\r\n        this.domElement.style.overflowY = \"scroll\";\r\n        this.on(\"visible\", () => this.calculateSize());\r\n        this.on(\"scroll\", () => this.refresh());\r\n        window.addEventListener(\"resize\", this.resizeHandler);\r\n    }\r\n    init(dataSet) {\r\n        var _a;\r\n        for (const nodeData of this.nodeDataSet) {\r\n            (_a = nodeData.dom) === null || _a === void 0 ? void 0 : _a.delete();\r\n        }\r\n        this.nodeDataSet = [];\r\n        for (const data of dataSet) {\r\n            this.nodeDataSet.push({ data, height: this.options.baseChildHeight });\r\n        }\r\n    }\r\n    add(data, index) {\r\n        if (index !== undefined && index < this.nodeDataSet.length) {\r\n            skyutil_1.default.insert(this.nodeDataSet, index, { data, height: this.options.baseChildHeight });\r\n        }\r\n        else {\r\n            this.nodeDataSet.push({ data, height: this.options.baseChildHeight });\r\n        }\r\n        this.refresh();\r\n    }\r\n    findDataIndex(data) {\r\n        return this.nodeDataSet.findIndex((d) => d.data === data);\r\n    }\r\n    remove(data) {\r\n        var _a;\r\n        const index = this.findDataIndex(data);\r\n        if (index !== -1) {\r\n            (_a = this.nodeDataSet[index].dom) === null || _a === void 0 ? void 0 : _a.delete();\r\n            this.nodeDataSet.splice(index, 1);\r\n            this.refresh();\r\n        }\r\n    }\r\n    move(data, to) {\r\n        var _a;\r\n        const index = this.findDataIndex(data);\r\n        if (index !== -1) {\r\n            (_a = this.nodeDataSet[index].dom) === null || _a === void 0 ? void 0 : _a.delete();\r\n            this.nodeDataSet.splice(index, 1);\r\n            if (index < to) {\r\n                to -= 1;\r\n            }\r\n        }\r\n        if (to !== undefined && to < this.nodeDataSet.length) {\r\n            skyutil_1.default.insert(this.nodeDataSet, to, { data, height: this.options.baseChildHeight });\r\n        }\r\n        else {\r\n            this.nodeDataSet.push({ data, height: this.options.baseChildHeight });\r\n        }\r\n        this.refresh();\r\n    }\r\n    delete() {\r\n        window.removeEventListener(\"resize\", this.resizeHandler);\r\n        super.delete();\r\n    }\r\n}\r\nexports[\"default\"] = ScrollableDomNode;\r\n//# sourceMappingURL=ScrollableDomNode.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/ScrollableDomNode.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/SkyNode.js":
/*!****************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/SkyNode.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst eventcontainer_1 = __importDefault(__webpack_require__(/*! eventcontainer */ \"./node_modules/eventcontainer/EventContainer.js\"));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"./node_modules/@hanul/skynode/node_modules/skyutil/SkyUtil.js\"));\r\nclass SkyNode extends eventcontainer_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.children = [];\r\n    }\r\n    append(...nodes) {\r\n        for (const node of nodes) {\r\n            if (node !== undefined) {\r\n                node.appendTo(this);\r\n            }\r\n        }\r\n    }\r\n    appendTo(node, index) {\r\n        if (this.parent === node && index !== undefined && this.parent.children.indexOf(this) < index) {\r\n            index -= 1;\r\n        }\r\n        this.exceptFromParent();\r\n        if (index !== undefined && index < node.children.length) {\r\n            node.children.splice(index, 0, this);\r\n        }\r\n        else {\r\n            node.children.push(this);\r\n        }\r\n        this.parent = node;\r\n        return this;\r\n    }\r\n    exceptFromParent() {\r\n        if (this.parent !== undefined) {\r\n            skyutil_1.default.pull(this.parent.children, this);\r\n            this.parent = undefined;\r\n        }\r\n    }\r\n    empty() {\r\n        const copy = [];\r\n        for (const child of this.children) {\r\n            copy.push(child);\r\n        }\r\n        for (const child of copy) {\r\n            child.delete();\r\n        }\r\n        return this;\r\n    }\r\n    checkChild(target) {\r\n        for (const child of this.children) {\r\n            if (child === target || child.checkChild(target) === true) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    delete() {\r\n        super.delete();\r\n        this.exceptFromParent();\r\n        this.empty();\r\n        this.children = undefined;\r\n    }\r\n}\r\nexports[\"default\"] = SkyNode;\r\n//# sourceMappingURL=SkyNode.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/SkyNode.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/el.js":
/*!***********************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/el.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst DomNode_1 = __importDefault(__webpack_require__(/*! ./DomNode */ \"./node_modules/@hanul/skynode/lib/DomNode.js\"));\r\nconst el = (tag, ...children) => {\r\n    const domNode = new DomNode_1.default(DomNode_1.default.createElement(tag));\r\n    for (const child of children) {\r\n        if (child !== undefined) {\r\n            if (typeof child === \"string\") {\r\n                domNode.appendText(child);\r\n            }\r\n            else if (child instanceof DomNode_1.default) {\r\n                domNode.append(child);\r\n            }\r\n            else {\r\n                for (const [name, value] of Object.entries(child)) {\r\n                    if (typeof value === \"function\") {\r\n                        domNode.onDom(name, value);\r\n                    }\r\n                    else if (name === \"style\" && typeof value === \"object\") {\r\n                        domNode.style(value);\r\n                    }\r\n                    else if (value === undefined) {\r\n                        domNode.domElement.removeAttribute(name);\r\n                    }\r\n                    else if (typeof value === \"string\") {\r\n                        domNode.domElement.setAttribute(name, value);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return domNode;\r\n};\r\nexports[\"default\"] = el;\r\n//# sourceMappingURL=el.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/el.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@hanul/skynode/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Popup = exports.ClosableFloatingDomNode = exports.FloatingDomNode = exports.ScrollItemDomNode = exports.ScrollableDomNode = exports.el = exports.BodyNode = exports.ResponsiveImage = exports.DomNode = exports.SkyNode = void 0;\r\nvar SkyNode_1 = __webpack_require__(/*! ./SkyNode */ \"./node_modules/@hanul/skynode/lib/SkyNode.js\");\r\nObject.defineProperty(exports, \"SkyNode\", ({ enumerable: true, get: function () { return __importDefault(SkyNode_1).default; } }));\r\nvar DomNode_1 = __webpack_require__(/*! ./DomNode */ \"./node_modules/@hanul/skynode/lib/DomNode.js\");\r\nObject.defineProperty(exports, \"DomNode\", ({ enumerable: true, get: function () { return __importDefault(DomNode_1).default; } }));\r\nvar ResponsiveImage_1 = __webpack_require__(/*! ./ResponsiveImage */ \"./node_modules/@hanul/skynode/lib/ResponsiveImage.js\");\r\nObject.defineProperty(exports, \"ResponsiveImage\", ({ enumerable: true, get: function () { return __importDefault(ResponsiveImage_1).default; } }));\r\nvar BodyNode_1 = __webpack_require__(/*! ./BodyNode */ \"./node_modules/@hanul/skynode/lib/BodyNode.js\");\r\nObject.defineProperty(exports, \"BodyNode\", ({ enumerable: true, get: function () { return __importDefault(BodyNode_1).default; } }));\r\nvar el_1 = __webpack_require__(/*! ./el */ \"./node_modules/@hanul/skynode/lib/el.js\");\r\nObject.defineProperty(exports, \"el\", ({ enumerable: true, get: function () { return __importDefault(el_1).default; } }));\r\nvar ScrollableDomNode_1 = __webpack_require__(/*! ./ScrollableDomNode */ \"./node_modules/@hanul/skynode/lib/ScrollableDomNode.js\");\r\nObject.defineProperty(exports, \"ScrollableDomNode\", ({ enumerable: true, get: function () { return __importDefault(ScrollableDomNode_1).default; } }));\r\nObject.defineProperty(exports, \"ScrollItemDomNode\", ({ enumerable: true, get: function () { return ScrollableDomNode_1.ScrollItemDomNode; } }));\r\nvar FloatingDomNode_1 = __webpack_require__(/*! ./FloatingDomNode */ \"./node_modules/@hanul/skynode/lib/FloatingDomNode.js\");\r\nObject.defineProperty(exports, \"FloatingDomNode\", ({ enumerable: true, get: function () { return __importDefault(FloatingDomNode_1).default; } }));\r\nvar ClosableFloatingDomNode_1 = __webpack_require__(/*! ./ClosableFloatingDomNode */ \"./node_modules/@hanul/skynode/lib/ClosableFloatingDomNode.js\");\r\nObject.defineProperty(exports, \"ClosableFloatingDomNode\", ({ enumerable: true, get: function () { return __importDefault(ClosableFloatingDomNode_1).default; } }));\r\nvar Popup_1 = __webpack_require__(/*! ./Popup */ \"./node_modules/@hanul/skynode/lib/Popup.js\");\r\nObject.defineProperty(exports, \"Popup\", ({ enumerable: true, get: function () { return __importDefault(Popup_1).default; } }));\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/lib/index.js?");

/***/ }),

/***/ "./node_modules/@hanul/skynode/node_modules/skyutil/SkyUtil.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@hanul/skynode/node_modules/skyutil/SkyUtil.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass SkyUtil {\r\n    static pull(array, ...removeList) {\r\n        for (const el of removeList) {\r\n            const index = array.indexOf(el);\r\n            if (index !== -1) {\r\n                array.splice(index, 1);\r\n            }\r\n        }\r\n    }\r\n    static insert(array, index, item) {\r\n        array.splice(index, 0, item);\r\n    }\r\n    static random(min, max) {\r\n        return Math.floor(Math.random() * (max - min + 1) + min);\r\n    }\r\n    static repeat(times, func) {\r\n        const promises = [];\r\n        for (let i = 0; i < times; i += 1) {\r\n            const result = func(i);\r\n            if (result instanceof Promise) {\r\n                promises.push(result);\r\n            }\r\n        }\r\n        if (promises.length > 0) {\r\n            return Promise.all(promises);\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = SkyUtil;\r\n//# sourceMappingURL=SkyUtil.js.map\n\n//# sourceURL=webpack:///./node_modules/@hanul/skynode/node_modules/skyutil/SkyUtil.js?");

/***/ }),

/***/ "./node_modules/eventcontainer/EventContainer.js":
/*!*******************************************************!*\
  !*** ./node_modules/eventcontainer/EventContainer.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"./node_modules/eventcontainer/node_modules/skyutil/SkyUtil.js\"));\r\nclass EventContainer {\r\n    constructor() {\r\n        this.eventMap = {};\r\n        this.deleted = false;\r\n    }\r\n    on(eventName, eventHandler) {\r\n        if (this.eventMap[eventName] === undefined) {\r\n            this.eventMap[eventName] = [];\r\n        }\r\n        this.eventMap[eventName].push(eventHandler);\r\n    }\r\n    toss(eventName, to, toEventName) {\r\n        this.on(eventName, (...params) => {\r\n            const results = to.fireEvent(toEventName === undefined ? eventName : toEventName, ...params);\r\n            const promises = [];\r\n            for (const result of results) {\r\n                if (result instanceof Promise) {\r\n                    promises.push(result);\r\n                }\r\n            }\r\n            if (promises.length > 0) {\r\n                return Promise.all(promises);\r\n            }\r\n        });\r\n    }\r\n    off(eventName, eventHandler) {\r\n        if (this.eventMap[eventName] !== undefined) {\r\n            skyutil_1.default.pull(this.eventMap[eventName], eventHandler);\r\n            if (this.eventMap[eventName].length === 0) {\r\n                delete this.eventMap[eventName];\r\n            }\r\n        }\r\n    }\r\n    fireEvent(eventName, ...params) {\r\n        const results = [];\r\n        if (this.eventMap[eventName] !== undefined) {\r\n            for (const eventHandler of this.eventMap[eventName]) {\r\n                results.push(eventHandler(...params));\r\n            }\r\n        }\r\n        return results;\r\n    }\r\n    delete() {\r\n        this.fireEvent(\"delete\");\r\n        this.eventMap = undefined;\r\n        this.deleted = true;\r\n    }\r\n}\r\nexports[\"default\"] = EventContainer;\r\n//# sourceMappingURL=EventContainer.js.map\n\n//# sourceURL=webpack:///./node_modules/eventcontainer/EventContainer.js?");

/***/ }),

/***/ "./node_modules/eventcontainer/node_modules/skyutil/SkyUtil.js":
/*!*********************************************************************!*\
  !*** ./node_modules/eventcontainer/node_modules/skyutil/SkyUtil.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass SkyUtil {\r\n    static pull(array, ...removeList) {\r\n        for (const el of removeList) {\r\n            const index = array.indexOf(el);\r\n            if (index !== -1) {\r\n                array.splice(index, 1);\r\n            }\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = SkyUtil;\r\n//# sourceMappingURL=SkyUtil.js.map\n\n//# sourceURL=webpack:///./node_modules/eventcontainer/node_modules/skyutil/SkyUtil.js?");

/***/ }),

/***/ "./node_modules/skyrouter/lib/SkyRouter.js":
/*!*************************************************!*\
  !*** ./node_modules/skyrouter/lib/SkyRouter.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst eventcontainer_1 = __importDefault(__webpack_require__(/*! eventcontainer */ \"./node_modules/eventcontainer/EventContainer.js\"));\r\nconst skyutil_1 = __importDefault(__webpack_require__(/*! skyutil */ \"./node_modules/skyrouter/node_modules/skyutil/SkyUtil.js\"));\r\nconst URIParser_1 = __importDefault(__webpack_require__(/*! ./URIParser */ \"./node_modules/skyrouter/lib/URIParser.js\"));\r\nclass SkyRouter extends eventcontainer_1.default {\r\n    constructor() {\r\n        super();\r\n        this.routes = [];\r\n        this.openingViews = [];\r\n        if (typeof window !== \"undefined\" && typeof window.document !== \"undefined\") {\r\n            window.addEventListener(\"popstate\", (event) => this.check(event.state === null ? {} : event.state));\r\n        }\r\n    }\r\n    check(preParams) {\r\n        const uri = decodeURIComponent(location.pathname.substring(1));\r\n        const uriParts = uri.split(\"/\");\r\n        let viewCreated = false;\r\n        for (const { patterns, excludes, viewType } of this.routes) {\r\n            const params = preParams === undefined ? {} : Object.assign({}, preParams);\r\n            const openingView = this.openingViews.find((ov) => ov instanceof viewType);\r\n            if (patterns.find((pattern) => URIParser_1.default.match(uriParts, pattern, params)) !== undefined &&\r\n                excludes.find((exclude) => URIParser_1.default.match(uriParts, exclude)) === undefined) {\r\n                if (openingView === undefined) {\r\n                    this.openingViews.push(new viewType(params, uri));\r\n                    viewCreated = true;\r\n                }\r\n                else {\r\n                    openingView.changeParams(params, uri);\r\n                }\r\n            }\r\n            else if (openingView !== undefined) {\r\n                openingView.close();\r\n                skyutil_1.default.pull(this.openingViews, openingView);\r\n            }\r\n        }\r\n        if (viewCreated === true) {\r\n            this.fireEvent(\"go\");\r\n        }\r\n    }\r\n    route(patterns, viewType, excludes = []) {\r\n        if (typeof patterns === \"string\") {\r\n            patterns = [patterns];\r\n        }\r\n        this.routes.push({ patterns, excludes, viewType });\r\n        const uri = decodeURIComponent(location.pathname.substring(1));\r\n        const uriParts = uri.split(\"/\");\r\n        const params = {};\r\n        if (patterns.find((pattern) => URIParser_1.default.match(uriParts, pattern, params)) !== undefined &&\r\n            excludes.find((exclude) => URIParser_1.default.match(uriParts, exclude)) === undefined) {\r\n            this.openingViews.push(new viewType(params, uri));\r\n        }\r\n    }\r\n    go(uri, params) {\r\n        if (location.pathname !== uri) {\r\n            history.pushState(undefined, \"\", uri);\r\n            this.check(params);\r\n        }\r\n    }\r\n    goNoHistory(uri, params) {\r\n        if (location.pathname !== uri) {\r\n            history.replaceState(undefined, \"\", uri);\r\n            this.check(params);\r\n        }\r\n    }\r\n    waitAndGo(uri, params) {\r\n        setTimeout(() => this.go(uri, params));\r\n    }\r\n}\r\nexports[\"default\"] = new SkyRouter();\r\n//# sourceMappingURL=SkyRouter.js.map\n\n//# sourceURL=webpack:///./node_modules/skyrouter/lib/SkyRouter.js?");

/***/ }),

/***/ "./node_modules/skyrouter/lib/URIParser.js":
/*!*************************************************!*\
  !*** ./node_modules/skyrouter/lib/URIParser.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass URIParser {\r\n    match(uriParts, pattern, params) {\r\n        const patternParts = pattern.split(\"/\");\r\n        for (const [index, uriPart] of uriParts.entries()) {\r\n            const patternPart = patternParts[index];\r\n            if (patternPart === undefined) {\r\n                return false;\r\n            }\r\n            else if (patternPart === \"**\") {\r\n                return true;\r\n            }\r\n            if (uriPart !== \"\" && patternPart[0] === \"{\" && patternPart[patternPart.length - 1] === \"}\") {\r\n                if (params !== undefined) {\r\n                    params[patternPart.substring(1, patternPart.length - 1)] = uriPart;\r\n                }\r\n            }\r\n            else if (patternPart !== \"*\" && patternPart !== uriPart) {\r\n                return false;\r\n            }\r\n            if (index === uriParts.length - 1 && index < patternParts.length - 1 && patternParts[patternParts.length - 1] !== \"\") {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    parse(uri, pattern, params) {\r\n        const uriParts = uri.split(\"/\");\r\n        return this.match(uriParts, pattern, params);\r\n    }\r\n}\r\nexports[\"default\"] = new URIParser();\r\n//# sourceMappingURL=URIParser.js.map\n\n//# sourceURL=webpack:///./node_modules/skyrouter/lib/URIParser.js?");

/***/ }),

/***/ "./node_modules/skyrouter/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/skyrouter/lib/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar URIParser_1 = __webpack_require__(/*! ./URIParser */ \"./node_modules/skyrouter/lib/URIParser.js\");\r\nexports.URIParser = URIParser_1.default;\r\nvar SkyRouter_1 = __webpack_require__(/*! ./SkyRouter */ \"./node_modules/skyrouter/lib/SkyRouter.js\");\r\nexports.SkyRouter = SkyRouter_1.default;\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/skyrouter/lib/index.js?");

/***/ }),

/***/ "./node_modules/skyrouter/node_modules/skyutil/SkyUtil.js":
/*!****************************************************************!*\
  !*** ./node_modules/skyrouter/node_modules/skyutil/SkyUtil.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass SkyUtil {\r\n    static pull(array, ...removeList) {\r\n        for (const el of removeList) {\r\n            const index = array.indexOf(el);\r\n            if (index !== -1) {\r\n                array.splice(index, 1);\r\n            }\r\n        }\r\n    }\r\n    static insert(array, index, item) {\r\n        array.splice(index, 0, item);\r\n    }\r\n    static random(min, max) {\r\n        return Math.floor(Math.random() * (max - min + 1) + min);\r\n    }\r\n    static repeat(times, func) {\r\n        const promises = [];\r\n        for (let i = 0; i < times; i += 1) {\r\n            const result = func(i);\r\n            if (result instanceof Promise) {\r\n                promises.push(result);\r\n            }\r\n        }\r\n        if (promises.length > 0) {\r\n            return Promise.all(promises);\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = SkyUtil;\r\n//# sourceMappingURL=SkyUtil.js.map\n\n//# sourceURL=webpack:///./node_modules/skyrouter/node_modules/skyutil/SkyUtil.js?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skyrouter_1 = __webpack_require__(/*! skyrouter */ \"./node_modules/skyrouter/lib/index.js\");\r\nconst Collection_1 = __importDefault(__webpack_require__(/*! ./view/Collection */ \"./src/view/Collection.ts\"));\r\nconst Create_1 = __importDefault(__webpack_require__(/*! ./view/Create */ \"./src/view/Create.ts\"));\r\nconst CreateDeployerMintNFT_1 = __importDefault(__webpack_require__(/*! ./view/create/CreateDeployerMintNFT */ \"./src/view/create/CreateDeployerMintNFT.ts\"));\r\nconst CreateOne_1 = __importDefault(__webpack_require__(/*! ./view/create/CreateOne */ \"./src/view/create/CreateOne.ts\"));\r\nconst CreateUserMintNFT_1 = __importDefault(__webpack_require__(/*! ./view/create/CreateUserMintNFT */ \"./src/view/create/CreateUserMintNFT.ts\"));\r\nconst Detail_1 = __importDefault(__webpack_require__(/*! ./view/Detail */ \"./src/view/Detail.ts\"));\r\nconst Home_1 = __importDefault(__webpack_require__(/*! ./view/Home */ \"./src/view/Home.ts\"));\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ./view/Layout */ \"./src/view/Layout.ts\"));\r\nconst Marketplace_1 = __importDefault(__webpack_require__(/*! ./view/Marketplace */ \"./src/view/Marketplace.ts\"));\r\nconst Ranking_1 = __importDefault(__webpack_require__(/*! ./view/Ranking */ \"./src/view/Ranking.ts\"));\r\nconst MyCollections_1 = __importDefault(__webpack_require__(/*! ./view/user/MyCollections */ \"./src/view/user/MyCollections.ts\"));\r\nconst MyNFTs_1 = __importDefault(__webpack_require__(/*! ./view/user/MyNFTs */ \"./src/view/user/MyNFTs.ts\"));\r\nskyrouter_1.SkyRouter.route(\"**\", Layout_1.default);\r\nskyrouter_1.SkyRouter.route(\"\", Home_1.default);\r\nskyrouter_1.SkyRouter.route(\"marketplace\", Marketplace_1.default);\r\nskyrouter_1.SkyRouter.route(\"ranking\", Ranking_1.default);\r\nskyrouter_1.SkyRouter.route(\"create\", Create_1.default);\r\nskyrouter_1.SkyRouter.route(\"create/one\", CreateOne_1.default);\r\nskyrouter_1.SkyRouter.route(\"create/deployer-mint-nft\", CreateDeployerMintNFT_1.default);\r\nskyrouter_1.SkyRouter.route(\"create/user-mint-nft\", CreateUserMintNFT_1.default);\r\nskyrouter_1.SkyRouter.route(\"user/my-nfts\", MyNFTs_1.default);\r\nskyrouter_1.SkyRouter.route(\"user/my-collections\", MyCollections_1.default);\r\nskyrouter_1.SkyRouter.route(\"{address}\", Collection_1.default, [\r\n    \"marketplace\",\r\n    \"ranking\",\r\n    \"create\",\r\n]);\r\nskyrouter_1.SkyRouter.route(\"{address}/{id}\", Detail_1.default, [\r\n    \"create/one\",\r\n    \"create/deployer-mint-nft\",\r\n    \"create/user-mint-nft\",\r\n    \"user/my-nfts\",\r\n    \"user/my-collections\",\r\n]);\r\nif (sessionStorage.__spa_path) {\r\n    skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);\r\n    sessionStorage.removeItem(\"__spa_path\");\r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/ui/UserInfo.ts":
/*!****************************!*\
  !*** ./src/ui/UserInfo.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst UserMenu_1 = __importDefault(__webpack_require__(/*! ./menu/UserMenu */ \"./src/ui/menu/UserMenu.ts\"));\r\nclass UserInfo extends skynode_1.DomNode {\r\n    constructor() {\r\n        super(\".user-info\");\r\n        this.append((0, skynode_1.el)(\"a.user-button\", (0, skynode_1.el)(\"i.far.fa-user\"), {\r\n            click: (event, button) => {\r\n                const rect = button.rect;\r\n                new UserMenu_1.default({ left: rect.right - 220, top: rect.bottom + 5 }).appendTo(skynode_1.BodyNode);\r\n            },\r\n        }));\r\n    }\r\n}\r\nexports[\"default\"] = UserInfo;\r\n\n\n//# sourceURL=webpack:///./src/ui/UserInfo.ts?");

/***/ }),

/***/ "./src/ui/menu/MenuBuilder.ts":
/*!************************************!*\
  !*** ./src/ui/menu/MenuBuilder.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst skyrouter_1 = __webpack_require__(/*! skyrouter */ \"./node_modules/skyrouter/lib/index.js\");\r\nclass MenuBuilder {\r\n    build(menus) {\r\n        const els = [];\r\n        for (const menuItem of menus) {\r\n            els.push((0, skynode_1.el)(`a${location.pathname === `/${menuItem.uri}` ? \".on\" : \"\"}`, menuItem.name, { click: () => skyrouter_1.SkyRouter.go(`/${menuItem.uri}`) }));\r\n        }\r\n        return els;\r\n    }\r\n}\r\nexports[\"default\"] = new MenuBuilder();\r\n\n\n//# sourceURL=webpack:///./src/ui/menu/MenuBuilder.ts?");

/***/ }),

/***/ "./src/ui/menu/MobileMenu.ts":
/*!***********************************!*\
  !*** ./src/ui/menu/MobileMenu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst menu_json_1 = __importDefault(__webpack_require__(/*! ./menu.json */ \"./src/ui/menu/menu.json\"));\r\nconst usermenu_json_1 = __importDefault(__webpack_require__(/*! ./usermenu.json */ \"./src/ui/menu/usermenu.json\"));\r\nconst MenuBuilder_1 = __importDefault(__webpack_require__(/*! ./MenuBuilder */ \"./src/ui/menu/MenuBuilder.ts\"));\r\nclass MobileMenu extends skynode_1.ClosableFloatingDomNode {\r\n    constructor(position) {\r\n        super(position, \".mobile-menu\");\r\n        this.append(...MenuBuilder_1.default.build(menu_json_1.default.menu), ...MenuBuilder_1.default.build(usermenu_json_1.default.menu));\r\n        this.onDom(\"click\", () => this.delete());\r\n    }\r\n}\r\nexports[\"default\"] = MobileMenu;\r\n\n\n//# sourceURL=webpack:///./src/ui/menu/MobileMenu.ts?");

/***/ }),

/***/ "./src/ui/menu/PCMenu.ts":
/*!*******************************!*\
  !*** ./src/ui/menu/PCMenu.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst menu_json_1 = __importDefault(__webpack_require__(/*! ./menu.json */ \"./src/ui/menu/menu.json\"));\r\nconst MenuBuilder_1 = __importDefault(__webpack_require__(/*! ./MenuBuilder */ \"./src/ui/menu/MenuBuilder.ts\"));\r\nclass PCMenu extends skynode_1.DomNode {\r\n    constructor() {\r\n        super(\".pc-menu\");\r\n        this.append(...MenuBuilder_1.default.build(menu_json_1.default.menu));\r\n    }\r\n}\r\nexports[\"default\"] = PCMenu;\r\n\n\n//# sourceURL=webpack:///./src/ui/menu/PCMenu.ts?");

/***/ }),

/***/ "./src/ui/menu/UserMenu.ts":
/*!*********************************!*\
  !*** ./src/ui/menu/UserMenu.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst MenuBuilder_1 = __importDefault(__webpack_require__(/*! ./MenuBuilder */ \"./src/ui/menu/MenuBuilder.ts\"));\r\nconst usermenu_json_1 = __importDefault(__webpack_require__(/*! ./usermenu.json */ \"./src/ui/menu/usermenu.json\"));\r\nclass UserMenu extends skynode_1.ClosableFloatingDomNode {\r\n    constructor(position) {\r\n        super(position, \".user-menu\");\r\n        this.append(...MenuBuilder_1.default.build(usermenu_json_1.default.menu));\r\n        this.onDom(\"click\", () => this.delete());\r\n    }\r\n}\r\nexports[\"default\"] = UserMenu;\r\n\n\n//# sourceURL=webpack:///./src/ui/menu/UserMenu.ts?");

/***/ }),

/***/ "./src/view/Collection.ts":
/*!********************************!*\
  !*** ./src/view/Collection.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ \"./src/view/Layout.ts\"));\r\nclass Collection {\r\n    constructor(params) {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".collection-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = Collection;\r\n\n\n//# sourceURL=webpack:///./src/view/Collection.ts?");

/***/ }),

/***/ "./src/view/Create.ts":
/*!****************************!*\
  !*** ./src/view/Create.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst skyrouter_1 = __webpack_require__(/*! skyrouter */ \"./node_modules/skyrouter/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ \"./src/view/Layout.ts\"));\r\nclass Create {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".create-view\", (0, skynode_1.el)(\"main\", (0, skynode_1.el)(\"h1\", \"Create NFTs\"), (0, skynode_1.el)(\"section\", (0, skynode_1.el)(\"a\", (0, skynode_1.el)(\"h3\", \"Create new item\"), (0, skynode_1.el)(\"p\", \"Create new NFT Simple & Easy\"), { click: () => skyrouter_1.SkyRouter.go(\"/create/one\") })), (0, skynode_1.el)(\"section\", (0, skynode_1.el)(\"h2\", \"Create new smart contract\"), (0, skynode_1.el)(\"p\", \"You need \", (0, skynode_1.el)(\"a\", \"Base URL\")), (0, skynode_1.el)(\"a\", (0, skynode_1.el)(\"h3\", \"Create Deployer Mint NFT\"), (0, skynode_1.el)(\"p\", \"Mint deployer only\"), { click: () => skyrouter_1.SkyRouter.go(\"/create/deployer-mint-nft\") }), (0, skynode_1.el)(\"a\", (0, skynode_1.el)(\"h3\", \"Create User Mint NFT\"), (0, skynode_1.el)(\"p\", \"Mint everyone\"), { click: () => skyrouter_1.SkyRouter.go(\"/create/user-mint-nft\") })))));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = Create;\r\n\n\n//# sourceURL=webpack:///./src/view/Create.ts?");

/***/ }),

/***/ "./src/view/Detail.ts":
/*!****************************!*\
  !*** ./src/view/Detail.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ \"./src/view/Layout.ts\"));\r\nclass Detail {\r\n    constructor(params) {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".detail-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = Detail;\r\n\n\n//# sourceURL=webpack:///./src/view/Detail.ts?");

/***/ }),

/***/ "./src/view/Home.ts":
/*!**************************!*\
  !*** ./src/view/Home.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst skyrouter_1 = __webpack_require__(/*! skyrouter */ \"./node_modules/skyrouter/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ \"./src/view/Layout.ts\"));\r\nclass Home {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".home-view\", (0, skynode_1.el)(\"header\", (0, skynode_1.el)(\"h2\", \"Trade NFT, Earn Cake\"), (0, skynode_1.el)(\"a.trade-button\", \"Trade Now\", {\r\n            click: () => skyrouter_1.SkyRouter.go(\"marketplace\"),\r\n        }))));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = Home;\r\n\n\n//# sourceURL=webpack:///./src/view/Home.ts?");

/***/ }),

/***/ "./src/view/Layout.ts":
/*!****************************!*\
  !*** ./src/view/Layout.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst skyrouter_1 = __webpack_require__(/*! skyrouter */ \"./node_modules/skyrouter/lib/index.js\");\r\nconst MobileMenu_1 = __importDefault(__webpack_require__(/*! ../ui/menu/MobileMenu */ \"./src/ui/menu/MobileMenu.ts\"));\r\nconst PCMenu_1 = __importDefault(__webpack_require__(/*! ../ui/menu/PCMenu */ \"./src/ui/menu/PCMenu.ts\"));\r\nconst UserInfo_1 = __importDefault(__webpack_require__(/*! ../ui/UserInfo */ \"./src/ui/UserInfo.ts\"));\r\nclass Layout {\r\n    constructor() {\r\n        Layout.current = this;\r\n        skynode_1.BodyNode.append(this.container = (0, skynode_1.el)(\".layout\", (0, skynode_1.el)(\"header\", (0, skynode_1.el)(\"a.logo\", (0, skynode_1.el)(\"img\", { src: \"/images/logo.png\", height: \"40\" }), \"CakeNFT\", { click: () => skyrouter_1.SkyRouter.go(\"/\") }), new PCMenu_1.default(), (0, skynode_1.el)(\".span\"), new UserInfo_1.default(), (0, skynode_1.el)(\"a.menu-button\", (0, skynode_1.el)(\"i.fas.fa-bars\"), {\r\n            click: (event, button) => {\r\n                const rect = button.rect;\r\n                new MobileMenu_1.default({ left: rect.right - 220, top: rect.bottom + 5 }).appendTo(skynode_1.BodyNode);\r\n            },\r\n        })), (0, skynode_1.el)(\"main\", this.content = (0, skynode_1.el)(\".content\")), (0, skynode_1.el)(\"footer\", (0, skynode_1.el)(\"section\", (0, skynode_1.el)(\"h4\", \"Developer\"), (0, skynode_1.el)(\"ul\", (0, skynode_1.el)(\"li\", (0, skynode_1.el)(\"a\", \"GitHub\", { href: \"https://github.com/cakenft\", target: \"_blank\" })))), (0, skynode_1.el)(\".social\", (0, skynode_1.el)(\"a\", (0, skynode_1.el)(\"i.fab.fa-twitter\"), { href: \"https://github.com/cakenft\", target: \"_blank\" })), (0, skynode_1.el)(\".copyright\", \"© 2021 CakeNFT, Inc\"))));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = Layout;\r\n\n\n//# sourceURL=webpack:///./src/view/Layout.ts?");

/***/ }),

/***/ "./src/view/Marketplace.ts":
/*!*********************************!*\
  !*** ./src/view/Marketplace.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ \"./src/view/Layout.ts\"));\r\nclass Marketplace {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".marketplace-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = Marketplace;\r\n\n\n//# sourceURL=webpack:///./src/view/Marketplace.ts?");

/***/ }),

/***/ "./src/view/Ranking.ts":
/*!*****************************!*\
  !*** ./src/view/Ranking.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ \"./src/view/Layout.ts\"));\r\nclass Ranking {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".ranking-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = Ranking;\r\n\n\n//# sourceURL=webpack:///./src/view/Ranking.ts?");

/***/ }),

/***/ "./src/view/create/CreateDeployerMintNFT.ts":
/*!**************************************************!*\
  !*** ./src/view/create/CreateDeployerMintNFT.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ../Layout */ \"./src/view/Layout.ts\"));\r\nclass CreateDeployerMintNFT {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".create-deployer-mint-nft-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = CreateDeployerMintNFT;\r\n\n\n//# sourceURL=webpack:///./src/view/create/CreateDeployerMintNFT.ts?");

/***/ }),

/***/ "./src/view/create/CreateOne.ts":
/*!**************************************!*\
  !*** ./src/view/create/CreateOne.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ../Layout */ \"./src/view/Layout.ts\"));\r\nclass CreateOne {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".create-one-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = CreateOne;\r\n\n\n//# sourceURL=webpack:///./src/view/create/CreateOne.ts?");

/***/ }),

/***/ "./src/view/create/CreateUserMintNFT.ts":
/*!**********************************************!*\
  !*** ./src/view/create/CreateUserMintNFT.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ../Layout */ \"./src/view/Layout.ts\"));\r\nclass CreateUserMintNFT {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".create-user-mint-nft-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = CreateUserMintNFT;\r\n\n\n//# sourceURL=webpack:///./src/view/create/CreateUserMintNFT.ts?");

/***/ }),

/***/ "./src/view/user/MyCollections.ts":
/*!****************************************!*\
  !*** ./src/view/user/MyCollections.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ../Layout */ \"./src/view/Layout.ts\"));\r\nclass MyCollections {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".my-collections-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = MyCollections;\r\n\n\n//# sourceURL=webpack:///./src/view/user/MyCollections.ts?");

/***/ }),

/***/ "./src/view/user/MyNFTs.ts":
/*!*********************************!*\
  !*** ./src/view/user/MyNFTs.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst skynode_1 = __webpack_require__(/*! @hanul/skynode */ \"./node_modules/@hanul/skynode/lib/index.js\");\r\nconst Layout_1 = __importDefault(__webpack_require__(/*! ../Layout */ \"./src/view/Layout.ts\"));\r\nclass MyNFTs {\r\n    constructor() {\r\n        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(\".my-nfts-view\"));\r\n    }\r\n    changeParams(params, uri) { }\r\n    close() {\r\n        this.container.delete();\r\n    }\r\n}\r\nexports[\"default\"] = MyNFTs;\r\n\n\n//# sourceURL=webpack:///./src/view/user/MyNFTs.ts?");

/***/ }),

/***/ "./src/ui/menu/menu.json":
/*!*******************************!*\
  !*** ./src/ui/menu/menu.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"menu\":[{\"uri\":\"marketplace\",\"name\":\"Marketplace\"},{\"uri\":\"ranking\",\"name\":\"Ranking\"},{\"uri\":\"create\",\"name\":\"Create\"}]}');\n\n//# sourceURL=webpack:///./src/ui/menu/menu.json?");

/***/ }),

/***/ "./src/ui/menu/usermenu.json":
/*!***********************************!*\
  !*** ./src/ui/menu/usermenu.json ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"menu\":[{\"uri\":\"user/my-nfts\",\"name\":\"My NFTs\"},{\"uri\":\"user/my-collections\",\"name\":\"My Collections\"}]}');\n\n//# sourceURL=webpack:///./src/ui/menu/usermenu.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;