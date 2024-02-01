import * as React from "react";
const SvgTools = ({ title, titleId, ...props }) => (
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
    <path d="M16.027 19.554V9.952a3.468 3.468 0 0 1 2.896 0v9.604a1.448 1.448 0 0 1-2.896 0zm-8.147.396a2.058 2.058 0 0 1-2.046-2.067L5.25 7.597A2.058 2.058 0 0 1 7.296 5.53H9.23V3.003h8.606V5.26a1.45 1.45 0 0 1 1.086 1.402V9.13a3.466 3.466 0 0 0-2.896 0V6.664a1.45 1.45 0 0 1 .723-1.254V3.954h-6.43v1.577h2.78a2.058 2.058 0 0 1 2.045 2.067l-.542 10.286a2.059 2.059 0 0 1-2.045 2.067zm1.193-7.284a1.158 1.158 0 1 0 1.146-1.002 1.082 1.082 0 0 0-1.147 1.002zm-1.905-2.253h6.09V7.519h-6.09z" />
  </svg>
);
export default SvgTools;
