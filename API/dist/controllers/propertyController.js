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

var _propertyServices = _interopRequireDefault(require("../services/propertyServices"));

var PropertyController =
/*#__PURE__*/
function () {
  function PropertyController() {
    (0, _classCallCheck2["default"])(this, PropertyController);
  }

  (0, _createClass2["default"])(PropertyController, null, [{
    key: "postProperty",

    /* eslint camelcase: 0 */
    value: function () {
      var _postProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var _req$body, price, state, city, address, type, _req$body$purpose, purpose, image_url, _req$body$public_id, public_id, owner, _ref, stateID, _ref2, typeID, _ref3, purposeID, property, _ref4, id, created_on;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, price = _req$body.price, state = _req$body.state, city = _req$body.city, address = _req$body.address, type = _req$body.type, _req$body$purpose = _req$body.purpose, purpose = _req$body$purpose === void 0 ? 'sale' : _req$body$purpose, image_url = _req$body.image_url, _req$body$public_id = _req$body.public_id, public_id = _req$body$public_id === void 0 ? null : _req$body$public_id;
                owner = req.data.id;
                _context.next = 5;
                return _propertyServices["default"].getStateID(state);

              case 5:
                _ref = _context.sent;
                stateID = _ref.id;
                _context.next = 9;
                return _propertyServices["default"].getTypeID(type);

              case 9:
                _ref2 = _context.sent;
                typeID = _ref2.id;
                _context.next = 13;
                return _propertyServices["default"].getPurposeID(purpose);

              case 13:
                _ref3 = _context.sent;
                purposeID = _ref3.id;
                property = {
                  owner: owner,
                  price: price,
                  city: city,
                  address: address,
                  image_url: image_url,
                  public_id: public_id,
                  state: stateID,
                  type: typeID,
                  purpose: purposeID
                };
                _context.next = 18;
                return _propertyServices["default"].save(property);

              case 18:
                _ref4 = _context.sent;
                id = _ref4.id;
                created_on = _ref4.created_on;
                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  data: {
                    id: id,
                    status: 'available',
                    type: type,
                    state: state,
                    city: city,
                    address: address,
                    price: price,
                    created_on: created_on,
                    image_url: image_url,
                    purpose: purpose
                  }
                }));

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: '500 Server Interval Error',
                  error: 'Error occured'
                }));

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 24]]);
      }));

      function postProperty(_x, _x2) {
        return _postProperty.apply(this, arguments);
      }

      return postProperty;
    }()
  }, {
    key: "propertyUpdate",
    value: function () {
      var _propertyUpdate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var price, property_id, prop, _ref5, statusName, _ref6, typeName, _ref7, stateName, _ref8, purposeName;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                price = req.body.price;
                property_id = req.params.property_id;
                _context2.next = 5;
                return _propertyServices["default"].propertyUpdate(property_id, price);

              case 5:
                prop = _context2.sent;
                _context2.next = 8;
                return _propertyServices["default"].getStatus(prop.status);

              case 8:
                _ref5 = _context2.sent;
                statusName = _ref5.name;
                _context2.next = 12;
                return _propertyServices["default"].getType(prop.type);

              case 12:
                _ref6 = _context2.sent;
                typeName = _ref6.name;
                _context2.next = 16;
                return _propertyServices["default"].getState(prop.state);

              case 16:
                _ref7 = _context2.sent;
                stateName = _ref7.name;
                _context2.next = 20;
                return _propertyServices["default"].getPurpose(prop.purpose);

              case 20:
                _ref8 = _context2.sent;
                purposeName = _ref8.name;
                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: {
                    id: prop.id,
                    status: statusName,
                    type: typeName,
                    state: stateName,
                    city: prop.city,
                    address: prop.address,
                    price: prop.price,
                    created_on: prop.created_on,
                    image_url: prop.image_url,
                    purpose: purposeName
                  }
                }));

              case 25:
                _context2.prev = 25;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0.stack);
                return _context2.abrupt("return", res.status(500).json({
                  status: '500 Server Interval Error',
                  error: 'Oops! Error occurred, Do try again'
                }));

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 25]]);
      }));

      function propertyUpdate(_x3, _x4) {
        return _propertyUpdate.apply(this, arguments);
      }

      return propertyUpdate;
    }()
  }, {
    key: "markPropertyAsSold",
    value: function () {
      var _markPropertyAsSold = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var property_id, prop, _ref9, statusName, _ref10, typeName, _ref11, stateName, _ref12, purposeName;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                property_id = req.params.property_id;
                _context3.next = 4;
                return _propertyServices["default"].markAsSold(property_id);

              case 4:
                prop = _context3.sent;
                _context3.next = 7;
                return _propertyServices["default"].getStatus(prop.status);

              case 7:
                _ref9 = _context3.sent;
                statusName = _ref9.name;
                _context3.next = 11;
                return _propertyServices["default"].getType(prop.type);

              case 11:
                _ref10 = _context3.sent;
                typeName = _ref10.name;
                _context3.next = 15;
                return _propertyServices["default"].getState(prop.state);

              case 15:
                _ref11 = _context3.sent;
                stateName = _ref11.name;
                _context3.next = 19;
                return _propertyServices["default"].getPurpose(prop.purpose);

              case 19:
                _ref12 = _context3.sent;
                purposeName = _ref12.name;
                return _context3.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: {
                    id: prop.id,
                    status: statusName,
                    type: typeName,
                    state: stateName,
                    city: prop.city,
                    address: prop.address,
                    price: prop.price,
                    created_on: prop.created_on,
                    image_url: prop.image_url,
                    purpose: purposeName
                  }
                }));

              case 24:
                _context3.prev = 24;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).json({
                  status: '500 Server Interval Error',
                  error: 'Oops! Error occurred, Do try again'
                }));

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 24]]);
      }));

      function markPropertyAsSold(_x5, _x6) {
        return _markPropertyAsSold.apply(this, arguments);
      }

      return markPropertyAsSold;
    }()
  }, {
    key: "deleteProperty",
    value: function () {
      var _deleteProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var property_id;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                property_id = req.params.property_id;
                _context4.next = 4;
                return _propertyServices["default"].propertyDelete(property_id);

              case 4:
                return _context4.abrupt("return", res.status(200).json({
                  status: 'Success',
                  data: {
                    message: 'Property Deleted Successfully'
                  }
                }));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(500).json({
                  status: '500 Internal Server Error',
                  error: 'Error Occured'
                }));

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function deleteProperty(_x7, _x8) {
        return _deleteProperty.apply(this, arguments);
      }

      return deleteProperty;
    }()
  }, {
    key: "getAllProperties",
    value: function () {
      var _getAllProperties = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var myProperties;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!req.query.type) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 4;
                return _propertyServices["default"].getByType(req.query.type);

              case 4:
                myProperties = _context5.sent;
                _context5.next = 10;
                break;

              case 7:
                _context5.next = 9;
                return _propertyServices["default"].getAll();

              case 9:
                myProperties = _context5.sent;

              case 10:
                if (myProperties) {
                  _context5.next = 12;
                  break;
                }

                return _context5.abrupt("return", res.status(404).json({
                  status: '404 not found',
                  error: 'Property of that type does not exist, try searching for 2 bedroom'
                }));

              case 12:
                return _context5.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: myProperties
                }));

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(500).json({
                  status: '500 Internal Server Error',
                  error: 'Oops! Error occured, seems we dont have such property type'
                }));

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 15]]);
      }));

      function getAllProperties(_x9, _x10) {
        return _getAllProperties.apply(this, arguments);
      }

      return getAllProperties;
    }()
  }, {
    key: "getSingleProperty",
    value: function () {
      var _getSingleProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, res) {
        var myProperties;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                if (!req.params.property_id) {
                  _context6.next = 5;
                  break;
                }

                _context6.next = 4;
                return _propertyServices["default"].getMySingleProperty(req.params.property_id);

              case 4:
                myProperties = _context6.sent;

              case 5:
                if (myProperties) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", res.status(404).json({
                  status: '404 not found',
                  error: 'Unable to retrieve any property'
                }));

              case 7:
                return _context6.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: myProperties
                }));

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", res.status(500).json({
                  status: '500 Internal Server Error',
                  error: 'Error Occured'
                }));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 10]]);
      }));

      function getSingleProperty(_x11, _x12) {
        return _getSingleProperty.apply(this, arguments);
      }

      return getSingleProperty;
    }()
  }]);
  return PropertyController;
}();

exports["default"] = PropertyController;