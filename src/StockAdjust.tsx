import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgStockAdjust({
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
        fillRule="evenodd"
        d="M18.24 5.601c.07.093.111.208.111.333q-.001.015-.005.03l-.006.023V12l.003.056A.554.554 0 1 1 17.237 12V6.485H4.002v12.13h8.28l.003.001a.554.554 0 0 1-.002 1.103H3.458a.554.554 0 0 1-.554-.554V5.915a.6.6 0 0 1 .038-.188l.008-.013q.007-.009.008-.018l.002-.004a.6.6 0 0 1 .05-.09l1.652-2.2V3.4a.55.55 0 0 1 .443-.22h11.583c.215 0 .4.123.494.305zM5.38 4.28l-.827 1.103h12.346l-.555-1.103z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.652 7.589h9.93a.555.555 0 0 1 .55.55V12l.003.056a.554.554 0 1 1-1.106-.056V8.696h-2.205v8.272a.554.554 0 0 1-.554.555H5.652a.555.555 0 0 1-.555-.555V8.143c0-.306.249-.554.555-.554m2.76 1.102H6.207v7.72h2.207zm3.308 0H9.516l.001 7.72h2.204zM17.237 17.791a.827.827 0 1 1 0-1.654.827.827 0 0 1 0 1.654m0-1.103a.276.276 0 1 0 .276.276.276.276 0 0 0-.276-.273z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.494 17.515h.602v-1.103h-.602a3.04 3.04 0 0 0-.564-1.363l.424-.425-.776-.776-.425.425a3.3 3.3 0 0 0-1.343-.562l-.02-.003v-.6h-1.103v.6c-.514.089-.97.285-1.363.565l-.425-.425-.776.776.425.425a3.26 3.26 0 0 0-.563 1.343l-.002.02h-.601v1.103h.6c.09.514.286.97.566 1.363l-.425.424.777.777.424-.425c.385.277.845.476 1.343.563l.02.002v.601h1.103v-.6c.514-.09.97-.286 1.363-.566l.425.425.776-.777-.425-.424a3.3 3.3 0 0 0 .562-1.343zm-5.465-.551c0 1.218.988 2.205 2.206 2.205h.003a2.205 2.205 0 1 0-2.209-2.205"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgStockAdjust.propTypes = {
  className: PropTypes.string,
};
export default SvgStockAdjust;
