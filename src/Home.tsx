import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgHome({
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
        d="M13.392 19.978v-4.285H10.61v4.285H7.206a1.56 1.56 0 0 1-1.625-1.485v-5.605l-.619.64H3l9.041-9.525L21 13.528h-1.963l-.618-.648v5.616a1.56 1.56 0 0 1-1.629 1.485zM10.2 9.811a1.73 1.73 0 0 0 1.8 1.646 1.73 1.73 0 0 0 1.8-1.646A1.726 1.726 0 0 0 12 8.166a1.724 1.724 0 0 0-1.8 1.645"
      />
    </svg>
  );
}
SvgHome.propTypes = {
  className: PropTypes.string,
};
export default SvgHome;
