import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgIdn({
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
        fill="#E22B3A"
        stroke="#CCC"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M21.5 7.65A1.654 1.654 0 0 0 19.85 6H5.15A1.654 1.654 0 0 0 3.5 7.65v4.454h18z"
      />
      <path
        fill="#fff"
        stroke="#CCC"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M21.5 16.669a1.675 1.675 0 0 1-1.65 1.69H5.15a1.675 1.675 0 0 1-1.65-1.69v-4.565h18z"
      />
    </svg>
  );
}
SvgIdn.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgIdn;
