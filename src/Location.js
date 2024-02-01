import * as React from "react";
const SvgLocation = ({ title, titleId, ...props }) => (
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
    <path d="M12.078 21.003c-.536 0-2.148-1.915-3.518-4.182-1.741-2.879-2.74-5.634-2.74-7.557a7.258 7.258 0 0 1 .539-2.876 5.247 5.247 0 0 1 1.42-1.94 6.595 6.595 0 0 1 4.3-1.442 6.594 6.594 0 0 1 4.302 1.442 5.246 5.246 0 0 1 1.42 1.94c.373.912.556 1.89.539 2.876-.004 4.502-5.145 11.74-6.262 11.74m.113-14.964a3.336 3.336 0 1 0 0 6.673 3.336 3.336 0 0 0 0-6.673" />
  </svg>
);
export default SvgLocation;
