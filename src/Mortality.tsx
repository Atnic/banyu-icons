import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMortality = ({
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
      d="M9.731 17.996a1.1 1.1 0 0 0 .715.089l2.707-.538c.3-.006.6-.03.897-.072l-3.89-3.81a1.09 1.09 0 0 0-.818.437 1.12 1.12 0 0 0-.113 1.171l.308.615-.308.615a1.125 1.125 0 0 0 .113 1.17c.103.138.236.248.39.324zm5.624-5.087 1.373 1.345h.006l3.05-2.803H15.78a2.804 2.804 0 0 1-.425 1.458zm.19-2.57h5.21v-.032c.007-.041.007-.079.007-.117v-.018c.01-.13.017-.255.017-.396a7.783 7.783 0 0 0-4.74-7.162l-1.99 6.262c.668.277 1.204.8 1.495 1.462zM8.558 8.672h4.39l2.036-6.403A7.803 7.803 0 0 0 13 2H4.113A1.111 1.111 0 0 0 3 3.113a5.559 5.559 0 0 0 5.56 5.56m-3.09-4.92a.552.552 0 0 1 .702.071.555.555 0 1 1-.7-.07zm10.376 13.96-2.85 2.85L14.432 22l2.85-2.85L20.135 22l1.437-1.438-2.85-2.85 2.85-2.85-1.437-1.438-2.851 2.85-2.85-2.85-1.438 1.437z"
    />
  </svg>
);
export default SvgMortality;
