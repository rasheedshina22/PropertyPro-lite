"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inValidTokenData = exports.validTokenData = exports.validLoginData = exports.invalidLoginData = exports.incompleteLoginData = exports.alreadyExistingUser = exports.invalidUserData = exports.incompleteUser = exports.user = void 0;

var _userServices = _interopRequireDefault(require("../services/userServices"));

//  valid user data
var user = {
  email: 'Emekafor@gmail.com',
  first_name: 'Emeka',
  last_name: 'Okafor',
  password: 'kate',
  confirm_password: 'kate',
  phone_number: '08043534689',
  address: '22 uke street onitsha'
}; //  incomplete user data

exports.user = user;
var incompleteUser = {
  first_name: 'Emeka',
  last_name: 'Okafor',
  password: 'kate',
  confirm_password: 'kate',
  phone_number: '08043534689',
  address: '22 uke street onitsha'
}; //  invalid user data

exports.incompleteUser = incompleteUser;
var invalidUserData = {
  email: 'ayo',
  first_name: 'Emeka',
  last_name: 'Okafor',
  password: 'kate',
  confirm_password: 'kate',
  phone_number: '08043534689',
  address: '22 uke street onitsha'
}; //  already existing user data

exports.invalidUserData = invalidUserData;
var alreadyExistingUser = {
  email: 'Emeka.okafor@gmail.com',
  first_name: 'Emeka',
  last_name: 'Okafor',
  password: 'kate',
  confirm_password: 'kate',
  phone_number: '08043534689',
  address: '22 uke street onitsha'
}; //  incomplete login data

exports.alreadyExistingUser = alreadyExistingUser;
var incompleteLoginData = {
  email: 'Emeka.okafor@gmail.com',
  password: ''
}; //  invalid login data

exports.incompleteLoginData = incompleteLoginData;
var invalidLoginData = {
  email: 'okwuosachinedu@gmail.com',
  password: '5656'
}; //  valid login data

exports.invalidLoginData = invalidLoginData;
var validLoginData = {
  email: 'Emeka.okafor@gmail.com',
  password: 'kate'
}; // Property Test Data
// Valid Token

exports.validLoginData = validLoginData;

var validTokenData = _userServices["default"].generateToken(1, false);

exports.validTokenData = validTokenData;
var inValidTokenData = '5765765iJI.UzzsdfjsdbfkaslkCI6IkpXVxcbcb';
exports.inValidTokenData = inValidTokenData;