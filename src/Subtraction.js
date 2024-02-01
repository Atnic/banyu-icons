import * as React from "react";
const SvgSubtraction = ({ title, titleId, ...props }) => (
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
    <path d="M19.214 19.592a1 1 0 0 1-1 1H6.032a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h12.182a1 1 0 0 1 1 1zM7.396 17.046v.59h9.848v-.59zm0-3.545v.59h9.848V13.5zm0-3.546v.59h9.848v-.59zm0-3.545V7h9.848v-.59z" />
  </svg>
);
export default SvgSubtraction;
