import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTopStock({
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
        d="m12.298 9.774.01.036 7.67.023 1.816 3.074-7.463 1.401-2.003-4.424 1.326 5.22 6.325-1.278v7.035l-7.68 1.706zM4.02 20.865V13.83l6.323 1.279 1.3-5.041-1.977 4.24-7.46-1.399 1.817-3.074h7.72v.022l-.04.09v12.626zM11.247 2.818a.5.5 0 0 1 .951 0l.336 1.034a.5.5 0 0 0 .476.346h1.087a.5.5 0 0 1 .293.904l-.879.64a.5.5 0 0 0-.182.558l.336 1.034a.5.5 0 0 1-.77.56l-.878-.64a.5.5 0 0 0-.588 0l-.88.64a.5.5 0 0 1-.77-.56l.337-1.034a.5.5 0 0 0-.182-.559l-.88-.639a.5.5 0 0 1 .295-.904h1.087a.5.5 0 0 0 .475-.346z"
      />
    </svg>
  );
}
SvgTopStock.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgTopStock;
