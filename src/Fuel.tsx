import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgFuel({
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
        d="M12 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12 21m-5.12-4.806v1.551h10.086v-1.551zm5.31-6.87c-.053.39-.05.785.008 1.174.12.892.502 1.73 1.097 2.405a1 1 0 0 1 .26 1.077 2.1 2.1 0 0 1-1.82 1.009q.104.006.24.007c.675 0 1.342-.15 1.952-.44a2.5 2.5 0 0 0 1.22-1.127 1.57 1.57 0 0 0-.389-1.755 7.23 7.23 0 0 1-1.738-3.816 6.8 6.8 0 0 1-.014-1.862 18.7 18.7 0 0 0-2.683 2.662 8 8 0 0 0-1.434 2.466 2.77 2.77 0 0 0 .213 2.452c.26.402.615.734 1.032.967a1.8 1.8 0 0 1-.401-.443 1.74 1.74 0 0 1-.135-1.545 5.1 5.1 0 0 1 .903-1.552 12 12 0 0 1 1.685-1.675zm-.604 2.836c-.02.016-1.84 1.451-1.23 2.39a1.04 1.04 0 0 0 .905.447 1.12 1.12 0 0 0 1-.494.5.5 0 0 0-.124-.553 2.32 2.32 0 0 1-.551-1.79"
      />
    </svg>
  );
}
SvgFuel.propTypes = {
  className: PropTypes.string,
};
export default SvgFuel;
