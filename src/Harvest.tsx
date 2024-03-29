import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgHarvest({
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
        d="M11.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 2.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 11.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 20.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 11.5 21M8.707 9.483a.775.775 0 0 0-.776.776v5.252a.776.776 0 0 0 .776.776h5.968a.776.776 0 0 0 .776-.776v-5.252a.777.777 0 0 0-.776-.776zm1.286-2.624a2.02 2.02 0 0 0-1.28.492c.006 0 .76.465.89.894q.146.456.387.872h3.298q.204-.429.363-.876c.155-.44.961-.893.969-.896a2.4 2.4 0 0 0-1.332-.494 4.4 4.4 0 0 0-1.648.494 4.1 4.1 0 0 0-1.647-.49zm1.255 7.642a.23.23 0 0 1-.186-.093.24.24 0 0 1-.024-.247l.065-.13-.066-.131a.237.237 0 0 1 .21-.34q.024 0 .047.006l.558.112a.6.6 0 0 0 .205-.045l.388.631a1.7 1.7 0 0 1-.574.12l-.573.113h-.05zm1.407-.337-.403-.66a.6.6 0 0 0 .17-.413h1.02a1.65 1.65 0 0 1-.787 1.073m.82-1.306h-1.1a.6.6 0 0 0-.316-.31l.421-1.319a1.64 1.64 0 0 1 1.004 1.515 1 1 0 0 1-.006.083v.035zm-1.65-.353h-.932A1.176 1.176 0 0 1 9.72 11.33a.234.234 0 0 1 .232-.233h1.88q.214 0 .42.056l-.43 1.354zm-1.516-1.061a.12.12 0 0 0-.11.073.118.118 0 0 0 .154.153.11.11 0 0 0 .065-.063.1.1 0 0 0 .008-.044.12.12 0 0 0-.117-.122z"
      />
    </svg>
  );
}
SvgHarvest.propTypes = {
  className: PropTypes.string,
};
export default SvgHarvest;
