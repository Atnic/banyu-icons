import * as React from "react";
const SvgIncomeMenu = ({ title, titleId, ...props }) => (
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
      d="m21.123 13.625-7.404 7.406a1.428 1.428 0 0 1-2.017 0L2.25 11.576a1.366 1.366 0 0 1-.241-.322c-.038.35.085.7.334.95l9.453 9.456a1.166 1.166 0 0 0 1.647 0l7.405-7.405a1.17 1.17 0 0 0 .333-.687c-.018.02-.037.04-.055.057z"
    />
    <path
      fill="currentColor"
      d="M20.938 11.795 11.483 2.34a1.164 1.164 0 0 0-1.003-.326L4.085 3.024c-.5.078-.89.47-.969.968l-1.01 6.395c-.057.368.065.74.328 1.004l9.454 9.454c.454.454 1.19.454 1.645 0l7.406-7.404a1.164 1.164 0 0 0 0-1.647zM7.098 7.126a1.163 1.163 0 1 1-1.646-1.645 1.163 1.163 0 0 1 1.645 1.645"
    />
  </svg>
);
export default SvgIncomeMenu;
