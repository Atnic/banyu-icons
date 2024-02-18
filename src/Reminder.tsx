import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReminder = ({
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
      d="M17.876 6.876a8.4 8.4 0 0 1 1.901 2.627 3.23 3.23 0 0 0 .98-3.756 3.226 3.226 0 0 0-5.646-.59 8.4 8.4 0 0 1 2.765 1.72M4.374 9.617A3.225 3.225 0 1 1 8.93 5.22a8.43 8.43 0 0 0-4.556 4.396"
    />
    <path
      fill="#182230"
      fillRule="evenodd"
      d="M12.106 19.774a7.18 7.18 0 0 1-5.11-2.117 7.18 7.18 0 0 1-2.116-5.109A7.18 7.18 0 0 1 6.997 7.44a7.18 7.18 0 0 1 5.108-2.117 7.18 7.18 0 0 1 5.11 2.117 7.18 7.18 0 0 1 2.116 5.11 7.18 7.18 0 0 1-2.117 5.108 7.18 7.18 0 0 1-5.108 2.117M11.81 8.102a.503.503 0 0 0-.503.503v4.523a.5.5 0 0 0 .296.457.5.5 0 0 0 .458.296h3.518a.503.503 0 0 0 0-1.005h-3.267V8.606a.503.503 0 0 0-.502-.503"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReminder;
