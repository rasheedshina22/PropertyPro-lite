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

var _helper = _interopRequireDefault(require("../helpers/helper"));

var _users = _interopRequireDefault(require("../data/data-structure/users"));

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
        var _req$body, email, first_name, last_name, password, phoneNumber, address, id, pass, user, status, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, first_name = _req$body.first_name, last_name = _req$body.last_name, password = _req$body.password, phoneNumber = _req$body.phoneNumber, address = _req$body.address;
                _context.prev = 1;
                _context.next = 4;
                return _helper["default"].generateID(_users["default"]);

              case 4:
                id = _context.sent;
                _context.next = 7;
                return _userServices["default"].encrptPassword(password);

              case 7:
                pass = _context.sent;
                user = {
                  id: id,
                  email: email,
                  first_name: first_name,
                  last_name: last_name,
                  address: address,
                  phoneNumber: phoneNumber,
                  password: pass,
                  is_admin: false
                };
                status = _userServices["default"].save(user);

                if (!status) {
                  _context.next = 13;
                  break;
                }

                token = _userServices["default"].generateToken(id, false);
                return _context.abrupt("return", res.status(201).json({
                  status: 'Success',
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
  }]);
  return AuthController;
}();

var _default = AuthController;
exports["default"] = _default;