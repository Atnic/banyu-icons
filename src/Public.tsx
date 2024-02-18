import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPublic({
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
        d="M3 12.003a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9m10.114 1.94c1.25.17.482 2.005.798 3.076.317 1.07-2.022 1.21-1.967 2.234a.9.9 0 0 0 .052.25 7.5 7.5 0 0 0 6.525-3.804c-.514-.12-1.174-.974-1.857-1.827-.857-1.07-1.745-2.143-2.412-1.761-1.36.771-2.417-.006-3.842-1.048a2.86 2.86 0 0 0-1.81-.428c-.771 0-1.31 0-1.074-1.2.208-1.07 4.935-1.32 5.251-1.873.454-.873-.092-2.207-.264-3.041a7.497 7.497 0 0 0-6.231 12.333c.286-.008.686.006 1.123.02 1.371.042 3.162.085 3.343-.515.108-.428 1.043-2.429 2.228-2.429q.07.002.137.012m-5.116.208c-.96-.487-1.395-1.513-2.174-1.371s-1.09-2.148-.397-3.015c.334-.417 1.42 2.159 2.236 2.297q.397-.052.78-.172c.929-.23 2.314-.457 2.29.89a1.48 1.48 0 0 1-1.568 1.655 2.7 2.7 0 0 1-1.167-.284"
      />
    </svg>
  );
}
SvgPublic.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgPublic;
