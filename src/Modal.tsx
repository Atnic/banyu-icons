import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgModal({
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
      viewBox="0 0 25 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m-2.994-7.85 5.586.937h.095l3.987-1.312a.233.233 0 0 0 .14-.282l-.14-.375a.94.94 0 0 0-1.123-.61l-2.91.705-2.345-.937v-.466h1.407a.94.94 0 0 0 .937-.938v-.233a.233.233 0 0 0-.232-.233h-3.519l-1.875.939H8.106v2.814zM6.26 10.334v2.84h1.42v-2.84z"
      />
    </svg>
  );
}
SvgModal.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgModal;
