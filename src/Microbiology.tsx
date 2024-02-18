import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgMicrobiology({
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
        fillRule="evenodd"
        d="M8.094 11.25c2.218 0 3.594-1.383 3.594-2.625S10.312 6 8.094 6 4.5 7.383 4.5 8.625s1.375 2.625 3.594 2.625m0 1c2.537 0 4.594-1.623 4.594-3.625S10.63 5 8.093 5 3.5 6.623 3.5 8.625s2.057 3.625 4.594 3.625M18.699 8.315c.433-.292.551-.588.551-.784s-.118-.491-.551-.783c-.428-.288-1.075-.498-1.84-.498-.764 0-1.412.21-1.839.498-.434.292-.551.587-.551.783s.117.492.551.784c.428.287 1.075.498 1.84.498.764 0 1.411-.21 1.839-.498m-1.84 1.498c1.873 0 3.391-1.022 3.391-2.282S18.732 5.25 16.86 5.25s-3.391 1.021-3.391 2.281 1.518 2.282 3.39 2.282M15.728 17.49c1.956-1.046 2.516-2.914 1.93-4.01s-2.451-1.665-4.407-.619-2.516 2.915-1.93 4.01c.586 1.096 2.45 1.666 4.407.62m.472.882c2.237-1.197 3.284-3.598 2.34-5.363-.945-1.766-3.524-2.226-5.76-1.03-2.238 1.198-3.285 3.6-2.34 5.364.944 1.765 3.523 2.226 5.76 1.03"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.625 8.031a.906.906 0 1 1-1.812 0 .906.906 0 0 1 1.812 0M17.02 14.645a.906.906 0 1 1-1.812 0 .906.906 0 0 1 1.813 0M14.833 16.645a.719.719 0 1 1-1.437 0 .719.719 0 0 1 1.437 0"
      />
    </svg>
  );
}
SvgMicrobiology.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgMicrobiology;
