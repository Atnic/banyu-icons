import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgCloudy({
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
        fillRule="evenodd"
        d="M17.32 16.98h.541c.6.067 1.49-.018 2.247-.506.793-.512 1.392-1.437 1.392-2.936 0-1.418-.7-2.302-1.567-2.782-.707-.39-1.522-.517-2.166-.482a4.8 4.8 0 0 0-.986-1.904C16.124 7.607 15.131 7 13.724 7c-1.142 0-2.011.435-2.65 1.037A4 4 0 0 0 10.528 8c-2.605 0-3.626 2.625-3.81 3.937l-.108-.034.03-.187a3 3 0 0 0-.126.162C5.16 11.565 3 12.535 3 15.031c0 2.625 2.23 2.947 3.378 2.947h8.347c.704.09 1.86-.073 2.594-.998m.43-.771h.132q.02 0 .043.002c.481.057 1.201-.014 1.786-.392.558-.36 1.04-1.028 1.04-2.281 0-1.1-.518-1.74-1.172-2.102a3.4 3.4 0 0 0-2.049-.363.376.376 0 0 1-.427-.319 4 4 0 0 0-.882-1.872c-.53-.615-1.324-1.11-2.496-1.11-.711 0-1.286.202-1.749.516 1.545.671 2.197 2.354 2.335 3.295 1.23-.215 3.689.354 3.689 3.083 0 .616-.093 1.124-.25 1.543"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgCloudy.propTypes = {
  className: PropTypes.string,
};
export default SvgCloudy;
