import * as React from "react";
const SvgComment1 = ({ title, titleId, ...props }) => (
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
    <path d="M16.29 4.5a2.375 2.375 0 0 1 2.374 2.375v9.05L21 19.18l-4.5.035c-.07.007-.14.01-.21.01H5.374A2.375 2.375 0 0 1 3 16.85V6.875A2.375 2.375 0 0 1 5.375 4.5z" />
  </svg>
);
export default SvgComment1;
