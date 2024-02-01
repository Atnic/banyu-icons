import * as React from "react";
const SvgWarningFill = ({ title, titleId, ...props }) => (
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
      d="m13.235 5.652 7.143 10.358c.686.995-.026 2.351-1.235 2.351H4.857c-1.21 0-1.921-1.356-1.235-2.351l7.143-10.358a1.5 1.5 0 0 1 2.47 0m-1.966 8.18h1.19l.25-4.771h-1.69zm-.05 1.049c-.146.14-.219.346-.219.62 0 .264.075.469.225.615.15.143.36.215.634.215.267 0 .476-.073.625-.22.15-.15.225-.353.225-.61 0-.267-.075-.472-.225-.615-.146-.143-.354-.215-.625-.215-.28 0-.493.07-.64.21"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarningFill;
