import type { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgFry({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgFry {
    var propTypes: {
        className: any;
    };
}
export default SvgFry;
