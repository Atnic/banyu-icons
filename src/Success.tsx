import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSuccess = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#182230"
      d="M12.5 21a9.007 9.007 0 0 1-3.455-.684 8.859 8.859 0 0 1-2.909-1.952A8.941 8.941 0 0 1 3.5 12a8.943 8.943 0 0 1 2.636-6.364 8.859 8.859 0 0 1 2.909-1.952A9.007 9.007 0 0 1 12.499 3a9.008 9.008 0 0 1 3.456.684 8.86 8.86 0 0 1 2.909 1.952 8.942 8.942 0 0 1 2.636 6.365 8.941 8.941 0 0 1-2.636 6.364 8.861 8.861 0 0 1-2.91 1.951A9.01 9.01 0 0 1 12.5 21m-4.705-9.439a1.297 1.297 0 0 0-.828.557c-.362.457-.499.98-.304 1.167l2.93 2.813.005.007.011.016v.003c.009.012.017.024.027.035.08.103.178.19.288.26l.178.17a.249.249 0 0 0 .181.067h.041a.715.715 0 0 0 .267-.092c.16-.027.31-.1.43-.208l7-6.294a1.108 1.108 0 0 0 .049-1.488 1.034 1.034 0 0 0-.814-.416.845.845 0 0 0-.574.22l-6.245 5.616-2.464-2.365a.254.254 0 0 0-.178-.068"
    />
  </svg>
);
export default SvgSuccess;
