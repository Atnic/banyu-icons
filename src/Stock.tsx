import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgStock({
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
        d="M15.791 19.788h-3.94v-4.021h1.319v2.174h1.302v-2.174h1.32zm-4.447 0h-3.94v-4.021h1.319v2.174h1.302v-2.174h1.32zm5.786-.032v-8.227L12.046 6.2l-5.169 5.351v8.205H5.815v-7.108l-.85.877H3L12.043 4 21 13.525h-1.963l-.849-.89v7.116zm-3.695-2.079v-1.91h.774v1.91zm-4.447 0v-1.91h.774v1.91zm2.357-2.333h-3.94v-4.022h1.319v2.174h1.302v-2.173h1.32zm-2.357-2.111v-1.91h.774v1.91z"
      />
    </svg>
  );
}
SvgStock.propTypes = {
  className: PropTypes.string,
};
export default SvgStock;
