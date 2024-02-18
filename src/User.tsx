import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUser = ({
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
      d="M12.772 12.843a3.98 3.98 0 0 1-3.983-3.798h7.966a3.98 3.98 0 0 1-3.983 3.798M19.93 20.999H17.08v-6.09c.274.221.532.461.772.718A7.829 7.829 0 0 1 19.929 21m-11.3 0H5.75a7.827 7.827 0 0 1 2.076-5.371c.25-.268.518-.516.804-.743zm6.425-4.051h-4.399v-3.181a6.707 6.707 0 0 1 4.4.01zM13.013 3l6.535 5.539H6.256zM9.136 21v-3.545h7.438V21zm6.425-4.052v-3.044c.349.133.687.293 1.012.477v2.567zm-6.425 0v-2.584a7.48 7.48 0 0 1 1.013-.472v3.056z"
    />
  </svg>
);
export default SvgUser;
