import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFeedCumulative = ({
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
      d="m3.437 19.673-.17-.17a.905.905 0 0 1 0-1.284l3.797-3.794a.896.896 0 0 1 .987-.197c.11.046.211.113.296.197l2.848 2.85 6.345-6.35a33.67 33.67 0 0 1-.551-.55l-.263-.266a.546.546 0 0 1-.166-.658.55.55 0 0 1 .115-.17.68.68 0 0 1 .485-.167c1.05-.048 2.096-.1 3.146-.148h.06a.628.628 0 0 1 .477.174.637.637 0 0 1 .152.499l-.048 1.024c-.033.684-.067 1.364-.096 2.044a.75.75 0 0 1-.196.521.711.711 0 0 1-.155.115.538.538 0 0 1-.26.07.612.612 0 0 1-.432-.23l-.81-.805-7.158 7.158a.91.91 0 0 1-1.286 0l-2.849-2.849-2.983 2.984a.898.898 0 0 1-.64.266.904.904 0 0 1-.645-.265m4.42-6.396c-.293 0-.581-.07-.842-.205a2.237 2.237 0 0 1-.69-.559 2.698 2.698 0 0 1-.464-.826 3.007 3.007 0 0 1-.13-1.503l.388-1.867h8.113l.29 1.97c.02.13.03.26.034.391 0 .343-.058.685-.172 1.009a2.66 2.66 0 0 1-.466.826c-.19.231-.424.422-.69.56-.26.133-.547.203-.84.204zm1.818-1.803a.21.21 0 0 0-.02.22l.058.116-.058.116a.21.21 0 0 0 .187.303.198.198 0 0 0 .04-.005l.51-.101c.176-.005.349-.04.512-.104l-.345-.563a.529.529 0 0 1-.182.04l-.496-.1a.204.204 0 0 0-.133.018.209.209 0 0 0-.073.06zm1.06-.132.359.586a1.471 1.471 0 0 0 .7-.953h-.906a.52.52 0 0 1-.153.366zm-.172-.849c.126.051.227.15.28.275h.982v-.018c0-.033.005-.06.005-.088a1.464 1.464 0 0 0-.892-1.347zM8.483 9.41a1.046 1.046 0 0 0 1.046 1.045h.825l.384-1.203a1.434 1.434 0 0 0-.373-.051H8.692a.21.21 0 0 0-.209.206zm.418.207a.105.105 0 1 1 .03.074.105.105 0 0 1-.03-.077zm-2.839-1.57-.58-1.323h9.369l-.588 1.322zm7.451-1.605H5.9l1.42-.495h.034a1.168 1.168 0 0 1 1.113-.951c.079 0 .157.008.234.026a1.12 1.12 0 0 1 .93-.521c.264 0 .518.098.714.275.131-.056.272-.085.414-.085.283.002.554.113.756.312a1.091 1.091 0 0 1 .882.304c.21.205.344.477.379.77l1.025.363h-.287z"
    />
  </svg>
);
export default SvgFeedCumulative;
