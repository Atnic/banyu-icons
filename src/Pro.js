import * as React from "react";
const SvgPro = ({ title, titleId, ...props }) => (
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
    <path d="M18.713 16.862H5.367v-2.59L3 8.026l5.568 1.553L11.86 4.5l3.052 4.837L21 8.026l-2.287 6.246zM18.7 17.411H5.31v2.14H18.7z" />
  </svg>
);
export default SvgPro;
