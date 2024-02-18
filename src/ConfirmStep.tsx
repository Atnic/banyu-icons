import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConfirmStep = ({
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
      d="M8.56 17.283a.77.77 0 0 1-.619-.307.78.78 0 0 1-.079-.82l.216-.43-.216-.431a.783.783 0 0 1 .652-1.126l2.725 2.669q-.312.044-.628.05l-1.896.377a1 1 0 0 1-.155.018m4.555-2.7-.962-.943c.192-.306.295-.66.298-1.02h2.803l-2.135 1.962zm2.82-2.742h-3.65a1.97 1.97 0 0 0-1.047-1.025l1.394-4.385a5.45 5.45 0 0 1 3.32 5.016c0 .102-.006.193-.012.29q.001.039-.005.082zm-5.464-1.168H7.394A3.894 3.894 0 0 1 3.5 6.78.78.78 0 0 1 4.28 6h6.224q.707.005 1.39.188l-1.426 4.485zM5.447 7.162a.39.39 0 1 0-.003.779.39.39 0 0 0 .003-.78"
    />
    <path
      fill="#182230"
      d="m12.769 17.923-.175-.18a1.2 1.2 0 0 1-.327-.34L9.381 14.43c-.192-.198-.061-.747.29-1.226.352-.48.793-.707.985-.51l2.425 2.5 6.074-5.873a.894.894 0 0 1 1.357.213 1.22 1.22 0 0 1-.04 1.564l-6.805 6.582a.8.8 0 0 1-.42.216.7.7 0 0 1-.26.096.25.25 0 0 1-.218-.07"
    />
  </svg>
);
export default SvgConfirmStep;
