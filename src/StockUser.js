import * as React from "react";
const SvgStockUser = ({ title, titleId, ...props }) => (
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
      d="M12.371 19.973h7.419v-7.57h-2.484v4.092h-2.452v-4.093h-2.483z"
    />
    <path
      fill="#404040"
      d="M15.352 12.403v3.596h1.458v-3.596zM4.21 19.973h7.418v-7.57H9.145v4.092H6.693v-4.093H4.209z"
    />
    <path
      fill="#404040"
      d="M7.19 12.403v3.596h1.458v-3.596zM8.661 11.598h7.419v-7.57h-2.484V8.12h-2.451V4.027H8.66z"
    />
    <path fill="#404040" d="M11.643 4.028v3.597H13.1V4.028z" />
  </svg>
);
export default SvgStockUser;
