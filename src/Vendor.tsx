import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVendor = ({
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
      d="M4.76 21V8.664a1.32 1.32 0 0 1-1.01-1.282V4.319A1.32 1.32 0 0 1 5.07 3h13.19a1.32 1.32 0 0 1 1.321 1.32v3.062a1.32 1.32 0 0 1-.974 1.273V21zm12.462-4.846v-7.96a1.3 1.3 0 0 1-.28-.813 1.32 1.32 0 1 1-2.64 0 1.318 1.318 0 1 1-2.637 0 1.319 1.319 0 0 1-2.64 0 1.32 1.32 0 1 1-2.639 0c0 .274-.085.54-.243.764v8.008H8.94a3.23 3.23 0 0 1 .834-1.775q.156-.168.335-.31v2.085h.21v-1.015h3.098v1.015h.21v-2.074q.173.137.322.299a3.23 3.23 0 0 1 .834 1.775zm-4.22-1.225V13.66q.216.084.421.199v1.069zm-2.677 0v-1.077q.204-.112.422-.196v1.273zm.633 0v-1.325a2.8 2.8 0 0 1 1.832.005v1.32zm-.778-3.291h3.318a1.66 1.66 0 0 1-1.658 1.578 1.66 1.66 0 0 1-1.66-1.58zm-1.055-.211 2.814-2.308 2.722 2.308z"
    />
  </svg>
);
export default SvgVendor;
