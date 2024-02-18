import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStartCycle = ({
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
      d="M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a9.008 9.008 0 0 1 12.445-8.318 8.9 8.9 0 0 1 2.917 1.956A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m-2.017-7.423a2.327 2.327 0 0 0-2.328 2.328h8.535a2.3 2.3 0 0 0-.683-1.645 2.31 2.31 0 0 0-1.645-.683H12.66V11.34c.257.078.524.12.792.12a2.07 2.07 0 0 0 1.43-.542c1.053-.95 1.45-3.137 1.465-3.23-.017.07-.155.425-1.13.72a7.5 7.5 0 0 0-2.135.977c-.372.3-.63.72-.734 1.186h-.02a2.14 2.14 0 0 0-.733-1.186 7.5 7.5 0 0 0-2.133-.977c-1.028-.31-1.126-.692-1.131-.719.01.057.387 2.26 1.463 3.229.39.356.902.55 1.43.543q.35-.002.685-.091v2.206z"
    />
  </svg>
);
export default SvgStartCycle;
