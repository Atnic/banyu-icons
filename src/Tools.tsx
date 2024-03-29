import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgTools({
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
        d="M11.7 20.4a8.64 8.64 0 0 1-6.15-2.55A8.64 8.64 0 0 1 3 11.7a8.64 8.64 0 0 1 2.55-6.15A8.64 8.64 0 0 1 11.7 3a8.64 8.64 0 0 1 6.15 2.55 8.64 8.64 0 0 1 2.55 6.15 8.64 8.64 0 0 1-2.55 6.15 8.64 8.64 0 0 1-6.15 2.55m-2.664-5.43c.631.522 1.4.848 2.215.938V18H12v-2.079a4.2 4.2 0 0 0 2.296-.874l1.2 1.2.53-.531-1.176-1.176A4.23 4.23 0 0 0 15.922 12H18v-.75h-2.093a4.2 4.2 0 0 0-.94-2.217l1.274-1.275-.53-.53-1.274 1.275a4.18 4.18 0 0 0-2.44-.99V6h-.75v1.526c-.876.096-1.7.466-2.352 1.058L7.536 7.227l-.53.53 1.378 1.378a4.2 4.2 0 0 0-.86 2.115H6V12h1.51a4.2 4.2 0 0 0 .99 2.44l-1.274 1.276.53.53 1.276-1.274zm2.966.203V12.75l1.763 1.763a3.46 3.46 0 0 1-1.762.657zm-.75-.02a3.46 3.46 0 0 1-1.682-.717l1.68-1.686v2.4zm3.068-1.145-2.007-2.005h2.861a3.43 3.43 0 0 1-.854 2.005m-5.285-.098a3.45 3.45 0 0 1-.77-1.906h2.678zm6.12-2.657H12.75l1.683-1.683a3.45 3.45 0 0 1 .717 1.68zm-4.65 0h-2.22a3.46 3.46 0 0 1 .64-1.58L10.5 11.25zm1.5-.311V8.265a3.45 3.45 0 0 1 1.906.77l-1.905 1.905zm-.75 0L9.433 9.12a3.46 3.46 0 0 1 1.822-.834v2.657z"
      />
    </svg>
  );
}
SvgTools.propTypes = {
  className: PropTypes.string,
};
export default SvgTools;
