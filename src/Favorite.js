import * as React from "react";
const SvgFavorite = ({ title, titleId, ...props }) => (
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
    <path d="m17.14 20.456-4.524-2.417a.66.66 0 0 0-.615-.003L7.446 20.39a.662.662 0 0 1-.955-.709l.9-5.05a.66.66 0 0 0-.186-.586l-3.647-3.598a.662.662 0 0 1 .377-1.125l5.08-.703a.662.662 0 0 0 .5-.359l2.3-4.584A.662.662 0 0 1 13 3.685l2.24 4.613a.66.66 0 0 0 .495.366l5.072.77a.661.661 0 0 1 .358 1.13l-3.696 3.557a.66.66 0 0 0-.194.584l.836 5.061a.661.661 0 0 1-.972.69" />
  </svg>
);
export default SvgFavorite;
