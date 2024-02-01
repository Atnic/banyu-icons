import * as React from "react";
const SvgUnpin = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 28 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m4.348 21.1 5.263-7.9 2.974 2.3z" />
    <path d="M12.778 8.394 10.64 10.1c-1.144-.6-2.631-.4-3.66.5-.23.2-.23.5 0 .7l7.78 5.9c.228.2.572.2.8 0 .916-.9.916-2.3.115-3.2l.144-.179zM18.332 10.71l1.462-1.81c1.144.4 2.402.2 3.203-.7.343-.1.343-.4.115-.6l-1.259-1-1.716-1.3-3.09-2.3a.61.61 0 0 0-.8 0c-.801.8-.915 2-.344 2.9l-.183.146zM11.367 3.795c-.211-.376-.024-.813.416-.976.44-.164.969.008 1.18.384l7.012 12.517c.21.376.024.813-.417.976-.44.164-.968-.008-1.179-.384z" />
  </svg>
);
export default SvgUnpin;
