import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUsa = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#F5F5F5"
      d="M19.976 6.001H4.994a1.357 1.357 0 0 0-1.32 1.391v9.39a1.357 1.357 0 0 0 1.32 1.39h14.982a1.357 1.357 0 0 0 1.319-1.39v-9.39a1.357 1.357 0 0 0-1.32-1.391"
    />
    <path
      fill="#FF4B55"
      d="M3.751 6.937H21.22a1.326 1.326 0 0 0-1.246-.936H4.998a1.327 1.327 0 0 0-1.247.936M21.295 9.746H3.675v.936h17.62zM21.295 7.873H3.675v.936h17.62zM3.675 12.235a.313.313 0 0 0 .304.32h17.316v-.935H3.675zM21.295 15.364H3.675v.936h17.62zM21.22 17.236H3.75a1.327 1.327 0 0 0 1.247.937h14.974a1.327 1.327 0 0 0 1.248-.937M21.295 13.491H3.675v.937h17.62z"
    />
    <path
      fill="#41479B"
      d="M3.995 12.555h8.009a.32.32 0 0 0 .32-.32V6.32a.32.32 0 0 0-.32-.32H5.066a1.391 1.391 0 0 0-1.39 1.392v4.842a.32.32 0 0 0 .32.32"
    />
    <path
      fill="#F5F5F5"
      d="m4.574 6.735.071.213h.224a.03.03 0 0 1 .018.054l-.183.134.068.213a.03.03 0 0 1-.047.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.213-.182-.134a.03.03 0 0 1 .017-.054h.224l.071-.212a.032.032 0 1 1 .063 0M4.574 7.848l.07.213h.225a.03.03 0 0 1 .017.055l-.182.133.067.214a.03.03 0 0 1-.046.033l-.183-.13-.182.13a.03.03 0 0 1-.047-.033l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 1 1 .064 0M4.574 8.96l.07.213h.225a.03.03 0 0 1 .017.055l-.182.133.067.214a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M4.574 10.073l.07.213h.225a.03.03 0 0 1 .027.02.03.03 0 0 1-.01.034l-.182.133.067.214a.03.03 0 0 1-.011.033.03.03 0 0 1-.035 0l-.183-.13-.182.13a.03.03 0 0 1-.046-.015.03.03 0 0 1 0-.018l.067-.214-.183-.133a.03.03 0 0 1 0-.049.03.03 0 0 1 .018-.006h.224l.07-.212a.032.032 0 0 1 .064 0M4.574 11.186l.07.212h.225a.03.03 0 0 1 .028.021.03.03 0 0 1-.01.034l-.183.133.067.214a.03.03 0 0 1-.029.038.03.03 0 0 1-.017-.005l-.183-.13-.182.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.012-.033l.068-.214-.183-.133a.03.03 0 0 1-.01-.033.03.03 0 0 1 .028-.02h.224l.07-.214a.032.032 0 1 1 .064 0M5.437 7.281l.07.213h.225a.03.03 0 0 1 .018.054l-.183.134.067.213a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.046-.034l.067-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.032.032 0 0 1 .064 0M5.437 8.394l.07.212h.225a.03.03 0 0 1 .018.055l-.183.134.069.216a.03.03 0 0 1-.047.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.213-.182-.134a.03.03 0 0 1 .017-.054h.224l.071-.213a.031.031 0 0 1 .062-.003M5.437 9.506l.07.213h.225a.03.03 0 0 1 .018.055l-.183.133.067.214a.03.03 0 0 1-.046.033l-.183-.13-.182.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.067-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 0 1 .064 0M5.437 10.618l.07.213h.225a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.034l-.183.134.067.213a.03.03 0 0 1-.011.033.03.03 0 0 1-.035 0l-.183-.13-.182.13a.03.03 0 0 1-.046-.014.03.03 0 0 1 0-.019l.067-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213c0-.008.004-.016.01-.022a.032.032 0 0 1 .054.022M6.3 6.735l.071.212h.224a.03.03 0 0 1 .029.04.03.03 0 0 1-.011.015l-.183.134.068.213a.03.03 0 0 1-.046.034l-.183-.13-.183.13a.03.03 0 0 1-.046-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 0 1 .064 0M6.3 7.848l.071.212h.224a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.046.034l-.183-.13-.183.13a.03.03 0 0 1-.046-.034l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 0 1 .064 0M6.3 8.96l.071.213h.224a.03.03 0 0 1 .018.054l-.183.134.068.214a.03.03 0 0 1-.046.033l-.183-.13-.183.13a.03.03 0 0 1-.046-.033l.068-.214-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.212a.032.032 0 0 1 .064 0M6.3 10.073l.071.213h.224a.03.03 0 0 1 .029.02.03.03 0 0 1-.011.035l-.183.133.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.035 0l-.182-.13-.183.131a.03.03 0 0 1-.046-.034l.068-.213-.183-.133a.03.03 0 0 1 0-.05.03.03 0 0 1 .018-.005h.224l.07-.213a.032.032 0 0 1 .032-.032.032.032 0 0 1 .032.032M6.3 11.185l.071.212h.224c.007 0 .013.003.018.006a.03.03 0 0 1 .01.034.03.03 0 0 1-.01.015l-.183.134.068.213a.03.03 0 0 1-.029.039.031.031 0 0 1-.017-.005l-.183-.13-.183.13a.031.031 0 0 1-.017.005.03.03 0 0 1-.017-.006.03.03 0 0 1-.012-.033l.068-.213-.183-.134a.03.03 0 0 1 0-.049.032.032 0 0 1 .018-.006h.224l.07-.212a.032.032 0 1 1 .064 0M7.164 7.281l.07.213h.225a.03.03 0 0 1 .017.054l-.182.134.067.213a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.032.032 0 1 1 .064 0M7.164 8.394l.07.212h.225a.03.03 0 0 1 .017.055l-.182.134.067.213a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M7.164 9.506l.07.213h.225a.03.03 0 0 1 .017.055l-.182.133.067.214a.03.03 0 0 1-.029.038.03.03 0 0 1-.017-.005l-.183-.13-.182.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.012-.033l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 0 1 .064 0M7.164 10.618l.07.213h.225a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.034l-.183.134.067.213a.03.03 0 0 1-.011.033.03.03 0 0 1-.035 0l-.183-.13-.182.13a.03.03 0 0 1-.047-.033l.068-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.032.032 0 0 1 .032-.032.032.032 0 0 1 .032.032M8.027 6.735l.07.212h.225a.03.03 0 0 1 .018.055l-.183.134.067.213a.03.03 0 0 1-.046.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.213-.182-.134a.03.03 0 0 1 .017-.054h.224l.07-.213a.032.032 0 0 1 .032-.031.032.032 0 0 1 .032.03M8.027 7.848l.07.212h.225a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.047.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.214-.182-.133a.03.03 0 0 1 .017-.055h.224l.07-.212a.032.032 0 1 1 .064 0M8.027 8.96l.07.213h.225a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.047.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.214-.182-.133a.03.03 0 0 1 .017-.055h.224l.07-.212a.032.032 0 1 1 .064 0M8.027 10.073l.07.213h.225a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.035l-.183.133.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.035 0l-.182-.13-.183.131a.03.03 0 0 1-.046-.015.03.03 0 0 1 0-.018l.067-.214-.182-.133a.03.03 0 0 1 .017-.055h.224l.07-.213a.032.032 0 0 1 .033-.032.032.032 0 0 1 .031.032M8.027 11.185l.07.212h.225c.006 0 .012.003.018.006a.03.03 0 0 1 .01.034.03.03 0 0 1-.01.015l-.183.134.068.213a.03.03 0 0 1-.03.039.031.031 0 0 1-.017-.005l-.182-.13-.183.13a.031.031 0 0 1-.018.005.03.03 0 0 1-.017-.006.03.03 0 0 1-.011-.033l.067-.213-.182-.134a.03.03 0 0 1 .017-.055h.224l.07-.212a.032.032 0 1 1 .064 0M8.89 7.281l.071.213h.224a.03.03 0 0 1 .018.054l-.183.134.068.213a.03.03 0 0 1-.046.034l-.183-.13-.183.13a.03.03 0 0 1-.046-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.032.032 0 1 1 .064 0M8.89 8.394l.071.212h.224a.03.03 0 0 1 .018.055l-.183.134.068.213a.03.03 0 0 1-.046.034l-.183-.13-.183.13a.03.03 0 0 1-.045-.015.03.03 0 0 1-.001-.019l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M8.89 9.506l.071.213h.224a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.046.033l-.183-.13-.183.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 1 1 .064 0M8.89 10.618l.071.213h.224a.03.03 0 0 1 .029.02.03.03 0 0 1-.011.034l-.183.134.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.034 0l-.183-.13-.183.13a.03.03 0 0 1-.045-.014.03.03 0 0 1-.001-.019l.068-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.032.032 0 0 1 .032-.032.032.032 0 0 1 .032.032M9.754 6.735l.07.212h.225a.03.03 0 0 1 .028.04.03.03 0 0 1-.01.015l-.183.134.067.213a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M9.754 7.848l.07.212h.225a.03.03 0 0 1 .017.055l-.182.133.067.214a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M9.754 8.96l.07.213h.225a.03.03 0 0 1 .017.054l-.182.134.067.214a.03.03 0 0 1-.046.033l-.183-.13-.182.13a.03.03 0 0 1-.047-.033l.068-.214-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.212a.032.032 0 0 1 .064 0M9.754 10.073l.07.213h.225a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.035l-.183.133.067.213a.03.03 0 0 1-.011.033.03.03 0 0 1-.035 0l-.183-.13-.182.131a.03.03 0 0 1-.046-.015.03.03 0 0 1 0-.018l.067-.214-.183-.133a.03.03 0 0 1 0-.05.03.03 0 0 1 .018-.005h.224l.07-.213a.032.032 0 0 1 .032-.032.032.032 0 0 1 .032.032M9.754 11.185l.07.212h.225c.006 0 .012.003.017.006a.03.03 0 0 1 .011.034.03.03 0 0 1-.01.015l-.183.134.067.213a.03.03 0 0 1-.028.039.031.031 0 0 1-.018-.005l-.183-.13-.182.13a.031.031 0 0 1-.018.005.03.03 0 0 1-.017-.006.03.03 0 0 1-.012-.033l.068-.213-.183-.134a.03.03 0 0 1 0-.049.032.032 0 0 1 .018-.006h.224l.07-.212a.032.032 0 1 1 .064 0M10.617 7.281l.071.213h.224a.03.03 0 0 1 .018.054l-.183.134.068.213a.03.03 0 0 1-.001.019.03.03 0 0 1-.046.015l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.213-.182-.134a.03.03 0 0 1 0-.048.03.03 0 0 1 .017-.006h.224l.071-.213a.032.032 0 0 1 .054-.022c.006.006.01.014.01.022M10.617 8.394l.071.212h.224a.03.03 0 0 1 .018.055l-.183.134.068.213a.03.03 0 0 1-.001.019.03.03 0 0 1-.046.015l-.182-.13-.183.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.067-.214-.182-.134a.03.03 0 0 1 0-.049.03.03 0 0 1 .017-.006h.224l.071-.212a.032.032 0 0 1 .032-.032.032.032 0 0 1 .031.032M10.617 9.506l.071.213h.224a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.001.018.03.03 0 0 1-.028.02.03.03 0 0 1-.018-.005l-.182-.13-.183.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.067-.214-.182-.133a.03.03 0 0 1 0-.05.03.03 0 0 1 .017-.005h.224l.071-.213a.032.032 0 0 1 .032-.031.032.032 0 0 1 .031.031M10.617 10.618l.071.213h.224a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.034l-.183.134.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.035 0l-.182-.13-.183.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.067-.213-.182-.134a.03.03 0 0 1 .017-.054h.224l.071-.213c0-.008.003-.016.01-.022a.032.032 0 0 1 .053.022M11.48 6.735l.071.212h.224a.03.03 0 0 1 .029.021.03.03 0 0 1-.011.034l-.183.134.068.213a.03.03 0 0 1 0 .018.03.03 0 0 1-.046.015l-.183-.13-.183.13a.03.03 0 0 1-.045-.015.031.031 0 0 1-.001-.018l.068-.213-.183-.134a.03.03 0 0 1-.01-.034.03.03 0 0 1 .028-.021h.224l.07-.212c0-.009.004-.017.01-.023a.032.032 0 0 1 .054.023M11.48 7.848l.071.212h.224a.03.03 0 0 1 .029.021.03.03 0 0 1-.011.034l-.183.133.068.214a.03.03 0 0 1 0 .018.03.03 0 0 1-.046.015l-.183-.13-.183.13a.03.03 0 0 1-.034 0 .031.031 0 0 1-.011-.015.031.031 0 0 1-.001-.018l.068-.214-.183-.133a.03.03 0 0 1 0-.049.03.03 0 0 1 .018-.006h.224l.07-.212a.031.031 0 0 1 .032-.032c.008 0 .016.004.022.01.006.005.01.013.01.022M11.48 8.96l.071.213h.224a.03.03 0 0 1 .028.04.03.03 0 0 1-.01.014l-.183.134.068.214a.031.031 0 0 1 0 .018.03.03 0 0 1-.046.015l-.183-.13-.183.13a.03.03 0 0 1-.034 0 .03.03 0 0 1-.011-.015.03.03 0 0 1-.001-.018l.068-.214-.183-.134a.03.03 0 0 1-.01-.033.03.03 0 0 1 .028-.02h.224l.07-.213c0-.009.004-.017.01-.023a.031.031 0 0 1 .044 0c.006.006.01.014.01.023M11.48 10.073l.071.213h.224a.03.03 0 0 1 .018.055l-.183.133.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.034.001l-.183-.13-.183.13a.03.03 0 0 1-.046-.034l.068-.213-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 0 1 .054-.022c.006.006.01.014.01.022M11.48 11.185l.071.212h.224c.007 0 .013.003.018.006.005.004.009.01.01.015a.03.03 0 0 1-.01.034l-.183.134.068.213a.03.03 0 0 1 0 .019.03.03 0 0 1-.012.014.03.03 0 0 1-.017.006.031.031 0 0 1-.017-.005l-.183-.13-.183.13a.031.031 0 0 1-.017.005.03.03 0 0 1-.029-.039l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212c0-.008.004-.017.01-.022a.031.031 0 0 1 .044 0c.006.005.01.014.01.022"
    />
    <path
      stroke="#CCC"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="M5.15 18.173a1.662 1.662 0 0 1-1.65-1.665V7.625a1.644 1.644 0 0 1 1.65-1.624h14.7a1.644 1.644 0 0 1 1.65 1.624v8.883a1.662 1.662 0 0 1-1.65 1.665z"
    />
  </svg>
);
export default SvgUsa;
