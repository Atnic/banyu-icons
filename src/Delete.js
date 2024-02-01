import * as React from "react";
const SvgDelete = ({ title, titleId, ...props }) => (
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
    <path d="M18.984 3.984V6H5.016V3.984h3.468L9.516 3h4.968l1.032.984zM6 18.984v-12h12v12c0 .532-.203 1-.61 1.407-.406.406-.874.609-1.406.609H8.016c-.532 0-1-.203-1.407-.61-.406-.406-.609-.874-.609-1.406" />
  </svg>
);
export default SvgDelete;
