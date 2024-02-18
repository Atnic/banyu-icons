import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTrading({
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
        d="M4.102 13.158a.35.35 0 0 0 0 .493l1.01 1.01a.35.35 0 0 0 .495 0L11.3 8.969a.35.35 0 0 1 .494 0l.949.949c.19.19.514.103.584-.157l1.425-5.32a.35.35 0 0 0-.427-.428l-5.32 1.426a.35.35 0 0 0-.157.584l.948.948a.35.35 0 0 1 0 .494zM19.898 10.842a.35.35 0 0 0 0-.493l-1.01-1.01a.35.35 0 0 0-.495 0L12.7 15.031a.35.35 0 0 1-.494 0l-.949-.949a.35.35 0 0 0-.584.157l-1.425 5.32c-.07.26.168.497.427.428l5.32-1.426a.35.35 0 0 0 .157-.584l-.948-.948a.35.35 0 0 1 0-.494z"
      />
    </svg>
  );
}
SvgTrading.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgTrading;
