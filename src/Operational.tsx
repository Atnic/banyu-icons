import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOperational = ({
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
      d="M12 21a8.941 8.941 0 0 1-6.362-2.637A8.942 8.942 0 0 1 3 12a9.009 9.009 0 0 1 9-9 9.009 9.009 0 0 1 8.318 12.446 8.944 8.944 0 0 1-1.956 2.917A8.936 8.936 0 0 1 12 21m-2.264-6.89a.671.671 0 0 1 .674.617.678.678 0 0 1-.155.497l-.872 1.041a1.803 1.803 0 0 0 1.274-.088 1.759 1.759 0 0 0 .988-1.28 1.771 1.771 0 0 0-.064-.894.852.852 0 0 0 .193-.17l2.4-2.86a.82.82 0 0 0 .133-.22 1.767 1.767 0 0 0 1.842-2.556l-.874 1.04a.676.676 0 0 1-.52.243.677.677 0 0 1-.601-.361.672.672 0 0 1-.046-.52.681.681 0 0 1 .127-.232l.872-1.04a1.752 1.752 0 0 0-1.274.086 1.76 1.76 0 0 0-1.003 1.376c-.042.336.012.677.158.982a.81.81 0 0 0-.114.112l-2.405 2.861a.923.923 0 0 0-.089.132 1.765 1.765 0 0 0-2.037 2.513l.874-1.038a.673.673 0 0 1 .518-.24z"
    />
  </svg>
);
export default SvgOperational;
