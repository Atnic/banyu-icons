import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgProfile({
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
        d="M12.536 11.153a4.076 4.076 0 1 0-.018 0H9.52a3.78 3.78 0 0 0-3.771 3.77V21h13.554v-6.076a3.78 3.78 0 0 0-3.77-3.771z"
      />
    </svg>
  );
}
SvgProfile.propTypes = {
  className: PropTypes.string,
};
export default SvgProfile;
