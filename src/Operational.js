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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.611 4.884a.5.5 0 0 1 .5.5v12.732H19.39a.5.5 0 1 1 0 1H4.61a.5.5 0 0 1-.5-.5V5.384a.5.5 0 0 1 .5-.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.12 8.064a.5.5 0 0 1 .043.706l-3.499 3.948a.5.5 0 0 1-.674.068l-1.77-1.327-3.622 4.42a.5.5 0 0 1-.773-.634l3.925-4.79a.5.5 0 0 1 .687-.084l1.784 1.338 3.193-3.602a.5.5 0 0 1 .706-.043"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOperational;
