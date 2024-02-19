import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgDo({
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
        d="M15.13 17.018H12.97v-.47l.775-.814q.345-.366.45-.506.105-.143.152-.263a.7.7 0 0 0 .047-.25q0-.192-.104-.287a.38.38 0 0 0-.272-.094.76.76 0 0 0-.349.085q-.168.085-.352.243l-.355-.436a2.3 2.3 0 0 1 .378-.285q.15-.082.327-.127t.397-.046q.29 0 .511.11a.83.83 0 0 1 .345.307.84.84 0 0 1 .122.451q0 .222-.076.417-.075.192-.232.396-.156.204-.553.581l-.398.388v.03h1.346z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.936 3.012-.436.321-.436-.321a.542.542 0 0 1 .872 0m-.436 1.25A72 72 0 0 0 8.983 8.07c-.74 1.207-1.472 2.505-2.018 3.698-.555 1.214-.882 2.244-.882 2.94a5.417 5.417 0 1 0 10.834 0c0-.696-.327-1.726-.882-2.94-.546-1.193-1.278-2.491-2.018-3.698A69 69 0 0 0 11.5 4.262m0-.929-.436-.321-.005.007-.013.018-.051.07q-.068.091-.191.265a70.525 70.525 0 0 0-2.745 4.132c-.75 1.225-1.508 2.565-2.079 3.813C5.418 12.545 5 13.76 5 14.708a6.5 6.5 0 1 0 13 0c0-.949-.419-2.163-.98-3.39-.571-1.249-1.329-2.589-2.079-3.814a71 71 0 0 0-2.936-4.398l-.05-.07-.014-.017-.005-.007z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.093 15.393a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25m0 1.084a2.708 2.708 0 1 0 0-5.417 2.708 2.708 0 0 0 0 5.417"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgDo.propTypes = {
  className: PropTypes.string,
};
export default SvgDo;
