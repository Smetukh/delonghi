"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Share = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SVG = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .tk-icon {\n    stroke: ", ";\n  }\n"], ["\n  .tk-icon {\n    stroke: ", ";\n  }\n"])), function (props) { return props.theme.textColor; });
var Share = function () {
    return (react_1.default.createElement(SVG, { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg"},
        react_1.default.createElement("path", { d: "M10.1151 2L2.00001 7.92105L10.1151 13.8421V10.6842C15 10.6842 16.5 12.5 18 16C18.5 12.5 19.8533 5.15789 10.1151 5.15789L10.1151 2Z", className: "tk-icon", strokeWidth: "2" })));
};
exports.Share = Share;
exports.Share.iconName = 'share';
exports.default = exports.Share;
var templateObject_1;


{/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1151 2L2.00001 7.92105L10.1151 13.8421V10.6842C15 10.6842 16.5 12.5 18 16C18.5 12.5 19.8533 5.15789 10.1151 5.15789L10.1151 2Z" stroke="#0C2340" stroke-width="2"/>
</svg> */}
