import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPricePrediction({
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
        d="m3.619 19.565-.169-.169a.896.896 0 0 1 0-1.27l3.758-3.753a.89.89 0 0 1 .977-.195.9.9 0 0 1 .292.195l2.82 2.819 6.278-6.28q-.276-.269-.545-.545l-.26-.263a.54.54 0 0 1-.164-.653.5.5 0 0 1 .113-.169.67.67 0 0 1 .48-.164c1.04-.047 2.075-.099 3.113-.146h.06a.62.62 0 0 1 .473.171.63.63 0 0 1 .15.494l-.05 1.013q-.049 1.015-.095 2.023a.74.74 0 0 1-.193.516.7.7 0 0 1-.154.114.5.5 0 0 1-.256.068.6.6 0 0 1-.429-.226l-.801-.797-7.083 7.082a.9.9 0 0 1-1.273 0l-2.819-2.818-2.953 2.953a.895.895 0 0 1-1.27 0m4.826-7.797v-6.6h1.017l.176.596h.06a1.45 1.45 0 0 1 1.3-.68 1.49 1.49 0 0 1 1.27.626c.334.518.495 1.128.459 1.743.01.434-.063.867-.215 1.275a1.8 1.8 0 0 1-.613.824c-.273.191-.6.29-.935.283a1.52 1.52 0 0 1-1.266-.586h-.066q.066.573.066.664v1.859zm1.472-5.4a1.63 1.63 0 0 0-.222.941v.136a1.93 1.93 0 0 0 .22 1.057.78.78 0 0 0 .694.32q.84 0 .84-1.385c.022-.35-.05-.7-.207-1.015a.71.71 0 0 0-.65-.338.79.79 0 0 0-.675.284M6.379 9.751 4.948 7.453h-.675V9.75H3V3.758h1.747a3 3 0 0 1 1.805.446 1.59 1.59 0 0 1 .589 1.349c.006.336-.095.666-.289.942-.21.288-.496.512-.826.646q1.354 2.02 1.762 2.61zM4.273 6.419h.408c.31.023.62-.047.89-.2a.72.72 0 0 0 .287-.632.66.66 0 0 0-.294-.607 1.8 1.8 0 0 0-.908-.18h-.383z"
      />
    </svg>
  );
}
SvgPricePrediction.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgPricePrediction;
