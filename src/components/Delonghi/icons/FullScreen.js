'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.FullScreen = void 0;
var react_1 = __importDefault(require('react'));
var styled_components_1 = __importDefault(require('styled-components'));
var SVG = styled_components_1.default.svg(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  .tk-icon {\n    stroke: ', ';\n  }\n'],
      ['\n  .tk-icon {\n    stroke: ', ';\n  }\n']
    )),
  function (props) {
    return props.theme.textColor;
  }
);
var FullScreen = function () {
  return react_1.default.createElement(
    SVG,
    {
      width: '16',
      height: '16',
      viewBox: '0 0 15 13',
      fill: '#000',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    react_1.default.createElement('path', {
      d: 'M6.17647 0H0V4.41176L1.5 4.41V1.5H6.17647V0ZM15 0H8.82353V1.5H13.5V4.41176H15V3.52941V1.76471V0ZM6.17647 12.3529H0V10.5882V8.82353V7.94118H1.49996V10.85H6.17647V12.3529ZM8.82353 12.3529H15V7.94118H13.5V10.85H8.82353V12.3529Z',
      className: 'tk-icon',
      strokeWidth: '0.1',
    })
  );
};
exports.FullScreen = FullScreen;
exports.FullScreen.iconName = 'fullScreen';
exports.default = exports.FullScreen;
var templateObject_1;

{
  /* <path d="M9.13231 7.01615L9.09442 6.98352C8.46715 7.71175 7.58941 8.23361 6.62184 8.45231C6.34577 8.51449 6.1476 8.76617 6.1476 9.05186V9.57753C6.1476 9.65371 6.08628 9.71503 6.0101 9.71503H5.10608C5.0299 9.71503 4.96858 9.65371 4.96858 9.57753V9.05193C4.96915 8.64628 5.1063 8.25263 5.35791 7.93444C5.61025 7.61535 5.96689 7.39221 6.36265 7.30264C7.08409 7.13967 7.73655 6.75426 8.19924 6.21503C8.66713 5.67058 8.91445 5.01626 8.91445 4.32084C8.91445 2.6233 7.40442 1.25075 5.55641 1.25075C3.7084 1.25075 2.19838 2.6233 2.19838 4.32084V4.77284C2.19838 4.84902 2.13706 4.91034 2.06088 4.91034H1.15686C1.08068 4.91034 1.01936 4.84902 1.01936 4.77284V4.32084C1.01936 3.74211 1.14169 3.18166 1.38315 2.65242L1.38316 2.65241C1.61471 2.14464 1.9439 1.69128 2.36444 1.30055C3.21872 0.509205 4.35321 0.0717285 5.55641 0.0717285C6.75964 0.0717285 7.89413 0.509219 8.7484 1.30224L8.74846 1.30229C9.1689 1.69128 9.49811 2.14627 9.7297 2.65246L9.77516 2.63166L9.7297 2.65247C9.97113 3.17998 10.0935 3.74208 10.0935 4.32084C10.0935 4.81362 10.0042 5.29806 9.82725 5.7594L9.82724 5.75943C9.65693 6.20424 9.41049 6.6145 9.09433 6.98362L9.13231 7.01615ZM9.13231 7.01615C9.45206 6.64282 9.7015 6.22764 9.87394 5.77731L4.91858 9.57753C4.91858 9.68133 5.00228 9.76503 5.10608 9.76503H6.0101C6.11389 9.76503 6.1976 9.68133 6.1976 9.57753V9.05186C6.1976 8.78903 6.38007 8.558 6.63286 8.50108C7.61054 8.2801 8.49782 7.75275 9.13231 7.01615ZM4.66891 12.0418C4.66891 11.5521 5.06673 11.1543 5.55641 11.1543C6.0461 11.1543 6.44391 11.5521 6.44391 12.0418C6.44391 12.5315 6.0461 12.9293 5.55641 12.9293C5.06673 12.9293 4.66891 12.5315 4.66891 12.0418Z" stroke="#C4C4C4" stroke-width="0.1"></path>
} */
}
