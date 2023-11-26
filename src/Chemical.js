import * as React from "react";
const SvgChemical = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.126 5.3a1.3 1.3 0 0 1 1.3-1.3h1.524c.03 0 .06.003.09.008h1.443a1.3 1.3 0 0 1 1.3 1.3v.322a.977.977 0 0 1-.954.976v4.642l4.449 7.862a1 1 0 0 1-.87 1.492H11.91a.51.51 0 0 1-.09-.008H6.502a1 1 0 0 1-.87-1.492l4.45-7.862V6.598a.977.977 0 0 1-.955-.976v-.323Z"
      fill="#404040"
    />
  </svg>
);
export default SvgChemical;
