import * as React from "react";
const SvgFinance = ({ title, titleId, ...props }) => (
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
    <path d="m6.122 20.548-.297-3.275a.497.497 0 0 1 .446-.542l3.276-.298a.497.497 0 1 1 .091.991l-2.166.196a7.187 7.187 0 0 0 11.574-7.226.496.496 0 1 1 .966-.236 8.183 8.183 0 0 1-8.353 10.107 8.129 8.129 0 0 1-4.727-1.802l.178 1.994a.498.498 0 0 1-.49.542.497.497 0 0 1-.498-.45m5.774-5.252v-4.671h.72l.124.42h.041a1.025 1.025 0 0 1 .92-.481 1.052 1.052 0 0 1 .9.446c.236.366.35.799.325 1.234.007.308-.043.614-.149.903a1.273 1.273 0 0 1-.434.584 1.115 1.115 0 0 1-.662.2 1.076 1.076 0 0 1-.898-.415h-.046c.03.271.046.428.046.471v1.309zm1.04-3.826a1.162 1.162 0 0 0-.156.67v.096c-.021.259.033.519.155.748a.554.554 0 0 0 .492.227c.397 0 .595-.327.595-.981a1.403 1.403 0 0 0-.149-.719.5.5 0 0 0-.46-.239.56.56 0 0 0-.475.202zm-8.954 2.328a8.181 8.181 0 0 1 8.357-10.104c1.736.08 3.4.718 4.746 1.817l-.074-2.038a.498.498 0 0 1 .991-.037l.122 3.25v.062a.496.496 0 0 1-.479.497l-3.286.122h-.02a.497.497 0 1 1-.017-.995l2.14-.08a7.186 7.186 0 0 0-11.515 7.27.498.498 0 0 1-.965.236m6.45.075L9.42 12.242h-.48v1.628h-.9V9.626h1.237c.45-.033.899.078 1.281.318a1.124 1.124 0 0 1 .416.957 1.13 1.13 0 0 1-.206.669 1.365 1.365 0 0 1-.585.458c.64.954 1.056 1.57 1.25 1.849zM8.94 11.51h.29c.22.016.44-.034.63-.143a.509.509 0 0 0 .204-.446.464.464 0 0 0-.208-.43 1.264 1.264 0 0 0-.643-.128H8.94z" />
  </svg>
);
export default SvgFinance;