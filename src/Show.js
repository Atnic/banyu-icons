import * as React from "react";
const SvgShow = ({ title, titleId, ...props }) => (
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
    <path d="M10.926 13.889a2.16 2.16 0 0 0 3.432-2.422 1.433 1.433 0 0 1-1.289.796 1.44 1.44 0 0 1-1.288-2.085 2.16 2.16 0 0 0-.855 3.71" />
    <path
      fillRule="evenodd"
      d="M3 12.12c0 1.686 5.404 5.37 9.472 5.37 2.1-.107 4.12-.842 5.8-2.11C19.877 14.24 21 12.9 21 12.12c0-.778-1.122-2.119-2.728-3.26a10.515 10.515 0 0 0-5.8-2.11C8.404 6.75 3 10.435 3 12.12m7.352-2.85a3.6 3.6 0 1 1 4 5.987 3.6 3.6 0 0 1-4-5.987"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShow;
