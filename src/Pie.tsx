import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPie({
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
        d="M20.997 12.23a9 9 0 1 1-5.912-8.685L12 12z"
      />
      <path
        fill="currentColor"
        d="M20.119 10.998h-6.515l2.299-6.115c1.244.642 2.165 1.425 2.941 2.6.776 1.177 1.173 2.118 1.274 3.515"
      />
    </svg>
  );
}
SvgPie.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgPie;
