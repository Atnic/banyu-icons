import * as React from "react";
const SvgCheckboxChecked = ({ title, titleId, ...props }) => (
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
      d="M6 3a3 3 0 0 0-3 3v11.673a3 3 0 0 0 3 3h11.673a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm3.886 12.619.159.155a.237.237 0 0 0 .2.06.636.636 0 0 0 .237-.085.747.747 0 0 0 .382-.189l6.231-5.726a1.019 1.019 0 0 0 .044-1.352.838.838 0 0 0-1.235-.178l-5.561 5.11-2.198-2.15c-.174-.171-.577.034-.9.445-.322.411-.446.891-.27 1.062l2.612 2.556a1.031 1.031 0 0 0 .298.291"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckboxChecked;
