import * as React from "react";
const SvgReadMessage = ({ title, titleId, ...props }) => (
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
    <path d="M6.62 19.207a1.97 1.97 0 0 1-1.97-1.97v-6.129c0-.045 0-.09.004-.135.205 1.318 7.275 4.06 7.346 4.087.07-.028 7.142-2.778 7.346-4.087.003.054.004.099.004.135v6.13a1.972 1.972 0 0 1-1.97 1.969zm-1.963-8.284H4.65V9.028c0-.676 1.97-1.735 3.62-2.505A58.153 58.153 0 0 1 11.89 5c.08.029 1.927.708 3.73 1.523 1.702.77 3.73 1.829 3.73 2.505v1.894h-.007c-.139-.69-2.157-1.727-3.827-2.477a62.293 62.293 0 0 0-3.623-1.475c-.018.005-1.758.66-3.521 1.477-1.62.749-3.58 1.786-3.715 2.475z" />
  </svg>
);
export default SvgReadMessage;
