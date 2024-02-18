import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilter = ({
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
      d="M17.954 9.855c.243-.527.38-1.113.38-1.731s-.137-1.206-.38-1.732h1.322c.456.01.89.197 1.21.52a1.724 1.724 0 0 1 0 2.422c-.32.324-.754.51-1.21.52zM10.468 9.855H4.724a1.75 1.75 0 0 1-1.21-.52 1.724 1.724 0 0 1 0-2.422c.32-.324.753-.51 1.21-.52h5.744a4.1 4.1 0 0 0-.38 1.73c0 .62.136 1.206.38 1.732M17.213 8.124a3.002 3.002 0 1 1-6.004 0 3.002 3.002 0 0 1 6.004 0M6.046 14.145a4.1 4.1 0 0 0-.38 1.731c0 .619.136 1.206.38 1.732H4.724a1.75 1.75 0 0 1-1.21-.52 1.724 1.724 0 0 1 0-2.422c.319-.324.753-.51 1.21-.52zM13.531 14.145h5.745c.456.01.89.196 1.21.52a1.724 1.724 0 0 1 0 2.422c-.32.324-.754.51-1.21.52H13.53c.244-.526.38-1.112.38-1.73 0-.62-.136-1.206-.38-1.732M6.787 15.876a3.002 3.002 0 1 1 6.003 0 3.002 3.002 0 0 1-6.003 0"
    />
  </svg>
);
export default SvgFilter;
