import * as React from "react";
import type { SVGProps } from "react";
import PropTypes from "prop-types";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SvgPicture({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M21 19.146H3V5.003h18zm-6.334-1.389a.5.5 0 0 0 .302.103h5.249a.51.51 0 0 0 .508-.515l-.8-4.118a.516.516 0 0 0-.51-.515h-4.57a.5.5 0 0 0-.243.063.5.5 0 0 0-.243-.063H9.714c-.1-.001-.197.027-.28.08a.5.5 0 0 0-.278-.08h-4.57a.51.51 0 0 0-.508.515l-.802 4.119a.516.516 0 0 0 .509.514h5.248a.5.5 0 0 0 .338-.132.5.5 0 0 0 .343.132h4.646c.11 0 .218-.036.306-.102M9.109 6.723l-5.313 5.35h16.312l-3.614-3.08-3.405 2.038-3.973-4.308zm4.498.21a.966.966 0 0 0 0 1.928.966.966 0 0 0 .682-1.645.97.97 0 0 0-.682-.283m6.12 10.32H18.53a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386m-2.293 0H16.24a.38.38 0 0 1-.38-.386v-1.002a.38.38 0 0 1 .38-.386h1.192a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386zm-9.672 0H6.568a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386zm-2.291 0H4.275a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.196a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386m8.388-.011h-1.216a.39.39 0 0 1-.387-.392V15.83a.39.39 0 0 1 .387-.392h1.216a.39.39 0 0 1 .387.392v1.018a.39.39 0 0 1-.386.393zm-2.33 0h-1.216a.39.39 0 0 1-.386-.392V15.83a.39.39 0 0 1 .386-.392h1.217a.39.39 0 0 1 .386.392v1.018a.39.39 0 0 1-.386.393zm2.343-2.027h-1.216a.39.39 0 0 1-.387-.393v-1.017a.39.39 0 0 1 .387-.393h1.216a.39.39 0 0 1 .387.393v1.018a.39.39 0 0 1-.386.393zm-2.33 0h-1.216a.39.39 0 0 1-.387-.393v-1.017a.39.39 0 0 1 .387-.393h1.216a.39.39 0 0 1 .387.393v1.018a.39.39 0 0 1-.386.393zm7.395-.041h-1.195a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.383.383 0 0 1 .38.386v1.002a.383.383 0 0 1-.379.386m-2.292 0h-1.194a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386h1.194a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386m-8.095 0H7.355a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386H8.55a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386m-2.292 0H5.064a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386h1.194a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.379.386z"
      />
    </svg>
  );
}
SvgPicture.propTypes = {
  className: PropTypes.string,
};
export default SvgPicture;
