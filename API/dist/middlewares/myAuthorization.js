"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _propertyServices = _interopRequireDefault(require("../services/propertyServices"));

/* eslint camelcase: 0 */
var authorisation =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var property_id, property;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            property_id = req.params.property_id;
            _context.next = 4;
            return _propertyServices["default"].findPropertyById(property_id);

          case 4:
            property = _context.sent;

            if (property) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              status: '404 Not Found',
              error: 'Invalid Property ID'
            }));

          case 7:
            req.prop = property;
            return _context.abrupt("return", next());

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              status: '500 Server Interval Error',
              error: 'Oops! Error Occured, try again'
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function authorisation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = authorisation;
exports["default"] = _default;