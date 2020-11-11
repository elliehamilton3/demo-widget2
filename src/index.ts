import "babel-polyfill";
import { Card } from "./card";
import { HtmlTagWrapper } from "./html-tag-wrapper";

const WrappedSimpleCalendar = HtmlTagWrapper(Card);

export default {
  SimpleCalendar: WrappedSimpleCalendar,
};
