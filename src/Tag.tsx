import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTag = ({
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
      d="m6.247 16.761-2.88-3.822a1.825 1.825 0 0 1 .36-2.555l4.598-3.467c.059-.044.12-.085.183-.122a1.635 1.635 0 0 1 1.06-.457c.04 0 .08.003.121.009l1.588.223a1.494 1.494 0 0 0-.296.226 1.855 1.855 0 0 0-.182.122l-4.6 3.467a1.828 1.828 0 0 0-.358 2.555l2.88 3.822c.067.09.143.173.226.248l-.146.111a1.825 1.825 0 0 1-2.555-.359zm4.458 0-2.88-3.822a1.825 1.825 0 0 1 .359-2.555l4.6-3.467c.057-.044.118-.085.181-.122a1.637 1.637 0 0 1 1.06-.457c.04 0 .082.003.122.009l4.412.62a.99.99 0 0 1 .296.09l1.514-1.06.631.899-1.59 1.112a.753.753 0 0 1-.007.078l-.62 4.412a1.537 1.537 0 0 1-.745 1.001 1.758 1.758 0 0 1-.183.156l-4.6 3.467a1.825 1.825 0 0 1-2.554-.358zm4.76-7.626a1.36 1.36 0 1 0 2.697-.25l-1.135.794-.63-.899 1.144-.801a1.36 1.36 0 0 0-2.077 1.156z"
    />
  </svg>
);
export default SvgTag;
