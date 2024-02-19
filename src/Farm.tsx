import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgFarm({
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
      viewBox="0 0 25 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M13.032 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 4.032 12 8.94 8.94 0 0 1 6.67 5.638 8.94 8.94 0 0 1 13.032 3a8.94 8.94 0 0 1 6.361 2.638A8.94 8.94 0 0 1 22.033 12a8.94 8.94 0 0 1-2.639 6.362A8.94 8.94 0 0 1 13.032 21m.028-5.467a.78.78 0 0 0 .703.447h2.797a.776.776 0 0 0 .776-.775V12.41a.78.78 0 0 0-.45-.705.78.78 0 0 0 .45-.704V8.208a.776.776 0 0 0-.776-.776h-2.797a.78.78 0 0 0-.704.451.77.77 0 0 0-.704-.45H9.562a.776.776 0 0 0-.776.775v2.794a.77.77 0 0 0 .451.704.78.78 0 0 0-.45.705v2.794a.776.776 0 0 0 .775.775h2.793a.78.78 0 0 0 .703-.447zm3.07.018h-1.939a.777.777 0 0 1-.776-.776v-1.94a.775.775 0 0 1 .776-.776h1.94a.776.776 0 0 1 .776.776v1.94a.776.776 0 0 1-.778.773zm-4.203 0h-1.94a.776.776 0 0 1-.776-.776v-1.94a.776.776 0 0 1 .776-.776h1.94a.777.777 0 0 1 .776.776v1.94a.775.775 0 0 1-.778.773zm4.204-4.204h-1.94a.777.777 0 0 1-.776-.776v-1.94a.775.775 0 0 1 .776-.775h1.94a.776.776 0 0 1 .776.776v1.94a.777.777 0 0 1-.778.772zm-4.206 0h-1.94a.776.776 0 0 1-.775-.776v-1.94a.776.776 0 0 1 .776-.775h1.94a.777.777 0 0 1 .775.776v1.94a.777.777 0 0 1-.778.772z"
      />
    </svg>
  );
}
SvgFarm.propTypes = {
  className: PropTypes.string,
};
export default SvgFarm;
