import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgFinancialReport({
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
        d="M14.885 8.584h4.506v12.17c0 .692-.56 1.251-1.253 1.251H5.852c-.689 0-1.252-.558-1.252-1.25v-17.5c0-.691.56-1.25 1.252-1.25h6.945V6.5c0 1.15.936 2.084 2.088 2.084m-2.249 4.234v6.105l1.156-.001v-1.719q0-.083-.06-.614h.06a1.4 1.4 0 0 0 1.172.543c.308.007.611-.083.865-.26.26-.192.457-.457.568-.761.14-.378.207-.777.198-1.18a2.7 2.7 0 0 0-.424-1.611 1.37 1.37 0 0 0-1.175-.583 1.34 1.34 0 0 0-1.203.63h-.053l-.163-.55h-.94m1.154 1.98v.121c-.027.339.044.679.204.979a.73.73 0 0 0 .642.296q.777 0 .777-1.282a1.83 1.83 0 0 0-.194-.938.65.65 0 0 0-.601-.312.73.73 0 0 0-.62.266l-.003.001a1.5 1.5 0 0 0-.205.87zm-4.39.13 1.324 2.127h1.305q-.379-.547-1.632-2.416a1.8 1.8 0 0 0 .763-.598c.18-.254.274-.558.27-.87a1.47 1.47 0 0 0-.54-1.248 2.77 2.77 0 0 0-1.672-.412H7.6v5.543h1.176v-2.128H9.4zm-.245-.955a1.45 1.45 0 0 0 .823-.186.66.66 0 0 0 .265-.583.6.6 0 0 0-.27-.561 1.65 1.65 0 0 0-.842-.167h-.356v1.496z"
      />
      <path
        fill="currentColor"
        d="M14.863 7.75h4.383a1.3 1.3 0 0 0-.255-.366C13.71 2.1 13.941 2.266 13.613 2.12v4.38c0 .69.558 1.25 1.25 1.25"
      />
    </svg>
  );
}
SvgFinancialReport.propTypes = {
  className: PropTypes.string,
};
export default SvgFinancialReport;
