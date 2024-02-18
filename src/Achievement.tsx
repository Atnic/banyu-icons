import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAchievement = ({
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
      d="M11.68 15.36a1.203 1.203 0 0 1-.858-.356l-1.096-1.1h-1.56a1.212 1.212 0 0 1-1.211-1.211v-1.557l-1.1-1.1a1.212 1.212 0 0 1 0-1.713l1.1-1.1V5.667a1.212 1.212 0 0 1 1.212-1.212h1.555l1.1-1.1a1.212 1.212 0 0 1 1.715 0l1.1 1.1h1.555a1.212 1.212 0 0 1 1.212 1.212v1.559l1.1 1.097a1.212 1.212 0 0 1 0 1.713l-1.1 1.1v1.556a1.212 1.212 0 0 1-1.212 1.212h-1.556l-1.1 1.1a1.203 1.203 0 0 1-.857.355m0-10.23a4.05 4.05 0 1 0 0 8.099 4.05 4.05 0 0 0 0-8.099m0 7.425a3.375 3.375 0 1 1 3.374-3.375 3.38 3.38 0 0 1-3.375 3.375"
    />
    <path
      fill="#182230"
      d="M9.443 21v-6.444h.28l1.1 1.099c.157.158.356.27.573.322v3.902zm4.585 0-1.98-1.137v-3.91c.185-.058.353-.16.49-.298l1.098-1.1h.391v6.443z"
    />
  </svg>
);
export default SvgAchievement;
