import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRainHeavy = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#182230"
      d="M12.513 3c-1.707 0-2.905.783-3.695 1.752a6.353 6.353 0 0 0-1.216 2.502c-.859-.152-1.903.03-2.775.55C3.804 8.414 3 9.501 3 11.082c0 .786.209 1.421.561 1.924.35.5.828.85 1.336 1.094 1.007.484 2.18.573 2.897.573h.878l1.642-2.45a1.41 1.41 0 0 1 2.432 1.416l.368-.558a1.53 1.53 0 0 1 2.76 1.215l.406-.605a1.41 1.41 0 0 1 2.573.936 4.045 4.045 0 0 0 1.446-.541c.94-.588 1.659-1.654 1.659-3.405 0-1.645-.833-2.663-1.868-3.218-.882-.473-1.907-.613-2.694-.556a5.564 5.564 0 0 0-1.21-2.312C15.398 3.707 14.208 3 12.513 3"
    />
    <path
      fill="#182230"
      d="M11.856 12.455a.666.666 0 0 1 .183.925l-2.123 3.166a.667.667 0 1 1-1.107-.742l2.123-3.166a.666.666 0 0 1 .924-.183M14.994 14.32a.723.723 0 1 0-1.207-.795l-3.824 5.804a.723.723 0 1 0 1.208.795zM18.005 14.847a.667.667 0 0 0-1.108-.742l-2.122 3.165a.666.666 0 1 0 1.107.743z"
    />
  </svg>
);
export default SvgRainHeavy;
