import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgOthers({
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
        d="M12 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12 21m2.98-8.776a.776.776 0 0 0-.776.776v1.64a.776.776 0 0 0 .776.776h1.64a.776.776 0 0 0 .776-.776V13a.776.776 0 0 0-.776-.776zm-3.83 0a.776.776 0 0 0-.776.776v1.64a.776.776 0 0 0 .775.776h1.64a.776.776 0 0 0 .777-.776V13a.776.776 0 0 0-.776-.776zm-3.83 0a.776.776 0 0 0-.777.776v1.64a.776.776 0 0 0 .776.776h1.64a.776.776 0 0 0 .776-.776V13a.776.776 0 0 0-.776-.776zm7.66-3.83a.776.776 0 0 0-.777.776v1.64a.776.776 0 0 0 .776.776h1.64a.776.776 0 0 0 .776-.776V9.17a.776.776 0 0 0-.776-.776zm-3.831 0a.776.776 0 0 0-.776.776v1.64a.776.776 0 0 0 .776.776h1.64a.776.776 0 0 0 .776-.776V9.17a.776.776 0 0 0-.776-.776zm-3.83 0a.776.776 0 0 0-.776.776v1.64a.776.776 0 0 0 .775.776h1.64a.776.776 0 0 0 .777-.776V9.17a.776.776 0 0 0-.776-.776z"
      />
    </svg>
  );
}
SvgOthers.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgOthers;
