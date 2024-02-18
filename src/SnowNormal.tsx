import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSnowNormal = ({
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
      fillRule="evenodd"
      d="M16.27 5.134a1 1 0 0 1 .367 1.366l-2.725 4.719h5.449a1 1 0 1 1 0 2h-5.449l2.725 4.718a1 1 0 1 1-1.732 1l-2.724-4.718-2.725 4.718a1 1 0 1 1-1.732-1l2.724-4.718H5a1 1 0 1 1 0-2h5.448L7.724 6.5a1 1 0 1 1 1.732-1l2.725 4.719L14.905 5.5a1 1 0 0 1 1.366-.366"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSnowNormal;
