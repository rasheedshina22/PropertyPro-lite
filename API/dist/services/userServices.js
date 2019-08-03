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

var _index = _interopRequireDefault(require("../data/db/index"));

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
                _context2.prev = 0;
                _context2.next = 3;
                return _bcrypt["default"].compare(plainText, hashedText);

              case 3:
                isMatch = _context2.sent;
                return _context2.abrupt("return", isMatch);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function verifyPassword(_x2, _x3) {
        return _verifyPassword.apply(this, arguments);
      }

      return verifyPassword;
    }()
  }, {
    key: "emailExist",
    value: function () {
      var _emailExist = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(emailAddress) {
        var text, value, _ref, rows;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                text = "SELECT * FROM users WHERE email = $1";
                value = [emailAddress];
                _context3.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref = _context3.sent;
                rows = _ref.rows;
                return _context3.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function emailExist(_x4) {
        return _emailExist.apply(this, arguments);
      }

      return emailExist;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(user) {
        var text, values, _ref2, rows;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                text = "\n      INSERT INTO users \n      (email, address, first_name , last_name, phone_number, is_admin, password)\n      VALUES($1, $2, $3, $4, $5, $6, $7) returning *;\n    ";
                values = [user.email, user.address, user.first_name, user.last_name, user.phone_number, user.is_admin, user.password];
                _context4.next = 4;
                return _index["default"].queryArg(text, values);

              case 4:
                _ref2 = _context4.sent;
                rows = _ref2.rows;
                return _context4.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function save(_x5) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "findUserById",
    value: function () {
      var _findUserById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(userId) {
        var user;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                user = users.find(function (_ref3) {
                  var id = _ref3.id;
                  return id === parseInt(userId, 10);
                });
                return _context5.abrupt("return", user);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function findUserById(_x6) {
        return _findUserById.apply(this, arguments);
      }

      return findUserById;
    }()
  }]);
  return UserServices;
}(_userModel["default"]);

var _default = UserServices;
exports["default"] = _default;