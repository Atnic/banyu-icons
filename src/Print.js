import * as React from "react";
const SvgPrint = ({ title, titleId, ...props }) => (
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
    <path d="M6 3h12v4H6zM5 8h14c1.66 0 3 1.34 3 3v6h-4v4H6v-4H2.002v-6c0-1.66 1.34-3 3-3zm3 11h8v-5H8zm11-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
  </svg>
);
export default SvgPrint;
