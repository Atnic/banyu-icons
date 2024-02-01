import * as React from "react";
const SvgArchive = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M19.872 7.892H4.128v10.882a1 1 0 0 0 1 1h13.744a1 1 0 0 0 1-1zm-8.223 9.762a.907.907 0 0 0 .357.066h.016a.914.914 0 0 0 .772-.426l3.059-3.06a.91.91 0 1 0-1.288-1.287L12.9 14.61v-3.754a.91.91 0 0 0-1.821 0v3.722l-1.632-1.631a.911.911 0 1 0-1.287 1.287l3.058 3.059a.907.907 0 0 0 .43.362"
      clipRule="evenodd"
    />
    <path d="M3.4 5.226a1 1 0 0 1 1-1h15.2a1 1 0 0 1 1 1v1.758H3.4z" />
  </svg>
);
export default SvgArchive;
