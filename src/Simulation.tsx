import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgSimulation({
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
        d="M4.217 16.045v2.918a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V13.83L5.483 15.47a2 2 0 0 1-1.266.576M8.248 13.793v5.17a.326.326 0 0 0 .325.325h2.253a.326.326 0 0 0 .326-.326V15.92a1.97 1.97 0 0 1-1.357-.577zM12.278 15.598v3.365a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .325-.325v-6.209l-2.584 2.585a2 2 0 0 1-.32.259M18.997 8.938l-2.689 2.685v7.337a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V9.14c-.074-.062-.13-.118-.17-.155z"
      />
      <path
        fill="currentColor"
        d="M20.845 4.175a.63.63 0 0 0-.475-.174h-.06c-1.05.048-2.096.1-3.146.148a.68.68 0 0 0-.484.166.6.6 0 0 0-.115.17.544.544 0 0 0 .167.659l.262.266q.273.279.551.55l-6.344 6.35-2.857-2.85a.906.906 0 0 0-1.283 0l-3.795 3.794a.907.907 0 0 0 0 1.283l.17.17a.904.904 0 0 0 1.284 0l2.984-2.984 2.848 2.85a.91.91 0 0 0 1.286 0l7.159-7.159.81.807a.61.61 0 0 0 .433.229c.09 0 .18-.025.259-.07a.7.7 0 0 0 .155-.114c.13-.143.2-.33.196-.522q.046-1.021.096-2.045l.048-1.024a.64.64 0 0 0-.15-.5"
      />
    </svg>
  );
}
SvgSimulation.propTypes = {
  className: PropTypes.string,
};
export default SvgSimulation;
