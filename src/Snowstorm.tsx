import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgSnowstorm({
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
        d="M9.99 12.835a.567.567 0 1 0 .983-.568l-1.814-3.14h3.627a.567.567 0 0 0 0-1.135H9.159l1.814-3.14a.567.567 0 0 0-.983-.568l-1.813 3.14-1.814-3.14a.567.567 0 1 0-.982.567l1.813 3.14H3.567a.567.567 0 1 0 0 1.136h3.627l-1.813 3.14a.567.567 0 1 0 .982.568l1.814-3.141zM9.566 15.322c1.077.302 2.75.925 3.44 2.625.31.765.02 1.196-.266 1.348-.302.161-.74.107-.999-.39a.433.433 0 0 0-.767.4c.48.923 1.446 1.141 2.173.754.743-.397 1.107-1.336.66-2.437-.855-2.11-2.908-2.825-4.008-3.133a.433.433 0 1 0-.233.833M18.286 17.462c-2.825-.902-4.019-3.517-4.614-5.152a.433.433 0 0 0-.813.296c.603 1.658 1.918 4.644 5.164 5.68 1.66.53 2.93-.113 3.398-1.177.46-1.048.064-2.373-1.298-2.956a.433.433 0 1 0-.34.796c.92.394 1.112 1.205.846 1.812-.26.59-1.029 1.12-2.343.701M14.59 10.532c.89-.242 2.321-.503 3.51.396.528.399.493.8.37 1.002-.13.218-.432.357-.802.129a.41.41 0 1 0-.43.698c.758.467 1.568.205 1.935-.404.376-.623.224-1.473-.578-2.08-1.524-1.15-3.308-.78-4.221-.532a.41.41 0 1 0 .215.791"
      />
    </svg>
  );
}
SvgSnowstorm.propTypes = {
  className: PropTypes.string,
};
export default SvgSnowstorm;
