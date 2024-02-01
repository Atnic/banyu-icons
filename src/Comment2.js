import * as React from "react";
const SvgComment2 = ({ title, titleId, ...props }) => (
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
    <path d="M18.908 6.421A1.437 1.437 0 0 0 17.892 6h-8.33a1.437 1.437 0 0 0-1.438 1.437v5.274a1.438 1.438 0 0 0 1.438 1.438h8.33c.045 0 .09-.002.134-.007L21 14.124l-1.671-1.8V7.438c0-.38-.151-.746-.421-1.016" />
    <path d="M5.724 18.587h6.415a1.437 1.437 0 0 0 1.438-1.437v-2.092H8.653a1.437 1.437 0 0 1-1.437-1.438v-1.788H5.724a1.437 1.437 0 0 0-1.438 1.437v3.804L3 18.46l2.156.012c.18.077.373.116.568.115" />
  </svg>
);
export default SvgComment2;
