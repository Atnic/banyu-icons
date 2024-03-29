import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPlatformPc({
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
        d="M7.467 19.717a.76.76 0 0 1-.536-1.294.76.76 0 0 1 .536-.222h2.265v-1.518h-4.93a2.127 2.127 0 0 1-2.128-2.127V6.418A2.13 2.13 0 0 1 4.802 4.29h14.397a2.127 2.127 0 0 1 2.127 2.128v8.137a2.127 2.127 0 0 1-2.127 2.128H14.27V18.2h2.267a.76.76 0 0 1 .758.758.76.76 0 0 1-.758.758zM4.691 6.637V14h14.62V6.636a1.06 1.06 0 0 0-1.065-1.064H5.755A1.06 1.06 0 0 0 4.69 6.636"
      />
    </svg>
  );
}
SvgPlatformPc.propTypes = {
  className: PropTypes.string,
};
export default SvgPlatformPc;
