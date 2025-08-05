import type { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgLamp({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgLamp {
    var propTypes: {
        className: any;
    };
}
export default SvgLamp;
