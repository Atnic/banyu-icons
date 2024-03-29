import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPrice({
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
        d="M7.96 18.127a.84.84 0 0 1-.084-.906l.239-.477-.24-.474a.85.85 0 0 1 .086-.905.88.88 0 0 1 .86-.324l2.06.408q.171-.004.339-.037v2.607q-.152.01-.28.013l-2.119.416a.877.877 0 0 1-.86-.322m9.302.073v-5.758h.887l.154.518h.05a1.26 1.26 0 0 1 1.134-.594 1.3 1.3 0 0 1 1.108.55c.292.451.432.983.4 1.52a3 3 0 0 1-.187 1.112 1.56 1.56 0 0 1-.535.718 1.37 1.37 0 0 1-.816.244A1.33 1.33 0 0 1 18.353 16h-.057q.057.5.057.58v1.62zm1.282-4.712a1.43 1.43 0 0 0-.194.82v.116c-.025.32.041.64.192.922a.68.68 0 0 0 .606.28q.733 0 .733-1.21a1.7 1.7 0 0 0-.184-.885.62.62 0 0 0-.567-.295.69.69 0 0 0-.584.251zm-3.085 2.95L14.21 14.43h-.59v2.007h-1.11V11.21h1.527a2.6 2.6 0 0 1 1.577.389 1.38 1.38 0 0 1 .508 1.176c.005.294-.084.582-.253.821-.183.25-.432.446-.72.563a219 219 0 0 0 1.539 2.278zm-1.838-2.906h.358c.27.02.54-.041.776-.175a.62.62 0 0 0 .25-.55.57.57 0 0 0-.256-.53 1.55 1.55 0 0 0-.793-.156h-.335zm-2.838-2.37H7.348A4.33 4.33 0 0 1 3 6.862.866.866 0 0 1 3.869 6h6.958a6.2 6.2 0 0 1 1.553.207zM4.74 7.716a.434.434 0 1 0 .032-.165.4.4 0 0 0-.033.166m11.942 2.664h-4.735l1.256-3.902a6.1 6.1 0 0 1 3.479 3.9z"
      />
    </svg>
  );
}
SvgPrice.propTypes = {
  className: PropTypes.string,
};
export default SvgPrice;
