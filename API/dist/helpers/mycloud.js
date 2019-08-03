"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.deleteExistingImg = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = require("dotenv");

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _multerStorageCloudinary = _interopRequireDefault(require("multer-storage-cloudinary"));

(0, _dotenv.config)();

_cloudinary["default"].config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
}); // configure cloud storage


var storage = (0, _multerStorageCloudinary["default"])({
  cloudinary: _cloudinary["default"],
  allowedFormats: ['jpg', 'png'],
  format: 'png',
  folder: 'property/images'
});
exports.storage = storage;

var deleteExistingImg =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(publicId) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _cloudinary["default"].uploader.destroy(publicId,
            /*#__PURE__*/
            function () {
              var _ref2 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee(err) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", err);

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteExistingImg(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteExistingImg = deleteExistingImg;