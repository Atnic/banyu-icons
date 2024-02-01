import * as React from "react";
const SvgSetting = ({ title, titleId, ...props }) => (
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
    <path d="M12.79 21.002h-2.268a.597.597 0 0 1-.597-.597v-1.797a6.912 6.912 0 0 1-1.74-.83l-1.146 1.145a.595.595 0 0 1-.845 0L4.59 17.319a.591.591 0 0 1-.13-.65.591.591 0 0 1 .13-.194l1.27-1.27a6.902 6.902 0 0 1-.645-1.818H3.597A.597.597 0 0 1 3 12.79v-2.268a.597.597 0 0 1 .597-.597h1.796a6.894 6.894 0 0 1 .831-1.742L5.08 7.039a.597.597 0 0 1 0-.845l1.603-1.603a.593.593 0 0 1 .844 0l1.27 1.272c.361-.188.738-.345 1.127-.467V3.597A.597.597 0 0 1 10.52 3h2.268a.597.597 0 0 1 .597.597v1.618c.633.13 1.245.347 1.818.646l1.27-1.271a.593.593 0 0 1 .845 0l1.603 1.603a.597.597 0 0 1 0 .844l-1.145 1.145c.357.538.637 1.125.83 1.742h1.797a.597.597 0 0 1 .597.597v2.268a.597.597 0 0 1-.597.597h-1.618a6.908 6.908 0 0 1-.645 1.817l1.27 1.27a.597.597 0 0 1 0 .845l-1.603 1.603a.595.595 0 0 1-.844 0l-1.146-1.144a6.867 6.867 0 0 1-2.433 1.008v1.618a.597.597 0 0 1-.594.599m-.786-11.77a2.773 2.773 0 0 0-2.77 2.77 2.772 2.772 0 0 0 2.77 2.767 2.771 2.771 0 0 0 2.77-2.768 2.773 2.773 0 0 0-2.772-2.769z" />
  </svg>
);
export default SvgSetting;
