import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPoints = ({
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
      d="M3.5 12a9.001 9.001 0 1 1 18.002.002A9.001 9.001 0 0 1 3.5 12m2.455 0a6.547 6.547 0 1 0 6.546-6.546A6.554 6.554 0 0 0 5.955 12m.746-.075a5.728 5.728 0 1 1 11.459 0 5.728 5.728 0 0 1-11.46.001zm5.934 2.491 1.888 1.009a.27.27 0 0 0 .342-.067.27.27 0 0 0 .06-.224l-.347-2.112a.28.28 0 0 1 .08-.244l1.543-1.484a.277.277 0 0 0-.15-.471l-2.116-.322a.28.28 0 0 1-.207-.15l-.934-1.929a.28.28 0 0 0-.249-.155.27.27 0 0 0-.246.15l-.964 1.915a.27.27 0 0 1-.208.15l-2.12.298a.277.277 0 0 0-.23.337q.018.077.074.132l1.523 1.505a.27.27 0 0 1 .074.244l-.373 2.108a.27.27 0 0 0 .154.297.28.28 0 0 0 .245-.005l1.906-.986a.27.27 0 0 1 .256 0z"
    />
  </svg>
);
export default SvgPoints;
