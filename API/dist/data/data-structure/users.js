"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _faker = _interopRequireDefault(require("faker"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var users = [{
  email: 'okwuosachijioke@gmail.com',
  first_name: 'chijioke',
  last_name: 'okwuosa',
  password: _bcrypt["default"].hashSync('jioke', 8),
  phoneNumber: '07037381011',
  address: "".concat(_faker["default"].address.streetAddress(), ", Lagos, Nigeria"),
  is_admin: false
}];
var _default = users;
exports["default"] = _default;