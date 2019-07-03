"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    (0, _classCallCheck2["default"])(this, Helper);
  }

  (0, _createClass2["default"])(Helper, null, [{
    key: "generateID",
    value: function generateID(myArr) {
      var length = myArr.length;
      if (length === 0) return 1;
      var id = myArr[length - 1].id + 1;
      return id;
    }
  }]);
  return Helper;
}();

var _default = Helper;
exports["default"] = _default;