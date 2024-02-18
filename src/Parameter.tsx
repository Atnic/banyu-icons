import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgParameter = ({
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
      d="M7.065 19.103a4.19 4.19 0 0 1-4.063-4.305v-1.704c0-2.377 2.395.77 4.426.77s2.702-1.53 4.392-1.578c1.69-.048 2.611 1.5 4.607 1.579a4.757 4.757 0 0 0 2.296-.824c1.254-.723 2.275-1.445 2.275.053v1.705a4.188 4.188 0 0 1-4.063 4.304zm11.182-9.627V4.5h2.75v4.976zm.241-.436h2.27V4.935h-2.27zm-4.07.436V4.5h2.752v4.976zm.242-.436h2.269V4.935h-2.27zm-4.255.436V4.5h2.945v4.976zm-3.49 0V4.5h2.75v4.976zm-3.91 0V4.5H5.95v4.976z"
    />
  </svg>
);
export default SvgParameter;
