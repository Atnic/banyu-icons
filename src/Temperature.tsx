import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTemperature({
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
        d="M12.514 6.176h2.74v.685h-2.74zM12.514 7.546h4.111v.685h-4.111zM12.514 8.917h3.426v.685h-3.426zM10.116 3.23c-.606 0-1.097.49-1.097 1.096v12.641l-.136.103a2.056 2.056 0 1 0 2.466 0l-.137-.103V4.326c0-.606-.49-1.096-1.096-1.096M8.334 4.326a1.781 1.781 0 1 1 3.563 0v12.306a2.74 2.74 0 1 1-3.563 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.458 17.883V9.944h-.685v7.938a1.028 1.028 0 1 0 .685 0"
      />
    </svg>
  );
}
SvgTemperature.propTypes = {
  className: PropTypes.string,
};
export default SvgTemperature;
