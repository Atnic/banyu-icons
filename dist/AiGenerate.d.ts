import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgAiGenerate({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgAiGenerate {
    var propTypes: {
        className: PropTypes.Requireable<string>;
    };
}
export default SvgAiGenerate;
