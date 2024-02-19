import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgSrEstimation({
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
        d="M11.765 3.172A5 5 0 0 0 10.485 3h-5.73a.716.716 0 0 0-.717.716A3.586 3.586 0 0 0 7.62 7.298h2.83zM5.829 4.785a.361.361 0 1 1 0-.722.361.361 0 0 1 0 .722"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.16 7.43c.431.179.776.517.964.944h3.357l.006-.087c.006-.096.012-.181.012-.275a5.02 5.02 0 0 0-3.056-4.616zM12.277 9.09c-.004.47-.192.92-.523 1.255l1.228 2.01a5.04 5.04 0 0 0 2.4-3.266zM10.533 10.87q.323-.011.622-.134l1.178 1.927a5 5 0 0 1-1.752.357l-1.746.349a.716.716 0 0 1-.782-1.023l.198-.396-.198-.396a.716.716 0 0 1 .782-1.024z"
      />
      <path
        fill="currentColor"
        d="M20.623 9.122q.124.045.22.137a.64.64 0 0 1 .152.498l-.048 1.023q-.053 1.028-.096 2.047a.75.75 0 0 1-.197.521.7.7 0 0 1-.155.114.54.54 0 0 1-.259.07.62.62 0 0 1-.433-.229l-.81-.806-7.157 7.161a.91.91 0 0 1-1.287 0l-2.85-2.85-2.984 2.98a.906.906 0 0 1-1.283 0l-.17-.17a.906.906 0 0 1 0-1.284l3.797-3.792a.906.906 0 0 1 1.283 0l2.85 2.851 6.347-6.349q-.279-.272-.55-.55l-.263-.267a.54.54 0 0 1-.166-.657.6.6 0 0 1 .114-.17.68.68 0 0 1 .482-.167l1.573-.074 1.573-.074h.06a.6.6 0 0 1 .257.037"
      />
    </svg>
  );
}
SvgSrEstimation.propTypes = {
  className: PropTypes.string,
};
export default SvgSrEstimation;
