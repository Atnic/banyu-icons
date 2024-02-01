import * as React from "react";
const SvgSearch = ({ title, titleId, ...props }) => (
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
      d="M6.45 17.214a7.76 7.76 0 0 0 4.311 1.307 7.71 7.71 0 0 0 4.654-1.547c.041.06.088.115.14.168l3.004 3.003a1.209 1.209 0 1 0 1.71-1.71l-3.004-3.003a1.217 1.217 0 0 0-.191-.157 7.76 7.76 0 1 0-10.625 1.939M7.84 6.39a5.257 5.257 0 0 1 2.921-.886 5.263 5.263 0 0 1 5.258 5.257A5.257 5.257 0 1 1 7.84 6.39"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
