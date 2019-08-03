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

var _userServices = _interopRequireDefault(require("../services/userServices"));

var AuthController =
/*#__PURE__*/
function () {
  function AuthController() {
    (0, _classCallCheck2["default"])(this, AuthController);
  }

  (0, _createClass2["default"])(AuthController, null, [{
    key: "createAccount",

    /* eslint camelcase: 0 */
    value: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var _req$body, email, first_name, last_name, password, phone_number, address, pass, user, _ref, id, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, first_name = _req$body.first_name, last_name = _req$body.last_name, password = _req$body.password, phone_number = _req$body.phone_number, address = _req$body.address;
                _context.prev = 1;
                _context.next = 4;
                return _userServices["default"].encrptPassword(password);

              case 4:
                pass = _context.sent;
                user = {
                  email: email,
                  first_name: first_name,
                  last_name: last_name,
                  address: address,
                  phone_number: phone_number,
                  password: pass,
                  is_admin: false
                };
                _context.next = 8;
                return _userServices["default"].save(user);

              case 8:
                _ref = _context.sent;
                id = _ref.id;

                if (!id) {
                  _context.next = 13;
                  break;
                }

                token = _userServices["default"].generateToken(id, false);
                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  data: {
                    token: token,
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    email: email
                  }
                }));

              case 13:
                throw new Error('Error Creating new User');

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", res.status(500).json({
                  status: '500 Internal server error',
                  error: 'Error Creating new User'
                }));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16]]);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var _req$body2, email, password, user, isMatch, id, first_name, last_name, is_admin, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
                _context2.prev = 1;
                _context2.next = 4;
                return _userServices["default"].emailExist(email);

              case 4:
                user = _context2.sent;

                if (user) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.status(401).json({
                  status: '401 Unauthorized',
                  error: 'Invalid Email'
                }));

              case 7:
                _context2.next = 9;
                return _userServices["default"].verifyPassword(password, user.password);

              case 9:
                isMatch = _context2.sent;

                if (isMatch) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", res.status(401).json({
                  status: '401 Unauthorized',
                  error: 'Incorrect Password'
                }));

              case 12:
                id = user.id, first_name = user.first_name, last_name = user.last_name, is_admin = user.is_admin;
                token = _userServices["default"].generateToken(id, is_admin);
                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: {
                    token: token,
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    email: email
                  }
                }));

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](1);
                return _context2.abrupt("return", res.status(500).json({
                  status: '500 Server Interval Error',
                  error: 'Internal server error occured'
                }));

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 17]]);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return AuthController;
}();

var _default = AuthController;
exports["default"] = _default;