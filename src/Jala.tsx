import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJala = ({
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
      d="M18.356 19.6H4.644A2.144 2.144 0 0 1 2.5 17.457V6.144A2.144 2.144 0 0 1 4.644 4h13.712A2.144 2.144 0 0 1 20.5 6.144v11.312a2.144 2.144 0 0 1-2.144 2.145M9.26 14.23a.363.363 0 0 0-.286.181.446.446 0 0 0 .036.429c.166.162.347.307.541.433a3.855 3.855 0 0 0 1.984.613.677.677 0 0 0 .206-.04.533.533 0 0 1 .155-.032c.453-.08.876-.278 1.226-.577a2.287 2.287 0 0 0 .902-1.839V7.844a.241.241 0 0 0-.181-.253.587.587 0 0 0-.143-.02.3.3 0 0 0-.254.128v.036a.932.932 0 0 0-.04.406c0 .044.004.09.004.135v4.977c0 .01.001.02.003.029.007.039.016.087-.04.115v.035a1.831 1.831 0 0 1-.722 1.299 1.707 1.707 0 0 1-1.158.412 3.024 3.024 0 0 1-2.087-.846.19.19 0 0 0-.146-.067z"
    />
  </svg>
);
export default SvgJala;
