import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgDisease({
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
        d="M8.572 13.873v-.828a5.4 5.4 0 0 1-4.908-5.373v-.704A1.15 1.15 0 0 1 3 5.924v-.771a1.153 1.153 0 0 1 2.306 0v.77a1.15 1.15 0 0 1-.62 1.023v.69a4.417 4.417 0 0 0 4.409 4.41 4.413 4.413 0 0 0 4.407-4.41V6.98a1.15 1.15 0 0 1-.687-1.052v-.77a1.153 1.153 0 0 1 2.305 0v.77a1.16 1.16 0 0 1-.67 1.048v.702a5.4 5.4 0 0 1-4.834 5.365v.82a4.504 4.504 0 0 0 4.498 4.498 4.504 4.504 0 0 0 4.499-4.499v-.56a1.893 1.893 0 0 1-1.246-2.546 1.887 1.887 0 1 1 2.212 2.552v.57a5.51 5.51 0 0 1-5.502 5.504 5.51 5.51 0 0 1-5.505-5.508m-.133-3.653V8.392H6.611a.578.578 0 0 1 0-1.154H8.44V5.411a.578.578 0 0 1 1.154 0v1.827h1.828a.578.578 0 0 1 0 1.154H9.593v1.828a.578.578 0 0 1-1.154 0"
      />
    </svg>
  );
}
SvgDisease.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgDisease;
