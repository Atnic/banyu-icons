import * as React from "react";
const SvgRemove = ({ title, titleId, ...props }) => (
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
    <path d="M5.521 13.543h4.925l3.11-.001h4.923a1.562 1.562 0 0 0 1.078-.463 1.535 1.535 0 0 0 0-2.157 1.562 1.562 0 0 0-1.078-.463H5.52a1.562 1.562 0 0 0-1.077.464 1.536 1.536 0 0 0 0 2.156c.284.289.67.455 1.077.464" />
  </svg>
);
export default SvgRemove;
