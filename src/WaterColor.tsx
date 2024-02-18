import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgWaterColor({
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
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M8.791 7.707c.133.128.323.128.474.036a4.9 4.9 0 0 1 1.764-.716c.17-.037.303-.165.303-.349V3.354c0-.22-.19-.386-.398-.349a9.2 9.2 0 0 0-4.531 1.818.34.34 0 0 0-.02.533zM14.726 7.762a4.9 4.9 0 0 0-1.763-.716c-.17-.037-.304-.184-.285-.35V3.355c0-.202.19-.367.398-.349a9.2 9.2 0 0 1 4.532 1.818c.17.129.17.386.019.533L15.2 7.726c-.133.128-.322.128-.474.036M3.38 11.628h3.432a.38.38 0 0 0 .36-.293q.2-.937.74-1.708c.095-.147.095-.331-.038-.46l-2.446-2.35c-.151-.147-.417-.147-.55.018a8.6 8.6 0 0 0-1.877 4.39.372.372 0 0 0 .38.403M7.893 14.916a4.6 4.6 0 0 1-.74-1.708.364.364 0 0 0-.36-.294H3.381c-.228 0-.399.184-.36.386a8.6 8.6 0 0 0 1.876 4.39.367.367 0 0 0 .55.017l2.427-2.35c.114-.11.114-.294.019-.441M17.202 12.914h3.432c.228 0 .398.184.36.404a8.6 8.6 0 0 1-1.877 4.39c-.132.165-.398.165-.55.018l-2.426-2.351c-.133-.129-.133-.312-.038-.46q.54-.77.74-1.707a.38.38 0 0 1 .36-.294M11.04 16.954a4.9 4.9 0 0 1-1.763-.716c-.151-.092-.34-.092-.474.037l-2.427 2.37c-.151.146-.151.403.02.532a9.2 9.2 0 0 0 4.53 1.818c.21.018.399-.147.399-.35v-3.342c.019-.165-.114-.312-.284-.349M17.203 11.628a.364.364 0 0 1-.36-.293 4.5 4.5 0 0 0-.721-1.708c-.095-.147-.095-.331.038-.46l2.408-2.332a.367.367 0 0 1 .55.018 8.6 8.6 0 0 1 1.877 4.39c.038.202-.133.385-.36.385zM15.212 16.293c-.133-.128-.322-.128-.474-.037a4.9 4.9 0 0 1-1.763.717c-.171.037-.304.165-.304.349v3.324c0 .22.19.386.398.349a9.2 9.2 0 0 0 4.532-1.818.34.34 0 0 0 .019-.533z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.49 9.368c.37.607 1.592 2.632 1.592 3.52 0 1.121-.933 2.009-2.075 2.009-1.141 0-2.074-.903-2.074-2.01 0-.887 1.222-2.912 1.592-3.519a.55.55 0 0 1 .482-.265.55.55 0 0 1 .483.265m-.746 2.674.006-.01c.097-.157.049-.359-.08-.437-.08-.047-.177-.062-.257-.047a.32.32 0 0 0-.21.14c-.032.047-.755 1.169-.144 2.056.064.094.16.14.273.14a.34.34 0 0 0 .177-.062.3.3 0 0 0 .145-.202.31.31 0 0 0-.048-.234c-.351-.502.079-1.242.138-1.344"
        clipRule="evenodd"
      />
    </svg>
  );
}
SvgWaterColor.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
export default SvgWaterColor;
