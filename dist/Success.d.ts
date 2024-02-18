import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgSuccess({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgSuccess {
    var propTypes: {
        title: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
}
export default SvgSuccess;