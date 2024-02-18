import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgDebt({
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
        d="M5.183 10.653V7.796h.84L7.8 10.652h1.752q-.51-.733-2.19-3.243.663-.29 1.024-.8.36-.513.361-1.17 0-1.125-.728-1.675-.728-.555-2.245-.555H3.605v7.443zm.51-4.14h-.51V4.502h.479q.764 0 1.125.224.367.224.367.754 0 .534-.357.784-.356.25-1.104.25M12.272 10.026q.57.729 1.574.728a1.95 1.95 0 0 0 1.16-.35q.495-.352.76-1.024.269-.672.269-1.584 0-1.384-.57-2.164-.57-.779-1.579-.779-1.068 0-1.614.845h-.07l-.22-.738H10.72v8.198h1.553V10.85q0-.112-.081-.825zm.275-3.574q.265-.357.84-.356.55 0 .805.422.26.418.26 1.258 0 1.72-1.044 1.72-.59 0-.866-.396-.27-.398-.27-1.314v-.168q.01-.815.275-1.166"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.965 15.637h-1.74v3.51h1.74l6.74 1.233a1 1 0 0 0 .484-.03l5.005-1.599a.2.2 0 0 0 .126-.261l-.335-.885a1 1 0 0 0-1.165-.619l-3.57.843a1 1 0 0 1-.586-.039l-2.503-.956a.2.2 0 0 1-.129-.187v-.22c0-.11.09-.2.2-.2h1.824a1 1 0 0 0 1-1v-.603a.2.2 0 0 0-.2-.2h-4.198a1 1 0 0 0-.442.103zM3.605 15.672h1.77v3.505h-1.77z"
      />
    </svg>
  );
}
SvgDebt.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgDebt;
