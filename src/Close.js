import * as React from "react";
const SvgClose = ({ title, titleId, ...props }) => (
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
    <path d="M18 7.208 16.792 6 12 10.792 7.208 6 6 7.208 10.792 12 6 16.792 7.208 18 12 13.208 16.792 18 18 16.792 13.208 12z" />
  </svg>
);
export default SvgClose;
