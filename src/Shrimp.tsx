import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgShrimp({
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
        d="M15.937 13.315a2.84 2.84 0 0 1-.82 1.972l1.927 3.158a7.91 7.91 0 0 0 3.767-5.13zM14.185 10.708c.677.28 1.22.81 1.514 1.481h5.273c.012-.21.028-.377.028-.566a7.89 7.89 0 0 0-4.8-7.251zM14.176 15.901c-.31.128-.641.2-.977.211l-2.67-.533a1.125 1.125 0 0 0-1.227 1.607l.31.622-.31.621a1.126 1.126 0 0 0 1.227 1.606l2.74-.548a7.8 7.8 0 0 0 2.756-.56zM15.134 4.02a7.8 7.8 0 0 0-2.008-.27H4.125A1.126 1.126 0 0 0 3 4.876a5.63 5.63 0 0 0 5.625 5.626h4.45zM5.813 6.555a.562.562 0 1 1 0-1.125.562.562 0 0 1 0 1.125"
      />
    </svg>
  );
}
SvgShrimp.propTypes = {
  className: PropTypes.string,
};
export default SvgShrimp;
