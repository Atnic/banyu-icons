import * as React from "react";
const SvgBar = ({ title, titleId, ...props }) => (
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
      fill="currentColor"
      d="M10.085 6.145a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v14.921h-3.83zM3.434 16.927a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v4.14h-3.83zM17.736 9.377a1 1 0 0 0-1 1v10.69h3.83v-10.69a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default SvgBar;
