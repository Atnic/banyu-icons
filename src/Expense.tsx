import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExpense = ({
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
      fillRule="evenodd"
      d="M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m5.728-5.024a.465.465 0 0 0 .16-.088.394.394 0 0 0 .092-.149.361.361 0 0 0 .016-.17l-.035-.653-.002-.05c-.024-.42-.047-.837-.067-1.255a.448.448 0 0 0-.141-.333.51.51 0 0 0-.112-.073.426.426 0 0 0-.187-.045.486.486 0 0 0-.174.045.435.435 0 0 0-.139.101l-.585.515-5.17-4.568a.704.704 0 0 0-.464-.17.704.704 0 0 0-.464.17l-2.061 1.821L6.74 9.17a.665.665 0 0 0-.213-.126.73.73 0 0 0-.502 0 .665.665 0 0 0-.212.126l-.12.106a.58.58 0 0 0-.143.188.52.52 0 0 0 0 .443.58.58 0 0 0 .142.188l2.743 2.421c.06.054.133.097.212.126a.729.729 0 0 0 .715-.126l2.058-1.819 4.583 4.054c-.134.116-.267.234-.398.352l-.19.17a.347.347 0 0 0-.143.19.31.31 0 0 0 .023.23c.02.039.048.075.083.106a.532.532 0 0 0 .35.106l1.257.052 1.015.042h.043a.506.506 0 0 0 .185-.023"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgExpense;
