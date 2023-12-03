import * as React from "react";
const SvgNews = ({ title, titleId, ...props }) => (
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
    <path
      fill="#404040"
      d="M5.25 8.375H16.5V9.5H5.25zM15.376 15.125h-3.938v1.125h3.938zM11.438 12.875H16.5V14h-5.063zM16.5 10.625h-5.062v1.125H16.5zM5.25 10.625h5.063v5.625H5.25z"
    />
    <path
      fill="#404040"
      fillRule="evenodd"
      d="M3 5h15.75v2.25H21v10.125c0 2.215-1.688 2.25-1.688 2.25H5.25C3 19.625 3 17.375 3 17.375zm1.816 13.42c.138.056.285.083.434.08h12.755a1.627 1.627 0 0 1-.38-1.125V6.125h-13.5v11.25a1.102 1.102 0 0 0 .69 1.046"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNews;
