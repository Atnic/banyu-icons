import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLine = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      fill="#182230"
      d="M17.25 9.791c-.78-.368-1.6-.618-2.175-.532-.397.06-.584.214-.719.41-.17.244-.277.579-.416 1.07l-.032.116c-.245.877-.617 2.208-2.154 2.68-1.247.383-2.27-.387-2.93-.884l-.117-.087c-.343-.26-.626-.473-.915-.624-.295-.156-.528-.207-.745-.178-.736.1-1.218.764-1.502 1.781a1.93 1.93 0 1 1-1.433-.445c.336-1.163 1.077-2.597 2.733-2.822.633-.086 1.187.095 1.646.336.402.212.783.5 1.104.742l.098.074c.786.59 1.194.804 1.62.673.72-.22.898-.758 1.184-1.77l.002-.009c.127-.448.29-1.028.624-1.509.37-.534.923-.917 1.73-1.038 1.054-.157 2.23.28 3.037.66.222.104.428.21.611.31a1.93 1.93 0 1 1-.72 1.344l.003-.026q-.243-.133-.534-.272"
    />
  </svg>
);
export default SvgLine;
