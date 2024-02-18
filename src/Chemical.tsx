import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgChemical({
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
        d="M12.5 21A9.01 9.01 0 0 1 4.181 8.555a8.9 8.9 0 0 1 1.957-2.917A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m-1.241-6.595v1.116c0 .046.088.091.254.132 1.042.172 2.097.247 3.152.224h.255a26 26 0 0 0 2.405-.108c.631-.065 1-.155 1-.248v-1.117c0 .197-1.587.358-3.536.358s-3.521-.16-3.53-.357m-3.641-3.72L6.48 12.387a2.1 2.1 0 0 0-.358 1.425 1.57 1.57 0 0 0 .672 1.14 1.46 1.46 0 0 0 .844.251 2.04 2.04 0 0 0 1.645-.94l1.137-1.707zm7.175 3.001c-1.948 0-3.534.162-3.534.36s1.585.358 3.534.358 3.535-.16 3.535-.359c0-.197-1.586-.36-3.535-.36zm-4.195-5.942a2.04 2.04 0 0 0-1.647.94l-1.136 1.703 2.803 1.872 1.136-1.706c.286-.416.413-.922.358-1.424a1.56 1.56 0 0 0-.674-1.138 1.5 1.5 0 0 0-.84-.248"
      />
    </svg>
  );
}
SvgChemical.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgChemical;
