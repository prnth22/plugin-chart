"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

const schemes = [{
  id: '_pink',
  label: 'Pink',
  colors: ['#fae0e4ff', '#f7cad0ff', '#f9bec7ff', '#fbb1bdff', '#ff99acff', '#ff85a1ff', '#ff7096ff', '#ff5c8aff', '#ff477eff', '#ff0a54ff']
}, {
  id: '_green',
  label: 'Green',
  colors: ['#e3edb4ff', '#d8e6a1ff', '#cede90ff', '#c2d67eff', '#b8cc76ff', '#b0c26eff', '#9fb063ff', '#909e54ff', '#7c8a43ff', '#6c7836ff']
}, {
  id: '_blue',
  label: 'Blue',
  colors: ['#f0f4fd', '#e0e9fa', '#d1def8', '#c1d3f5', '#b2c8f3', '#a3bcf0', '#93b1ee', '#84a6eb', '#749be9', '#6590e6']
}, {
  id: '_dark_yellow',
  label: 'Dark Yellow',
  colors: ['#fbf6f0', '#f7eee0', '#f3e5d1', '#efddc2', '#ebd4b3', '#e6cba3', '#e2c394', '#deba85', '#dab275', '#d6a966']
}, {
  id: '_light_green',
  label: 'Light Green',
  colors: ['#f1f5f1', '#e3ebe3', '#d4e1d4', '#c6d7c6', '#b8ceb8', '#aac4aa', '#9cba9c', '#8db08d', '#7fa67f', '#719c71']
}, {
  id: '_sea_green_intense',
  label: 'Sea Green Intense',
  colors: ['#B3F9EF', '#89EBDC', '#43DCC4', '#22C2AA', '#11B39A']
}, {
  id: '_light_green_intense',
  label: 'Light Green Intense',
  colors: ['#D0E8D0', '#9cba9c', '#83AE83', '#70A570']
}, {
  id: '_blue_intense',
  label: 'Blue Intense',
  colors: ['#CED8EF', '#A3BCEB', '#7094DD', '#5983D8']
}, {
  id: '_dark_yellow_intense',
  label: 'Dark Yellow Intense',
  colors: ['#F1E2C9', '#DEBC86', '#d6a966', '#C8974E']
}].map(s => new _core.CategoricalScheme(s));
var _default = schemes;
/* [
   '#e3edb4ff',
 '#d8e6a1ff',
 '#cede90ff',
 '#c2d67eff',
 '#b8cc76ff',
 '#b0c26eff',
 '#9fb063ff',
 '#909e54ff',
 '#7c8a43ff',
 '#6c7836ff'
] */

exports.default = _default;