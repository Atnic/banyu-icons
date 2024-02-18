import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgVie({
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
      <rect width={18} height={12.857} x={3} y={6} fill="#fff" rx={2} />
      <mask
        id="vie_svg__a"
        width={18}
        height={13}
        x={3}
        y={6}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <rect width={18} height={12.857} x={3} y={6} fill="#fff" rx={2} />
      </mask>
      <g mask="url(#vie_svg__a)">
        <path fill="#EA403F" d="M3 6h18v12.857H3z" />
        <path
          fill="#FFFE4E"
          fillRule="evenodd"
          d="m12 13.933-2.267 1.616.836-2.656-2.237-1.656 2.784-.025.884-2.64.884 2.64 2.784.025-2.237 1.656.836 2.656z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
SvgVie.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgVie;
