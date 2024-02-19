import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgDiseaseInput({
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
        d="M8.684 21v-5.684H3V8.685h5.684V3h6.632v5.685H21v6.631h-5.684V21z"
      />
    </svg>
  );
}
SvgDiseaseInput.propTypes = {
  className: PropTypes.string,
};
export default SvgDiseaseInput;
