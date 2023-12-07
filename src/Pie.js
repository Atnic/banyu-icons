import * as React from "react";
const SvgPie = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="#404040" d="M20.997 12.23a9 9 0 1 1-5.912-8.685L12 12z" />
    <path
      fill="#404040"
      d="M20.119 10.998h-6.515l2.299-6.115c1.244.642 2.165 1.425 2.941 2.6.776 1.177 1.173 2.118 1.274 3.515"
    />
  </svg>
);
export default SvgPie;
