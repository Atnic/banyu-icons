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
      d="m6.247 16.761-2.88-3.822a1.825 1.825 0 0 1 .36-2.555l4.598-3.467q.088-.066.183-.122a1.64 1.64 0 0 1 1.06-.457q.06 0 .121.009l1.588.223a1.5 1.5 0 0 0-.296.226 2 2 0 0 0-.182.122l-4.6 3.467a1.83 1.83 0 0 0-.358 2.555l2.88 3.822q.101.135.226.248l-.146.111a1.825 1.825 0 0 1-2.555-.359zm4.458 0-2.88-3.822a1.825 1.825 0 0 1 .359-2.555l4.6-3.467q.086-.066.181-.122a1.64 1.64 0 0 1 1.06-.457q.061 0 .122.009l4.412.62a1 1 0 0 1 .296.09l1.514-1.06.631.899-1.59 1.112a1 1 0 0 1-.007.078l-.62 4.412a1.54 1.54 0 0 1-.745 1.001 2 2 0 0 1-.183.156l-4.6 3.467a1.825 1.825 0 0 1-2.554-.358zm4.76-7.626a1.36 1.36 0 1 0 2.697-.25l-1.135.794-.63-.899 1.144-.801a1.36 1.36 0 0 0-2.077 1.156"
    />
  </svg>
);
export default SvgTag;
