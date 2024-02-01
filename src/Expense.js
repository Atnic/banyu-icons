import * as React from "react";
const SvgExpense = ({ title, titleId, ...props }) => (
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
    <path d="M20.844 17.544a.628.628 0 0 1-.477.174h-.059c-1.05-.048-2.096-.1-3.146-.148a.679.679 0 0 1-.484-.166.551.551 0 0 1 .051-.825l.263-.266c.18-.185.366-.37.55-.55L11.198 9.41l-2.85 2.85a.905.905 0 0 1-1.283 0L3.266 8.466a.906.906 0 0 1 0-1.283l.167-.167a.906.906 0 0 1 1.283 0L7.7 10l2.854-2.854a.91.91 0 0 1 1.287 0l7.157 7.158.81-.806a.615.615 0 0 1 .433-.229c.09.001.18.025.259.07.056.031.109.07.155.115.13.142.2.33.196.522.029.68.062 1.36.095 2.045l.049 1.024a.637.637 0 0 1-.151.499" />
  </svg>
);
export default SvgExpense;
