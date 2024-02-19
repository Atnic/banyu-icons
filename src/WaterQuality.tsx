import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgWaterQuality({
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
        d="m11.936 3.22-.436.322-.436-.322a.542.542 0 0 1 .872 0M11.5 4.47a72 72 0 0 0-2.517 3.808c-.74 1.207-1.472 2.506-2.018 3.698-.555 1.214-.882 2.244-.882 2.94a5.417 5.417 0 0 0 10.834 0c0-.696-.327-1.726-.882-2.94-.546-1.192-1.278-2.49-2.018-3.698A69 69 0 0 0 11.5 4.47m0-.928-.436-.322-.005.007-.013.018-.051.07q-.068.091-.191.265a70.525 70.525 0 0 0-2.745 4.132c-.75 1.226-1.508 2.565-2.079 3.814-.562 1.227-.98 2.442-.98 3.39a6.5 6.5 0 0 0 13 0c0-.948-.419-2.163-.98-3.39-.571-1.249-1.329-2.588-2.079-3.814a71 71 0 0 0-2.936-4.397l-.05-.07-.014-.018-.005-.007z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.632 13.807a.5.5 0 0 1 .579.405 3.41 3.41 0 0 1-1.998 3.608.5.5 0 1 1-.426-.905c1.4-.658 1.537-1.975 1.44-2.53a.5.5 0 0 1 .405-.578"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgWaterQuality.propTypes = {
  className: PropTypes.string,
};
export default SvgWaterQuality;
