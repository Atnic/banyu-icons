import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHotNews = ({
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
      d="M12.456 9.434A9.195 9.195 0 0 0 12.475 12a9.977 9.977 0 0 0 2.4 5.261 2.192 2.192 0 0 1 .566 2.356 4.595 4.595 0 0 1-3.98 2.206 9.939 9.939 0 0 0 4.794-.945 5.458 5.458 0 0 0 2.669-2.466 3.443 3.443 0 0 0-.849-3.839 15.815 15.815 0 0 1-3.803-8.346 14.934 14.934 0 0 1-.03-4.073 40.988 40.988 0 0 0-5.869 5.822 17.62 17.62 0 0 0-3.136 5.394 6.05 6.05 0 0 0 .466 5.364 6.45 6.45 0 0 0 2.258 2.115c-.344-.273-.64-.6-.878-.97a3.803 3.803 0 0 1-.295-3.38c.451-1.24 1.12-2.39 1.975-3.394a26.069 26.069 0 0 1 3.686-3.664z"
    />
    <path
      fill="#182230"
      d="M11.136 15.635c-.044.036-4.024 3.175-2.69 5.229a2.284 2.284 0 0 0 1.979.977 2.448 2.448 0 0 0 2.187-1.08 1.084 1.084 0 0 0-.27-1.21 5.065 5.065 0 0 1-1.206-3.916"
    />
  </svg>
);
export default SvgHotNews;
