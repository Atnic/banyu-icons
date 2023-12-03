import * as React from "react";
const SvgWaterInput = ({ title, titleId, ...props }) => (
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
      d="M12.242 20.985a7.452 7.452 0 0 1-4.767-1.35C6.165 18.579 5.5 16.872 5.5 14.563c0-2.565 1.834-5.572 3.37-7.643A36.832 36.832 0 0 1 12.243 3l.01.008a37.338 37.338 0 0 1 3.359 3.91c1.537 2.07 3.37 5.077 3.37 7.643 0 2.309-.664 4.016-1.974 5.073a7.451 7.451 0 0 1-4.765 1.351m4.068-8.198a9.678 9.678 0 0 1-1.091 2.495 7.427 7.427 0 0 1-1.35 1.489c-.543.5-1.012.933-.978 1.27a.441.441 0 0 0 .248.323c.272.168.584.258.904.26a2.608 2.608 0 0 0 2.104-1.497c.836-1.39.17-4.31.16-4.34z"
    />
  </svg>
);
export default SvgWaterInput;
