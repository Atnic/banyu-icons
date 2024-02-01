import * as React from "react";
const SvgActivity = ({ title, titleId, ...props }) => (
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
    <path d="M7.437 5.882a8.178 8.178 0 0 1 9.13.018 8.19 8.19 0 0 1 3.013 3.725s-3.214-3.404-7.593-3.095A6.522 6.522 0 0 0 6.692 9.56h1.236L5.464 12.48 3 9.561h1.423a8.189 8.189 0 0 1 3.014-3.68" />
    <path d="M11.466 15.557h.6a.65.65 0 0 0 .65-.651v-1.724h1.723a.65.65 0 0 0 .649-.65v-.6a.652.652 0 0 0-.649-.65h-1.723V9.557a.652.652 0 0 0-.65-.65h-.6a.65.65 0 0 0-.649.65v1.725H9.095a.65.65 0 0 0-.649.65v.6a.652.652 0 0 0 .649.65h1.722v1.725a.651.651 0 0 0 .65.65" />
    <path d="M18.536 11.524 21 14.44h-1.424a8.193 8.193 0 0 1-7.6 5.059 8.183 8.183 0 0 1-7.556-5.125s3.214 3.404 7.593 3.096a6.52 6.52 0 0 0 5.294-3.03h-1.236z" />
  </svg>
);
export default SvgActivity;
