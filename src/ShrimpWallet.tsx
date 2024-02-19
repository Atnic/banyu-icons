import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgShrimpWallet({
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
        d="M18.82 5.922a3 3 0 0 0-.47-.035H5.375l11.29-2.88A2 2 0 0 1 18.82 4.79V5.92zM18.352 20.371H5.403C4.078 20.371 3 19.572 3 18.59V9.122C3 8.14 4.078 7.34 5.403 7.34h12.949c1.325 0 2.403.8 2.403 1.782v2.22h-6.582a2.532 2.532 0 1 0 0 5.064h6.581v2.184c0 .982-1.075 1.781-2.402 1.781"
      />
      <path
        fill="currentColor"
        d="M21 12.793h-6.828a1.08 1.08 0 0 0 0 2.16H21z"
      />
    </svg>
  );
}
SvgShrimpWallet.propTypes = {
  className: PropTypes.string,
};
export default SvgShrimpWallet;
