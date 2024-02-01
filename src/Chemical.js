import * as React from "react";
const SvgChemical = ({ title, titleId, ...props }) => (
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
    <path d="m7.5 14.716-1.392 4.343h12.205L16.5 14.716z" />
    <path
      stroke="#182230"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13.683 4h-3.366m3.366 0c.465 0 .842.421.842.941v4.466c0 .158.035.313.103.45l4.268 8.751c.306.627-.1 1.392-.739 1.392H5.843c-.639 0-1.045-.765-.739-1.392l4.268-8.75a1.03 1.03 0 0 0 .103-.45V4.94c0-.52.377-.941.842-.941m3.366 0h2.525m-5.891 0H7.792M6.108 19.059 7.5 14.716h9l1.813 4.343z"
    />
  </svg>
);
export default SvgChemical;
