import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPreparation({
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
        d="M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.95 8.95 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m.284-14.143a22 22 0 0 0-1.888 2.25c-.86 1.186-1.884 2.902-1.884 4.338 0 2.39 1.199 3.504 3.772 3.504a4.47 4.47 0 0 0 2.736-.709 3.27 3.27 0 0 0 1.152-2.793c0-1.436-1.057-3.152-1.944-4.338a22 22 0 0 0-1.934-2.236s-.006-.006-.006-.008zm0 9.328c-1.84 0-2.697-.796-2.697-2.505 0-1.959 2.67-4.68 2.697-4.706.114.113 2.78 2.756 2.78 4.706-.003 1.683-.911 2.506-2.783 2.506z"
      />
    </svg>
  );
}
SvgPreparation.propTypes = {
  className: PropTypes.string,
};
export default SvgPreparation;
