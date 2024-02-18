import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgSalinity({
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
        fillRule="evenodd"
        d="m11.645 3.554.445-.329.005.007.014.018.052.072.195.271a71.996 71.996 0 0 1 2.806 4.224c.767 1.253 1.541 2.622 2.125 3.898.574 1.255 1.002 2.497 1.002 3.467a6.645 6.645 0 0 1-13.289 0c0-.97.428-2.212 1.002-3.467.584-1.276 1.358-2.645 2.125-3.898a72 72 0 0 1 3.001-4.495l.052-.072.014-.018.005-.007zm0 0 .445-.329a.554.554 0 0 0-.891 0zm-.496 1.658a74 74 0 0 1 .496-.71q.212.299.495.71a71 71 0 0 1 2.078 3.183c.755 1.234 1.504 2.562 2.062 3.781.568 1.241.902 2.294.902 3.006a5.537 5.537 0 1 1-11.075 0c0-.712.334-1.765.902-3.006.558-1.22 1.307-2.547 2.062-3.78a71 71 0 0 1 2.078-3.184m1.302 6.993V9.969h-1.612v2.236H8.602v1.612h2.237v2.236h1.612v-2.236h2.236v-1.612zm-3.849 5.782V16.77h6.085v1.216z"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgSalinity.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgSalinity;
