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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _dotenv = require("dotenv");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _users = _interopRequireDefault(require("../data/data-structure/users"));

// Initialize process.env variables
(0, _dotenv.config)();

var UserServices =
/*#__PURE__*/
function (_UserModel) {
  (0, _inherits2["default"])(UserServices, _UserModel);

  function UserServices(id, email, firstName, lastName, password, phoneNumber, address) {
    var isAdmin = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    (0, _classCallCheck2["default"])(this, UserServices);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(UserServices).call(this, id, email, firstName, lastName, password, phoneNumber, address, isAdmin));
  }

  (0, _createClass2["default"])(UserServices, null, [{
    key: "generateToken",
    value: function generateToken(id, isAdmin) {
      var token = _jsonwebtoken["default"].sign({
        data: {
          id: id,
          is_admin: isAdmin
        }
      }, process.env.SECRET || 'alternativeSecret', {
        expiresIn: '1d'
      });

      return token;
    }
  }, {
    key: "encrptPassword",
    value: function () {
      var _encrptPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(password) {
        var pass;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _bcrypt["default"].hash(password, 8);

              case 2:
                pass = _context.sent;
                return _context.abrupt("return", pass);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function encrptPassword(_x) {
        return _encrptPassword.apply(this, arguments);
      }

      return encrptPassword;
    }()
  }, {
    key: "verifyPassword",
    value: function () {
      var _verifyPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(plainText, hashedText) {
        var isMatch;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _bcrypt["default"].compare(plainText, hashedText);

              case 2:
                isMatch = _context2.sent;
                return _context2.abrupt("return", isMatch);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function verifyPassword(_x2, _x3) {
        return _verifyPassword.apply(this, arguments);
      }

      return verifyPassword;
    }()
  }, {
    key: "save",
    value: function save(user) {
      var noOfUsers = _users["default"].length;

      var newNoOfUsers = _users["default"].push(user);

      return newNoOfUsers > noOfUsers;
    }
  }]);
  return UserServices;
}(_userModel["default"]);

var _default = UserServices;
exports["default"] = _default;