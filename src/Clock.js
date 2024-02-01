import * as React from "react";
const SvgClock = ({ title, titleId, ...props }) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9.392 1.56c.1.065.218.1.338.1h4.38a.625.625 0 1 0 0-1.25h-4.068V7.09a.626.626 0 1 0-1.25 0v5.632a.626.626 0 0 0 .37.57c.05.11.13.203.23.268"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClock;
