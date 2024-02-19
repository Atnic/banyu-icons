import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgUsers({
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
        d="M7.867 14.459H5.292V12.58h3.943v.76c-.5.314-.96.69-1.368 1.119m-2.84 0H3.5a4.15 4.15 0 0 1 1.1-2.847q.2-.213.427-.395v3.242m4.48-1.278v-.598q.196.204.418.382-.209.097-.418.214zm-.272-.87h-.537v-.878q.221.452.537.845zm-3.405 0h-.538v-1.37a4 4 0 0 1 .538-.25zm2.6 0H6.1v-1.686a3.56 3.56 0 0 1 2.293-.007q.017.063.039.134v1.559zm-1.208-2.176a2.1 2.1 0 0 1-.965-.232h1.93c-.299.153-.63.233-.965.232m-1.665-.808a2.1 2.1 0 0 1-.446-1.204h1.933zm1.82-1.474h-3.61l3.582-2.937L9.134 6.43zM19.721 14.459h-2.579a7.5 7.5 0 0 0-1.364-1.22v-.657h3.943v1.879zm1.778 0H19.99v-3.226q.219.176.41.38a4.15 4.15 0 0 1 1.1 2.846m-5.989-1.396a7 7 0 0 0-.51-.287q.275-.23.511-.499v.787m4.21-.751h-.537v-1.613q.278.105.538.253zm-3.405 0h-.537v-.372q.325-.451.537-.967zm2.601 0h-2.33v-1.687a3.56 3.56 0 0 1 2.33.006zm-1.21-2.177c-.38 0-.755-.104-1.082-.299v-.015h2.194c-.334.206-.72.314-1.112.314m1.738-.908-1.319-1.105h1.694a2.1 2.1 0 0 1-.373 1.104zm1.852-1.374h-3.492l-1.758-1.471 1.787-1.466 3.465 2.935zM12.503 4.5l5.682 4.816H6.628zM9.9 12.103a3.46 3.46 0 0 0 2.395.955 3.46 3.46 0 0 0 3.462-3.302H8.83c.041.89.425 1.731 1.07 2.346M16.04 20.149h2.476a6.8 6.8 0 0 0-1.804-4.67 6.4 6.4 0 0 0-.672-.624zM6.189 20.149h2.504v-5.316a6.4 6.4 0 0 0-.7.646 6.8 6.8 0 0 0-1.804 4.67M10.455 16.624h3.824v-2.752a5.83 5.83 0 0 0-3.824-.01zM9.133 17.068v3.082h6.466v-3.082zM14.719 13.98v2.645l.88.003v-2.23a6.5 6.5 0 0 0-.88-.418M9.133 14.38v2.248h.88V13.97a6.5 6.5 0 0 0-.88.41"
      />
    </svg>
  );
}
SvgUsers.propTypes = {
  className: PropTypes.string,
};
export default SvgUsers;
