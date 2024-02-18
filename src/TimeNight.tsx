import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTimeNight = ({
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
      d="M7.052 18.003c4.096 0 7.416-3.223 7.416-7.2 0-3.075-1.986-5.701-4.782-6.732q.528-.068 1.074-.068c4.551 0 8.24 3.582 8.24 8s-3.689 8-8.24 8A8.34 8.34 0 0 1 5 17.725a7.6 7.6 0 0 0 2.052.28"
    />
  </svg>
);
export default SvgTimeNight;
