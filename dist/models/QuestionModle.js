"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var QuestionModel = /*#__PURE__*/function () {
  function QuestionModel() {
    _classCallCheck(this, QuestionModel);
  }

  _createClass(QuestionModel, [{
    key: "initSchema",
    value: // eslint-disable-next-line class-methods-use-this
    function initSchema() {
      var schema = new _mongoose.Schema({
        questionTitle: {
          type: String,
          "default": null
        },
        options: {
          type: [String],
          "default": null
        },
        isPrivate: {
          type: Boolean,
          "default": false
        },
        isExpiration: {
          type: Boolean,
          "default": false
        },
        expireAt: {
          type: Date,
          "default": null
        },
        category: {
          type: _mongoose.Schema.Types.ObjectId,
          ref: 'categorys',
          required: [true, 'Please add a CategoryId']
        },
        user: {
          type: _mongoose.Schema.Types.ObjectId,
          ref: 'users',
          required: [true, 'userid required']
        }
      }, {
        timestamps: true
      });
      schema.plugin(_mongooseUniqueValidator["default"]);

      _mongoose["default"].model('questions', schema);
    }
  }, {
    key: "getInstance",
    value: function getInstance() {
      this.initSchema();
      return _mongoose["default"].model('questions');
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "getModel",
    value: function getModel() {
      return _mongoose["default"].model('questions');
    }
  }]);

  return QuestionModel;
}();

var _default = QuestionModel;
exports["default"] = _default;