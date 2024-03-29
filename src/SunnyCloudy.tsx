import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgSunnyCloudy({
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
        d="M9.854 4.089a.75.75 0 0 1 1.015.308l1.127 2.108a.75.75 0 0 1-1.322.707L9.547 5.104a.75.75 0 0 1 .307-1.015"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.377 11.3c.617-.844 1.577-1.554 2.957-1.554a3.8 3.8 0 0 1 1.354.24 3.881 3.881 0 0 1 5.734 5.115s.194.32.194 1.239c0 1.499-.554 2.454-1.329 2.994-.731.51-1.589.601-2.174.533H5.567c-.552 0-1.426-.075-2.178-.516C2.596 18.885 2 18.045 2 16.673c0-1.37.628-2.339 1.459-2.89.62-.413 1.362-.596 2.023-.531.15-.6.433-1.32.895-1.951m.807.591c-.49.67-.74 1.486-.815 2.024a.5.5 0 0 1-.662.401c-.433-.154-1.113-.087-1.695.3C3.456 14.984 3 15.642 3 16.672c0 1.027.416 1.534.896 1.816.521.306 1.18.378 1.67.378h7.577a1 1 0 0 1 .064.004c.405.052 1.015-.013 1.508-.357.464-.324.9-.947.9-2.174 0-1.069-.462-1.661-1.011-1.99a2.72 2.72 0 0 0-1.75-.336.5.5 0 0 1-.581-.42 4 4 0 0 0-.787-1.808c-.465-.585-1.148-1.04-2.152-1.04-.985 0-1.671.49-2.15 1.145"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.76 6.47a.75.75 0 0 0-1.105-1.015l-1.665 1.81a.75.75 0 0 0 1.103 1.015zM22.524 15.312a.75.75 0 0 0-.485-.944l-2.205-.71a.75.75 0 1 0-.46 1.429l2.206.71a.75.75 0 0 0 .944-.485"
      />
    </svg>
  );
}
SvgSunnyCloudy.propTypes = {
  className: PropTypes.string,
};
export default SvgSunnyCloudy;
