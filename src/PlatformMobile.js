import * as React from "react";
const SvgPlatformMobile = ({ title, titleId, ...props }) => (
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
    <path d="M8.833 21.143a1.687 1.687 0 0 1-1.688-1.688V4.551a1.685 1.685 0 0 1 1.688-1.687h6.334a1.687 1.687 0 0 1 1.688 1.687v14.904a1.687 1.687 0 0 1-1.688 1.688zm.421-16.72a.998.998 0 0 0-.998 1v11.082c0 .551.447.998.998.998h5.492a.998.998 0 0 0 .998-.998V5.422a.998.998 0 0 0-.998-.998zM12 20.35a.886.886 0 1 0 0-1.773.886.886 0 0 0 0 1.773" />
  </svg>
);
export default SvgPlatformMobile;
