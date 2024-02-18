import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgFarmStory({
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
        d="M8.832 13.653a3.02 3.02 0 0 1-3.024-2.884h6.048a3.023 3.023 0 0 1-3.024 2.883M14.267 19.845h-2.164V15.22q.312.252.586.545a5.94 5.94 0 0 1 1.578 4.079m-8.579 0H3.5a5.94 5.94 0 0 1 1.577-4.079q.284-.304.61-.564v4.642zm4.877-3.076h-3.34v-2.415a5.1 5.1 0 0 1 3.34.008zM9.018 6.179l4.961 4.206H3.884zM6.071 19.845v-2.691h5.648v2.691zm4.878-3.076v-2.311q.399.152.77.362v1.95zm-4.878 0v-1.964q.371-.207.769-.357v2.321zM16.417 8.362q-.168 0-.331-.039l.036.038-2.076-.013.988-1.066a1.4 1.4 0 0 1-.042-.345v-1.76a1.426 1.426 0 0 1 1.426-1.427h3.49a1.426 1.426 0 0 1 1.426 1.426v1.76a1.426 1.426 0 0 1-1.426 1.427zM17.893 15.735a2.007 2.007 0 0 1-2.007-1.914h4.015a2.007 2.007 0 0 1-2.008 1.914M21.5 19.845h-1.435v-3.066q.207.166.389.361a3.94 3.94 0 0 1 1.046 2.71zm-5.694 0h-1.451a3.95 3.95 0 0 1 1.046-2.71q.188-.203.405-.374v3.083m3.238-2.043h-2.217V16.2a3.38 3.38 0 0 1 2.217.006zM18.015 10.774l3.293 2.792H14.61zM16.06 19.845v-1.787h3.75v1.787zm3.239-2.042V16.27q.264.102.51.241v1.293zm-3.238 0v-1.302q.247-.139.51-.238v1.54z"
      />
    </svg>
  );
}
SvgFarmStory.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgFarmStory;
