import * as React from "react";
const SvgEdit = ({ title, titleId, ...props }) => (
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
    <path d="M16.133 4.242a.834.834 0 0 1 1.175 0l1.95 1.95a.83.83 0 0 1 0 1.175l-1.524 1.525-3.126-3.126zM4.5 15.875l9.217-9.217 3.125 3.125L7.625 19H4.5z" />
  </svg>
);
export default SvgEdit;
