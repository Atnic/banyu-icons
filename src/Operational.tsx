import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgOperational({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
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
        fill="currentColor"
        d="M12 21a8.94 8.94 0 0 1-6.362-2.637A8.94 8.94 0 0 1 3 12a9.01 9.01 0 0 1 9-9 9.01 9.01 0 0 1 8.318 12.446 8.9 8.9 0 0 1-1.956 2.917A8.94 8.94 0 0 1 12 21m-2.264-6.89a.671.671 0 0 1 .674.617.68.68 0 0 1-.155.497l-.872 1.041a1.8 1.8 0 0 0 1.274-.088 1.76 1.76 0 0 0 .988-1.28 1.8 1.8 0 0 0-.064-.894.9.9 0 0 0 .193-.17l2.4-2.86a.8.8 0 0 0 .133-.22q.135.02.272.02a1.767 1.767 0 0 0 1.57-2.576l-.874 1.04a.68.68 0 0 1-.52.243.68.68 0 0 1-.601-.361.67.67 0 0 1-.046-.52.7.7 0 0 1 .127-.232l.872-1.04a1.75 1.75 0 0 0-1.274.086 1.76 1.76 0 0 0-1.003 1.376c-.042.336.012.677.158.982a1 1 0 0 0-.114.112l-2.405 2.861a1 1 0 0 0-.089.132 1.765 1.765 0 0 0-2.037 2.513l.874-1.038a.67.67 0 0 1 .518-.24z"
      />
    </svg>
  );
}
SvgOperational.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgOperational;
