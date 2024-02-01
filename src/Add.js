import * as React from "react";
const SvgAdd = ({ title, titleId, ...props }) => (
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
    <path d="M10.446 18.425v-4.882H5.52a1.561 1.561 0 0 1-1.077-.463 1.535 1.535 0 0 1 0-2.157 1.561 1.561 0 0 1 1.077-.464h4.925V5.576a1.53 1.53 0 0 1 .443-1.112A1.557 1.557 0 0 1 12 4a1.567 1.567 0 0 1 1.112.464 1.541 1.541 0 0 1 .443 1.112v4.883h4.924c.406.008.793.175 1.078.463a1.536 1.536 0 0 1 0 2.157 1.562 1.562 0 0 1-1.078.463h-4.924v4.882a1.531 1.531 0 0 1-.443 1.112A1.555 1.555 0 0 1 12 20a1.567 1.567 0 0 1-1.111-.464 1.54 1.54 0 0 1-.443-1.111" />
  </svg>
);
export default SvgAdd;
