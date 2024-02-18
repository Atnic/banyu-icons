import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDanger = ({
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
      d="M12.5 21a9.007 9.007 0 0 1-3.455-.684 8.859 8.859 0 0 1-2.909-1.952A8.941 8.941 0 0 1 3.5 12a8.943 8.943 0 0 1 2.636-6.364 8.859 8.859 0 0 1 2.909-1.952A9.007 9.007 0 0 1 12.499 3a9.008 9.008 0 0 1 3.456.684 8.86 8.86 0 0 1 2.909 1.952 8.942 8.942 0 0 1 2.636 6.365 8.941 8.941 0 0 1-2.636 6.364 8.861 8.861 0 0 1-2.91 1.951A9.01 9.01 0 0 1 12.5 21m.007-7.511 3.25 2.818a1.004 1.004 0 0 0 .755.245.996.996 0 0 0 .686-.393 1.148 1.148 0 0 0-.166-1.54l-2.938-2.546 2.852-2.546a1.144 1.144 0 0 0 .115-1.54 1.004 1.004 0 0 0-.798-.396.972.972 0 0 0-.648.25l-3.154 2.818L9.209 7.84a1.005 1.005 0 0 0-.656-.25.988.988 0 0 0-.784.396 1.15 1.15 0 0 0 .165 1.54l2.939 2.546-2.852 2.546a1.143 1.143 0 0 0-.116 1.54 1.007 1.007 0 0 0 .799.396c.24-.001.47-.09.647-.25l3.155-2.818z"
    />
  </svg>
);
export default SvgDanger;
