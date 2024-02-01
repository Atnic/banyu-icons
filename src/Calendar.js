import * as React from "react";
const SvgCalendar = ({ title, titleId, ...props }) => (
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
      d="M18.455 3.822h.909c1 0 1.818.818 1.818 1.818v14.545c0 1-.818 1.818-1.818 1.818H4.818c-1 0-1.818-.818-1.818-1.818V5.64c0-1 .818-1.818 1.818-1.818h.91V2.003h1.817v1.819h9.091V2.003h1.819zM4.817 20.185h14.546V8.367H4.818z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendar;
