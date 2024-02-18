import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgSampling({
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
        d="M3.074 19.982V16.49L3 16.448l.074-.128v-.165h.094L10.334 3.75l.636.367.07-.186.96.334.96-.334.07.186.636-.367 7.166 12.405h.094v.165l.074.128-.074.042v3.49zm16.282-3.827L14.237 7.29l3.377 8.866zm-3.1 0L12 4.972 7.74 16.155zm-9.873 0L9.76 7.292l-5.117 8.863z"
      />
    </svg>
  );
}
SvgSampling.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgSampling;
