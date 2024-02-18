import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgIncome({
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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m5.75-12.976q.084.03.146.088a.4.4 0 0 1 .1.318l-.032.654-.002.049q-.033.63-.062 1.256a.47.47 0 0 1-.13.332.5.5 0 0 1-.104.074.4.4 0 0 1-.174.042.43.43 0 0 1-.288-.146l-.54-.514-4.772 4.568a.62.62 0 0 1-.43.17.62.62 0 0 1-.428-.17l-1.9-1.82-1.99 1.905a.6.6 0 0 1-.428.17.63.63 0 0 1-.427-.17l-.111-.106a.58.58 0 0 1-.178-.41.56.56 0 0 1 .178-.41l2.531-2.42a.6.6 0 0 1 .428-.17.63.63 0 0 1 .428.17l1.9 1.819 4.23-4.054a22 22 0 0 1-.367-.352l-.175-.17a.35.35 0 0 1-.132-.19.33.33 0 0 1 .021-.23.4.4 0 0 1 .077-.106.47.47 0 0 1 .323-.106l1.16-.052.937-.042h.04a.4.4 0 0 1 .17.023"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgIncome.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgIncome;
