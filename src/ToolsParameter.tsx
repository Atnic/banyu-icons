import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgToolsParameter = ({
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
      d="M18.148 17.551H4.951A1.952 1.952 0 0 1 3 15.6V8.705a1.951 1.951 0 0 1 1.951-1.952H18.15A1.951 1.951 0 0 1 20.1 8.705v1.648h.25a.65.65 0 0 1 .65.65v2.3a.65.65 0 0 1-.65.65h-.25V15.6a1.952 1.952 0 0 1-1.952 1.951M5.724 9.068v6.367H13.8V9.068z"
    />
  </svg>
);
export default SvgToolsParameter;
