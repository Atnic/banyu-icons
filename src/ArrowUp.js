import * as React from "react";
const SvgArrowUp = ({ title, titleId, ...props }) => (
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
    <path d="M11.991 5.934a1.416 1.416 0 0 1 1.23.667l4.772 4.773a1.425 1.425 0 0 1 .436 1.01 1.417 1.417 0 0 1-.884 1.329 1.432 1.432 0 0 1-1.1-.01 1.417 1.417 0 0 1-.462-.32l-2.546-2.547v5.809a1.424 1.424 0 0 1-.877 1.313 1.41 1.41 0 0 1-1.088 0 1.418 1.418 0 0 1-.877-1.313v-5.859l-2.6 2.595a1.421 1.421 0 1 1-2.01-2.01l4.775-4.774a1.425 1.425 0 0 1 1.204-.666h.026z" />
  </svg>
);
export default SvgArrowUp;
