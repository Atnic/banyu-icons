import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgProduct({
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
        d="m7.24 17.756-2.21.331v-3.855s2.42-.366 4.464-.544c1.14-.098 7.016-.274 7.5.25.21.223-.488 1.002-.701 1.224-.422.438-1.712.433-2.543.428h-.438c-.941.02-3.02.036-3.02.036s3.725.792 5.545.223c1.015-.318 3.38-1.825 3.892-1.934.405-.088 1.134-.306 1.244.111.19.716-.65 1.41-1.168 1.86-.865.755-4.038 3.25-4.99 3.481a2.3 2.3 0 0 1-.52.05c-2.089-.004-7.055-1.661-7.055-1.661M3 18.074v-3.837h1.625v3.837zm13.291-6.083h-7.34V4.5h2.455v4.05h2.425V4.5h2.455v7.49zm-4.39-3.933V4.5h1.443v3.557z"
      />
    </svg>
  );
}
SvgProduct.propTypes = {
  className: PropTypes.string,
};
export default SvgProduct;
