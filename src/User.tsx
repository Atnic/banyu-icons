import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgUser({
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
        d="M12.772 12.843a3.98 3.98 0 0 1-3.983-3.798h7.966a3.98 3.98 0 0 1-3.983 3.798M19.93 20.999H17.08v-6.09q.412.332.772.718A7.83 7.83 0 0 1 19.929 21m-11.3 0H5.75a7.83 7.83 0 0 1 2.076-5.371q.375-.402.804-.743zm6.425-4.051h-4.399v-3.181a6.7 6.7 0 0 1 4.4.01zM13.013 3l6.535 5.539H6.256zM9.136 21v-3.545h7.438V21zm6.425-4.052v-3.044q.524.2 1.012.477v2.567zm-6.425 0v-2.584a7.5 7.5 0 0 1 1.013-.472v3.056z"
      />
    </svg>
  );
}
SvgUser.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgUser;
