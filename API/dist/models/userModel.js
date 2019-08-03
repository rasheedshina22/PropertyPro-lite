"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var User = function User(id, email, firstName, lastName, password, phoneNumber, address) {
  var isAdmin = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  (0, _classCallCheck2["default"])(this, User);
  this.id = id;
  this.email = email;
  this.first_name = firstName;
  this.last_name = lastName;
  this.password = password;
  this.phone_number = phoneNumber;
  this.address = address;
  this.is_admin = isAdmin;
};

var _default = User;
exports["default"] = _default;