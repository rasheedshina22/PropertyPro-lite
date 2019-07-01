"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidLoginData = exports.incompleteLoginData = exports.alreadyExistingUser = exports.invalidUserData = exports.incompleteUser = exports.user = void 0;

var _faker = _interopRequireDefault(require("faker"));

//  valid user data
var user = {
  email: _faker["default"].internet.email(),
  first_name: _faker["default"].name.firstName(),
  last_name: _faker["default"].name.lastName(),
  password: _faker["default"].internet.password(),
  confirm_password: _faker["default"].internet.password(),
  phone_number: '07055463452',
  address: "".concat(_faker["default"].address.streetAddress(), ", Lagos, Nigeria")
}; //  incomplete user data

exports.user = user;
var incompleteUser = {
  email: '',
  first_name: _faker["default"].name.firstName(),
  last_name: _faker["default"].name.lastName(),
  password: _faker["default"].internet.password(),
  confirm_password: _faker["default"].internet.password(),
  phone_number: '',
  address: "".concat(_faker["default"].address.streetAddress(), ", Lagos, Nigeria")
}; //  invalid user data

exports.incompleteUser = incompleteUser;
var invalidUserData = {
  email: 'okwuosa',
  first_name: _faker["default"].name.firstName(),
  last_name: _faker["default"].name.lastName(),
  password: _faker["default"].internet.password(),
  confirm_password: _faker["default"].internet.password(),
  phone_number: 'ayo',
  address: "".concat(_faker["default"].address.streetAddress(), ", Lagos, Nigeria")
}; //  already existing user data

exports.invalidUserData = invalidUserData;
var alreadyExistingUser = {
  email: 'okwuosachijioke@gmail.com',
  first_name: _faker["default"].name.firstName(),
  last_name: _faker["default"].name.lastName(),
  password: _faker["default"].internet.password(),
  confirm_password: _faker["default"].internet.password(),
  phone_number: '07055463452',
  address: "".concat(_faker["default"].address.streetAddress(), ", Lagos, Nigeria")
}; //  incomplete login data

exports.alreadyExistingUser = alreadyExistingUser;
var incompleteLoginData = {
  email: '',
  password: _faker["default"].internet.password()
}; //  incomplete login data

exports.incompleteLoginData = incompleteLoginData;
var invalidLoginData = {
  email: 'okwuosachinedu@gmail.com',
  password: _faker["default"].internet.password()
};
exports.invalidLoginData = invalidLoginData;