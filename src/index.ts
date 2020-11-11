import "babel-polyfill";
import { Card } from "./Card";
import { HtmlTagWrapper } from "./html-tag-wrapper";

const WrappedSimpleCalendar = HtmlTagWrapper(Card);

export default {
  SimpleCalendar: WrappedSimpleCalendar,
};
