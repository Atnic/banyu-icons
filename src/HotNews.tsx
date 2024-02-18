import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgHotNews({
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
        d="M12.456 9.434A9.2 9.2 0 0 0 12.475 12a9.98 9.98 0 0 0 2.4 5.261 2.19 2.19 0 0 1 .566 2.356 4.6 4.6 0 0 1-3.98 2.206 9.939 9.939 0 0 0 4.794-.945 5.46 5.46 0 0 0 2.669-2.466 3.44 3.44 0 0 0-.849-3.839 15.8 15.8 0 0 1-3.803-8.346 15 15 0 0 1-.03-4.073 41 41 0 0 0-5.869 5.822 17.6 17.6 0 0 0-3.136 5.394 6.05 6.05 0 0 0 .466 5.364 6.45 6.45 0 0 0 2.258 2.115c-.344-.273-.64-.6-.878-.97a3.8 3.8 0 0 1-.295-3.38c.451-1.24 1.12-2.39 1.975-3.394a26 26 0 0 1 3.686-3.664z"
      />
      <path
        fill="currentColor"
        d="M11.136 15.635c-.044.036-4.024 3.175-2.69 5.229a2.28 2.28 0 0 0 1.979.977 2.45 2.45 0 0 0 2.187-1.08 1.08 1.08 0 0 0-.27-1.21 5.07 5.07 0 0 1-1.206-3.916"
      />
    </svg>
  );
}
SvgHotNews.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgHotNews;
