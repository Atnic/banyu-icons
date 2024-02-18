import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgElectricity({
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
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M12 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12 21m-1.636-5.091v2.384h3.576v-2.384zm1.74-7.94A3.7 3.7 0 0 0 9.417 9.03a3.74 3.74 0 0 0-1.058 2.674c.067.956.4 1.874.96 2.65q.415.624.937 1.16l.005.005 3.637.032q.486-.586.877-1.242a5.2 5.2 0 0 0 .88-2.607 4.06 4.06 0 0 0-.694-2.308 3.26 3.26 0 0 0-2.094-1.358 4 4 0 0 0-.73-.07zm6.55 1.319-1.557 1.05.538.795 1.552-1.049-.536-.796zM5.542 9.14l-.406.87 1.7.793.406-.87zm10.767-2.456-1.129 1.5.767.577 1.13-1.499zM8.191 6.2l-.776.565 1.103 1.52.776-.565zm3.646-1.214-.098 1.875.958.05.099-1.874zm-.044 10.5.123-2.203-1.061-.358 1.373-2.776-.223 2.203.776.549z"
      />
    </svg>
  );
}
SvgElectricity.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgElectricity;
