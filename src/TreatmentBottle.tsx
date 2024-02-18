import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTreatmentBottle({
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
        fillRule="evenodd"
        d="M11.5 15.237v-3.605h1v3.605z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.198 12.934h3.604v1h-3.604zM8.2 4.577a.5.5 0 0 1 .5-.5h6.6a.5.5 0 0 1 .5.5v2.019a.5.5 0 0 1-.5.5H8.7a.5.5 0 0 1-.5-.5zm1 .5v1.019h5.6V5.077z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.978 6.596a.5.5 0 0 1 .5-.5h5.044a.5.5 0 0 1 .5.5v.736a2.5 2.5 0 0 1 2.415 2.498v7.592a2.5 2.5 0 0 1-2.5 2.5H9.064a2.5 2.5 0 0 1-2.5-2.5V9.83a2.5 2.5 0 0 1 2.415-2.498zm1 .5v.734a.5.5 0 0 1-.5.5h-.415a1.5 1.5 0 0 0-1.5 1.5v7.592a1.5 1.5 0 0 0 1.5 1.5h5.874a1.5 1.5 0 0 0 1.5-1.5V9.83a1.5 1.5 0 0 0-1.5-1.5h-.415a.5.5 0 0 1-.5-.5v-.734z"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgTreatmentBottle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgTreatmentBottle;
