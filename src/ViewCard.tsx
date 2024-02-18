import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewCard = ({
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
      d="M13.563 3.25h7.5c.517 0 .937.42.937.938v6.25c0 .517-.42.937-.937.937h-7.5a.937.937 0 0 1-.938-.937v-6.25c0-.518.42-.938.938-.938m-3.126 0h-7.5A.937.937 0 0 0 2 4.188v6.25c0 .517.42.937.938.937h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938M2 13.563v6.25c0 .517.42.937.938.937h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938h-7.5a.937.937 0 0 0-.938.938m11.563 7.187h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938h-7.5a.937.937 0 0 0-.938.938v6.25c0 .517.42.937.938.937"
    />
  </svg>
);
export default SvgViewCard;
