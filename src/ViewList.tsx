import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgViewList({
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
        d="M7.833 10.438v3.124c0 .518-.42.938-.937.938H2.938A.937.937 0 0 1 2 13.563v-3.126c0-.517.42-.937.938-.937h3.958c.518 0 .937.42.937.938M2 16.688v3.125c0 .517.42.937.938.937h3.958c.518 0 .937-.42.937-.937v-3.125a.937.937 0 0 0-.937-.938H2.938a.937.937 0 0 0-.938.938M6.896 3.25H2.938A.937.937 0 0 0 2 4.188v3.125c0 .517.42.937.938.937h3.958c.518 0 .937-.42.937-.937V4.188a.937.937 0 0 0-.937-.938m3.125 17.5h11.042c.517 0 .937-.42.937-.937v-3.125a.937.937 0 0 0-.937-.938H10.02a.937.937 0 0 0-.938.938v3.125c0 .517.42.937.938.937M9.083 4.188v3.125c0 .517.42.937.938.937h11.042c.517 0 .937-.42.937-.937V4.188a.937.937 0 0 0-.937-.938H10.02a.937.937 0 0 0-.938.938m.938 10.312h11.042c.517 0 .937-.42.937-.937v-3.126a.937.937 0 0 0-.937-.937H10.02a.937.937 0 0 0-.938.938v3.124c0 .518.42.938.938.938"
      />
    </svg>
  );
}
SvgViewList.propTypes = {
  className: PropTypes.string,
};
export default SvgViewList;
