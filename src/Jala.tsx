import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgJala({
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
        d="M18.356 19.6H4.644A2.144 2.144 0 0 1 2.5 17.457V6.144A2.144 2.144 0 0 1 4.644 4h13.712A2.144 2.144 0 0 1 20.5 6.144v11.312a2.144 2.144 0 0 1-2.144 2.145M9.26 14.23a.36.36 0 0 0-.286.181.45.45 0 0 0 .036.429q.25.244.541.433a3.86 3.86 0 0 0 1.984.613.7.7 0 0 0 .206-.04.5.5 0 0 1 .155-.032c.453-.08.876-.278 1.226-.577a2.29 2.29 0 0 0 .902-1.839V7.844a.24.24 0 0 0-.181-.253.6.6 0 0 0-.143-.02.3.3 0 0 0-.254.128v.036a.9.9 0 0 0-.04.406q.002.067.004.135v4.977q0 .015.003.029c.007.039.016.087-.04.115v.035a1.83 1.83 0 0 1-.722 1.299 1.7 1.7 0 0 1-1.158.412 3.024 3.024 0 0 1-2.087-.846.2.2 0 0 0-.146-.067"
      />
    </svg>
  );
}
SvgJala.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgJala;
