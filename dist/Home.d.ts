import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgHome({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgHome {
    var propTypes: {
        title: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
}
export default SvgHome;
