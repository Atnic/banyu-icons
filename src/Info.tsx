import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgInfo({
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
        d="M12.03 21A9.032 9.032 0 0 1 5.645 5.584a9.032 9.032 0 0 1 12.773 12.772 8.97 8.97 0 0 1-6.386 2.646m-.366-11.444v6.723h1.428V9.556zm.723-2.577a.82.82 0 0 0-.599.206.8.8 0 0 0-.21.59.78.78 0 0 0 .21.575.81.81 0 0 0 .599.209.8.8 0 0 0 .586-.21.78.78 0 0 0 .21-.574.8.8 0 0 0-.21-.59.8.8 0 0 0-.587-.205z"
      />
    </svg>
  );
}
SvgInfo.propTypes = {
  className: PropTypes.string,
};
export default SvgInfo;
