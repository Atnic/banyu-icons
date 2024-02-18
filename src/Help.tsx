import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHelp = ({
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
      d="M15.531 11.234a3.069 3.069 0 0 0 .938-2.25c0-1.093-.39-2.03-1.172-2.812C14.516 5.39 13.578 5 12.484 5c-1.093 0-2.03.39-2.812 1.172C8.89 6.953 8.5 7.89 8.5 8.984h1.969c0-.53.203-1 .61-1.406.405-.406.874-.61 1.405-.61.532 0 1 .204 1.407.61.406.406.609.875.609 1.406 0 .532-.203 1-.61 1.407l-1.218 1.265c-.781.844-1.172 1.781-1.172 2.813v.515h1.969c0-1.03.39-1.968 1.172-2.812zM13.47 18.97V17H11.5v1.969zM5.406 4.953C7.375 2.984 9.734 2 12.484 2s5.094.984 7.032 2.953c1.968 1.938 2.953 4.281 2.953 7.031s-.985 5.11-2.953 7.079c-1.938 1.937-4.282 2.906-7.032 2.906S7.375 21 5.406 19.062C3.47 17.095 2.5 14.735 2.5 11.985s.969-5.093 2.906-7.03"
    />
  </svg>
);
export default SvgHelp;
