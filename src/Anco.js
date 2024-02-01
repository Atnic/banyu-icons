import * as React from "react";
const SvgAnco = ({ title, titleId, ...props }) => (
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
      d="m18.663 16.867-5.863-6.7V3h-1.6v7.166l-5.863 6.7h-.804a2.133 2.133 0 0 0 0 4.267h14.934a2.133 2.133 0 1 0 0-4.266zm-2.126 0L12 11.68l-4.537 5.186z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAnco;
