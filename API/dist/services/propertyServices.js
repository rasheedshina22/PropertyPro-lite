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

var _propertyModel = _interopRequireDefault(require("../models/propertyModel"));

var _index = _interopRequireDefault(require("../data/db/index"));

var Property =
/*#__PURE__*/
function (_PropertyModel) {
  (0, _inherits2["default"])(Property, _PropertyModel);

  function Property() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var owner = arguments.length > 1 ? arguments[1] : undefined;
    var price = arguments.length > 2 ? arguments[2] : undefined;
    var state = arguments.length > 3 ? arguments[3] : undefined;
    var city = arguments.length > 4 ? arguments[4] : undefined;
    var address = arguments.length > 5 ? arguments[5] : undefined;
    var type = arguments.length > 6 ? arguments[6] : undefined;
    var purpose = arguments.length > 7 ? arguments[7] : undefined;
    var status = arguments.length > 8 ? arguments[8] : undefined;
    var publicID = arguments.length > 9 ? arguments[9] : undefined;
    var imageUrl = arguments.length > 10 ? arguments[10] : undefined;
    var createdOn = arguments.length > 11 ? arguments[11] : undefined;
    (0, _classCallCheck2["default"])(this, Property);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Property).call(this, id, owner, price, state, city, address, type, purpose, status, publicID, imageUrl, createdOn));
  }

  (0, _createClass2["default"])(Property, null, [{
    key: "getStateID",
    value: function () {
      var _getStateID = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(state) {
        var text, value, _ref, rows, text1, value1, result;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                text = "SELECT * FROM states WHERE name = $1";
                value = [state];
                _context.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref = _context.sent;
                rows = _ref.rows;

                if (!rows[0]) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", rows[0]);

              case 8:
                text1 = "\n      INSERT INTO states \n      (name)\n      VALUES($1) returning *;\n    ";
                value1 = [state];
                _context.next = 12;
                return _index["default"].queryArg(text1, value1);

              case 12:
                result = _context.sent;
                return _context.abrupt("return", result.rows[0]);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getStateID(_x) {
        return _getStateID.apply(this, arguments);
      }

      return getStateID;
    }()
  }, {
    key: "getTypeID",
    value: function () {
      var _getTypeID = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(type) {
        var text, myType, value, _ref2, rows, text1, value1, result;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                text = "SELECT * FROM types WHERE name = $1";
                myType = type.toLowerCase();
                value = [myType];
                _context2.next = 5;
                return _index["default"].queryArg(text, value);

              case 5:
                _ref2 = _context2.sent;
                rows = _ref2.rows;

                if (!rows[0]) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", rows[0]);

              case 9:
                text1 = "\n      INSERT INTO types \n      (name)\n      VALUES($1) returning *;\n    ";
                value1 = [myType];
                _context2.next = 13;
                return _index["default"].queryArg(text1, value1);

              case 13:
                result = _context2.sent;
                return _context2.abrupt("return", result.rows[0]);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getTypeID(_x2) {
        return _getTypeID.apply(this, arguments);
      }

      return getTypeID;
    }()
  }, {
    key: "getTypeID1",
    value: function () {
      var _getTypeID2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(type) {
        var text, myType, value, _ref3, rows;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                text = "SELECT * FROM types WHERE name = $1";
                myType = type.toLowerCase();
                value = [myType];
                _context3.next = 5;
                return _index["default"].queryArg(text, value);

              case 5:
                _ref3 = _context3.sent;
                rows = _ref3.rows;
                return _context3.abrupt("return", rows[0]);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getTypeID1(_x3) {
        return _getTypeID2.apply(this, arguments);
      }

      return getTypeID1;
    }()
  }, {
    key: "getPurposeID",
    value: function () {
      var _getPurposeID = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(purpose) {
        var text, value, _ref4, rows, text1, value1, result;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                text = "SELECT * FROM purposes WHERE name = $1";
                value = [purpose];
                _context4.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref4 = _context4.sent;
                rows = _ref4.rows;

                if (!rows[0]) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", rows[0]);

              case 8:
                text1 = "\n      INSERT INTO purposes \n      (name)\n      VALUES($1) returning *;\n    ";
                value1 = [purpose];
                _context4.next = 12;
                return _index["default"].queryArg(text1, value1);

              case 12:
                result = _context4.sent;
                return _context4.abrupt("return", result.rows[0]);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getPurposeID(_x4) {
        return _getPurposeID.apply(this, arguments);
      }

      return getPurposeID;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(property) {
        var text, values, _ref5, rows;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                text = "\n      INSERT INTO properties \n      (owner, price, state , city, address, type, image_url, public_id, purpose)\n      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *;\n    ";
                values = [property.owner, property.price, property.state, property.city, property.address, property.type, property.image_url, property.public_id, property.purpose];
                _context5.next = 4;
                return _index["default"].queryArg(text, values);

              case 4:
                _ref5 = _context5.sent;
                rows = _ref5.rows;
                return _context5.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function save(_x5) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "findPropertyById",
    value: function () {
      var _findPropertyById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(propId) {
        var text, value, _ref6, rows;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                text = "SELECT * FROM properties WHERE id = $1";
                value = [propId];
                _context6.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref6 = _context6.sent;
                rows = _ref6.rows;
                return _context6.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function findPropertyById(_x6) {
        return _findPropertyById.apply(this, arguments);
      }

      return findPropertyById;
    }()
  }, {
    key: "propertyUpdate",
    value: function () {
      var _propertyUpdate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(id, price) {
        var text, currentTime, value, _ref7, rows;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                text = "UPDATE properties SET price = $1,updated_on = $2 WHERE id =$3 returning *";
                currentTime = new Date().toLocaleString();
                value = [price, currentTime, id];
                _context7.next = 5;
                return _index["default"].queryArg(text, value);

              case 5:
                _ref7 = _context7.sent;
                rows = _ref7.rows;
                return _context7.abrupt("return", rows[0]);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function propertyUpdate(_x7, _x8) {
        return _propertyUpdate.apply(this, arguments);
      }

      return propertyUpdate;
    }()
  }, {
    key: "getStatus",
    value: function () {
      var _getStatus = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(id) {
        var text, value, _ref8, rows;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                text = "SELECT name FROM status WHERE id = $1";
                value = [id];
                _context8.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref8 = _context8.sent;
                rows = _ref8.rows;
                return _context8.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getStatus(_x9) {
        return _getStatus.apply(this, arguments);
      }

      return getStatus;
    }()
  }, {
    key: "getType",
    value: function () {
      var _getType = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(id) {
        var text, value, _ref9, rows;

        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                text = "SELECT name FROM types WHERE id = $1";
                value = [id];
                _context9.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref9 = _context9.sent;
                rows = _ref9.rows;
                return _context9.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getType(_x10) {
        return _getType.apply(this, arguments);
      }

      return getType;
    }()
  }, {
    key: "getState",
    value: function () {
      var _getState = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(id) {
        var text, value, _ref10, rows;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                text = "SELECT name FROM states WHERE id = $1";
                value = [id];
                _context10.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref10 = _context10.sent;
                rows = _ref10.rows;
                return _context10.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getState(_x11) {
        return _getState.apply(this, arguments);
      }

      return getState;
    }()
  }, {
    key: "getPurpose",
    value: function () {
      var _getPurpose = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(id) {
        var text, value, _ref11, rows;

        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                text = "SELECT name FROM purposes WHERE id = $1";
                value = [id];
                _context11.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref11 = _context11.sent;
                rows = _ref11.rows;
                return _context11.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function getPurpose(_x12) {
        return _getPurpose.apply(this, arguments);
      }

      return getPurpose;
    }()
  }, {
    key: "markAsSold",
    value: function () {
      var _markAsSold = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(id) {
        var text, value, _ref12, rows;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                text = "UPDATE properties SET status = $1 WHERE id =$2 returning *";
                value = ['2', id];
                _context12.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref12 = _context12.sent;
                rows = _ref12.rows;
                return _context12.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function markAsSold(_x13) {
        return _markAsSold.apply(this, arguments);
      }

      return markAsSold;
    }()
  }, {
    key: "propertyDelete",
    value: function () {
      var _propertyDelete = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(id) {
        var text, value, _ref13, rows;

        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                text = "DELETE FROM properties WHERE id = $1";
                value = [id];
                _context13.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref13 = _context13.sent;
                rows = _ref13.rows;
                return _context13.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function propertyDelete(_x14) {
        return _propertyDelete.apply(this, arguments);
      }

      return propertyDelete;
    }()
    /* eslint camelcase : 0 */

  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14() {
        var text, _ref14, rows;

        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                text = "SELECT\n\n    properties.id, \n    status.name status, \n     types.name \"type\", \n    states.name state, \n    properties.city, \n    properties.address, \n     properties.price, \n    properties.created_on, \n    properties.image_url, \n     users.email owner_email, \n     users.phone_number owner_phone_number, \n     purposes.name purpose,\n    properties.description\n \n FROM \n    properties \n INNER JOIN status ON status.id = properties.status \n INNER JOIN states ON states.id = properties.state \n INNER JOIN types ON types.id = properties.type \n INNER JOIN purposes ON purposes.id = properties.purpose \n INNER JOIN users ON users.id = properties.owner; \n ";
                _context14.next = 3;
                return _index["default"].queryRaw(text);

              case 3:
                _ref14 = _context14.sent;
                rows = _ref14.rows;
                return _context14.abrupt("return", rows);

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getByType",
    value: function () {
      var _getByType = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(type) {
        var text, _ref15, id, value, _ref16, rows;

        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                text = "SELECT\n\n    properties.id, \n    status.name status, \n     types.name \"type\", \n    states.name state, \n    properties.city, \n    properties.address, \n     properties.price, \n    properties.created_on, \n    properties.image_url, \n     users.email owner_email, \n     users.phone_number owner_phone_number, \n     purposes.name purpose,\n    properties.description\n \n FROM \n    properties \n INNER JOIN status ON status.id = properties.status \n INNER JOIN states ON states.id = properties.state \n INNER JOIN types ON types.id = properties.type \n INNER JOIN purposes ON purposes.id = properties.purpose \n INNER JOIN users ON users.id = properties.owner\n \n WHERE type = $1;\n ";
                _context15.next = 3;
                return Property.getTypeID1(type);

              case 3:
                _ref15 = _context15.sent;
                id = _ref15.id;
                value = [id];
                _context15.next = 8;
                return _index["default"].queryArg(text, value);

              case 8:
                _ref16 = _context15.sent;
                rows = _ref16.rows;
                return _context15.abrupt("return", rows);

              case 11:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      function getByType(_x15) {
        return _getByType.apply(this, arguments);
      }

      return getByType;
    }()
  }, {
    key: "getMySingleProperty",
    value: function () {
      var _getMySingleProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(id) {
        var text, value, _ref17, rows;

        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                text = "\n    SELECT\n    properties.id,\n    status.name status,\n\t  types.name \"type\",\n    states.name state,\n    properties.city,\n    properties.address,\n\t  properties.price,\n    properties.created_on,\n    properties.image_url,\n    users.email owner_email,\n\t  users.phone_number owner_phone_number,\n\t  purposes.name purpose,\n    \n FROM\n    properties\n INNER JOIN status ON status.id = properties.status\n INNER JOIN states ON states.id = properties.state\n INNER JOIN types ON types.id = properties.type\n INNER JOIN purposes ON purposes.id = properties.purpose\n INNER JOIN users ON users.id = properties.owner\n WHERE properties.id = $1\n ";
                value = [id];
                _context16.next = 4;
                return _index["default"].queryArg(text, value);

              case 4:
                _ref17 = _context16.sent;
                rows = _ref17.rows;
                return _context16.abrupt("return", rows);

              case 7:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));

      function getMySingleProperty(_x16) {
        return _getMySingleProperty.apply(this, arguments);
      }

      return getMySingleProperty;
    }()
  }]);
  return Property;
}(_propertyModel["default"]);

exports["default"] = Property;