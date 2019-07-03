"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _authController = _interopRequireDefault(require("../controllers/authController"));

var router = (0, _express.Router)();
router.post('/signup', _authController["default"].createAccount);
var _default = router;
exports["default"] = _default;