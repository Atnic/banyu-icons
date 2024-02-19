import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgSunnyHeavy({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 25 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M12.5 2c.263 0 .476.213.476.476v.953a.476.476 0 0 1-.952 0v-.953c0-.263.213-.476.476-.476M19.167 12a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0M12.976 20.571a.476.476 0 0 0-.952 0v.953a.476.476 0 1 0 .952 0zM22.5 12a.476.476 0 0 1-.476.476h-.953a.476.476 0 0 1 0-.952h.953c.263 0 .476.213.476.476M3.929 12.476a.476.476 0 0 0 0-.952h-.953a.476.476 0 0 0 0 .952zM19.571 19.071a.476.476 0 0 1-.673 0l-.674-.673a.476.476 0 1 1 .674-.674l.673.674a.476.476 0 0 1 0 .673M6.102 6.276a.476.476 0 0 0 .674-.674l-.674-.673a.476.476 0 0 0-.673.673zM5.429 19.071a.476.476 0 0 1 0-.673l.673-.674a.476.476 0 1 1 .674.674l-.674.673a.476.476 0 0 1-.673 0M18.224 5.602a.476.476 0 1 0 .674.674l.673-.674a.476.476 0 1 0-.674-.673z"
      />
    </svg>
  );
}
SvgSunnyHeavy.propTypes = {
  className: PropTypes.string,
};
export default SvgSunnyHeavy;
