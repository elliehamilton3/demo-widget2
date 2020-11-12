import "babel-polyfill";
import { Card } from "./components/Card/Card";
import { HtmlTagWrapper } from "./components/HtmlTagWrapper/HtmlTagWrapper";

const WrappedSimpleCalendar = HtmlTagWrapper(Card);

export default {
  SimpleCalendar: WrappedSimpleCalendar,
};
