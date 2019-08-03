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

var _pg = require("pg");

var _dotenv = require("dotenv");

(0, _dotenv.config)();

var Database =
/*#__PURE__*/
function () {
  function Database() {
    (0, _classCallCheck2["default"])(this, Database);
    this.pool = new _pg.Pool({
      connectionString: process.env.DATABASE_URL
    });
  }

  (0, _createClass2["default"])(Database, [{
    key: "queryRaw",
    value: function () {
      var _queryRaw = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(rawQuery) {
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.pool.query(rawQuery);

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function queryRaw(_x) {
        return _queryRaw.apply(this, arguments);
      }

      return queryRaw;
    }()
  }, {
    key: "queryArg",
    value: function () {
      var _queryArg = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(text, params) {
        var res;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.pool.query(text, params);

              case 2:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function queryArg(_x2, _x3) {
        return _queryArg.apply(this, arguments);
      }

      return queryArg;
    }()
  }]);
  return Database;
}();

var db = new Database();
/* eslint no-console : 0 */

db.pool.on('connect', function () {
  console.log('connected to the db');
});
db.pool.on('error', function () {
  console.log('some database error have occurred');
  process.exit(-1);
});
var _default = db;
exports["default"] = _default;