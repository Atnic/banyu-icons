import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgExpenseMenu({
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
        d="m17.52 11.102-1.415.407-.16-.558a.826.826 0 0 0-.446-1.55l-.378-1.315-.754-2.62c-.338-1.173-1.397-1.994-2.577-1.995q-.061 0-.125.002c-1.142.05-2.13.85-2.458 1.99L8.074 9.4 8.027 9.4a.827.827 0 0 0-.398 1.552l-.16.558-1.414-.407.867-3.016.871-3.03c.503-1.75 2.034-2.976 3.808-3.052q.096-.005.191-.004c1.83.002 3.471 1.26 3.989 3.06z"
      />
      <path
        fill="currentColor"
        d="M20.567 20.638 19.42 9.24c-.065-.653-.722-1.154-1.51-1.154H5.661c-.79 0-1.446.501-1.512 1.154L3.004 20.638C2.93 21.372 3.628 22 4.516 22h14.538c.888 0 1.586-.628 1.512-1.362zm-12.54-9.585a.827.827 0 1 1 0-1.654.827.827 0 0 1-.001 1.654m7.519 0a.827.827 0 1 1 0-1.653.827.827 0 0 1 0 1.653"
      />
    </svg>
  );
}
SvgExpenseMenu.propTypes = {
  className: PropTypes.string,
};
export default SvgExpenseMenu;
