import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgDebtLoan({
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
        d="M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m0-14.913a5.92 5.92 0 0 0-5.912 5.914 5.92 5.92 0 0 0 5.912 5.914A5.92 5.92 0 0 0 18.414 12 5.92 5.92 0 0 0 12.5 6.084zm0 11.05A5.143 5.143 0 0 1 7.363 12 5.144 5.144 0 0 1 12.5 6.863 5.143 5.143 0 0 1 17.637 12a5.143 5.143 0 0 1-5.137 5.134zm.647-6.59v3.66h.693v-1.03c0-.034-.012-.165-.036-.368h.036a.84.84 0 0 0 .703.325.87.87 0 0 0 .517-.155 1 1 0 0 0 .341-.457c.084-.226.124-.466.12-.707a1.62 1.62 0 0 0-.255-.966.83.83 0 0 0-.706-.348.81.81 0 0 0-.72.378h-.032l-.098-.33zm-3.019-.782v3.321h.705v-1.274h.375l.794 1.275h.782c-.143-.203-.444-.65-.978-1.447.183-.075.34-.199.457-.358a.9.9 0 0 0 .162-.521.88.88 0 0 0-.325-.749 1.67 1.67 0 0 0-1.003-.247zm4.22 2.807a.44.44 0 0 1-.389-.177 1.07 1.07 0 0 1-.121-.587v-.077a.9.9 0 0 1 .123-.521.44.44 0 0 1 .374-.156.4.4 0 0 1 .36.189c.088.174.127.367.115.562 0 .505-.157.765-.466.765zm-3.288-1.33h-.227v-.9h.214a1 1 0 0 1 .503.102.37.37 0 0 1 .162.336.4.4 0 0 1-.16.35.87.87 0 0 1-.495.109z"
      />
    </svg>
  );
}
SvgDebtLoan.propTypes = {
  className: PropTypes.string,
};
export default SvgDebtLoan;
