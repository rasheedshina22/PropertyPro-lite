"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _expressValidator = require("express-validator");

var PostProperty =
/*#__PURE__*/
function () {
  function PostProperty() {
    (0, _classCallCheck2["default"])(this, PostProperty);
  }

  (0, _createClass2["default"])(PostProperty, null, [{
    key: "validate",
    value: function validate() {
      return [(0, _expressValidator.check)('type').optional().not().isEmpty().withMessage('Property type field cannot be empty'), (0, _expressValidator.check)('address').optional().not().isEmpty().withMessage('Address field cannot be empty').isLength({
        min: 3
      }).withMessage('Address fiels should be atleast 3 characters long').trim().escape(), (0, _expressValidator.check)('city').optional().not().isEmpty().withMessage('City field cannot be empty').isAlpha().withMessage('City field Should be Alphabets only').trim().isLength({
        min: 3
      }).withMessage('City Should be atleast 3 characters long').escape(), (0, _expressValidator.check)('state').optional().not().isEmpty().withMessage('State cannot be empty').trim(), (0, _expressValidator.check)('price').optional().not().isEmpty().withMessage('Price Field cannot be empty').trim().matches(/^\d+(\.|\d)\d+$/).withMessage('Price field should contain a float or number').escape(), (0, _expressValidator.check)('image_url').optional().not().isEmpty().withMessage('Image Url cannot be empty').trim(), (0, _expressValidator.check)('status').optional().not().isEmpty().withMessage('Status cannot be empty').trim(), (0, _expressValidator.check)('purpose').optional().not().isEmpty().withMessage('Purpose cannot be empty'), (0, _expressValidator.check)('description').optional().not().isEmpty().withMessage('Description cannot be empty')];
    }
    /* eslint no-param-reassign: 0 */

  }, {
    key: "verifyValidationResult",
    value: function () {
      var _verifyValidationResult = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var errors, errArr;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                errors = (0, _expressValidator.validationResult)(req);

                if (errors.isEmpty()) {
                  _context.next = 4;
                  break;
                }

                errArr = errors.array().map(function (_ref) {
                  var msg = _ref.msg;
                  return msg;
                });
                return _context.abrupt("return", res.status(400).json({
                  status: '400 Invalid Request',
                  error: 'Your request contains invalid parameters',
                  errors: errArr
                }));

              case 4:
                return _context.abrupt("return", next());

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function verifyValidationResult(_x, _x2, _x3) {
        return _verifyValidationResult.apply(this, arguments);
      }

      return verifyValidationResult;
    }()
  }]);
  return PostProperty;
}();

exports["default"] = PostProperty;