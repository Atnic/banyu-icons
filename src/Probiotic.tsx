import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProbiotic = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#182230"
      d="M13.986 11.8h2.543v2.12h-2.543zM11.213 10.717H8.128v2.57h3.085z"
    />
    <path
      fill="#182230"
      fillRule="evenodd"
      d="M12.5 21a8.938 8.938 0 0 1-6.362-2.638A8.938 8.938 0 0 1 3.5 12a8.94 8.94 0 0 1 2.638-6.362A8.939 8.939 0 0 1 12.5 3a8.939 8.939 0 0 1 6.362 2.638A8.938 8.938 0 0 1 21.5 12a8.937 8.937 0 0 1-2.638 6.362A8.938 8.938 0 0 1 12.5 21m2.615-10.896a1.552 1.552 0 0 0-1.552 1.551v3.679a1.552 1.552 0 0 0 1.552 1.552h.29a1.552 1.552 0 0 0 1.55-1.552v-3.679a1.551 1.551 0 0 0-1.544-1.551h.698v-.496a.775.775 0 0 0-.776-.776h-.145a.776.776 0 0 0-.776.776v.496zM9.168 8.66a1.552 1.552 0 0 0-1.552 1.551v5.121a1.551 1.551 0 0 0 1.552 1.552h1.008a1.552 1.552 0 0 0 1.552-1.552v-5.12a1.552 1.552 0 0 0-1.542-1.552h.513v-.766a.776.776 0 0 0-.776-.776h-.505a.776.776 0 0 0-.776.776v.766z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProbiotic;
