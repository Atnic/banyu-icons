import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgSuccess({
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
        d="M12.5 21a9 9 0 0 1-3.455-.684 8.9 8.9 0 0 1-2.909-1.952A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.636-6.364 8.9 8.9 0 0 1 2.909-1.952A9 9 0 0 1 12.499 3a9 9 0 0 1 3.456.684 8.9 8.9 0 0 1 2.909 1.952 8.94 8.94 0 0 1 2.636 6.365 8.94 8.94 0 0 1-2.636 6.364 8.9 8.9 0 0 1-2.91 1.951A9 9 0 0 1 12.5 21m-4.705-9.439a1.3 1.3 0 0 0-.828.557c-.362.457-.499.98-.304 1.167l2.93 2.813.005.007.011.016v.003q.013.018.027.035.122.155.288.26l.178.17a.25.25 0 0 0 .181.067h.041a.7.7 0 0 0 .267-.092c.16-.027.31-.1.43-.208l7-6.294a1.108 1.108 0 0 0 .049-1.488 1.03 1.03 0 0 0-.814-.416.85.85 0 0 0-.574.22l-6.245 5.616-2.464-2.365a.25.25 0 0 0-.178-.068"
      />
    </svg>
  );
}
SvgSuccess.propTypes = {
  className: PropTypes.string,
};
export default SvgSuccess;
