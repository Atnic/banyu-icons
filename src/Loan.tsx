import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgLoan({
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
        d="M7.965 8.148h-1.74v-3.51h1.74l6.74-1.233a1 1 0 0 1 .484.03l5.006 1.599a.2.2 0 0 1 .126.261l-.336.885a1 1 0 0 1-1.165.619l-3.57-.843a1 1 0 0 0-.586.039l-2.503.956a.2.2 0 0 0-.13.187v.22c0 .11.09.2.2.2h1.825a1 1 0 0 1 1 1v.604a.2.2 0 0 1-.2.2h-4.198a1 1 0 0 1-.442-.103zM3.604 8.114h1.77V4.608h-1.77z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.26 18.136V15.28h.839l1.777 2.856h1.75q-.508-.734-2.188-3.242.66-.29 1.023-.8.36-.514.361-1.17 0-1.125-.728-1.675-.728-.555-2.244-.555H3.68v7.442zm.508-4.138H5.26v-2.011h.479q.763 0 1.125.224.366.224.366.753 0 .535-.356.784-.357.25-1.105.25M12.347 17.51q.57.728 1.572.728a1.95 1.95 0 0 0 1.161-.351q.495-.352.758-1.024.27-.67.27-1.583 0-1.384-.57-2.163-.57-.78-1.578-.779-1.069 0-1.614.845h-.07l-.22-.738h-1.262v8.196h1.553v-2.306q0-.113-.082-.825zm.274-3.574q.265-.356.84-.356.55 0 .805.423.26.417.26 1.257 0 1.72-1.044 1.72-.59 0-.866-.396-.27-.398-.27-1.314v-.168q.01-.814.275-1.165"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgLoan.propTypes = {
  className: PropTypes.string,
};
export default SvgLoan;
