"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authController = _interopRequireDefault(require("../controllers/authController"));

var _signupValidation = _interopRequireDefault(require("../middlewares/signupValidation"));

var _loginValidation = _interopRequireDefault(require("../middlewares/loginValidation"));

var router = (0, _express.Router)();
router.post('/signup', _signupValidation["default"].validateData(), _signupValidation["default"].myValidationResult, _signupValidation["default"].EmailAlreadyExist, _authController["default"].createAccount);
router.post('/signin', _loginValidation["default"].validateData(), _loginValidation["default"].myValidationResult, _authController["default"].login);
var _default = router;
exports["default"] = _default;