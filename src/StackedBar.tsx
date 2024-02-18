import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgStackedBar({
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
        d="M3.434 12.898h3.83v8.168h-3.83zM3.434 7.86a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1V12h-3.83zM16.914 13.05h3.83v8.016h-3.83zM16.914 5.183a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1V12.2h-3.83zM10.085 17.253h3.83v3.813h-3.83zM10.085 11.385a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v4.861h-3.83z"
      />
    </svg>
  );
}
SvgStackedBar.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgStackedBar;
