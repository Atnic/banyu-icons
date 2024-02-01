import * as React from "react";
const SvgDownload = ({ title, titleId, ...props }) => (
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
    <path d="M5.045 19.975a1.637 1.637 0 0 1-1.341-.702A1.636 1.636 0 0 1 3 17.93v-3.273a1.636 1.636 0 0 1 3.273 0v2.046h11.454v-2.046a1.636 1.636 0 1 1 3.273 0v3.273a1.636 1.636 0 0 1-.702 1.344 1.635 1.635 0 0 1-1.343.702zm6.83-4.091a1.416 1.416 0 0 1-1.23-.668l-4.772-4.772a1.42 1.42 0 1 1 2.01-2.01l2.546 2.546V5.171a1.422 1.422 0 0 1 2.842 0v5.858l2.599-2.595a1.421 1.421 0 0 1 2.01 2.01l-4.775 4.775a1.427 1.427 0 0 1-1.204.665z" />
  </svg>
);
export default SvgDownload;
