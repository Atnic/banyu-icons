import * as React from "react";
const SvgWarningOutline = ({ title, titleId, ...props }) => (
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
    <g opacity={0.9}>
      <path d="M11.244 15.265a.797.797 0 0 0-.044.324.788.788 0 0 0 .221.595.85.85 0 0 0 .617.211.827.827 0 0 0 .607-.216.924.924 0 0 0 0-1.189.842.842 0 0 0-.61-.208.866.866 0 0 0-.621.204.795.795 0 0 0-.17.28M11.461 13.966h1.158l.242-4.636H11.22z" />
      <path
        fillRule="evenodd"
        d="m13.182 5.73 7.621 11.404c.42.628.123 1.7-.471 1.702l-16.663-.003c-.595 0-.892-1.075-.472-1.703l7.627-11.4a1.317 1.317 0 0 1 2.358 0M6.023 17.256h11.952c.426 0 .64-.77.338-1.22l-5.469-8.176a.944.944 0 0 0-1.692 0l-5.467 8.175c-.301.451-.088 1.221.338 1.221"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default SvgWarningOutline;
