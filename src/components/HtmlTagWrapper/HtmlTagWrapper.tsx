import React from "react";
import * as ReactDOM from "react-dom";
import attributesMapper from "../../lib/attributesMapper";

// eslint-disable-next-line no-unused-vars
function HtmlTagWrapper(Component: (props?: any) => JSX.Element) {
  const el = document.getElementById("widget");
  const props = attributesMapper(el);
  ReactDOM.render(<Component {...props} />, el);
}

export { HtmlTagWrapper };
