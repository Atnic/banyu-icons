import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTransparency = ({
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
      d="M12 3a8.97 8.97 0 0 1 6.364 2.636A8.972 8.972 0 0 1 21 12a8.972 8.972 0 0 1-2.776 6.5A9 9 0 1 1 12 3M6.343 17.657 12 12l5.657 5.657A7.975 7.975 0 0 0 20 12c0-2.21-.895-4.21-2.343-5.657L12 12 6.343 6.343A7.975 7.975 0 0 0 4 12c0 2.21.895 4.21 2.343 5.657"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTransparency;
