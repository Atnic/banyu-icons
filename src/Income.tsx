import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIncome = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#182230"
      fillRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m5.75-12.976c.055.02.105.05.146.088a.401.401 0 0 1 .1.318l-.032.654-.002.049c-.022.42-.043.838-.062 1.256a.467.467 0 0 1-.13.332.466.466 0 0 1-.104.074.37.37 0 0 1-.174.042.425.425 0 0 1-.288-.146l-.54-.514-4.772 4.568a.621.621 0 0 1-.43.17.621.621 0 0 1-.428-.17l-1.9-1.82-1.99 1.905a.606.606 0 0 1-.428.17.627.627 0 0 1-.427-.17l-.111-.106a.577.577 0 0 1-.178-.41.556.556 0 0 1 .178-.41l2.531-2.42a.607.607 0 0 1 .428-.17.629.629 0 0 1 .428.17l1.9 1.819 4.23-4.054a22.286 22.286 0 0 1-.367-.352l-.175-.17a.347.347 0 0 1-.132-.19.333.333 0 0 1 .021-.23.352.352 0 0 1 .077-.106.465.465 0 0 1 .323-.106l1.16-.052.937-.042h.04a.437.437 0 0 1 .17.023"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIncome;
