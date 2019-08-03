"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

var _express = _interopRequireDefault(require("express"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = require("body-parser");

var _authRoute = _interopRequireDefault(require("./routes/authRoute"));

var _propertyRoute = _interopRequireDefault(require("./routes/propertyRoute"));

var _swagger = _interopRequireDefault(require("../../swagger.json"));

// Initialize process.env variables
(0, _dotenv.config)(); //  create express app

var app = (0, _express["default"])(); // parse application/x-www-form-urlencoded

app.use((0, _bodyParser.urlencoded)({
  extended: true
})); // parse application/json

app.use((0, _bodyParser.json)()); // Set server port

var port = process.env.PORT || 3000;
app.set('port', port); //  use cors only for our routes

app.use((0, _cors["default"])()); // Render api-docs

app.use('/api/v1/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"])); // routes

app.use('/api/v1/auth', _authRoute["default"]);
app.use('/api/v1/property', _propertyRoute["default"]); // Default Route

app.get('/api/v1', function (req, res) {
  return res.status(200).json({
    status: 'Success',
    message: 'Welcome to the PropertyPro-Lite API'
  });
}); //  404 error handler

app.use(function (req, res) {
  return res.status(404).json({
    status: '404 Not Found',
    message: "This route doesn't exist"
  });
}); //    500 error handler

app.use(function (err, req, res) {
  return res.status(500).json({
    status: '500 server error',
    message: '500 server error'
  });
}); // Listen for Requests to Server

app.listen(port, function () {
  console.log("Server is running at port ".concat(port));
}); // Export app for use in test modules

var _default = app;
exports["default"] = _default;