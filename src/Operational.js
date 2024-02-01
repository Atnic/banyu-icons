import * as React from "react";
const SvgOperational = ({ title, titleId, ...props }) => (
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
    <path d="M5.225 14.65a3.024 3.024 0 0 1 3.103-.973c.03-.047.064-.092.1-.134l4.246-5.061c.036-.043.074-.083.115-.122a3.02 3.02 0 0 1 3.634-4.166l-1.494 1.78a1.161 1.161 0 0 0 1.78 1.493l1.493-1.78a3.02 3.02 0 0 1-3.122 4.376c-.049.102-.11.198-.183.284L10.65 15.41a1.338 1.338 0 0 1-.248.23 3.02 3.02 0 0 1-3.768 3.834l1.492-1.778a1.161 1.161 0 0 0-1.78-1.492l-1.493 1.78a3.014 3.014 0 0 1 .372-3.334" />
  </svg>
);
export default SvgOperational;
