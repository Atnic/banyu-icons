import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgRainNormal({
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
      viewBox="0 0 25 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M8.818 5.752C9.608 4.783 10.806 4 12.513 4c1.695 0 2.885.707 3.673 1.595a5.56 5.56 0 0 1 1.21 2.312c.787-.057 1.812.083 2.694.556 1.035.555 1.868 1.573 1.868 3.218 0 1.751-.72 2.817-1.66 3.405-.906.567-1.976.666-2.696.587h-.639a3.7 3.7 0 0 0 .079-.778c0-.95-.54-1.875-.925-2.437a10 10 0 0 0-.826-1.04l-.017-.017-.008-.008-.724-.758-.724.758-.002.002-.006.006-.017.018a6 6 0 0 0-.25.283 10 10 0 0 0-.576.756c-.385.562-.925 1.486-.925 2.437q0 .39.072.748l-.123-.185a9.6 9.6 0 0 0-.826-1.04l-.018-.017-.005-.006-.002-.002-.001-.002-.723-.756-.723.757H9.69l-.001.003-.006.006-.017.018a6 6 0 0 0-.25.283 10 10 0 0 0-.72.971H7.463c-.717 0-1.814-.09-2.743-.579a3.14 3.14 0 0 1-1.22-1.102C3.185 13.49 3 12.86 3 12.082c0-1.58.804-2.668 1.827-3.278.872-.52 1.916-.702 2.775-.55a6.35 6.35 0 0 1 1.216-2.502"
      />
      <path
        fill="currentColor"
        d="M16.042 14.895c0 1.242-.672 1.687-1.5 1.687s-1.5-.445-1.5-1.687c0-1.243 1.5-2.813 1.5-2.813s1.5 1.57 1.5 2.813M11.916 17.895c0 1.242-.672 1.687-1.5 1.687-.829 0-1.5-.445-1.5-1.687 0-1.243 1.5-2.813 1.5-2.813s1.5 1.57 1.5 2.813"
      />
    </svg>
  );
}
SvgRainNormal.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgRainNormal;
