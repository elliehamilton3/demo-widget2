"use strict";
exports.__esModule = true;
require("babel-polyfill");
var card_1 = require("./card");
var html_tag_wrapper_1 = require("./html-tag-wrapper");
var WrappedSimpleCalendar = html_tag_wrapper_1.HtmlTagWrapper(card_1.Card);
exports["default"] = {
    SimpleCalendar: WrappedSimpleCalendar
};
