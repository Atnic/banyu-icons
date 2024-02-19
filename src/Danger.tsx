import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgDanger({
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
        d="M12.5 21a9 9 0 0 1-3.455-.684 8.9 8.9 0 0 1-2.909-1.952A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.636-6.364 8.9 8.9 0 0 1 2.909-1.952A9 9 0 0 1 12.499 3a9 9 0 0 1 3.456.684 8.9 8.9 0 0 1 2.909 1.952 8.94 8.94 0 0 1 2.636 6.365 8.94 8.94 0 0 1-2.636 6.364 8.9 8.9 0 0 1-2.91 1.951A9 9 0 0 1 12.5 21m.007-7.511 3.25 2.818a1 1 0 0 0 .755.245 1 1 0 0 0 .686-.393 1.15 1.15 0 0 0-.166-1.54l-2.938-2.546 2.852-2.546a1.144 1.144 0 0 0 .115-1.54 1 1 0 0 0-.798-.396.97.97 0 0 0-.648.25l-3.154 2.818L9.209 7.84a1 1 0 0 0-.656-.25.99.99 0 0 0-.784.396 1.15 1.15 0 0 0 .165 1.54l2.939 2.546-2.852 2.546a1.143 1.143 0 0 0-.116 1.54 1 1 0 0 0 .799.396c.24-.001.47-.09.647-.25l3.155-2.818z"
      />
    </svg>
  );
}
SvgDanger.propTypes = {
  className: PropTypes.string,
};
export default SvgDanger;
