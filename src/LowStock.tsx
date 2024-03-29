import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgLowStock({
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
        d="M11.613 6.622a.4.4 0 0 0-.022.164.4.4 0 0 0 .113.3.44.44 0 0 0 .315.107.43.43 0 0 0 .311-.109.464.464 0 0 0 0-.601.43.43 0 0 0-.312-.106.45.45 0 0 0-.318.104.4.4 0 0 0-.087.14M11.724 5.964h.593l.124-2.346h-.84z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.605 1.797 3.9 5.77c.215.318.063.86-.241.862l-8.528-.002c-.304 0-.456-.544-.241-.862l3.903-5.768a.67.67 0 0 1 .604-.37.68.68 0 0 1 .603.37M8.941 7.629h6.116c.219 0 .328-.39.174-.618l-2.8-4.137A.48.48 0 0 0 12 2.61a.49.49 0 0 0-.433.265L8.768 7.011c-.154.228-.045.618.173.618"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m12.3 9.675.01.036 7.73.023 1.83 3.098-7.521 1.412-2.019-4.459 1.337 5.261 6.374-1.288v7.09l-7.74 1.718zM3.958 20.852v-7.09l6.372 1.288 1.31-5.08-1.992 4.274-7.518-1.41L3.96 9.736h7.78v.022l-.041.09v12.725z"
      />
    </svg>
  );
}
SvgLowStock.propTypes = {
  className: PropTypes.string,
};
export default SvgLowStock;
