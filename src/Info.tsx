import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInfo = ({
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
      d="M12.03 21A9.032 9.032 0 0 1 5.645 5.584a9.032 9.032 0 0 1 12.773 12.772 8.971 8.971 0 0 1-6.386 2.646m-.366-11.444v6.723h1.428V9.556zm.723-2.577a.822.822 0 0 0-.599.206.794.794 0 0 0-.21.59.781.781 0 0 0 .21.575.814.814 0 0 0 .599.209.794.794 0 0 0 .586-.21.78.78 0 0 0 .21-.574.795.795 0 0 0-.21-.59.8.8 0 0 0-.587-.205z"
    />
  </svg>
);
export default SvgInfo;
