import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgRole({
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
        d="M13.612 22.865a.535.535 0 0 1 0-1.07h1.597v-1.069h-3.476a1.5 1.5 0 0 1-1.5-1.5V13.49a1.5 1.5 0 0 1 1.5-1.5h10.149a1.5 1.5 0 0 1 1.5 1.5v5.736a1.5 1.5 0 0 1-1.5 1.5h-3.474v1.07h1.597a.535.535 0 1 1 0 1.069zm-1.957-9.22v5.428a.75.75 0 0 0 .75.75h8.805a.75.75 0 0 0 .75-.75v-5.428a.75.75 0 0 0-.75-.75h-8.805a.75.75 0 0 0-.75.75M9.33 20.108H4.755v-3.717h4.527v3.33q0 .195.05.383zm-5.106 0H1.206a8.2 8.2 0 0 1 2.175-5.63 8 8 0 0 1 .842-.78v6.41m11.714-.924a.65.65 0 0 1 0-.833.6.6 0 0 1 .431-.142.58.58 0 0 1 .424.145.64.64 0 0 1 0 .825.57.57 0 0 1-.422.15.6.6 0 0 1-.434-.146m-.047-1.54v-.245a1.1 1.1 0 0 1 .135-.55c.13-.197.299-.367.495-.498a2 2 0 0 0 .456-.401.6.6 0 0 0 .111-.347.38.38 0 0 0-.159-.326.75.75 0 0 0-.441-.112c-.395.018-.78.129-1.125.323l-.36-.722a3.14 3.14 0 0 1 1.559-.412c.387-.02.769.095 1.08.327a1.07 1.07 0 0 1 .4.87c.006.22-.052.437-.165.626a2.4 2.4 0 0 1-.626.593q-.225.15-.4.356a.55.55 0 0 0-.084.32v.198zm-6.61-1.782H6.347v-3.334a7.062 7.062 0 0 1 3.548-.27 1.5 1.5 0 0 0-.612 1.21v2.394m-3.466 0h-1.06v-2.71a8 8 0 0 1 1.06-.494v3.204M4.39 7.577h8.348a4.178 4.178 0 0 1-8.348 0m11.272-.53H1.736l7.08-5.806 6.847 5.804z"
      />
    </svg>
  );
}
SvgRole.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgRole;
