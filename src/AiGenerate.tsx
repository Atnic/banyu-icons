import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgAiGenerate({
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
        d="M12.486 5.091c.338-.83 1.513-.83 1.851 0l1.167 2.857a1 1 0 0 0 .548.548l2.857 1.166c.83.339.83 1.513 0 1.852l-2.857 1.167a1 1 0 0 0-.548.547l-1.166 2.857c-.34.83-1.513.83-1.852 0l-1.167-2.857a1 1 0 0 0-.547-.547l-2.857-1.167c-.83-.339-.83-1.513 0-1.852l2.857-1.166a1 1 0 0 0 .547-.548z"
      />
      <path
        fill="currentColor"
        d="M6.347 14.345a.515.515 0 0 1 .953 0l.601 1.471c.053.129.154.23.283.283l1.471.6a.515.515 0 0 1 0 .954l-1.471.601a.52.52 0 0 0-.283.283l-.6 1.471a.515.515 0 0 1-.954 0l-.601-1.471a.52.52 0 0 0-.283-.283l-1.471-.6a.515.515 0 0 1 0-.954l1.471-.601a.52.52 0 0 0 .283-.283z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M5.63 3.442a.273.273 0 0 1 .505 0l.318.78a.27.27 0 0 0 .15.149l.779.318a.273.273 0 0 1 0 .505l-.78.318a.27.27 0 0 0-.15.15l-.317.778a.273.273 0 0 1-.505 0l-.318-.779a.27.27 0 0 0-.15-.15l-.779-.317a.273.273 0 0 1 0-.505l.78-.318a.27.27 0 0 0 .149-.15z"
        opacity={0.2}
      />
    </svg>
  );
}
SvgAiGenerate.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgAiGenerate;
