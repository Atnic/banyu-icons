import * as React from "react";
const SvgArrowDown = ({ title, titleId, ...props }) => (
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
    <path d="M12.009 18.067a1.416 1.416 0 0 1-1.23-.668l-4.772-4.772a1.426 1.426 0 0 1-.436-1.01 1.43 1.43 0 0 1 .883-1.329 1.431 1.431 0 0 1 1.1.01c.174.075.33.184.462.32l2.546 2.547V7.356a1.423 1.423 0 0 1 2.426-1.005 1.418 1.418 0 0 1 .417 1.005v5.858l2.598-2.595a1.421 1.421 0 0 1 2.01 2.01l-4.773 4.774a1.426 1.426 0 0 1-1.205.666h-.025z" />
  </svg>
);
export default SvgArrowDown;
