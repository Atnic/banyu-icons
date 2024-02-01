import * as React from "react";
const SvgShare = ({ title, titleId, ...props }) => (
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
      d="M16.04 16.89c.52-.47 1.2-.77 1.96-.77 1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-.22.03-.44.08-.65l-7.12-4.16c-.54.5-1.25.81-2.04.81-1.66 0-3-1.34-3-3s1.34-3 3-3c.79 0 1.5.31 2.04.81l7.05-4.11c-.05-.23-.09-.46-.09-.7 0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.79 0-1.5-.31-2.04-.81l-7.05 4.11c.05.23.09.46.09.7 0 .24-.04.47-.09.7zM19 5.04c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1m-13 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m11 6.02c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShare;