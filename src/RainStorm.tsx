import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgRainStorm({
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
        d="M12.036 3c-1.801 0-3.065.826-3.898 1.849-.7.859-1.1 1.858-1.283 2.638-.906-.16-2.008.033-2.927.581C2.848 8.712 2 9.858 2 11.526c0 .821.194 1.486.527 2.015s.79.902 1.286 1.163c.98.517 2.138.61 2.894.61h2.165q.027-.104.077-.209l1.63-3.341a.9.9 0 0 1 .303-.484.96.96 0 0 1 .605-.212h3.018c.386 0 .751.22.91.6.146.35.069.717-.119.977l-.662.933a1.018 1.018 0 0 1 .614 1.402l.194-.295a1.346 1.346 0 0 1 2.468.655c.706-.005 1.578-.168 2.34-.645.992-.62 1.75-1.744 1.75-3.592 0-1.735-.879-2.809-1.97-3.395-.93-.499-2.012-.646-2.842-.586a5.9 5.9 0 0 0-1.277-2.439C15.08 3.746 13.825 3 12.036 3"
      />
      <path
        fill="currentColor"
        d="M11.487 11.917h3.018c.127 0 .177.13.101.234l-1.42 2.001c-.076.104 0 .234.102.234h1.065c.101 0 .177.13.127.234l-3.348 5.146c-.076.13-.279.052-.254-.104l.736-3.795c.025-.078-.05-.182-.127-.182H9.84a.142.142 0 0 1-.127-.208l1.699-3.482c-.025-.052.025-.078.076-.078M16.116 14.976a.637.637 0 0 1 .982.8l-3.366 5.11a.636.636 0 1 1-1.063-.7l3.366-5.11a.6.6 0 0 1 .081-.1M18.9 17.678a.587.587 0 1 0-.974-.654l-1.869 2.787a.587.587 0 0 0 .975.654z"
      />
    </svg>
  );
}
SvgRainStorm.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgRainStorm;
