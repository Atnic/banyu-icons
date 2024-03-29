import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgInsight({
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
        d="M20.708 11.583a2.292 2.292 0 1 0-1.938-1.069c-.28.422-.546.902-.801 1.36v.001q-.141.253-.276.491c-.832 1.459-1.675 2.616-3.13 2.867-.697.12-1.242-.088-1.756-.514-.548-.455-1.036-1.138-1.566-1.943l-.21-.32c-.445-.683-.936-1.434-1.478-2.01-.653-.692-1.495-1.256-2.588-1.16-.824.071-1.456.738-1.887 1.339-.462.644-.862 1.453-1.184 2.212a24 24 0 0 0-.575 1.497h-.027a2.292 2.292 0 1 0 1.58.632c.147-.42.323-.89.524-1.362.3-.706.637-1.372.985-1.856.378-.528.628-.644.716-.652.433-.038.832.156 1.303.656.426.451.816 1.048 1.27 1.742l.001.001.226.345c.524.795 1.14 1.689 1.91 2.327.805.668 1.794 1.07 3.013.86 2.247-.387 3.436-2.22 4.278-3.698q.174-.308.329-.585c.26-.468.487-.876.727-1.228q.267.066.554.067"
      />
    </svg>
  );
}
SvgInsight.propTypes = {
  className: PropTypes.string,
};
export default SvgInsight;
