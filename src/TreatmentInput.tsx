import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreatmentInput = ({
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
      d="M17.275 20.998a9.59 9.59 0 0 1-1.786-.128c-.093-.023-.144-.048-.144-.075v-.634c.648.2 1.328.269 2.003.203a5.121 5.121 0 0 0 2.003-.203v.634c0 .055-.216.104-.567.14-.35.037-.83.06-1.364.063zM5.65 20.725A1.65 1.65 0 0 1 4 19.076V7.45a1.65 1.65 0 0 1 1.65-1.649h.216V3.825A.825.825 0 0 1 6.69 3h2.082a.825.825 0 0 1 .825.825v1.974h.219a1.649 1.649 0 0 1 1.649 1.649v11.626a1.65 1.65 0 0 1-1.65 1.649zm-.824-7.64h5.771V9.787H4.825zm8.323 7.518a.837.837 0 0 1-.337-.13 1.041 1.041 0 0 1-.177-1.451l.644-.966 1.588 1.06-.646.965a1.148 1.148 0 0 1-.931.534.887.887 0 0 1-.136-.012zm2.193-.644a5.12 5.12 0 0 1 2.003-.202 5.124 5.124 0 0 1 2.003.202c-.648.2-1.329.27-2.003.204a5.112 5.112 0 0 1-2.001-.204zm-1.951-2.072.644-.964a1.04 1.04 0 0 1 1.41-.392 1.04 1.04 0 0 1 .178 1.451l-.644.966z"
    />
  </svg>
);
export default SvgTreatmentInput;
