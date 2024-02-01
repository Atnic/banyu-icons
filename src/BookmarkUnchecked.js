import * as React from "react";
const SvgBookmarkUnchecked = ({ title, titleId, ...props }) => (
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
    <path
      fillRule="evenodd"
      d="M7 3h10c1.1 0 2 .9 2 2v16l-7-3-7 3 .01-16c0-1.1.89-2 1.99-2m5 12.82L17 18V5H7v13z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBookmarkUnchecked;
