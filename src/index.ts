import 'babel-polyfill';
import { Card } from './simple-calendar';
import { HtmlTagWrapper } from './html-tag-wrapper';

const WrappedSimpleCalendar = HtmlTagWrapper(Card);

export default {
  SimpleCalendar: WrappedSimpleCalendar,
};
