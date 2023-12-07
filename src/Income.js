import * as React from "react";
const SvgIncome = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#404040"
      d="M20.845 6.926a.627.627 0 0 0-.477-.175h-.06c-1.049.049-2.096.1-3.146.148a.679.679 0 0 0-.484.166.55.55 0 0 0 .052.825l.262.266c.181.185.366.37.551.551l-6.345 6.352-2.851-2.85a.905.905 0 0 0-1.283 0l-3.798 3.794a.905.905 0 0 0 0 1.283l.167.166a.908.908 0 0 0 1.283 0L7.7 14.469l2.851 2.851a.91.91 0 0 0 1.287 0l7.158-7.158.81.806a.615.615 0 0 0 .432.23.536.536 0 0 0 .262-.067.71.71 0 0 0 .155-.116.75.75 0 0 0 .196-.521c.029-.68.062-1.36.095-2.045l.049-1.024a.638.638 0 0 0-.15-.498"
    />
  </svg>
);
export default SvgIncome;
