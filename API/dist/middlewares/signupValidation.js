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

var _userServices = _interopRequireDefault(require("../services/userServices"));

var SignUp =
/*#__PURE__*/
function () {
  function SignUp() {
    (0, _classCallCheck2["default"])(this, SignUp);
  }

  (0, _createClass2["default"])(SignUp, null, [{
    key: "validateData",
    value: function validateData() {
      return [(0, _expressValidator.check)('first_name').exists().withMessage('First Name is Required').not().isEmpty().withMessage('First Name cannot be empty').isAlpha().withMessage('First Name Should be Alphabets only').isLength({
        min: 3
      }).withMessage('First Name Should be at least 3 characters long').trim().escape(), (0, _expressValidator.check)('last_name').exists().withMessage('Last Name is Required').not().isEmpty().withMessage('Last Name cannot be empty').isAlpha().withMessage('Last Name Should be Alphabets only').isLength({
        min: 3
      }).withMessage('Last Name be at least 3 characters long').trim().escape(), (0, _expressValidator.check)('address').exists().withMessage('Address is Required').not().isEmpty().withMessage('Address cannot be empty').isLength({
        min: 3
      }).withMessage('Address should be atleast 3 characters long').trim().escape(), (0, _expressValidator.check)('email').exists().withMessage('Email is Required').not().isEmpty().withMessage('Email cannot be empty').isEmail().withMessage('Email Should be a valid Email Address'), (0, _expressValidator.check)('confirm_password').optional().not().isEmpty().withMessage('Confirm Password cannot be empty').custom(function (value, _ref) {
        var req = _ref.req;
        return value === req.body.password;
      }).withMessage('Confirm password should match the original Password'), (0, _expressValidator.check)('password').exists().withMessage('Password is Required').not().isEmpty().withMessage('Password cannot be empty').isLength({
        min: 3
      }).withMessage('Password Should be at least 3 characters Long').trim().escape(), (0, _expressValidator.check)('phone_number').exists().withMessage('Phone Number Field is Required').not().isEmpty().withMessage('Phone Number cannot be empty').isNumeric().withMessage('Phone Numbers Should be plain numbers without a country code or a + sign')];
    }
  }, {
    key: "myValidationResult",
    value: function () {
      var _myValidationResult = (0, _asyncToGenerator2["default"])(
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

                errArr = errors.array().map(function (_ref2) {
                  var msg = _ref2.msg;
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

      function myValidationResult(_x, _x2, _x3) {
        return _myValidationResult.apply(this, arguments);
      }

      return myValidationResult;
    }()
  }, {
    key: "EmailAlreadyExist",
    value: function () {
      var _EmailAlreadyExist = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var email, user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                email = req.body.email;
                _context2.next = 3;
                return _userServices["default"].emailExist(email);

              case 3:
                user = _context2.sent;

                if (!user) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(409).json({
                  status: '409 Conflict',
                  error: 'Email address already exists'
                }));

              case 6:
                return _context2.abrupt("return", next());

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function EmailAlreadyExist(_x4, _x5, _x6) {
        return _EmailAlreadyExist.apply(this, arguments);
      }

      return EmailAlreadyExist;
    }()
  }]);
  return SignUp;
}();

exports["default"] = SignUp;