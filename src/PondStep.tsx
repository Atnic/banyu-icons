import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPondStep({
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
        d="M9.09 17.465H3V3h12.181v6.302a3.7 3.7 0 0 0-1.032.443 3.4 3.4 0 0 1-1.794.559 4.3 4.3 0 0 1-1.869-.677A2.8 2.8 0 0 0 9.449 9.2c-.243 0-.356.188-.356.592v1.584H5.03v.507h4.06v2.538H5.03v.507h4.06zM5.03 8.329v.507h8.457V8.33zm0-3.044v.507h8.457v-.507z"
      />
      <path
        fill="currentColor"
        d="M18.578 20.724h-5.88a2.375 2.375 0 0 1-2.422-2.32v-7.288c0-.326.092-.478.288-.478.3.057.586.175.84.346.453.298.97.485 1.51.546a2.75 2.75 0 0 0 1.45-.448 2.4 2.4 0 0 1 1.166-.4h.046c.44.025.867.16 1.243.391.443.265.942.422 1.456.458h.041c.471-.046.925-.198 1.328-.445L19.81 11h.005a2.4 2.4 0 0 1 .885-.355c.205 0 .3.15.3.472v7.289a2.375 2.375 0 0 1-2.422 2.319m-3.51-3.29a.418.418 0 0 0-.374.604l.116.232-.116.23a.418.418 0 0 0 .456.597l1.018-.203a2.9 2.9 0 0 0 1.025-.209l-.689-1.123a1 1 0 0 1-.363.078l-.99-.199a.4.4 0 0 0-.083-.007m2.09-.833a1.06 1.06 0 0 1-.306.733l.717 1.173a2.93 2.93 0 0 0 1.4-1.906zm.098-3.323-.749 2.357c.252.104.453.301.563.55h1.959q0-.027.003-.053c.004-.056.007-.104.007-.158a2.93 2.93 0 0 0-1.783-2.694zm-4.485-.23a.42.42 0 0 0-.418.418 2.09 2.09 0 0 0 2.088 2.09h1.652l.77-2.409a3 3 0 0 0-.75-.1zm.625 1.04a.21.21 0 1 1 .006-.417.21.21 0 0 1-.006.418"
      />
    </svg>
  );
}
SvgPondStep.propTypes = {
  className: PropTypes.string,
};
export default SvgPondStep;
