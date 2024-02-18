import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgExpense({
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
        fillRule="evenodd"
        d="M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m5.728-5.024a.5.5 0 0 0 .16-.088.4.4 0 0 0 .092-.149.36.36 0 0 0 .016-.17l-.035-.653-.002-.05q-.037-.629-.067-1.255a.45.45 0 0 0-.141-.333.5.5 0 0 0-.112-.073.4.4 0 0 0-.187-.045.5.5 0 0 0-.174.045.4.4 0 0 0-.139.101l-.585.515-5.17-4.568a.7.7 0 0 0-.464-.17.7.7 0 0 0-.464.17l-2.061 1.821L6.74 9.17a.7.7 0 0 0-.213-.126.73.73 0 0 0-.502 0 .7.7 0 0 0-.212.126l-.12.106a.6.6 0 0 0-.143.188.52.52 0 0 0 0 .443.6.6 0 0 0 .142.188l2.743 2.421q.092.082.212.126a.73.73 0 0 0 .715-.126l2.058-1.819 4.583 4.054q-.201.175-.398.352l-.19.17a.35.35 0 0 0-.143.19.3.3 0 0 0 .023.23q.03.059.083.106a.53.53 0 0 0 .35.106l1.257.052 1.015.042h.043a.5.5 0 0 0 .185-.023"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgExpense.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgExpense;
