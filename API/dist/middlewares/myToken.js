"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

// eslint-disable-next-line consistent-return
var validateToken = function validateToken(req, res, next) {
  var token = req.headers.token;
  if (!token) return res.status(401).json({
    status: '401 unauthorized',
    error: 'Access token is Required'
  });

  _jsonwebtoken["default"].verify(token, process.env.SECRET, function (error, result) {
    if (error) return res.status(401).json({
      status: '401 Unauthorized',
      error: 'Access token is Invalid'
    });
    req.data = result.data;
    return next();
  });
};

var _default = validateToken;
exports["default"] = _default;