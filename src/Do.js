import * as React from "react";
const SvgDo = ({ title, titleId, ...props }) => (
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
    <path d="M15.13 17.018H12.97v-.47l.775-.814c.23-.244.38-.412.45-.506.07-.095.121-.183.152-.263a.689.689 0 0 0 .047-.25c0-.128-.035-.224-.104-.287a.384.384 0 0 0-.272-.094.763.763 0 0 0-.349.085c-.112.057-.23.138-.352.243l-.355-.436a2.32 2.32 0 0 1 .378-.285c.1-.055.21-.097.327-.127.119-.03.25-.046.397-.046.193 0 .364.037.511.11a.825.825 0 0 1 .345.307.838.838 0 0 1 .122.451c0 .148-.025.287-.076.417-.05.128-.127.26-.232.396-.104.136-.289.33-.553.581l-.398.388v.03h1.346z" />
    <path
      fillRule="evenodd"
      d="m11.936 3.012-.436.321-.436-.321a.542.542 0 0 1 .872 0m-.436 1.25A71.69 71.69 0 0 0 8.983 8.07c-.74 1.207-1.472 2.505-2.018 3.698-.555 1.214-.882 2.244-.882 2.94a5.417 5.417 0 1 0 10.834 0c0-.696-.327-1.726-.882-2.94-.546-1.193-1.278-2.491-2.018-3.698A69.421 69.421 0 0 0 11.5 4.262m0-.929-.436-.321-.005.007-.013.018-.051.07a68.62 68.62 0 0 0-.872 1.234A70.525 70.525 0 0 0 8.06 7.503c-.75 1.225-1.508 2.565-2.079 3.813C5.418 12.545 5 13.76 5 14.708a6.5 6.5 0 1 0 13 0c0-.949-.419-2.163-.98-3.39-.571-1.249-1.329-2.589-2.079-3.814a70.516 70.516 0 0 0-2.936-4.398l-.05-.07-.014-.017-.005-.007z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M10.093 15.393a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25m0 1.084a2.708 2.708 0 1 0 0-5.417 2.708 2.708 0 0 0 0 5.417"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDo;