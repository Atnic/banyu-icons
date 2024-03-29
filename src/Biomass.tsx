import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgBiomass({
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
        d="M5.018 3h13.95a1.268 1.268 0 0 1 0 2.537H5.018a1.268 1.268 0 0 1 0-2.537M10.091 6.015h3.17V7.84h-3.17zM12.733 12.863a4.5 4.5 0 0 0-.581-2.114 4.5 4.5 0 0 0-.582 2.114c0 1.167.259 2.113.582 2.113s.58-.947.58-2.113"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.546 21H5.44a1.693 1.693 0 0 1-1.691-1.691l1.48-9.3a1.693 1.693 0 0 1 1.69-1.691h9.934a1.693 1.693 0 0 1 1.692 1.691l1.69 9.3A1.693 1.693 0 0 1 18.546 21m-6.447-10.99a4.756 4.756 0 1 0 0 9.511 4.756 4.756 0 0 0 0-9.512"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgBiomass.propTypes = {
  className: PropTypes.string,
};
export default SvgBiomass;
