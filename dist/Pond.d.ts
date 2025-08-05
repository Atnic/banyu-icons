import type { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgPond({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgPond {
    var propTypes: {
        className: any;
    };
}
export default SvgPond;
