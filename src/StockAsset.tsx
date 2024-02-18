import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgStockAsset({
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
        d="m12.153 12.147.006.025 5.247.016 1.242 2.126-5.105.97-1.37-3.06.907 3.61 4.326-.884v4.866l-5.253 1.18zM6.49 19.819v-4.867l4.325.885.889-3.487-1.352 2.933-5.102-.968 1.243-2.126h5.28v.015l-.028.062V21zm6.881-8.584a.71.71 0 0 1-.711-.711V8.805a.71.71 0 0 1 .711-.712h1.72a.71.71 0 0 1 .71.712v1.719a.71.71 0 0 1-.71.711zM8.846 10.03a.71.71 0 0 1-.712-.712V7.6a.71.71 0 0 1 .712-.711h1.718a.71.71 0 0 1 .712.711v1.718a.71.71 0 0 1-.712.712zm2.263-3.888a.71.71 0 0 1-.711-.711V3.712A.71.71 0 0 1 11.108 3h1.719a.71.71 0 0 1 .712.712V5.43a.71.71 0 0 1-.712.712z"
      />
    </svg>
  );
}
SvgStockAsset.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgStockAsset;
