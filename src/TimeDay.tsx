import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTimeDay({
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
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M12 2.004c.263 0 .476.213.476.476v.952a.476.476 0 1 1-.952 0V2.48c0-.263.213-.476.476-.476M18.667 12.003a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0M12.476 20.575a.476.476 0 1 0-.952 0v.953a.476.476 0 1 0 .952 0zM22 12.004a.476.476 0 0 1-.477.476h-.952a.476.476 0 1 1 0-.953h.952c.264 0 .477.213.477.477M3.428 12.48a.476.476 0 1 0 0-.953h-.952a.476.476 0 1 0 0 .953zM19.071 19.074a.476.476 0 0 1-.674 0l-.673-.673a.476.476 0 1 1 .674-.674l.673.674a.476.476 0 0 1 0 .673M5.603 6.28a.476.476 0 1 0 .673-.674l-.673-.674a.476.476 0 1 0-.674.674zM4.93 19.074a.476.476 0 0 1 0-.673l.673-.674a.476.476 0 1 1 .673.674l-.673.673a.476.476 0 0 1-.674 0M17.724 5.606a.476.476 0 1 0 .674.673l.673-.673a.476.476 0 1 0-.674-.674z"
      />
    </svg>
  );
}
SvgTimeDay.propTypes = {
  className: PropTypes.string,
};
export default SvgTimeDay;
