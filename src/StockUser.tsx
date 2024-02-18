import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgStockUser({
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
        d="M12.371 19.973h7.419v-7.57h-2.484v4.092h-2.452v-4.093h-2.483z"
      />
      <path
        fill="currentColor"
        d="M15.352 12.403v3.596h1.458v-3.596zM4.21 19.973h7.418v-7.57H9.145v4.092H6.693v-4.093H4.209z"
      />
      <path
        fill="currentColor"
        d="M7.19 12.403v3.596h1.458v-3.596zM8.661 11.598h7.419v-7.57h-2.484V8.12h-2.451V4.027H8.66z"
      />
      <path fill="currentColor" d="M11.643 4.028v3.597H13.1V4.028z" />
    </svg>
  );
}
SvgStockUser.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgStockUser;
