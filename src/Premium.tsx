import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPremium = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#182230"
      d="M11.975 21A8.974 8.974 0 0 1 5.629 5.68 8.974 8.974 0 1 1 18.32 18.37 8.913 8.913 0 0 1 11.975 21m-3.836-5.656v1.32h8.259v-1.317zM6.714 8.94l1.46 3.853v2.216h8.231v-2.272l1.232-3.755-3.578 1.386-1.88-2.984-2.03 3.133z"
    />
  </svg>
);
export default SvgPremium;
