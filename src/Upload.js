import * as React from "react";
const SvgUpload = ({ title, titleId, ...props }) => (
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
    <path d="M11.857 3.75a1.416 1.416 0 0 1 1.23.668l4.772 4.773a1.42 1.42 0 1 1-2.009 2.01l-2.546-2.547v5.81a1.421 1.421 0 0 1-2.843 0V8.604L7.863 11.2a1.421 1.421 0 0 1-2.01-2.01l4.775-4.774a1.427 1.427 0 0 1 1.204-.666z" />
    <path d="M4.289 19.789c.233.121.493.185.756.185l13.91.001a1.635 1.635 0 0 0 1.343-.703A1.636 1.636 0 0 0 21 17.93v-3.273a1.636 1.636 0 0 0-3.273 0v2.046H6.273v-2.046a1.636 1.636 0 0 0-3.273 0v3.273a1.636 1.636 0 0 0 .704 1.344c.15.217.35.393.585.515" />
  </svg>
);
export default SvgUpload;
