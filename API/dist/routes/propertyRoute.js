"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _propertyController = _interopRequireDefault(require("../controllers/propertyController"));

var _myToken = _interopRequireDefault(require("../middlewares/myToken"));

var _uploadImage = _interopRequireDefault(require("../middlewares/uploadImage"));

var _propertyValidation = _interopRequireDefault(require("../middlewares/propertyValidation"));

var _myAuthorization = _interopRequireDefault(require("../middlewares/myAuthorization"));

var _propertyUpdateValidation = _interopRequireDefault(require("../middlewares/propertyUpdateValidation"));

var router = (0, _express.Router)();
router.post('/', _myToken["default"], _uploadImage["default"].upload, _propertyValidation["default"].validate(), _propertyValidation["default"].verifyValidationResult, _propertyController["default"].postProperty);
router.patch('/:property_id', _myToken["default"], _myAuthorization["default"], _uploadImage["default"].imageUpdate, _propertyUpdateValidation["default"].validate(), _propertyUpdateValidation["default"].verifyValidationResult, _propertyController["default"].propertyUpdate);
router.patch('/:property_id/sold', _myToken["default"], _myAuthorization["default"], _propertyController["default"].markPropertyAsSold);
router["delete"]('/:property_id', _myToken["default"], _myAuthorization["default"], _propertyController["default"].deleteProperty);
router.get('/', _myToken["default"], _propertyController["default"].getAllProperties);
router.get('/:property_id', _myToken["default"], _propertyController["default"].getSingleProperty);
var _default = router;
exports["default"] = _default;