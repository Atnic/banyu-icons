import * as React from "react";
const SvgEmptyStock = ({ title, titleId, ...props }) => (
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
    <path d="m12.298 10.205.01.036 7.67.022 1.816 3.066-7.463 1.397-2.003-4.412 1.326 5.206 6.325-1.275v7.015l-7.68 1.701zM4.02 21.265v-7.016l6.323 1.275 1.3-5.027-1.977 4.229-7.46-1.395 1.817-3.066h7.72v.022l-.04.089v12.591z" />
    <path
      fillRule="evenodd"
      d="M14.116 7.95a3.486 3.486 0 1 1-4.93-4.929 3.486 3.486 0 0 1 4.93 4.93m-4.598-.938 3.66-3.66a2.623 2.623 0 0 0-3.66 3.66m.607.607a2.623 2.623 0 0 0 3.66-3.66z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmptyStock;
