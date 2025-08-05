import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPlus({
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
        d="M9.472 1.915c.73-2.554 4.347-2.553 5.076.002l1.676 5.866 5.861 1.678c2.553.73 2.553 4.35 0 5.08l-5.861 1.676-1.676 5.867c-.73 2.555-4.346 2.555-5.076 0L7.798 16.22l-5.875-1.656c-2.556-.721-2.567-4.347-.014-5.083l5.888-1.696z"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgPlus.propTypes = {
  className: PropTypes.string,
};
export default SvgPlus;
