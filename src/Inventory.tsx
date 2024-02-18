import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInventory = ({
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
      d="M14.684 10.368h-5.75V4.5h1.923v3.173h1.9V4.5h1.923v5.868z"
    />
    <path
      fill="#182230"
      d="M12.374 4.5h-1.13v2.787h1.13zM11.628 16.855h-5.75v-5.869H7.8v3.173h1.9v-3.173h1.923v5.868z"
    />
    <path
      fill="#182230"
      d="M9.317 10.987H8.188v2.787h1.13zM18.122 16.855h-5.75v-5.869h1.923v3.173h1.9v-3.173h1.923v5.868z"
    />
    <path
      fill="#182230"
      d="M15.811 10.987h-1.129v2.787h1.13zM21 17.513H3v1.54h18z"
    />
  </svg>
);
export default SvgInventory;
