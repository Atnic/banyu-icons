import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgFinancialReport2({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
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
        fill="currentColor"
        d="M14.888 8.584A2.085 2.085 0 0 1 12.805 6.5V2.005h-6.93c-.691 0-1.25.558-1.25 1.25v17.5c0 .691.563 1.25 1.25 1.25h12.259c.691 0 1.25-.558 1.25-1.25V8.584zm-3.537 2.15 2.195 2.195 2.409-2.408a.414.414 0 0 1 .587 0 .42.42 0 0 1 0 .592l-2.7 2.7a.42.42 0 0 1-.592 0l-2.196-2.196-3.558 3.558a.4.4 0 0 1-.292.12.414.414 0 0 1-.295-.708l3.854-3.854a.416.416 0 0 1 .588 0m-3.234 9.604H6.292v-3.754h1.825zm3.2 0H9.494v-4.546h1.825zm3.2 0h-1.825v-2.392h1.825zm3.2 0h-1.824v-6.659h1.824z"
      />
      <path
        fill="currentColor"
        d="M14.888 7.75h4.383a1.3 1.3 0 0 0-.254-.366c-5.282-5.283-5.05-5.118-5.38-5.263v4.38c0 .69.559 1.25 1.251 1.25"
      />
    </svg>
  );
}
SvgFinancialReport2.propTypes = {
  className: PropTypes.string,
};
export default SvgFinancialReport2;
