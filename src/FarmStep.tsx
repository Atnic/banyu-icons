import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgFarmStep({
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
        d="M8.046 18.043H3V3.75h12.036v4.44H9.295a1.26 1.26 0 0 0-1.173.827H5.003v.5h3.043v2.508h-3.04v.502h3.04v2.509h-3.04v.501h3.04zM5.006 6.007v.502h8.36v-.502z"
      />
      <path
        fill="currentColor"
        d="M19.908 9.066h-9.803a1.097 1.097 0 0 0-1.086 1.1v8.606a1.1 1.1 0 0 0 1.089 1.099h9.803A1.1 1.1 0 0 0 21 18.77v-8.606a1.097 1.097 0 0 0-1.092-1.1m-5.156 8.682a.82.82 0 0 1-.815.823h-2.559a.82.82 0 0 1-.815-.823v-2.135a.82.82 0 0 1 .815-.823h2.562a.82.82 0 0 1 .815.823zm.03-4.254a.82.82 0 0 1-.815.824h-2.562a.82.82 0 0 1-.815-.823v-2.136a.82.82 0 0 1 .815-.823h2.562a.82.82 0 0 1 .815.823zm4.888 4.254a.82.82 0 0 1-.816.823h-2.561a.82.82 0 0 1-.816-.823v-2.135a.82.82 0 0 1 .816-.823h2.561a.82.82 0 0 1 .816.823zm.026-4.254a.82.82 0 0 1-.816.824H16.32a.82.82 0 0 1-.816-.823v-2.136a.82.82 0 0 1 .816-.823h2.561a.82.82 0 0 1 .816.823z"
      />
    </svg>
  );
}
SvgFarmStep.propTypes = {
  className: PropTypes.string,
};
export default SvgFarmStep;
