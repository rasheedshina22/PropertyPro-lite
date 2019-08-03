"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Property = function Property(id, owner, price, state, city, address, type, purpose) {
  var status = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'Available';
  var publicID = arguments.length > 9 ? arguments[9] : undefined;
  var imageUrl = arguments.length > 10 ? arguments[10] : undefined;
  var createdOn = arguments.length > 11 ? arguments[11] : undefined;
  (0, _classCallCheck2["default"])(this, Property);
  this.id = id;
  this.owner = owner;
  this.price = price;
  this.state = state;
  this.city = city;
  this.address = address;
  this.type = type;
  this.purpose = purpose;
  this.status = status;
  this.public_id = publicID;
  this.image_url = imageUrl;
  this.created_on = createdOn;
};

exports["default"] = Property;