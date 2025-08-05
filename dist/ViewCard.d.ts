import type { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgViewCard({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgViewCard {
    var propTypes: {
        className: any;
    };
}
export default SvgViewCard;
