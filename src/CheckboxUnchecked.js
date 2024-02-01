import * as React from "react";
const SvgCheckboxUnchecked = ({ title, titleId, ...props }) => (
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
      d="M6 5a1 1 0 0 0-1 1v11.673a1 1 0 0 0 1 1h11.673a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h11.673a3 3 0 0 1 3 3v11.673a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckboxUnchecked;
