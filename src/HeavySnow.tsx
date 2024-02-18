import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeavySnow = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#182230"
      d="M12.085 12.462a.523.523 0 0 0 .906-.523l-2.052-3.554h4.103a.523.523 0 1 0 0-1.046H10.94l2.052-3.554a.523.523 0 0 0-.906-.523l-2.052 3.553L7.98 3.262a.523.523 0 1 0-.906.523l2.052 3.553H5.023a.523.523 0 1 0 0 1.047h4.104l-2.052 3.554a.523.523 0 1 0 .906.523l2.052-3.554zM15.109 11.431a.63.63 0 0 1 .187-.851.584.584 0 0 1 .822.19l2.41 3.95a.63.63 0 0 1-.188.852.584.584 0 0 1-.823-.191zM13.55 14.998a.599.599 0 1 1 1.026-.617l2.968 4.93a.598.598 0 1 1-1.026.617zM9.948 13.876a.599.599 0 0 0-.218.818l1.716 2.962a.599.599 0 0 0 1.036-.6l-1.716-2.962a.599.599 0 0 0-.818-.218"
    />
  </svg>
);
export default SvgHeavySnow;
