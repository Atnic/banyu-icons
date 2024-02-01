import * as React from "react";
const SvgMessage = ({ title, titleId, ...props }) => (
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
    <path d="M6.16 18.09a2.116 2.116 0 0 1-2.116-2.116V9.388c0-.048 0-.097.005-.145.22 1.416 7.816 4.363 7.892 4.391.076-.03 7.674-2.984 7.892-4.39a2.3 2.3 0 0 1 .005.144v6.585a2.119 2.119 0 0 1-2.116 2.116zM4.161 8.036V7.4C4.161 5.993 5.091 6 6.384 6H17.5c1.292 0 2.456-.007 2.456 1.4v.634c0 1.406-8.014 4.327-8.014 4.327s-7.78-2.92-7.78-4.325" />
  </svg>
);
export default SvgMessage;
