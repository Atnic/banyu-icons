import * as React from "react";
const SvgCopy = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.205 21a2.455 2.455 0 0 1-2.455-2.455V8.727a2.47 2.47 0 0 1 1.742-2.349c-.07.231-.105.471-.105.713v9.818a2.454 2.454 0 0 0 2.455 2.455h8.182c.24 0 .481-.036.712-.106A2.44 2.44 0 0 1 14.386 21zm3.272-3.273a2.454 2.454 0 0 1-2.454-2.454V5.455A2.455 2.455 0 0 1 9.477 3h8.182a2.454 2.454 0 0 1 2.455 2.455v9.818a2.454 2.454 0 0 1-2.455 2.454z" />
  </svg>
);
export default SvgCopy;
