import * as React from "react";
const SvgLike = ({ title, titleId, ...props }) => (
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
    <path d="m12.003 19.843-.014.009v-.02a32.889 32.889 0 0 1-8.092-7.552 5.052 5.052 0 0 1 1.94-7.411C8.909 3.49 11.773 6.426 12 6.669c.223-.241 3.091-3.18 6.164-1.802a5.052 5.052 0 0 1 1.942 7.411 32.903 32.903 0 0 1-8.09 7.555v.019z" />
  </svg>
);
export default SvgLike;
