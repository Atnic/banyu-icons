import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgCoin({
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
        d="M3 8.036V5.464c0-.947 3.262-1.714 7.285-1.714 4.024 0 7.286.767 7.286 1.714v2.572c0 .947-3.262 1.714-7.286 1.714S3 8.978 3 8.036M4.714 18.32c0 .944 3.268 1.715 7.286 1.715s7.285-.77 7.285-1.714v-2.572a.69.69 0 0 0-.343-.522 23.3 23.3 0 0 1-5.228.522c-3.184 0-5.973-.48-6.943-1.194-1.326.322-2.057.746-2.057 1.194z"
      />
      <path
        fill="currentColor"
        d="M6.428 13.178c0 .943 3.269 1.714 7.286 1.714s7.285-.771 7.286-1.714v-2.571c0-.604-1.31-1.152-3.505-1.466-.517.835-3.616 1.465-7.209 1.465a27 27 0 0 1-3.781-.249.47.47 0 0 0-.077.25z"
      />
    </svg>
  );
}
SvgCoin.propTypes = {
  className: PropTypes.string,
};
export default SvgCoin;
