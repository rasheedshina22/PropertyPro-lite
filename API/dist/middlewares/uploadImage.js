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

var _multer = _interopRequireDefault(require("multer"));

var _mycloud = require("../helpers/mycloud");

/* eslint camelcase: 0 */
var ImageUpload =
/*#__PURE__*/
function () {
  function ImageUpload() {
    (0, _classCallCheck2["default"])(this, ImageUpload);
  }

  (0, _createClass2["default"])(ImageUpload, null, [{
    key: "upload",
    value: function upload(req, res, next) {
      var multerUpload = (0, _multer["default"])({
        storage: _mycloud.storage,
        limits: {
          files: 1,
          fileSize: 900000
        }
      }).single('image_url');
      multerUpload(req, res, function (error) {
        if (error instanceof _multer["default"].MulterError) {
          return res.status(400).json({
            status: '400 Bad Request',
            error: 'Image should not exceed 900kb'
          });
        }

        if (error) return res.status(400).json({
          status: '400 Bad Request',
          error: 'Invalid File Format'
        });

        if (req.file) {
          req.body.image_url = req.file.url;
          req.body.public_id = req.public_id;
        }

        return next();
      });
    }
  }, {
    key: "imageUpdate",
    value: function () {
      var _imageUpdate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var multerUpload;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                multerUpload = (0, _multer["default"])({
                  storage: _mycloud.storage,
                  limits: {
                    files: 1,
                    fileSize: 900000
                  }
                }).single('image_url');
                multerUpload(req, res,
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee(err) {
                    var image_id, _ref2, result, _req$file, url, public_id;

                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(err instanceof _multer["default"].MulterError)) {
                              _context.next = 2;
                              break;
                            }

                            return _context.abrupt("return", res.status(400).json({
                              status: '400 Bad Request',
                              error: 'Image should not exceed 900kb'
                            }));

                          case 2:
                            if (!err) {
                              _context.next = 4;
                              break;
                            }

                            return _context.abrupt("return", res.status(400).json({
                              status: '400 Bad Request',
                              error: 'Invalid File Format'
                            }));

                          case 4:
                            if (!req.file) {
                              _context.next = 15;
                              break;
                            }

                            image_id = req.prop.public_id;
                            _context.next = 8;
                            return (0, _mycloud.deleteExistingImg)(image_id);

                          case 8:
                            _ref2 = _context.sent;
                            result = _ref2.result;

                            if (!(result !== 'ok' && result !== 'not found')) {
                              _context.next = 12;
                              break;
                            }

                            return _context.abrupt("return", res.status(500).json({
                              status: '500 Server Interval Error',
                              error: 'Oops! Error Occcured, try again'
                            }));

                          case 12:
                            _req$file = req.file, url = _req$file.url, public_id = _req$file.public_id;
                            req.prop.image_url = url;
                            req.prop.image_id = public_id;

                          case 15:
                            return _context.abrupt("return", next());

                          case 16:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function imageUpdate(_x, _x2, _x3) {
        return _imageUpdate.apply(this, arguments);
      }

      return imageUpdate;
    }()
  }]);
  return ImageUpload;
}();

exports["default"] = ImageUpload;