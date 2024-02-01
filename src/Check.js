import * as React from "react";
const SvgCheck = ({ title, titleId, ...props }) => (
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
    <path d="m8.643 17.476-.255-.25a1.654 1.654 0 0 1-.48-.471l-4.201-4.111c-.279-.275-.085-1.038.434-1.71.52-.673 1.168-.99 1.448-.717l3.533 3.454 8.948-8.21a1.346 1.346 0 0 1 1.988.29 1.637 1.637 0 0 1-.07 2.175L9.963 17.14a1.2 1.2 0 0 1-.616.304c-.117.07-.247.116-.382.135a.38.38 0 0 1-.32-.102" />
  </svg>
);
export default SvgCheck;
