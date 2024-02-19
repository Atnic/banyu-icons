import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgFeed({
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
      viewBox="0 0 25 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M13.731 12.461a.64.64 0 0 1-.184.443l.432.71a1.78 1.78 0 0 0 .847-1.153zM13.675 12.208a.64.64 0 0 0-.34-.333l.453-1.424a1.77 1.77 0 0 1 1.078 1.63l-.003.06-.003.067zM13.334 13.042a.6.6 0 0 1-.22.047l-.599-.12a.254.254 0 0 0-.275.362l.07.14-.07.139a.252.252 0 0 0 .275.36l.617-.123a1.8 1.8 0 0 0 .62-.125z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.097 10.31q.23 0 .452.06l-.463 1.459h-1a1.266 1.266 0 0 1-1.263-1.264.25.25 0 0 1 .252-.255zm-1.713.608q.031.021.07.022v.002a.13.13 0 0 0 .118-.08.1.1 0 0 0 .009-.049.126.126 0 1 0-.197.105"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.5 21.019a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12.019a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3.019a8.94 8.94 0 0 1 6.362 2.638 8.94 8.94 0 0 1 2.638 6.362 8.94 8.94 0 0 1-2.638 6.362 8.94 8.94 0 0 1-6.362 2.638m2.373-4.19a1.04 1.04 0 0 0 .918.604 1.11 1.11 0 0 0 1.048-1.164 1.16 1.16 0 0 0-.658-1.086q.188-1.58.2-3.171a27 27 0 0 0-.195-3.056 1.17 1.17 0 0 0 .653-1.08 1.113 1.113 0 0 0-1.048-1.164 1.04 1.04 0 0 0-.938.646 11.5 11.5 0 0 0-2.285-.26c-.717.006-1.43.088-2.13.243a1.04 1.04 0 0 0-.931-.63A1.11 1.11 0 0 0 8.46 7.877a1.18 1.18 0 0 0 .627 1.068 23.5 23.5 0 0 0-.225 3.068q.014 1.597.233 3.18a1.17 1.17 0 0 0-.635 1.072 1.11 1.11 0 0 0 1.047 1.164 1.04 1.04 0 0 0 .908-.584c.703.183 1.425.28 2.152.29a10 10 0 0 0 2.305-.311z"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgFeed.propTypes = {
  className: PropTypes.string,
};
export default SvgFeed;
