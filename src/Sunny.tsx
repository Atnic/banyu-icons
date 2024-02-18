import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSunny = ({
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
      d="M12.026 4a.75.75 0 0 0-.75.75v1.882a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-.75-.75M14.8 12.026a2.812 2.812 0 1 1-5.625 0 2.812 2.812 0 0 1 5.624 0M4 12.026c0 .414.336.75.75.75h1.882a.75.75 0 0 0 0-1.5H4.75a.75.75 0 0 0-.75.75M17.42 12.776a.75.75 0 1 1 0-1.5h1.882a.75.75 0 0 1 0 1.5zM11.276 17.42a.75.75 0 0 1 1.5 0v1.882a.75.75 0 0 1-1.5 0zM6.35 6.35a.75.75 0 0 0 0 1.062l1.331 1.33a.75.75 0 0 0 1.061-1.06L7.412 6.35a.75.75 0 0 0-1.061 0M15.31 16.37a.75.75 0 0 1 1.06-1.06l1.331 1.33a.75.75 0 1 1-1.06 1.061zM17.701 6.35a.75.75 0 0 0-1.06 0l-1.33 1.331a.75.75 0 1 0 1.06 1.061l1.33-1.33a.75.75 0 0 0 0-1.061M7.681 15.31a.75.75 0 1 1 1.061 1.06l-1.33 1.331a.75.75 0 0 1-1.061-1.06z"
    />
  </svg>
);
export default SvgSunny;
