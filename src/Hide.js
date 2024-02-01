import * as React from "react";
const SvgHide = ({ title, titleId, ...props }) => (
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
    <path d="M5.974 8.95C4.237 10.05 3 11.314 3 12.12c0 1.686 5.404 5.37 9.472 5.37a10.514 10.514 0 0 0 3.525-.802l-1.76-1.359a3.608 3.608 0 0 1-2.588.465 3.6 3.6 0 0 1-2.742-4.579zM15.949 12.413a3.59 3.59 0 0 0-1.054-2.695 3.604 3.604 0 0 0-3.6-.897L9.356 7.325c1.053-.356 2.124-.575 3.116-.575 2.1.107 4.121.842 5.8 2.11C19.878 10.001 21 11.342 21 12.12c0 .65-.778 1.687-1.966 2.675z" />
    <path d="M10.188 12.204a2.166 2.166 0 0 0 .738 1.685 2.16 2.16 0 0 0 2.026.448zM4.792 6.194a1 1 0 0 1 1.222-1.583l14.414 11.127a1 1 0 1 1-1.222 1.583z" />
  </svg>
);
export default SvgHide;
