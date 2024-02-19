import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgHelp({
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
        d="M15.531 11.234a3.07 3.07 0 0 0 .938-2.25q0-1.64-1.172-2.812T12.484 5 9.672 6.172 8.5 8.984h1.969q0-.796.61-1.406.608-.61 1.405-.61t1.407.61q.609.61.609 1.406 0 .797-.61 1.407l-1.218 1.265Q11.5 12.921 11.5 14.47v.515h1.969q0-1.546 1.172-2.812zM13.47 18.97V17H11.5v1.969zM5.406 4.953Q8.36 2 12.484 2t7.032 2.953q2.953 2.906 2.953 7.031t-2.953 7.079q-2.907 2.906-7.032 2.906t-7.078-2.907Q2.5 16.11 2.5 11.985q0-4.125 2.906-7.03"
      />
    </svg>
  );
}
SvgHelp.propTypes = {
  className: PropTypes.string,
};
export default SvgHelp;
