import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHr = ({
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
      d="M11.7 20.4a8.641 8.641 0 0 1-6.15-2.55A8.642 8.642 0 0 1 3 11.7a8.642 8.642 0 0 1 2.55-6.15A8.64 8.64 0 0 1 11.7 3a8.709 8.709 0 0 1 8.041 12.03 8.642 8.642 0 0 1-1.891 2.82 8.644 8.644 0 0 1-6.15 2.55m2.62-7.73v3.26h1.524a4.19 4.19 0 0 0-1.11-2.877 4.392 4.392 0 0 0-.416-.384zm-4.256 1.363v1.897h3.985v-1.897zm-.27-1.378a4.12 4.12 0 0 0-.43.398 4.192 4.192 0 0 0-1.113 2.877h1.543zm3.713-.525v1.63h.542v-1.375a4.371 4.371 0 0 0-.542-.255m-1.458-.268c-.399 0-.794.066-1.171.195v1.704h2.357v-1.697a3.584 3.584 0 0 0-1.188-.2zm-1.44.26a4.212 4.212 0 0 0-.545.255v1.383h.544zm-.73-2.595a2.134 2.134 0 0 0 4.267 0zm2.263-3.235-3.62 2.966h7.12z"
    />
  </svg>
);
export default SvgHr;
