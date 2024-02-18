import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotification = ({
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
      d="M11.5 18.503c-.945 0-1.105.018-2 0 .17.61.442 1.56.949 1.936a2.86 2.86 0 0 0 1.757.564 2.85 2.85 0 0 0 1.761-.566c.508-.379.864-1.323 1.033-1.934-.878.02-1.573-.002-2.5 0z"
    />
    <path
      fill="#182230"
      d="M18.13 14.405h-.035c-.269-4.335-2.524-11.402-5.886-11.402-3.466 0-5.764 7.059-5.912 11.413-.194.264-3.377 3.21-2.34 4.031.332.262 2.646.414 5.445.47.895.018 1.839.026 2.784.024h.094c.927 0 1.852-.013 2.73-.033 2.866-.065 5.228-.223 5.467-.461.986-.98-2.347-4.042-2.347-4.042"
    />
  </svg>
);
export default SvgNotification;
