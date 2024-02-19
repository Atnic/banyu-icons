import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgStackedLine({
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
        d="M6.415 9.56c-2.205 1.127-2.418 5.86-2.418 5.86s1.779-2.348 3.44-2.976c2.607-.984 4.46 2.683 6.976 1.488 2.184-1.037.997-5.773 3.348-5.208l2.232 1.86v-2.79s-2.28-2.475-4.185-2.511c-2.556-.05-2.501 3.56-4.955 4.278-1.663.487-2.895-.789-4.438 0"
      />
      <path
        fill="currentColor"
        d="M15.25 14.955c-2.593 1.551-4.84-2.47-7.626-1.302-1.811.76-3.669 3.441-3.669 3.441v1.623h16.09v-6.831s-.954-1.415-1.912-1.674c-2.092-.566-1.023 3.63-2.883 4.743"
      />
    </svg>
  );
}
SvgStackedLine.propTypes = {
  className: PropTypes.string,
};
export default SvgStackedLine;
