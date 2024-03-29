import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPlatform({
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
        d="M17.786 19.454a.676.676 0 0 1-.676-.675v-6.372a.676.676 0 0 1 .676-.676h2.538a.676.676 0 0 1 .676.676v6.372a.676.676 0 0 1-.676.675zm.969-.443a.354.354 0 0 0 .678.135.352.352 0 0 0-.575-.384.36.36 0 0 0-.103.25m-1.15-5.806v4.068a.676.676 0 0 0 .677.676h1.547a.676.676 0 0 0 .676-.676v-4.068a.676.676 0 0 0-.676-.676h-1.545a.676.676 0 0 0-.677.677zM7.127 18.54a.654.654 0 0 1 0-1.307h1.951v-1.307H4.352A1.35 1.35 0 0 1 3 14.575v-7.97a1.35 1.35 0 0 1 1.352-1.352h13.361a1.35 1.35 0 0 1 1.352 1.352v4.42h-1.737V7.032a.676.676 0 0 0-.676-.676H5.412a.676.676 0 0 0-.676.676v7.114a.676.676 0 0 0 .676.676h10.993v1.105h-3.418v1.306h1.952a.654.654 0 0 1 0 1.307z"
      />
    </svg>
  );
}
SvgPlatform.propTypes = {
  className: PropTypes.string,
};
export default SvgPlatform;
