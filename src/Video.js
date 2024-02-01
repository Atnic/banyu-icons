import * as React from "react";
const SvgVideo = ({ title, titleId, ...props }) => (
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
    <path d="M5.75 6.003h7.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.5a2.25 2.25 0 0 1 2.25-2.25M20.146 9.566c0-.725 0-1.313-.976-1.313-.97 0-2.92 1.312-2.92 1.312v5.25c0 .725 1.945 1.313 2.92 1.313.975 0 .975-.588.975-1.312z" />
  </svg>
);
export default SvgVideo;
