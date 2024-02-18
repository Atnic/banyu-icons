import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgAge({
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
        d="M12.332 17.09a.7.7 0 0 0 .448.06l1.708-.34a4.9 4.9 0 0 0 1.715-.35l-1.152-1.885q-.293.121-.61.131l-1.66-.332a.71.71 0 0 0-.696.262.7.7 0 0 0-.07.737l.195.387-.195.388a.705.705 0 0 0 .317.941M10.641 16.914h.514v-4.621h.513v-.513h-.513a.513.513 0 0 0-.514.513zM16.839 16.158a4.92 4.92 0 0 0 2.347-3.196h-3.038c-.005.46-.188.9-.51 1.229zM16.001 12.26h3.287l.002-.029.003-.05v-.005l.001-.012c.006-.09.011-.17.011-.258a4.91 4.91 0 0 0-2.99-4.518l-1.257 3.948c.421.175.76.506.943.924"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.585 9.249c.2.2.472.313.755.313h.001a1.07 1.07 0 0 0 .754-1.824 1.07 1.07 0 0 0-1.51 0 1.07 1.07 0 0 0 0 1.51m.003-1.1a.35.35 0 0 1 .248-.103.351.351 0 0 1 0 .701.35.35 0 0 1-.248-.598"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.591 11.208h2.772l1.285-4.038A5 5 0 0 0 14.395 7H8.787a.7.7 0 0 0-.702.701 3.51 3.51 0 0 0 3.506 3.507m-2.206-3.67c.253-.253.597-.396.955-.396h.001a1.353 1.353 0 0 1 .955 2.307 1.354 1.354 0 0 1-1.911 0 1.353 1.353 0 0 1 0-1.91"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.316 16.863a.33.33 0 0 0 .394.293l.804-.16a2.3 2.3 0 0 0 .807-.165l-.542-.888a.8.8 0 0 1-.287.062l-.782-.156a.329.329 0 0 0-.36.47l.091.183-.091.183a.33.33 0 0 0-.034.178M8.296 15.183a.83.83 0 0 1-.24.58l.564.926a2.32 2.32 0 0 0 1.105-1.506zM7.78 14.423a.83.83 0 0 1 .445.434l1.547-.002.003-.041q.005-.062.006-.125a2.31 2.31 0 0 0-1.409-2.127z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.984 13.876c.31.309.728.483 1.166.484h1.305l.605-1.901a2.3 2.3 0 0 0-.59-.08H4.83a.33.33 0 0 0-.33.33c0 .438.175.857.484 1.167m.204-.747a.165.165 0 1 1 .274-.184.165.165 0 0 1-.274.184"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.176 11.95q.033.216.092.426h.771s.05-.21.085-.426.822.16.822.16-.738-.836-.907-.836-.386.24-.386.24-.204-.24-.385-.24-.898.838-.898.838.775-.377.806-.162"
      />
    </svg>
  );
}
SvgAge.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgAge;
