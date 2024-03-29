import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPond({
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
        d="M16.933 20.68h-9.87A3.986 3.986 0 0 1 3 16.787V4.553c0-.55.154-.803.484-.803a3.8 3.8 0 0 1 1.407.58c.761.502 1.63.816 2.535.919a4.6 4.6 0 0 0 2.436-.757 4 4 0 0 1 1.954-.668h.077c.74.043 1.457.27 2.087.659a5.5 5.5 0 0 0 2.449.766h.069a5.24 5.24 0 0 0 2.226-.742l.279-.147.01-.005c.45-.294.954-.496 1.483-.594.343 0 .504.252.504.792v12.234a3.986 3.986 0 0 1-4.067 3.893m-5.892-5.523a.703.703 0 0 0-.627 1.015l.194.389-.194.387a.702.702 0 0 0 .765 1.003l1.709-.342a4.9 4.9 0 0 0 1.716-.35l-1.151-1.887c-.194.08-.4.124-.61.13l-1.663-.332a1 1 0 0 0-.137-.014zm3.508-1.399a1.78 1.78 0 0 1-.512 1.23l1.202 1.97a4.93 4.93 0 0 0 2.35-3.2zm.164-5.577-1.255 3.954c.422.175.76.505.946.923h3.285q.002-.045.006-.088a4 4 0 0 0 .011-.265 4.91 4.91 0 0 0-2.992-4.522zm-7.528-.387a.703.703 0 0 0-.702.701 3.51 3.51 0 0 0 3.508 3.509h2.774l1.286-4.043a5 5 0 0 0-1.252-.167zm1.052 1.749a.351.351 0 1 1-.001-.703.351.351 0 0 1 .001.703"
      />
    </svg>
  );
}
SvgPond.propTypes = {
  className: PropTypes.string,
};
export default SvgPond;
