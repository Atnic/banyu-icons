import * as React from "react";
const SvgPin = ({ title, titleId, ...props }) => (
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
    <path d="m19.3 6.75 1.1 1c.2.2.2.5-.1.6-.7.9-1.8 1.1-2.8.7l-3.6 5.1c.7.9.7 2.3-.1 3.2-.2.2-.5.2-.7 0l-1.931-1.676L4 21.25l4.563-7.836L6.3 11.45c-.2-.2-.2-.5 0-.7.9-.9 2.2-1.1 3.2-.5l4.6-4.2c-.5-.9-.4-2.1.3-2.9.2-.2.5-.2.7 0l2.7 2.3z" />
  </svg>
);
export default SvgPin;
