import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgRfid({
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
        d="M19.116 17.315H4.884A1.884 1.884 0 0 1 3 15.43V7.885A1.884 1.884 0 0 1 4.884 6h14.232A1.884 1.884 0 0 1 21 7.884v7.547a1.884 1.884 0 0 1-1.884 1.884m-6.032-9.257a1 1 0 0 0-.095.006.31.31 0 0 0-.23.156.58.58 0 0 0-.034.482q.026.061.104.21c.543.951.842 2.022.871 3.117a4.37 4.37 0 0 1-.975 2.912.54.54 0 0 0-.1.44.41.41 0 0 0 .198.301.46.46 0 0 0 .212.046c.248-.005.484-.1.666-.268a6.55 6.55 0 0 0 1.049-3.43 7.6 7.6 0 0 0-1.035-3.587l-.015-.027a.69.69 0 0 0-.616-.358m-1.709 1.005a.5.5 0 0 0-.197.04.4.4 0 0 0-.2.24.52.52 0 0 0 .016.394q.048.076.105.148c.506.6.793 1.354.816 2.14a2.26 2.26 0 0 1-.835 1.933l-.015.012a.54.54 0 0 0-.146.42.4.4 0 0 0 .146.323c.07.044.152.066.234.063a.9.9 0 0 0 .514-.182 4.07 4.07 0 0 0 1.185-2.57 4.9 4.9 0 0 0-1.082-2.71.71.71 0 0 0-.54-.25zm-1.341 1.303a.4.4 0 0 0-.202.048.28.28 0 0 0-.122.188.54.54 0 0 0 .048.365 1 1 0 0 0 .076.079 1.38 1.38 0 0 1 .476 1.077c0 .691-.284.855-.436.942l-.042.026a.44.44 0 0 0-.14.296.4.4 0 0 0 .066.326.36.36 0 0 0 .265.09c.127 0 .252-.03.364-.09.44-.42.712-.985.767-1.59a2.7 2.7 0 0 0-.665-1.601.72.72 0 0 0-.455-.156"
      />
    </svg>
  );
}
SvgRfid.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgRfid;