"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("./index"));

var _seeders = _interopRequireDefault(require("./seeders"));

var migrations =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var tables;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tables = "\n    DROP TABLE IF EXISTS users CASCADE;\n    DROP TABLE IF EXISTS properties CASCADE;\n    DROP TABLE IF EXISTS types CASCADE;\n    DROP TABLE IF EXISTS status CASCADE;\n    DROP TABLE IF EXISTS states CASCADE;\n    DROP TABLE IF EXISTS purposes CASCADE;\n\n    CREATE TABLE\n    users(\n        id serial PRIMARY KEY,\n        email VARCHAR(60) NOT NULL UNIQUE,\n        first_name VARCHAR(30) NOT NULL,\n        last_name VARCHAR(30) NOT NULL,\n        password VARCHAR(65) NOT NULL,\n        phone_number VARCHAR NOT NULL,\n        address VARCHAR NOT NULL,\n        is_admin BOOLEAN NOT NULL DEFAULT (false),\n        created_on TIMESTAMP NOT NULL DEFAULT NOW()\n    );\n     \n    CREATE TABLE\n        status(\n            id serial PRIMARY KEY,\n            name VARCHAR NOT NULL\n        );\n    CREATE TABLE\n        states(\n            id serial PRIMARY KEY,\n            name VARCHAR NOT NULL\n        );\n    CREATE TABLE\n        types(\n            id serial PRIMARY KEY,\n            name VARCHAR NOT NULL\n        ); \n    CREATE TABLE\n        purposes(\n            id serial PRIMARY KEY,\n            name VARCHAR NOT NULL\n        ); \n    CREATE TABLE\n        properties(\n            id serial PRIMARY KEY,\n            owner INT NOT NULL,\n            status INT NOT NULL DEFAULT(1),\n            price float(2) NOT NULL,\n            state INT NOT NULL,\n            city VARCHAR NOT NULL,\n            address VARCHAR NOT NULL,\n            type INT NOT NULL,\n            created_on TIMESTAMP NOT NULL DEFAULT NOW(),\n            image_url VARCHAR NOT NULL,           \n            public_id VARCHAR NULL,\n            description varchar NULL,\n            updated_on TIMESTAMP NULL,\n            purpose INT NULL DEFAULT(1),\n            FOREIGN KEY (owner) REFERENCES users (id) ON DELETE CASCADE,\n            FOREIGN KEY (status) REFERENCES status (id) ON DELETE CASCADE,\n            FOREIGN KEY (state) REFERENCES states (id) ON DELETE CASCADE,\n            FOREIGN KEY (type) REFERENCES types (id) ON DELETE CASCADE,\n            FOREIGN KEY (purpose) REFERENCES purposes (id) ON DELETE CASCADE\n        );";
            /* eslint no-console : 0 */

            _context.prev = 1;
            _context.next = 4;
            return _index["default"].queryRaw(tables);

          case 4:
            _context.next = 6;
            return _index["default"].queryRaw(_seeders["default"]);

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.stack);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function migrations() {
    return _ref.apply(this, arguments);
  };
}();

migrations();