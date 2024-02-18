import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProductCategories = ({
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
      d="M18.895 21h-3.118v-3.18h1.044v1.721h1.03V17.82h1.045V21zm-5.389 0h-3.118v-3.18h1.044v1.721h1.031V17.82h1.045V21zm-5.388 0H5v-3.18h1.044v1.721h1.031V17.82H8.12V21zm8.912-1.671v-1.514h.612v1.514zm-5.389 0v-1.514h.613v1.514zm-5.387 0v-1.514h.612v1.514zm10.62-1.96v-2.245h-4.04v2.245h-1.348v-2.245h-4.04v2.245H6.099v-3.593h12.124v3.593zm-5.388-3.593V9.062h1.347v4.714zm3.401-5.244h-5.42V3h1.816v2.991h1.791V3h1.817v5.532zm-3.242-2.904V3h1.065v2.628z"
    />
  </svg>
);
export default SvgProductCategories;
