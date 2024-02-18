import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPremium({
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
        d="M11.975 21A8.974 8.974 0 0 1 5.629 5.68 8.974 8.974 0 1 1 18.32 18.37 8.91 8.91 0 0 1 11.975 21m-3.836-5.656v1.32h8.259v-1.317zM6.714 8.94l1.46 3.853v2.216h8.231v-2.272l1.232-3.755-3.578 1.386-1.88-2.984-2.03 3.133z"
      />
    </svg>
  );
}
SvgPremium.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgPremium;
