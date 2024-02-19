import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgExpenseMenu({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgExpenseMenu {
    var propTypes: {
        className: PropTypes.Requireable<string>;
    };
}
export default SvgExpenseMenu;
