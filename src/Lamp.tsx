import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLamp = ({
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
      d="m11.584 3.75 1.228.064-.126 2.401-1.229-.064zM6.914 5.306l-.995.723 1.414 1.946.995-.723zM9.563 17.25a10.45 10.45 0 0 1-1.208-1.49 6.59 6.59 0 0 1-1.23-3.396 4.8 4.8 0 0 1 1.357-3.428A4.75 4.75 0 0 1 11.97 7.58c.314 0 .628.03.937.088a4.171 4.171 0 0 1 2.679 1.74c.588.873.897 1.904.886 2.956a6.692 6.692 0 0 1-1.128 3.342 12.535 12.535 0 0 1-1.119 1.587zm2.521-6.883-1.762 3.554 1.36.46-.158 2.828 1.272-3.318-1-.704.287-2.821zM3.52 9.074 3 10.19l2.18 1.016.52-1.115zM9.694 17.75h4.583v3.055H9.694zM17.318 5.928l.983.74-1.448 1.921-.982-.74zM21 10.649l-.39-1.168-2.28.76.388 1.168z"
    />
  </svg>
);
export default SvgLamp;
