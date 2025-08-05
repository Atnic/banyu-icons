import type { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgPlatformMobile({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgPlatformMobile {
    var propTypes: {
        className: any;
    };
}
export default SvgPlatformMobile;
