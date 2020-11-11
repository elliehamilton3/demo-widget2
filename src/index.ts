import "babel-polyfill";
import { Card } from "./CardComponent";
import { HtmlTagWrapper } from "./html-tag-wrapper";

const WrappedSimpleCalendar = HtmlTagWrapper(Card);

export default {
  SimpleCalendar: WrappedSimpleCalendar,
};
