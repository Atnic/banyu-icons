import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAccess = ({
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
      d="M14.06 20.64a1.236 1.236 0 0 1-1.237-1.236v-3.929a1.237 1.237 0 0 1 .981-1.208c.107-.784.408-1.53.876-2.168a2.804 2.804 0 0 1 2.226-1.226A2.806 2.806 0 0 1 19.13 12.1c.467.638.767 1.381.874 2.164A1.236 1.236 0 0 1 21 15.475v3.927a1.236 1.236 0 0 1-1.236 1.237zm1.963-3.845a.782.782 0 0 0 .301.615l-.301 1.198h1.553l-.305-1.195a.778.778 0 1 0-1.249-.618zm-.912-2.556h3.581c-.234-1.209-.951-2.093-1.793-2.093-.841 0-1.554.885-1.788 2.093m-3.01 5.274H5.967v-3.104h6.136v3.105zm-6.578 0H3a6.856 6.856 0 0 1 1.818-4.704c.219-.234.454-.452.705-.651zm6.579-3.547h-.509V13.3c.306.117.602.257.887.418v.41a1.227 1.227 0 0 0-.378.89zm-5.25 0h-.886v-2.263c.285-.16.582-.299.888-.414v2.677zm4.297 0H7.298v-2.782a5.867 5.867 0 0 1 3.852.009v2.774zm-5.487-6.92h6.977a3.492 3.492 0 0 1-6.977 0m9.42-.445H3.444L9.361 3.75l5.723 4.85z"
    />
  </svg>
);
export default SvgAccess;
