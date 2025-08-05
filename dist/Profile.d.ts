import type { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare function SvgProfile({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps): import("react/jsx-runtime").JSX.Element;
declare namespace SvgProfile {
    var propTypes: {
        className: any;
    };
}
export default SvgProfile;
