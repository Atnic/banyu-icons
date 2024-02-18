import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEsp = ({
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
    <rect width={18} height={12.857} x={3} y={6} fill="#fff" rx={2} />
    <mask
      id="esp_svg__a"
      width={18}
      height={13}
      x={3}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <rect width={18} height={12.857} x={3} y={6} fill="#fff" rx={2} />
    </mask>
    <g mask="url(#esp_svg__a)">
      <path
        fill="#DD172C"
        fillRule="evenodd"
        d="M3 9.429h18V6H3zM3 18.857h18V15.43H3z"
        clipRule="evenodd"
      />
      <path
        fill="#FFD133"
        fillRule="evenodd"
        d="M3 15.429h18v-6H3z"
        clipRule="evenodd"
      />
      <path
        fill="#FFEDB1"
        fillRule="evenodd"
        d="M7.714 12h.857v.429h-.857z"
        clipRule="evenodd"
      />
      <path
        stroke="#A41517"
        strokeWidth={0.667}
        d="M7.035 12.266a.333.333 0 0 1 .332-.361h.694c.195 0 .349.166.332.36l-.083.996a.598.598 0 0 1-1.192 0z"
      />
      <path
        fill="#A41517"
        fillRule="evenodd"
        d="M6.857 12.429h1.714v.428h-.428l-.429.857-.428-.857h-.429z"
        clipRule="evenodd"
      />
      <rect
        width={0.857}
        height={3}
        x={5.572}
        y={11.143}
        fill="#A41517"
        rx={0.429}
      />
      <rect
        width={0.857}
        height={3}
        x={9}
        y={11.143}
        fill="#A41517"
        rx={0.429}
      />
      <path
        fill="#A41517"
        d="M6.857 10.971c0-.378.307-.685.686-.685h.343c.378 0 .685.307.685.685a.171.171 0 0 1-.171.172H7.029a.171.171 0 0 1-.172-.172"
      />
    </g>
  </svg>
);
export default SvgEsp;
