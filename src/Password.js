import * as React from "react";
const SvgPassword = ({ title, titleId, ...props }) => (
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
    <path d="M5.708 21A1.208 1.208 0 0 1 4.5 19.792v-9.38a1.208 1.208 0 0 1 1.208-1.207h.604a8.745 8.745 0 0 1 1.606-3.946A5.166 5.166 0 0 1 12.018 3a5.17 5.17 0 0 1 4.1 2.26 8.73 8.73 0 0 1 1.604 3.945h.64a1.208 1.208 0 0 1 1.207 1.208v9.379A1.208 1.208 0 0 1 18.361 21zm4.688-7.087a1.439 1.439 0 0 0 .557 1.133l-.556 2.209h2.861l-.56-2.203a1.431 1.431 0 1 0-2.303-1.138zm4.92-4.708c-.431-2.227-1.75-3.857-3.299-3.857-1.548 0-2.869 1.63-3.3 3.857z" />
  </svg>
);
export default SvgPassword;
