import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHarvest = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#182230"
      d="M11.5 21a8.939 8.939 0 0 1-6.362-2.638A8.936 8.936 0 0 1 2.5 12a8.939 8.939 0 0 1 2.638-6.362A8.938 8.938 0 0 1 11.5 3a8.94 8.94 0 0 1 6.362 2.638A8.936 8.936 0 0 1 20.5 12a8.943 8.943 0 0 1-2.638 6.362A8.939 8.939 0 0 1 11.5 21M8.707 9.483a.775.775 0 0 0-.776.776v5.252a.776.776 0 0 0 .776.776h5.968a.776.776 0 0 0 .776-.776v-5.252a.777.777 0 0 0-.776-.776zm1.286-2.624a2.018 2.018 0 0 0-1.28.492c.006 0 .76.465.89.894.097.303.227.596.387.872h3.298c.136-.286.257-.578.363-.876.155-.44.961-.893.969-.896a2.405 2.405 0 0 0-1.332-.494 4.356 4.356 0 0 0-1.648.494 4.126 4.126 0 0 0-1.647-.49zm1.255 7.642a.232.232 0 0 1-.186-.093.235.235 0 0 1-.024-.247l.065-.13-.066-.131a.237.237 0 0 1 .21-.34c.016 0 .032.002.047.006l.558.112a.602.602 0 0 0 .205-.045l.388.631a1.648 1.648 0 0 1-.574.12l-.573.113h-.01a.262.262 0 0 1-.04 0zm1.407-.337-.403-.66a.59.59 0 0 0 .17-.413h1.02a1.652 1.652 0 0 1-.787 1.073m.82-1.306h-1.1a.6.6 0 0 0-.316-.31l.421-1.319a1.643 1.643 0 0 1 1.004 1.515.645.645 0 0 1-.006.083v.035zm-1.65-.353h-.932A1.176 1.176 0 0 1 9.72 11.33a.234.234 0 0 1 .232-.233h1.88c.142 0 .284.019.42.056l-.43 1.354zm-1.516-1.061a.118.118 0 0 0-.11.073.118.118 0 0 0 .154.153.113.113 0 0 0 .065-.063.116.116 0 0 0 .008-.044.118.118 0 0 0-.117-.122z"
    />
  </svg>
);
export default SvgHarvest;
