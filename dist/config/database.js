"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('dotenv').config();

var Connection = /*#__PURE__*/_createClass(function Connection() {
  _classCallCheck(this, Connection);

  var url = process.env.MONGODB_URI || "";
  console.log('Establish new connection with url', url);
  _mongoose["default"].Promise = global.Promise; // mongoose.set("useNewUrlParser", true);
  // mongoose.set("useFindAndModify", false);
  // mongoose.set("useCreateIndex", true);
  // mongoose.set("useUnifiedTopology", true);
  // mongoose.set('useNewUrlParser', true);
  // mongoose.set('useUnifiedTopology', true);

  _mongoose["default"].connect(url);
});

var _default = new Connection();

exports["default"] = _default;