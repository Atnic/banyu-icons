import * as React from "react";
const SvgTable = ({ title, titleId, ...props }) => (
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
    <path d="M20.125 3.25H3.875C2.839 3.25 2 4.09 2 5.125v13.75c0 1.035.84 1.875 1.875 1.875h16.25c1.035 0 1.875-.84 1.875-1.875V5.125c0-1.036-.84-1.875-1.875-1.875m-9.375 15H4.5V14.5h6.25zm0-6.25H4.5V8.25h6.25zm8.75 6.25h-6.25V14.5h6.25zm0-6.25h-6.25V8.25h6.25z" />
  </svg>
);
export default SvgTable;
