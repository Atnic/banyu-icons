'use strict';

var jsxRuntime = require('react/jsx-runtime');
var PropTypes = require('prop-types');

function SvgPlus({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.472 1.915c.73-2.554 4.347-2.553 5.076.002l1.676 5.866 5.861 1.678c2.553.73 2.553 4.35 0 5.08l-5.861 1.676-1.676 5.867c-.73 2.555-4.346 2.555-5.076 0L7.798 16.22l-5.875-1.656c-2.556-.721-2.567-4.347-.014-5.083l5.888-1.696z", clipRule: "evenodd" })] }));
}
SvgPlus.propTypes = {
    className: PropTypes.string,
};

function SvgAccess({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M14.06 20.64a1.236 1.236 0 0 1-1.237-1.236v-3.929a1.24 1.24 0 0 1 .981-1.208c.107-.784.408-1.53.876-2.168a2.8 2.8 0 0 1 2.226-1.226A2.8 2.8 0 0 1 19.13 12.1c.467.638.767 1.381.874 2.164A1.236 1.236 0 0 1 21 15.475v3.927a1.236 1.236 0 0 1-1.236 1.237zm1.963-3.845a.78.78 0 0 0 .301.615l-.301 1.198h1.553l-.305-1.195a.778.778 0 1 0-1.249-.618m-.912-2.556h3.581c-.234-1.209-.951-2.093-1.793-2.093-.841 0-1.554.885-1.788 2.093m-3.01 5.274H5.967v-3.104h6.136v3.105zm-6.578 0H3a6.86 6.86 0 0 1 1.818-4.704q.329-.352.705-.651zm6.579-3.547h-.509V13.3q.46.176.887.418v.41a1.23 1.23 0 0 0-.378.89zm-5.25 0h-.886v-2.263q.428-.24.888-.414v2.677zm4.297 0H7.298v-2.782a5.87 5.87 0 0 1 3.852.009v2.774zm-5.487-6.92h6.977a3.492 3.492 0 0 1-6.977 0m9.42-.445H3.444L9.361 3.75l5.723 4.85z" })] }));
}
SvgAccess.propTypes = {
    className: PropTypes.string,
};

function SvgAchievement({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.68 15.36a1.2 1.2 0 0 1-.858-.356l-1.096-1.1h-1.56a1.21 1.21 0 0 1-1.211-1.211v-1.557l-1.1-1.1a1.21 1.21 0 0 1 0-1.713l1.1-1.1V5.667a1.21 1.21 0 0 1 1.212-1.212h1.555l1.1-1.1a1.21 1.21 0 0 1 1.715 0l1.1 1.1h1.555a1.21 1.21 0 0 1 1.212 1.212v1.559l1.1 1.097a1.21 1.21 0 0 1 0 1.713l-1.1 1.1v1.556a1.21 1.21 0 0 1-1.212 1.212h-1.556l-1.1 1.1a1.2 1.2 0 0 1-.857.355m0-10.23a4.05 4.05 0 1 0 0 8.099 4.05 4.05 0 0 0 0-8.099m0 7.425a3.375 3.375 0 1 1 3.374-3.375 3.38 3.38 0 0 1-3.375 3.375" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M9.443 21v-6.444h.28l1.1 1.099c.157.158.356.27.573.322v3.902zm4.585 0-1.98-1.137v-3.91c.185-.058.353-.16.49-.298l1.098-1.1h.391V21" })] }));
}
SvgAchievement.propTypes = {
    className: PropTypes.string,
};

function SvgActivity2({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M17.978 6.108h-1.43v.947c0 .701-.614 1.27-1.37 1.27H8.72c-.756 0-1.37-.569-1.37-1.27v-.947H6.001C5.45 6.108 5 6.525 5 7.036v13.036c0 .511.45.928 1.001.928h11.997c.552 0 1.002-.417 1.002-.928V7.036c0-.511-.45-.928-1.022-.928M7.412 10.939l.245-.227a.273.273 0 0 1 .368 0l.613.568 1.328-1.231a.274.274 0 0 1 .368 0l.225.208a.223.223 0 0 1 .02.322l-1.737 1.857a.264.264 0 0 1-.388 0l-1.022-1.194c-.122-.094-.122-.227-.02-.303m3.168 6.006L8.822 18.84c-.102.114-.307.114-.388 0L7.37 17.627a.224.224 0 0 1 .02-.322l.245-.227a.273.273 0 0 1 .368 0l.634.568 1.349-1.25a.274.274 0 0 1 .367 0l.246.227a.27.27 0 0 1-.02.322m0-3.183-1.758 1.895c-.102.114-.307.114-.388 0L7.37 14.444a.224.224 0 0 1 .02-.322l.245-.227a.273.273 0 0 1 .368 0l.634.568 1.349-1.25a.273.273 0 0 1 .367 0l.246.227c.061.076.061.228-.02.322m6.11 4.396c0 .095-.081.17-.183.17H12.01c-.102 0-.184-.075-.184-.17v-.607c0-.094.082-.17.184-.17h4.497c.102 0 .183.076.183.17zm0-3.202c0 .095-.081.17-.183.17H12.01c-.102 0-.184-.075-.184-.17v-.607c0-.094.082-.17.184-.17h4.497c.102 0 .183.076.183.17zm0-3.183c0 .095-.081.17-.183.17H12.01c-.102 0-.184-.075-.184-.17v-.607c0-.094.082-.17.184-.17h4.497c.102 0 .183.076.183.17z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.72 7.471h6.478c.245 0 .45-.19.45-.416V5.349c0-.227-.204-.416-.45-.416h-1.062C14.074 3.853 13.114 3 11.949 3s-2.105.853-2.167 1.933H8.72c-.246 0-.45.19-.45.416v1.706c0 .227.204.416.45.416m3.229-3.22c.45 0 .838.34.838.776 0 .417-.368.777-.838.777-.45 0-.838-.34-.838-.777a.826.826 0 0 1 .838-.777" })] }));
}
SvgActivity2.propTypes = {
    className: PropTypes.string,
};

function SvgAge({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.332 17.09a.7.7 0 0 0 .448.06l1.708-.34a4.9 4.9 0 0 0 1.715-.35l-1.152-1.885q-.293.121-.61.131l-1.66-.332a.71.71 0 0 0-.696.262.7.7 0 0 0-.07.737l.195.387-.195.388a.705.705 0 0 0 .317.941M10.641 16.914h.514v-4.621h.513v-.513h-.513a.513.513 0 0 0-.514.513zM16.839 16.158a4.92 4.92 0 0 0 2.347-3.196h-3.038c-.005.46-.188.9-.51 1.229zM16.001 12.26h3.287l.002-.029.003-.05v-.005l.001-.012c.006-.09.011-.17.011-.258a4.91 4.91 0 0 0-2.99-4.518l-1.257 3.948c.421.175.76.506.943.924" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.585 9.249c.2.2.472.313.755.313h.001a1.07 1.07 0 0 0 .754-1.824 1.07 1.07 0 0 0-1.51 0 1.07 1.07 0 0 0 0 1.51m.003-1.1a.35.35 0 0 1 .248-.103.351.351 0 0 1 0 .701.35.35 0 0 1-.248-.598", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.591 11.208h2.772l1.285-4.038A5 5 0 0 0 14.395 7H8.787a.7.7 0 0 0-.702.701 3.51 3.51 0 0 0 3.506 3.507m-2.206-3.67c.253-.253.597-.396.955-.396h.001a1.353 1.353 0 0 1 .955 2.307 1.354 1.354 0 0 1-1.911 0 1.353 1.353 0 0 1 0-1.91", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M6.316 16.863a.33.33 0 0 0 .394.293l.804-.16a2.3 2.3 0 0 0 .807-.165l-.542-.888a.8.8 0 0 1-.287.062l-.782-.156a.329.329 0 0 0-.36.47l.091.183-.091.183a.33.33 0 0 0-.034.178M8.296 15.183a.83.83 0 0 1-.24.58l.564.926a2.32 2.32 0 0 0 1.105-1.506zM7.78 14.423a.83.83 0 0 1 .445.434l1.547-.002.003-.041q.005-.062.006-.125a2.31 2.31 0 0 0-1.409-2.127z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.984 13.876c.31.309.728.483 1.166.484h1.305l.605-1.901a2.3 2.3 0 0 0-.59-.08H4.83a.33.33 0 0 0-.33.33c0 .438.175.857.484 1.167m.204-.747a.165.165 0 1 1 .274-.184.165.165 0 0 1-.274.184", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M6.176 11.95q.033.216.092.426h.771s.05-.21.085-.426.822.16.822.16-.738-.836-.907-.836-.386.24-.386.24-.204-.24-.385-.24-.898.838-.898.838.775-.377.806-.162" })] }));
}
SvgAge.propTypes = {
    className: PropTypes.string,
};

function SvgAiGenerate({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.486 5.091c.338-.83 1.513-.83 1.851 0l1.167 2.857a1 1 0 0 0 .548.548l2.857 1.166c.83.339.83 1.513 0 1.852l-2.857 1.167a1 1 0 0 0-.548.547l-1.166 2.857c-.34.83-1.513.83-1.852 0l-1.167-2.857a1 1 0 0 0-.547-.547l-2.857-1.167c-.83-.339-.83-1.513 0-1.852l2.857-1.166a1 1 0 0 0 .547-.548z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M6.347 14.345a.515.515 0 0 1 .953 0l.601 1.471c.053.129.154.23.283.283l1.471.6a.515.515 0 0 1 0 .954l-1.471.601a.52.52 0 0 0-.283.283l-.6 1.471a.515.515 0 0 1-.954 0l-.601-1.471a.52.52 0 0 0-.283-.283l-1.471-.6a.515.515 0 0 1 0-.954l1.471-.601a.52.52 0 0 0 .283-.283z", opacity: 0.5 }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M5.63 3.442a.273.273 0 0 1 .505 0l.318.78a.27.27 0 0 0 .15.149l.779.318a.273.273 0 0 1 0 .505l-.78.318a.27.27 0 0 0-.15.15l-.317.778a.273.273 0 0 1-.505 0l-.318-.779a.27.27 0 0 0-.15-.15l-.779-.317a.273.273 0 0 1 0-.505l.78-.318a.27.27 0 0 0 .149-.15z", opacity: 0.2 })] }));
}
SvgAiGenerate.propTypes = {
    className: PropTypes.string,
};

function SvgAnco({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "m18.663 16.867-5.863-6.7V3h-1.6v7.166l-5.863 6.7h-.804a2.133 2.133 0 0 0 0 4.267h14.934a2.133 2.133 0 1 0 0-4.266zm-2.126 0L12 11.68l-4.537 5.186z", clipRule: "evenodd" })] }));
}
SvgAnco.propTypes = {
    className: PropTypes.string,
};

function SvgBar({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M10.085 6.145a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v14.921h-3.83zM3.434 16.927a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v4.14h-3.83zM17.736 9.377a1 1 0 0 0-1 1v10.69h3.83v-10.69a1 1 0 0 0-1-1z" })] }));
}
SvgBar.propTypes = {
    className: PropTypes.string,
};

function SvgBiomass({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M5.018 3h13.95a1.268 1.268 0 0 1 0 2.537H5.018a1.268 1.268 0 0 1 0-2.537M10.091 6.015h3.17V7.84h-3.17zM12.733 12.863a4.5 4.5 0 0 0-.581-2.114 4.5 4.5 0 0 0-.582 2.114c0 1.167.259 2.113.582 2.113s.58-.947.58-2.113" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M18.546 21H5.44a1.693 1.693 0 0 1-1.691-1.691l1.48-9.3a1.693 1.693 0 0 1 1.69-1.691h9.934a1.693 1.693 0 0 1 1.692 1.691l1.69 9.3A1.693 1.693 0 0 1 18.546 21m-6.447-10.99a4.756 4.756 0 1 0 0 9.511 4.756 4.756 0 0 0 0-9.512", clipRule: "evenodd" })] }));
}
SvgBiomass.propTypes = {
    className: PropTypes.string,
};

function SvgChemical({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 21A9.01 9.01 0 0 1 4.181 8.555a8.9 8.9 0 0 1 1.957-2.917A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m-1.241-6.595v1.116c0 .046.088.091.254.132 1.042.172 2.097.247 3.152.224h.255a26 26 0 0 0 2.405-.108c.631-.065 1-.155 1-.248v-1.117c0 .197-1.587.358-3.536.358s-3.521-.16-3.53-.357m-3.641-3.72L6.48 12.387a2.1 2.1 0 0 0-.358 1.425 1.57 1.57 0 0 0 .672 1.14 1.46 1.46 0 0 0 .844.251 2.04 2.04 0 0 0 1.645-.94l1.137-1.707zm7.175 3.001c-1.948 0-3.534.162-3.534.36s1.585.358 3.534.358 3.535-.16 3.535-.359c0-.197-1.586-.36-3.535-.36zm-4.195-5.942a2.04 2.04 0 0 0-1.647.94l-1.136 1.703 2.803 1.872 1.136-1.706c.286-.416.413-.922.358-1.424a1.56 1.56 0 0 0-.674-1.138 1.5 1.5 0 0 0-.84-.248" })] }));
}
SvgChemical.propTypes = {
    className: PropTypes.string,
};

function SvgCloudy({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M17.32 16.98h.541c.6.067 1.49-.018 2.247-.506.793-.512 1.392-1.437 1.392-2.936 0-1.418-.7-2.302-1.567-2.782-.707-.39-1.522-.517-2.166-.482a4.8 4.8 0 0 0-.986-1.904C16.124 7.607 15.131 7 13.724 7c-1.142 0-2.011.435-2.65 1.037A4 4 0 0 0 10.528 8c-2.605 0-3.626 2.625-3.81 3.937l-.108-.034.03-.187a3 3 0 0 0-.126.162C5.16 11.565 3 12.535 3 15.031c0 2.625 2.23 2.947 3.378 2.947h8.347c.704.09 1.86-.073 2.594-.998m.43-.771h.132q.02 0 .043.002c.481.057 1.201-.014 1.786-.392.558-.36 1.04-1.028 1.04-2.281 0-1.1-.518-1.74-1.172-2.102a3.4 3.4 0 0 0-2.049-.363.376.376 0 0 1-.427-.319 4 4 0 0 0-.882-1.872c-.53-.615-1.324-1.11-2.496-1.11-.711 0-1.286.202-1.749.516 1.545.671 2.197 2.354 2.335 3.295 1.23-.215 3.689.354 3.689 3.083 0 .616-.093 1.124-.25 1.543", clipRule: "evenodd" })] }));
}
SvgCloudy.propTypes = {
    className: PropTypes.string,
};

function SvgCoin({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M3 8.036V5.464c0-.947 3.262-1.714 7.285-1.714 4.024 0 7.286.767 7.286 1.714v2.572c0 .947-3.262 1.714-7.286 1.714S3 8.978 3 8.036M4.714 18.32c0 .944 3.268 1.715 7.286 1.715s7.285-.77 7.285-1.714v-2.572a.69.69 0 0 0-.343-.522 23.3 23.3 0 0 1-5.228.522c-3.184 0-5.973-.48-6.943-1.194-1.326.322-2.057.746-2.057 1.194z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M6.428 13.178c0 .943 3.269 1.714 7.286 1.714s7.285-.771 7.286-1.714v-2.571c0-.604-1.31-1.152-3.505-1.466-.517.835-3.616 1.465-7.209 1.465a27 27 0 0 1-3.781-.249.47.47 0 0 0-.077.25z" })] }));
}
SvgCoin.propTypes = {
    className: PropTypes.string,
};

function SvgConfirmStep({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.56 17.283a.77.77 0 0 1-.619-.307.78.78 0 0 1-.079-.82l.216-.43-.216-.431a.783.783 0 0 1 .652-1.126l2.725 2.669q-.312.044-.628.05l-1.896.377a1 1 0 0 1-.155.018m4.555-2.7-.962-.943c.192-.306.295-.66.298-1.02h2.803l-2.135 1.962zm2.82-2.742h-3.65a1.97 1.97 0 0 0-1.047-1.025l1.394-4.385a5.45 5.45 0 0 1 3.32 5.016c0 .102-.006.193-.012.29q.001.039-.005.082zm-5.464-1.168H7.394A3.894 3.894 0 0 1 3.5 6.78.78.78 0 0 1 4.28 6h6.224q.707.005 1.39.188l-1.426 4.485zM5.447 7.162a.39.39 0 1 0-.003.779.39.39 0 0 0 .003-.78" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "m12.769 17.923-.175-.18a1.2 1.2 0 0 1-.327-.34L9.381 14.43c-.192-.198-.061-.747.29-1.226.352-.48.793-.707.985-.51l2.425 2.5 6.074-5.873a.894.894 0 0 1 1.357.213 1.22 1.22 0 0 1-.04 1.564l-6.805 6.582a.8.8 0 0 1-.42.216.7.7 0 0 1-.26.096.25.25 0 0 1-.218-.07" })] }));
}
SvgConfirmStep.propTypes = {
    className: PropTypes.string,
};

function SvgCultivationReport({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M13.227 2.004h-7.68a.927.927 0 0 0-.922.937v18.11c0 .518.411.936.922.936h12.902c.511 0 .922-.418.922-.937V8.25h-5.222a.93.93 0 0 1-.922-.937zm-.718 9.602c.318.002.636.044.942.127l-.966 3.041h-2.088a2.643 2.643 0 0 1-2.64-2.64.53.53 0 0 1 .527-.528zm-3.578 1.271a.27.27 0 0 1-.098-.118.267.267 0 0 1 .192-.36.264.264 0 1 1-.095.48zm4.786 2.688a1.33 1.33 0 0 0-.71-.695l.945-2.973a3.71 3.71 0 0 1 2.252 3.402c0 .067-.003.128-.009.196l-.004.07zm-.274 1.454c.244-.247.382-.578.385-.925h2.287a3.7 3.7 0 0 1-1.768 2.406zm-.441.288.868 1.419c-.412.165-.85.254-1.293.263l-1.286.258a.528.528 0 0 1-.576-.753l.146-.292-.146-.292a.53.53 0 0 1 .052-.556.53.53 0 0 1 .524-.197l1.252.25q.238-.01.459-.1" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.403 7.144h4.001a1.2 1.2 0 0 0-.232-.335c-4.822-4.821-4.61-4.672-4.91-4.804v3.997c0 .632.51 1.142 1.14 1.142" })] }));
}
SvgCultivationReport.propTypes = {
    className: PropTypes.string,
};

function SvgDanger({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 21a9 9 0 0 1-3.455-.684 8.9 8.9 0 0 1-2.909-1.952A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.636-6.364 8.9 8.9 0 0 1 2.909-1.952A9 9 0 0 1 12.499 3a9 9 0 0 1 3.456.684 8.9 8.9 0 0 1 2.909 1.952 8.94 8.94 0 0 1 2.636 6.365 8.94 8.94 0 0 1-2.636 6.364 8.9 8.9 0 0 1-2.91 1.951A9 9 0 0 1 12.5 21m.007-7.511 3.25 2.818a1 1 0 0 0 .755.245 1 1 0 0 0 .686-.393 1.15 1.15 0 0 0-.166-1.54l-2.938-2.546 2.852-2.546a1.144 1.144 0 0 0 .115-1.54 1 1 0 0 0-.798-.396.97.97 0 0 0-.648.25l-3.154 2.818L9.209 7.84a1 1 0 0 0-.656-.25.99.99 0 0 0-.784.396 1.15 1.15 0 0 0 .165 1.54l2.939 2.546-2.852 2.546a1.143 1.143 0 0 0-.116 1.54 1 1 0 0 0 .799.396c.24-.001.47-.09.647-.25l3.155-2.818z" })] }));
}
SvgDanger.propTypes = {
    className: PropTypes.string,
};

function SvgDebtLoan({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m0-14.913a5.92 5.92 0 0 0-5.912 5.914 5.92 5.92 0 0 0 5.912 5.914A5.92 5.92 0 0 0 18.414 12 5.92 5.92 0 0 0 12.5 6.084zm0 11.05A5.143 5.143 0 0 1 7.363 12 5.144 5.144 0 0 1 12.5 6.863 5.143 5.143 0 0 1 17.637 12a5.143 5.143 0 0 1-5.137 5.134zm.647-6.59v3.66h.693v-1.03c0-.034-.012-.165-.036-.368h.036a.84.84 0 0 0 .703.325.87.87 0 0 0 .517-.155 1 1 0 0 0 .341-.457c.084-.226.124-.466.12-.707a1.62 1.62 0 0 0-.255-.966.83.83 0 0 0-.706-.348.81.81 0 0 0-.72.378h-.032l-.098-.33zm-3.019-.782v3.321h.705v-1.274h.375l.794 1.275h.782c-.143-.203-.444-.65-.978-1.447.183-.075.34-.199.457-.358a.9.9 0 0 0 .162-.521.88.88 0 0 0-.325-.749 1.67 1.67 0 0 0-1.003-.247zm4.22 2.807a.44.44 0 0 1-.389-.177 1.07 1.07 0 0 1-.121-.587v-.077a.9.9 0 0 1 .123-.521.44.44 0 0 1 .374-.156.4.4 0 0 1 .36.189c.088.174.127.367.115.562 0 .505-.157.765-.466.765zm-3.288-1.33h-.227v-.9h.214a1 1 0 0 1 .503.102.37.37 0 0 1 .162.336.4.4 0 0 1-.16.35.87.87 0 0 1-.495.109z" })] }));
}
SvgDebtLoan.propTypes = {
    className: PropTypes.string,
};

function SvgDebt({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.183 10.653V7.796h.84L7.8 10.652h1.752q-.51-.733-2.19-3.243.663-.29 1.024-.8.36-.513.361-1.17 0-1.125-.728-1.675-.728-.555-2.245-.555H3.605v7.443zm.51-4.14h-.51V4.502h.479q.764 0 1.125.224.367.224.367.754 0 .534-.357.784-.356.25-1.104.25M12.272 10.026q.57.729 1.574.728a1.95 1.95 0 0 0 1.16-.35q.495-.352.76-1.024.269-.672.269-1.584 0-1.384-.57-2.164-.57-.779-1.579-.779-1.068 0-1.614.845h-.07l-.22-.738H10.72v8.198h1.553V10.85q0-.112-.081-.825zm.275-3.574q.265-.357.84-.356.55 0 .805.422.26.418.26 1.258 0 1.72-1.044 1.72-.59 0-.866-.396-.27-.398-.27-1.314v-.168q.01-.815.275-1.166", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.965 15.637h-1.74v3.51h1.74l6.74 1.233a1 1 0 0 0 .484-.03l5.005-1.599a.2.2 0 0 0 .126-.261l-.335-.885a1 1 0 0 0-1.165-.619l-3.57.843a1 1 0 0 1-.586-.039l-2.503-.956a.2.2 0 0 1-.129-.187v-.22c0-.11.09-.2.2-.2h1.824a1 1 0 0 0 1-1v-.603a.2.2 0 0 0-.2-.2h-4.198a1 1 0 0 0-.442.103zM3.605 15.672h1.77v3.505h-1.77z" })] }));
}
SvgDebt.propTypes = {
    className: PropTypes.string,
};

function SvgDiseaseInput({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.684 21v-5.684H3V8.685h5.684V3h6.632v5.685H21v6.631h-5.684V21z" })] }));
}
SvgDiseaseInput.propTypes = {
    className: PropTypes.string,
};

function SvgDisease({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.572 13.873v-.828a5.4 5.4 0 0 1-4.908-5.373v-.704A1.15 1.15 0 0 1 3 5.924v-.771a1.153 1.153 0 0 1 2.306 0v.77a1.15 1.15 0 0 1-.62 1.023v.69a4.417 4.417 0 0 0 4.409 4.41 4.413 4.413 0 0 0 4.407-4.41V6.98a1.15 1.15 0 0 1-.687-1.052v-.77a1.153 1.153 0 0 1 2.305 0v.77a1.16 1.16 0 0 1-.67 1.048v.702a5.4 5.4 0 0 1-4.834 5.365v.82a4.504 4.504 0 0 0 4.498 4.498 4.504 4.504 0 0 0 4.499-4.499v-.56a1.893 1.893 0 0 1-1.246-2.546 1.887 1.887 0 1 1 2.212 2.552v.57a5.51 5.51 0 0 1-5.502 5.504 5.51 5.51 0 0 1-5.505-5.508m-.133-3.653V8.392H6.611a.578.578 0 0 1 0-1.154H8.44V5.411a.578.578 0 0 1 1.154 0v1.827h1.828a.578.578 0 0 1 0 1.154H9.593v1.828a.578.578 0 0 1-1.154 0" })] }));
}
SvgDisease.propTypes = {
    className: PropTypes.string,
};

function SvgDo({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.13 17.018H12.97v-.47l.775-.814q.345-.366.45-.506.105-.143.152-.263a.7.7 0 0 0 .047-.25q0-.192-.104-.287a.38.38 0 0 0-.272-.094.76.76 0 0 0-.349.085q-.168.085-.352.243l-.355-.436a2.3 2.3 0 0 1 .378-.285q.15-.082.327-.127t.397-.046q.29 0 .511.11a.83.83 0 0 1 .345.307.84.84 0 0 1 .122.451q0 .222-.076.417-.075.192-.232.396-.156.204-.553.581l-.398.388v.03h1.346z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "m11.936 3.012-.436.321-.436-.321a.542.542 0 0 1 .872 0m-.436 1.25A72 72 0 0 0 8.983 8.07c-.74 1.207-1.472 2.505-2.018 3.698-.555 1.214-.882 2.244-.882 2.94a5.417 5.417 0 1 0 10.834 0c0-.696-.327-1.726-.882-2.94-.546-1.193-1.278-2.491-2.018-3.698A69 69 0 0 0 11.5 4.262m0-.929-.436-.321-.005.007-.013.018-.051.07q-.068.091-.191.265a70.525 70.525 0 0 0-2.745 4.132c-.75 1.225-1.508 2.565-2.079 3.813C5.418 12.545 5 13.76 5 14.708a6.5 6.5 0 1 0 13 0c0-.949-.419-2.163-.98-3.39-.571-1.249-1.329-2.589-2.079-3.814a71 71 0 0 0-2.936-4.398l-.05-.07-.014-.017-.005-.007z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.093 15.393a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25m0 1.084a2.708 2.708 0 1 0 0-5.417 2.708 2.708 0 0 0 0 5.417", clipRule: "evenodd" })] }));
}
SvgDo.propTypes = {
    className: PropTypes.string,
};

function SvgElectricity({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12 21m-1.636-5.091v2.384h3.576v-2.384zm1.74-7.94A3.7 3.7 0 0 0 9.417 9.03a3.74 3.74 0 0 0-1.058 2.674c.067.956.4 1.874.96 2.65q.415.624.937 1.16l.005.005 3.637.032q.486-.586.877-1.242a5.2 5.2 0 0 0 .88-2.607 4.06 4.06 0 0 0-.694-2.308 3.26 3.26 0 0 0-2.094-1.358 4 4 0 0 0-.73-.07zm6.55 1.319-1.557 1.05.538.795 1.552-1.049-.536-.796zM5.542 9.14l-.406.87 1.7.793.406-.87zm10.767-2.456-1.129 1.5.767.577 1.13-1.499zM8.191 6.2l-.776.565 1.103 1.52.776-.565zm3.646-1.214-.098 1.875.958.05.099-1.874zm-.044 10.5.123-2.203-1.061-.358 1.373-2.776-.223 2.203.776.549z" })] }));
}
SvgElectricity.propTypes = {
    className: PropTypes.string,
};

function SvgEmptyStock({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m12.298 10.205.01.036 7.67.022 1.816 3.066-7.463 1.397-2.003-4.412 1.326 5.206 6.325-1.275v7.015l-7.68 1.701zM4.02 21.265v-7.016l6.323 1.275 1.3-5.027-1.977 4.229-7.46-1.395 1.817-3.066h7.72v.022l-.04.089v12.591z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M14.116 7.95a3.486 3.486 0 1 1-4.93-4.929 3.486 3.486 0 0 1 4.93 4.93m-4.598-.938 3.66-3.66a2.623 2.623 0 0 0-3.66 3.66m.607.607a2.623 2.623 0 0 0 3.66-3.66z", clipRule: "evenodd" })] }));
}
SvgEmptyStock.propTypes = {
    className: PropTypes.string,
};

function SvgEsp({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("rect", { width: 18, height: 12.857, x: 3, y: 6, fill: "#fff", rx: 2 }), jsxRuntime.jsx("mask", { id: "esp_svg__a", width: 18, height: 13, x: 3, y: 6, maskUnits: "userSpaceOnUse", style: {
                    maskType: "luminance",
                }, children: jsxRuntime.jsx("rect", { width: 18, height: 12.857, x: 3, y: 6, fill: "#fff", rx: 2 }) }), jsxRuntime.jsxs("g", { mask: "url(#esp_svg__a)", children: [jsxRuntime.jsx("path", { fill: "#DD172C", fillRule: "evenodd", d: "M3 9.429h18V6H3zM3 18.857h18V15.43H3z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "#FFD133", fillRule: "evenodd", d: "M3 15.429h18v-6H3z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "#FFEDB1", fillRule: "evenodd", d: "M7.714 12h.857v.429h-.857z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { stroke: "#A41517", strokeWidth: 0.667, d: "M7.035 12.266a.333.333 0 0 1 .332-.361h.694c.195 0 .349.166.332.36l-.083.996a.598.598 0 0 1-1.192 0z" }), jsxRuntime.jsx("path", { fill: "#A41517", fillRule: "evenodd", d: "M6.857 12.429h1.714v.428h-.428l-.429.857-.428-.857h-.429z", clipRule: "evenodd" }), jsxRuntime.jsx("rect", { width: 0.857, height: 3, x: 5.572, y: 11.143, fill: "#A41517", rx: 0.429 }), jsxRuntime.jsx("rect", { width: 0.857, height: 3, x: 9, y: 11.143, fill: "#A41517", rx: 0.429 }), jsxRuntime.jsx("path", { fill: "#A41517", d: "M6.857 10.971c0-.378.307-.685.686-.685h.343c.378 0 .685.307.685.685a.17.17 0 0 1-.171.172H7.029a.17.17 0 0 1-.172-.172" })] })] }));
}
SvgEsp.propTypes = {
    className: PropTypes.string,
};

function SvgExpenseMenu({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m17.52 11.102-1.415.407-.16-.558a.826.826 0 0 0-.446-1.55l-.378-1.315-.754-2.62c-.338-1.173-1.397-1.994-2.577-1.995q-.061 0-.125.002c-1.142.05-2.13.85-2.458 1.99L8.074 9.4 8.027 9.4a.827.827 0 0 0-.398 1.552l-.16.558-1.414-.407.867-3.016.871-3.03c.503-1.75 2.034-2.976 3.808-3.052q.096-.005.191-.004c1.83.002 3.471 1.26 3.989 3.06z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M20.567 20.638 19.42 9.24c-.065-.653-.722-1.154-1.51-1.154H5.661c-.79 0-1.446.501-1.512 1.154L3.004 20.638C2.93 21.372 3.628 22 4.516 22h14.538c.888 0 1.586-.628 1.512-1.362zm-12.54-9.585a.827.827 0 1 1 0-1.654.827.827 0 0 1-.001 1.654m7.519 0a.827.827 0 1 1 0-1.653.827.827 0 0 1 0 1.653" })] }));
}
SvgExpenseMenu.propTypes = {
    className: PropTypes.string,
};

function SvgExpense({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m5.728-5.024a.5.5 0 0 0 .16-.088.4.4 0 0 0 .092-.149.36.36 0 0 0 .016-.17l-.035-.653-.002-.05q-.037-.629-.067-1.255a.45.45 0 0 0-.141-.333.5.5 0 0 0-.112-.073.4.4 0 0 0-.187-.045.5.5 0 0 0-.174.045.4.4 0 0 0-.139.101l-.585.515-5.17-4.568a.7.7 0 0 0-.464-.17.7.7 0 0 0-.464.17l-2.061 1.821L6.74 9.17a.7.7 0 0 0-.213-.126.73.73 0 0 0-.502 0 .7.7 0 0 0-.212.126l-.12.106a.6.6 0 0 0-.143.188.52.52 0 0 0 0 .443.6.6 0 0 0 .142.188l2.743 2.421q.092.082.212.126a.73.73 0 0 0 .715-.126l2.058-1.819 4.583 4.054q-.201.175-.398.352l-.19.17a.35.35 0 0 0-.143.19.3.3 0 0 0 .023.23q.03.059.083.106a.53.53 0 0 0 .35.106l1.257.052 1.015.042h.043a.5.5 0 0 0 .185-.023", clipRule: "evenodd" })] }));
}
SvgExpense.propTypes = {
    className: PropTypes.string,
};

function SvgFarmStep({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.046 18.043H3V3.75h12.036v4.44H9.295a1.26 1.26 0 0 0-1.173.827H5.003v.5h3.043v2.508h-3.04v.502h3.04v2.509h-3.04v.501h3.04zM5.006 6.007v.502h8.36v-.502z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M19.908 9.066h-9.803a1.097 1.097 0 0 0-1.086 1.1v8.606a1.1 1.1 0 0 0 1.089 1.099h9.803A1.1 1.1 0 0 0 21 18.77v-8.606a1.097 1.097 0 0 0-1.092-1.1m-5.156 8.682a.82.82 0 0 1-.815.823h-2.559a.82.82 0 0 1-.815-.823v-2.135a.82.82 0 0 1 .815-.823h2.562a.82.82 0 0 1 .815.823zm.03-4.254a.82.82 0 0 1-.815.824h-2.562a.82.82 0 0 1-.815-.823v-2.136a.82.82 0 0 1 .815-.823h2.562a.82.82 0 0 1 .815.823zm4.888 4.254a.82.82 0 0 1-.816.823h-2.561a.82.82 0 0 1-.816-.823v-2.135a.82.82 0 0 1 .816-.823h2.561a.82.82 0 0 1 .816.823zm.026-4.254a.82.82 0 0 1-.816.824H16.32a.82.82 0 0 1-.816-.823v-2.136a.82.82 0 0 1 .816-.823h2.561a.82.82 0 0 1 .816.823z" })] }));
}
SvgFarmStep.propTypes = {
    className: PropTypes.string,
};

function SvgFarmStory({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.832 13.653a3.02 3.02 0 0 1-3.024-2.884h6.048a3.023 3.023 0 0 1-3.024 2.883M14.267 19.845h-2.164V15.22q.312.252.586.545a5.94 5.94 0 0 1 1.578 4.079m-8.579 0H3.5a5.94 5.94 0 0 1 1.577-4.079q.284-.304.61-.564v4.642zm4.877-3.076h-3.34v-2.415a5.1 5.1 0 0 1 3.34.008zM9.018 6.179l4.961 4.206H3.884zM6.071 19.845v-2.691h5.648v2.691zm4.878-3.076v-2.311q.399.152.77.362v1.95zm-4.878 0v-1.964q.371-.207.769-.357v2.321zM16.417 8.362q-.168 0-.331-.039l.036.038-2.076-.013.988-1.066a1.4 1.4 0 0 1-.042-.345v-1.76a1.426 1.426 0 0 1 1.426-1.427h3.49a1.426 1.426 0 0 1 1.426 1.426v1.76a1.426 1.426 0 0 1-1.426 1.427zM17.893 15.735a2.007 2.007 0 0 1-2.007-1.914h4.015a2.007 2.007 0 0 1-2.008 1.914M21.5 19.845h-1.435v-3.066q.207.166.389.361a3.94 3.94 0 0 1 1.046 2.71zm-5.694 0h-1.451a3.95 3.95 0 0 1 1.046-2.71q.188-.203.405-.374v3.083m3.238-2.043h-2.217V16.2a3.38 3.38 0 0 1 2.217.006zM18.015 10.774l3.293 2.792H14.61zM16.06 19.845v-1.787h3.75v1.787zm3.239-2.042V16.27q.264.102.51.241v1.293zm-3.238 0v-1.302q.247-.139.51-.238v1.54z" })] }));
}
SvgFarmStory.propTypes = {
    className: PropTypes.string,
};

function SvgFarm({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M13.032 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 4.032 12 8.94 8.94 0 0 1 6.67 5.638 8.94 8.94 0 0 1 13.032 3a8.94 8.94 0 0 1 6.361 2.638A8.94 8.94 0 0 1 22.033 12a8.94 8.94 0 0 1-2.639 6.362A8.94 8.94 0 0 1 13.032 21m.028-5.467a.78.78 0 0 0 .703.447h2.797a.776.776 0 0 0 .776-.775V12.41a.78.78 0 0 0-.45-.705.78.78 0 0 0 .45-.704V8.208a.776.776 0 0 0-.776-.776h-2.797a.78.78 0 0 0-.704.451.77.77 0 0 0-.704-.45H9.562a.776.776 0 0 0-.776.775v2.794a.77.77 0 0 0 .451.704.78.78 0 0 0-.45.705v2.794a.776.776 0 0 0 .775.775h2.793a.78.78 0 0 0 .703-.447zm3.07.018h-1.939a.777.777 0 0 1-.776-.776v-1.94a.775.775 0 0 1 .776-.776h1.94a.776.776 0 0 1 .776.776v1.94a.776.776 0 0 1-.778.773zm-4.203 0h-1.94a.776.776 0 0 1-.776-.776v-1.94a.776.776 0 0 1 .776-.776h1.94a.777.777 0 0 1 .776.776v1.94a.775.775 0 0 1-.778.773zm4.204-4.204h-1.94a.777.777 0 0 1-.776-.776v-1.94a.775.775 0 0 1 .776-.775h1.94a.776.776 0 0 1 .776.776v1.94a.777.777 0 0 1-.778.772zm-4.206 0h-1.94a.776.776 0 0 1-.775-.776v-1.94a.776.776 0 0 1 .776-.775h1.94a.777.777 0 0 1 .775.776v1.94a.777.777 0 0 1-.778.772z" })] }));
}
SvgFarm.propTypes = {
    className: PropTypes.string,
};

function SvgFeedCumulative({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m3.437 19.673-.17-.17a.905.905 0 0 1 0-1.284l3.797-3.794a.9.9 0 0 1 .987-.197q.167.07.296.197l2.848 2.85 6.345-6.35a34 34 0 0 1-.551-.55l-.263-.266a.546.546 0 0 1-.166-.658.6.6 0 0 1 .115-.17.68.68 0 0 1 .485-.167q1.573-.074 3.146-.148h.06a.63.63 0 0 1 .477.174.64.64 0 0 1 .152.499l-.048 1.024q-.051 1.025-.096 2.044a.75.75 0 0 1-.196.521.7.7 0 0 1-.155.115.54.54 0 0 1-.26.07.61.61 0 0 1-.432-.23l-.81-.805-7.158 7.158a.91.91 0 0 1-1.286 0l-2.849-2.849-2.983 2.984a.9.9 0 0 1-.64.266.9.9 0 0 1-.645-.265m4.42-6.396c-.293 0-.581-.07-.842-.205a2.2 2.2 0 0 1-.69-.559 2.7 2.7 0 0 1-.464-.826 3 3 0 0 1-.13-1.503l.388-1.867h8.113l.29 1.97q.029.195.034.391c0 .343-.058.685-.172 1.009a2.7 2.7 0 0 1-.466.826c-.19.231-.424.422-.69.56-.26.133-.547.203-.84.204zm1.818-1.803a.21.21 0 0 0-.02.22l.058.116-.058.116a.21.21 0 0 0 .187.303.2.2 0 0 0 .04-.005l.51-.101q.266-.008.512-.104l-.345-.563a.5.5 0 0 1-.182.04l-.496-.1a.2.2 0 0 0-.133.018.2.2 0 0 0-.073.06m1.06-.132.359.586a1.47 1.47 0 0 0 .7-.953h-.906a.52.52 0 0 1-.153.366m-.172-.849c.126.051.227.15.28.275h.982v-.018c0-.033.005-.06.005-.088a1.46 1.46 0 0 0-.892-1.347zM8.483 9.41a1.046 1.046 0 0 0 1.046 1.045h.825l.384-1.203a1.4 1.4 0 0 0-.373-.051H8.692a.21.21 0 0 0-.209.206zm.418.207a.105.105 0 1 1 .03.074.1.1 0 0 1-.03-.077zm-2.839-1.57-.58-1.323h9.369l-.588 1.322zm7.451-1.605H5.9l1.42-.495h.034a1.17 1.17 0 0 1 1.113-.951q.119 0 .234.026a1.12 1.12 0 0 1 .93-.521c.264 0 .518.098.714.275.131-.056.272-.085.414-.085.283.002.554.113.756.312a1.091 1.091 0 0 1 .882.304c.21.205.344.477.379.77l1.025.363h-.287z" })] }));
}
SvgFeedCumulative.propTypes = {
    className: PropTypes.string,
};

function SvgFeed({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M13.731 12.461a.64.64 0 0 1-.184.443l.432.71a1.78 1.78 0 0 0 .847-1.153zM13.675 12.208a.64.64 0 0 0-.34-.333l.453-1.424a1.77 1.77 0 0 1 1.078 1.63l-.003.06-.003.067zM13.334 13.042a.6.6 0 0 1-.22.047l-.599-.12a.254.254 0 0 0-.275.362l.07.14-.07.139a.252.252 0 0 0 .275.36l.617-.123a1.8 1.8 0 0 0 .62-.125z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M13.097 10.31q.23 0 .452.06l-.463 1.459h-1a1.266 1.266 0 0 1-1.263-1.264.25.25 0 0 1 .252-.255zm-1.713.608q.031.021.07.022v.002a.13.13 0 0 0 .118-.08.1.1 0 0 0 .009-.049.126.126 0 1 0-.197.105", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.5 21.019a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12.019a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3.019a8.94 8.94 0 0 1 6.362 2.638 8.94 8.94 0 0 1 2.638 6.362 8.94 8.94 0 0 1-2.638 6.362 8.94 8.94 0 0 1-6.362 2.638m2.373-4.19a1.04 1.04 0 0 0 .918.604 1.11 1.11 0 0 0 1.048-1.164 1.16 1.16 0 0 0-.658-1.086q.188-1.58.2-3.171a27 27 0 0 0-.195-3.056 1.17 1.17 0 0 0 .653-1.08 1.113 1.113 0 0 0-1.048-1.164 1.04 1.04 0 0 0-.938.646 11.5 11.5 0 0 0-2.285-.26c-.717.006-1.43.088-2.13.243a1.04 1.04 0 0 0-.931-.63A1.11 1.11 0 0 0 8.46 7.877a1.18 1.18 0 0 0 .627 1.068 23.5 23.5 0 0 0-.225 3.068q.014 1.597.233 3.18a1.17 1.17 0 0 0-.635 1.072 1.11 1.11 0 0 0 1.047 1.164 1.04 1.04 0 0 0 .908-.584c.703.183 1.425.28 2.152.29a10 10 0 0 0 2.305-.311z", clipRule: "evenodd" })] }));
}
SvgFeed.propTypes = {
    className: PropTypes.string,
};

function SvgFilter({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M17.954 9.855c.243-.527.38-1.113.38-1.731s-.137-1.206-.38-1.732h1.322c.456.01.89.197 1.21.52a1.724 1.724 0 0 1 0 2.422c-.32.324-.754.51-1.21.52zM10.468 9.855H4.724a1.75 1.75 0 0 1-1.21-.52 1.724 1.724 0 0 1 0-2.422c.32-.324.753-.51 1.21-.52h5.744a4.1 4.1 0 0 0-.38 1.73c0 .62.136 1.206.38 1.732M17.213 8.124a3.002 3.002 0 1 1-6.004 0 3.002 3.002 0 0 1 6.004 0M6.046 14.145a4.1 4.1 0 0 0-.38 1.731c0 .619.136 1.206.38 1.732H4.724a1.75 1.75 0 0 1-1.21-.52 1.724 1.724 0 0 1 0-2.422c.319-.324.753-.51 1.21-.52zM13.531 14.145h5.745c.456.01.89.196 1.21.52a1.724 1.724 0 0 1 0 2.422c-.32.324-.754.51-1.21.52H13.53c.244-.526.38-1.112.38-1.73 0-.62-.136-1.206-.38-1.732M6.787 15.876a3.002 3.002 0 1 1 6.003 0 3.002 3.002 0 0 1-6.003 0" })] }));
}
SvgFilter.propTypes = {
    className: PropTypes.string,
};

function SvgFinanceDue({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M14.268 8.094a.73.73 0 0 1 .331-.518q.277-.182.672-.118.39.063.596.325a.74.74 0 0 1 .15.597.72.72 0 0 1-.332.51q-.275.182-.666.118-.396-.063-.602-.32a.73.73 0 0 1-.15-.594M14.754 6.502l.15-1.33c.471.298.893.668 1.253 1.095l-.097.45a.347.347 0 0 1-.392.266l-.628-.103a.347.347 0 0 1-.287-.377z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M19.684 19.492H4.187l1.602-2.283a3.4 3.4 0 0 0 .618-1.954V9.832c0-1.525.618-2.907 1.619-3.907a5.5 5.5 0 0 1 3.907-1.62 5.5 5.5 0 0 1 2.468.579l-.176 1.556a.87.87 0 0 0 .174.632 1.282 1.282 0 0 0-.659.932c-.06.375.028.724.26 1.012.22.277.534.453.933.516q.596.097 1.045-.2c.309-.205.504-.505.566-.871a1.27 1.27 0 0 0-.328-1.094.86.86 0 0 0 .362-.534c.558.864.883 1.892.883 2.997v5.423c0 .7.216 1.381.618 1.953l1.604 2.286" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.79 6.498h-.025a.83.83 0 0 1-.83-.83V3.9a.83.83 0 0 1 .83-.83h.024a.83.83 0 0 1 .83.83v1.768a.83.83 0 0 1-.83.83M11.801 21.21h-.05a1.69 1.69 0 0 1-1.69-1.691v-.05c0-.933.757-1.69 1.69-1.69h.05c.934 0 1.69.757 1.69 1.69v.05a1.69 1.69 0 0 1-1.69 1.69M15.867 7.781a.74.74 0 0 1 .15.597.72.72 0 0 1-.332.511q-.275.182-.666.118-.396-.064-.602-.321a.73.73 0 0 1-.15-.594.73.73 0 0 1 .332-.518q.277-.181.672-.117.392.065.596.324M16.689 3.774l-.53 2.493-.097.45a.347.347 0 0 1-.392.266l-.628-.103a.345.345 0 0 1-.286-.378l.15-1.33.192-1.658a.34.34 0 0 1 .395-.298l.917.15c.191.03.32.215.279.408" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.867 7.781q-.205-.26-.596-.324-.395-.064-.672.117a.74.74 0 0 0-.331.518.73.73 0 0 0 .15.594q.205.255.601.32.39.065.666-.117a.74.74 0 0 0 .331-.51.74.74 0 0 0-.15-.598m.542-4.418-.916-.15a.34.34 0 0 0-.396.3l-.19 1.657-.152 1.33c-.02.181.105.348.287.378l.628.103c.181.028.353-.09.392-.267l.097-.45.53-2.492a.343.343 0 0 0-.28-.409" })] }));
}
SvgFinanceDue.propTypes = {
    className: PropTypes.string,
};

function SvgFinance({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m6.122 20.548-.297-3.275a.497.497 0 0 1 .446-.542l3.276-.298a.497.497 0 1 1 .091.991l-2.166.196a7.187 7.187 0 0 0 11.574-7.226.496.496 0 1 1 .966-.236 8.183 8.183 0 0 1-8.353 10.107 8.13 8.13 0 0 1-4.727-1.802l.178 1.994a.5.5 0 0 1-.49.542.497.497 0 0 1-.498-.45m5.774-5.252v-4.671h.72l.124.42h.041a1.02 1.02 0 0 1 .92-.481 1.05 1.05 0 0 1 .9.446c.236.366.35.799.325 1.234.007.308-.043.614-.149.903a1.27 1.27 0 0 1-.434.584 1.1 1.1 0 0 1-.662.2 1.08 1.08 0 0 1-.898-.415h-.046q.045.407.046.471v1.309zm1.04-3.826a1.16 1.16 0 0 0-.156.67v.096c-.021.259.033.519.155.748a.55.55 0 0 0 .492.227q.595 0 .595-.981a1.4 1.4 0 0 0-.149-.719.5.5 0 0 0-.46-.239.56.56 0 0 0-.475.202zm-8.954 2.328a8.18 8.18 0 0 1 8.357-10.104c1.736.08 3.4.718 4.746 1.817l-.074-2.038a.498.498 0 0 1 .991-.037l.122 3.25v.062a.496.496 0 0 1-.479.497l-3.286.122h-.02a.497.497 0 1 1-.017-.995l2.14-.08a7.186 7.186 0 0 0-11.515 7.27.498.498 0 0 1-.965.236m6.45.075L9.42 12.242h-.48v1.628h-.9V9.626h1.237c.45-.033.899.078 1.281.318a1.12 1.12 0 0 1 .416.957 1.13 1.13 0 0 1-.206.669 1.37 1.37 0 0 1-.585.458q.96 1.43 1.25 1.849zM8.94 11.51h.29c.22.016.44-.034.63-.143a.51.51 0 0 0 .204-.446.46.46 0 0 0-.208-.43 1.26 1.26 0 0 0-.643-.128H8.94z" })] }));
}
SvgFinance.propTypes = {
    className: PropTypes.string,
};

function SvgFinancialReport2({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M14.888 8.584A2.085 2.085 0 0 1 12.805 6.5V2.005h-6.93c-.691 0-1.25.558-1.25 1.25v17.5c0 .691.563 1.25 1.25 1.25h12.259c.691 0 1.25-.558 1.25-1.25V8.584zm-3.537 2.15 2.195 2.195 2.409-2.408a.414.414 0 0 1 .587 0 .42.42 0 0 1 0 .592l-2.7 2.7a.42.42 0 0 1-.592 0l-2.196-2.196-3.558 3.558a.4.4 0 0 1-.292.12.414.414 0 0 1-.295-.708l3.854-3.854a.416.416 0 0 1 .588 0m-3.234 9.604H6.292v-3.754h1.825zm3.2 0H9.494v-4.546h1.825zm3.2 0h-1.825v-2.392h1.825zm3.2 0h-1.824v-6.659h1.824z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M14.888 7.75h4.383a1.3 1.3 0 0 0-.254-.366c-5.282-5.283-5.05-5.118-5.38-5.263v4.38c0 .69.559 1.25 1.251 1.25" })] }));
}
SvgFinancialReport2.propTypes = {
    className: PropTypes.string,
};

function SvgFinancialReport({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M14.885 8.584h4.506v12.17c0 .692-.56 1.251-1.253 1.251H5.852c-.689 0-1.252-.558-1.252-1.25v-17.5c0-.691.56-1.25 1.252-1.25h6.945V6.5c0 1.15.936 2.084 2.088 2.084m-2.249 4.234v6.105l1.156-.001v-1.719q0-.083-.06-.614h.06a1.4 1.4 0 0 0 1.172.543c.308.007.611-.083.865-.26.26-.192.457-.457.568-.761.14-.378.207-.777.198-1.18a2.7 2.7 0 0 0-.424-1.611 1.37 1.37 0 0 0-1.175-.583 1.34 1.34 0 0 0-1.203.63h-.053l-.163-.55h-.94m1.154 1.98v.121c-.027.339.044.679.204.979a.73.73 0 0 0 .642.296q.777 0 .777-1.282a1.83 1.83 0 0 0-.194-.938.65.65 0 0 0-.601-.312.73.73 0 0 0-.62.266l-.003.001a1.5 1.5 0 0 0-.205.87zm-4.39.13 1.324 2.127h1.305q-.379-.547-1.632-2.416a1.8 1.8 0 0 0 .763-.598c.18-.254.274-.558.27-.87a1.47 1.47 0 0 0-.54-1.248 2.77 2.77 0 0 0-1.672-.412H7.6v5.543h1.176v-2.128H9.4zm-.245-.955a1.45 1.45 0 0 0 .823-.186.66.66 0 0 0 .265-.583.6.6 0 0 0-.27-.561 1.65 1.65 0 0 0-.842-.167h-.356v1.496z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M14.863 7.75h4.383a1.3 1.3 0 0 0-.255-.366C13.71 2.1 13.941 2.266 13.613 2.12v4.38c0 .69.558 1.25 1.25 1.25" })] }));
}
SvgFinancialReport.propTypes = {
    className: PropTypes.string,
};

function SvgFixedAssetMenuPaddleWheel({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M19.759 13.14h-2.47c-.236 0-.427.171-.427.38v.075h-3.745a1.1 1.1 0 0 0-.166-.399l2.648-2.648.053.053a.35.35 0 0 0 .254.1.45.45 0 0 0 .316-.135l1.747-1.747c.166-.166.181-.422.033-.57l-.428-.427a.35.35 0 0 0-.254-.1.45.45 0 0 0-.316.135l-1.747 1.747c-.166.166-.181.421-.033.57l.053.053-2.648 2.647a1.1 1.1 0 0 0-.4-.165V8.964h.076c.21 0 .38-.191.38-.427v-2.47c0-.236-.171-.427-.38-.427H11.7c-.209 0-.378.191-.378.427v2.47c0 .236.17.427.378.427h.076v3.745c-.142.029-.278.085-.399.165l-2.648-2.647.053-.053c.149-.149.133-.404-.034-.57L7.001 7.857a.45.45 0 0 0-.316-.136.36.36 0 0 0-.254.1l-.428.428c-.148.148-.133.405.034.57l1.747 1.747a.45.45 0 0 0 .315.136.36.36 0 0 0 .255-.1l.053-.054 2.647 2.648q-.12.184-.165.4H7.145v-.076c0-.21-.192-.38-.427-.38h-2.47c-.236 0-.427.171-.427.38v.606c0 .209.19.378.426.378h2.47c.236 0 .428-.17.428-.378v-.076h3.744c.029.142.085.278.165.399l-2.647 2.648-.053-.053a.35.35 0 0 0-.255-.1.45.45 0 0 0-.315.135l-1.747 1.747c-.167.166-.182.422-.033.57l.427.427a.35.35 0 0 0 .255.1.45.45 0 0 0 .315-.135l1.747-1.747c.167-.166.182-.421.034-.57l-.053-.053 2.648-2.647q.183.12.399.165v3.744H11.7c-.21 0-.379.192-.379.427v2.47c0 .236.17.427.38.427h.605c.21 0 .379-.191.379-.427v-2.47c0-.235-.17-.427-.379-.427h-.076v-3.744c.143-.029.279-.085.4-.165l2.648 2.647-.054.053c-.148.149-.132.404.034.57l1.747 1.747a.45.45 0 0 0 .316.136.36.36 0 0 0 .254-.1l.427-.428c.149-.148.133-.405-.033-.57l-1.747-1.747a.45.45 0 0 0-.316-.136.36.36 0 0 0-.254.1l-.053.054-2.648-2.648q.121-.184.166-.4h3.745v.077c0 .209.19.378.426.378h2.47c.236 0 .428-.17.428-.378v-.606c0-.209-.192-.38-.427-.38" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.399 17.459v-2.174l-2.174 2.174zM12.61 15.286v2.173h2.173zM7.517 16.809a.83.83 0 0 1 .584-.247q.134 0 .26.046l2.18-2.18H7.46a.81.81 0 0 1-.738.454H4.249c-.444 0-.805-.34-.805-.757v-.303h-.686a.755.755 0 0 0-.753.753 2.87 2.87 0 0 0 .844 2.038 2.88 2.88 0 0 0 2.039.845h1.98zM21.251 13.823h-.686v.303a.74.74 0 0 1-.253.55.83.83 0 0 1-.553.207h-2.47a.81.81 0 0 1-.738-.454h-3.083l2.18 2.18a.8.8 0 0 1 .26-.046c.22.002.43.09.584.247l.65.65h1.98a2.87 2.87 0 0 0 2.038-.845 2.88 2.88 0 0 0 .844-2.039.755.755 0 0 0-.753-.753M14.276 13.217v-.81l-.809.81zM11.398 12.36V9.276a.81.81 0 0 1-.455-.738V6.068c0-.444.34-.806.758-.806h.606c.418 0 .757.362.757.806v2.47a.81.81 0 0 1-.454.738v3.083l1.666-1.666V3.206a1.2 1.2 0 0 0-1.2-1.201H10.93a1.2 1.2 0 0 0-1.2 1.2v7.488zM9.731 13.217h.81l-.81-.81z" })] }));
}
SvgFixedAssetMenuPaddleWheel.propTypes = {
    className: PropTypes.string,
};

function SvgFood({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.7 20.4a8.64 8.64 0 0 1-6.15-2.55A8.64 8.64 0 0 1 3 11.7a8.64 8.64 0 0 1 2.55-6.15A8.64 8.64 0 0 1 11.7 3a8.64 8.64 0 0 1 6.15 2.55 8.64 8.64 0 0 1 2.55 6.15 8.64 8.64 0 0 1-2.55 6.15 8.64 8.64 0 0 1-6.15 2.55m-6.421-8.213a2 2 0 0 0-.026.308 5.78 5.78 0 0 0 1.896 3.726 6.58 6.58 0 0 0 4.575 2.037 6.57 6.57 0 0 0 4.575-2.037 5.78 5.78 0 0 0 1.896-3.726 2 2 0 0 0-.026-.309c-.128.542-.855 1.043-2.047 1.414-1.431.404-2.914.599-4.401.578a15.4 15.4 0 0 1-4.402-.578c-1.187-.37-1.914-.873-2.042-1.413zm6.427-1.609c-1.161-.01-2.32.097-3.46.319a5.2 5.2 0 0 0-1.5.512c-.28.167-.422.345-.422.525q.003.056.023.107c.218.702 2.572 1.251 5.359 1.251s5.14-.55 5.36-1.25a.4.4 0 0 0 .021-.108q-.001-.276-.421-.525a5.1 5.1 0 0 0-1.5-.512c-1.14-.222-2.3-.328-3.462-.318zm1.474-4.014c-.174.295-.3.614-.375.948q-.004.196.058.382.068.197.056.404-.046.211-.14.406c-.107.189-.159.404-.15.62.072.26.202.5.378.703v-.006a1.25 1.25 0 0 1-.113-.73c.03-.076.11-.221.194-.376q.171-.298.3-.617c.042-.15-.064-.314-.167-.472a1 1 0 0 1-.168-.335 2.7 2.7 0 0 1 .124-.927zm-2.291-2.06c-.278.47-.48.979-.6 1.511q-.015.355.045.706.066.38.042.766-.06.296-.192.57c-.144.256-.206.55-.177.842.115.413.322.795.605 1.118v-.006a2.03 2.03 0 0 1-.182-1.167c.048-.116.16-.319.28-.532q.243-.396.415-.825a1.7 1.7 0 0 0-.236-.963 3 3 0 0 1-.2-.546c-.019-.5.049-.998.2-1.474" })] }));
}
SvgFood.propTypes = {
    className: PropTypes.string,
};

function SvgFry({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12 21a8.94 8.94 0 0 1-6.362-2.637A8.94 8.94 0 0 1 3 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21 12a8.94 8.94 0 0 1-2.638 6.363A8.94 8.94 0 0 1 12 21m1.845-5.633a.29.29 0 0 0-.26.42l.077.16-.078.16a.29.29 0 0 0 .26.424h.058l.706-.145c.244-.005.484-.053.71-.144l-.477-.78a.7.7 0 0 1-.252.055l-.686-.139a.3.3 0 0 0-.06-.008zm1.45-.578a.74.74 0 0 1-.21.509l.496.813a2.03 2.03 0 0 0 .971-1.319zm.068-2.306-.519 1.635a.74.74 0 0 1 .388.38h1.358v-.012c0-.05.007-.088.007-.133a2.03 2.03 0 0 0-1.242-1.87zm-3.115-.16a.29.29 0 0 0-.29.29 1.45 1.45 0 0 0 1.45 1.45h1.148l.533-1.67a2 2 0 0 0-.519-.07zm-3.124-2.266a.3.3 0 0 0-.233.113.29.29 0 0 0-.028.306l.078.162-.078.16a.293.293 0 0 0 .131.393.3.3 0 0 0 .187.023l.708-.143c.243-.003.484-.052.71-.143l-.477-.782a.7.7 0 0 1-.253.056l-.688-.138a.3.3 0 0 0-.059-.003zm1.45-.578a.74.74 0 0 1-.21.508l.496.815a2.04 2.04 0 0 0 .972-1.323zm.07-2.307-.52 1.634c.172.074.31.21.387.382h1.36a2.032 2.032 0 0 0-1.23-2.016zm-3.115-.16a.29.29 0 0 0-.29.29 1.45 1.45 0 0 0 1.449 1.451h1.147l.533-1.671a2 2 0 0 0-.519-.07zm5.155 6.034a.145.145 0 0 1-.101-.247.15.15 0 0 1 .101-.044.146.146 0 0 1 .146.146.14.14 0 0 1-.042.106.15.15 0 0 1-.106.043zm-4.719-5.31a.145.145 0 1 1 .134-.201q.01.026.01.055a.145.145 0 0 1-.144.15z" })] }));
}
SvgFry.propTypes = {
    className: PropTypes.string,
};

function SvgFuel({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12 21m-5.12-4.806v1.551h10.086v-1.551zm5.31-6.87c-.053.39-.05.785.008 1.174.12.892.502 1.73 1.097 2.405a1 1 0 0 1 .26 1.077 2.1 2.1 0 0 1-1.82 1.009q.104.006.24.007c.675 0 1.342-.15 1.952-.44a2.5 2.5 0 0 0 1.22-1.127 1.57 1.57 0 0 0-.389-1.755 7.23 7.23 0 0 1-1.738-3.816 6.8 6.8 0 0 1-.014-1.862 18.7 18.7 0 0 0-2.683 2.662 8 8 0 0 0-1.434 2.466 2.77 2.77 0 0 0 .213 2.452c.26.402.615.734 1.032.967a1.8 1.8 0 0 1-.401-.443 1.74 1.74 0 0 1-.135-1.545 5.1 5.1 0 0 1 .903-1.552 12 12 0 0 1 1.685-1.675zm-.604 2.836c-.02.016-1.84 1.451-1.23 2.39a1.04 1.04 0 0 0 .905.447 1.12 1.12 0 0 0 1-.494.5.5 0 0 0-.124-.553 2.32 2.32 0 0 1-.551-1.79" })] }));
}
SvgFuel.propTypes = {
    className: PropTypes.string,
};

function SvgHarvest({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 2.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 11.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 20.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 11.5 21M8.707 9.483a.775.775 0 0 0-.776.776v5.252a.776.776 0 0 0 .776.776h5.968a.776.776 0 0 0 .776-.776v-5.252a.777.777 0 0 0-.776-.776zm1.286-2.624a2.02 2.02 0 0 0-1.28.492c.006 0 .76.465.89.894q.146.456.387.872h3.298q.204-.429.363-.876c.155-.44.961-.893.969-.896a2.4 2.4 0 0 0-1.332-.494 4.4 4.4 0 0 0-1.648.494 4.1 4.1 0 0 0-1.647-.49zm1.255 7.642a.23.23 0 0 1-.186-.093.24.24 0 0 1-.024-.247l.065-.13-.066-.131a.237.237 0 0 1 .21-.34q.024 0 .047.006l.558.112a.6.6 0 0 0 .205-.045l.388.631a1.7 1.7 0 0 1-.574.12l-.573.113h-.05zm1.407-.337-.403-.66a.6.6 0 0 0 .17-.413h1.02a1.65 1.65 0 0 1-.787 1.073m.82-1.306h-1.1a.6.6 0 0 0-.316-.31l.421-1.319a1.64 1.64 0 0 1 1.004 1.515 1 1 0 0 1-.006.083v.035zm-1.65-.353h-.932A1.176 1.176 0 0 1 9.72 11.33a.234.234 0 0 1 .232-.233h1.88q.214 0 .42.056l-.43 1.354zm-1.516-1.061a.12.12 0 0 0-.11.073.118.118 0 0 0 .154.153.11.11 0 0 0 .065-.063.1.1 0 0 0 .008-.044.12.12 0 0 0-.117-.122z" })] }));
}
SvgHarvest.propTypes = {
    className: PropTypes.string,
};

function SvgHeavySnow({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.085 12.462a.523.523 0 0 0 .906-.523l-2.052-3.554h4.103a.523.523 0 1 0 0-1.046H10.94l2.052-3.554a.523.523 0 0 0-.906-.523l-2.052 3.553L7.98 3.262a.523.523 0 1 0-.906.523l2.052 3.553H5.023a.523.523 0 1 0 0 1.047h4.104l-2.052 3.554a.523.523 0 1 0 .906.523l2.052-3.554zM15.109 11.431a.63.63 0 0 1 .187-.851.584.584 0 0 1 .822.19l2.41 3.95a.63.63 0 0 1-.188.852.584.584 0 0 1-.823-.191zM13.55 14.998a.599.599 0 1 1 1.026-.617l2.968 4.93a.598.598 0 1 1-1.026.617zM9.948 13.876a.6.6 0 0 0-.218.818l1.716 2.962a.599.599 0 0 0 1.036-.6l-1.716-2.962a.6.6 0 0 0-.818-.218" })] }));
}
SvgHeavySnow.propTypes = {
    className: PropTypes.string,
};

function SvgHelp({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.531 11.234a3.07 3.07 0 0 0 .938-2.25q0-1.64-1.172-2.812T12.484 5 9.672 6.172 8.5 8.984h1.969q0-.796.61-1.406.608-.61 1.405-.61t1.407.61q.609.61.609 1.406 0 .797-.61 1.407l-1.218 1.265Q11.5 12.921 11.5 14.47v.515h1.969q0-1.546 1.172-2.812zM13.47 18.97V17H11.5v1.969zM5.406 4.953Q8.36 2 12.484 2t7.032 2.953q2.953 2.906 2.953 7.031t-2.953 7.079q-2.907 2.906-7.032 2.906t-7.078-2.907Q2.5 16.11 2.5 11.985q0-4.125 2.906-7.03" })] }));
}
SvgHelp.propTypes = {
    className: PropTypes.string,
};

function SvgHome({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M13.392 19.978v-4.285H10.61v4.285H7.206a1.56 1.56 0 0 1-1.625-1.485v-5.605l-.619.64H3l9.041-9.525L21 13.528h-1.963l-.618-.648v5.616a1.56 1.56 0 0 1-1.629 1.485zM10.2 9.811a1.73 1.73 0 0 0 1.8 1.646 1.73 1.73 0 0 0 1.8-1.646A1.726 1.726 0 0 0 12 8.166a1.724 1.724 0 0 0-1.8 1.645" })] }));
}
SvgHome.propTypes = {
    className: PropTypes.string,
};

function SvgHotNews({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.456 9.434A9.2 9.2 0 0 0 12.475 12a9.98 9.98 0 0 0 2.4 5.261 2.19 2.19 0 0 1 .566 2.356 4.6 4.6 0 0 1-3.98 2.206 9.939 9.939 0 0 0 4.794-.945 5.46 5.46 0 0 0 2.669-2.466 3.44 3.44 0 0 0-.849-3.839 15.8 15.8 0 0 1-3.803-8.346 15 15 0 0 1-.03-4.073 41 41 0 0 0-5.869 5.822 17.6 17.6 0 0 0-3.136 5.394 6.05 6.05 0 0 0 .466 5.364 6.45 6.45 0 0 0 2.258 2.115c-.344-.273-.64-.6-.878-.97a3.8 3.8 0 0 1-.295-3.38c.451-1.24 1.12-2.39 1.975-3.394a26 26 0 0 1 3.686-3.664z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.136 15.635c-.044.036-4.024 3.175-2.69 5.229a2.28 2.28 0 0 0 1.979.977 2.45 2.45 0 0 0 2.187-1.08 1.08 1.08 0 0 0-.27-1.21 5.07 5.07 0 0 1-1.206-3.916" })] }));
}
SvgHotNews.propTypes = {
    className: PropTypes.string,
};

function SvgHr({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.7 20.4a8.64 8.64 0 0 1-6.15-2.55A8.64 8.64 0 0 1 3 11.7a8.64 8.64 0 0 1 2.55-6.15A8.64 8.64 0 0 1 11.7 3a8.71 8.71 0 0 1 8.041 12.03 8.6 8.6 0 0 1-1.891 2.82 8.64 8.64 0 0 1-6.15 2.55m2.62-7.73v3.26h1.524a4.2 4.2 0 0 0-1.11-2.877 4 4 0 0 0-.416-.384zm-4.256 1.363v1.897h3.985v-1.897zm-.27-1.378a4 4 0 0 0-.43.398 4.2 4.2 0 0 0-1.113 2.877h1.543zm3.713-.525v1.63h.542v-1.375a4 4 0 0 0-.542-.255m-1.458-.268c-.399 0-.794.066-1.171.195v1.704h2.357v-1.697a3.6 3.6 0 0 0-1.188-.2zm-1.44.26a4 4 0 0 0-.545.255v1.383h.544zm-.73-2.595a2.134 2.134 0 0 0 4.267 0zm2.263-3.235-3.62 2.966h7.12z" })] }));
}
SvgHr.propTypes = {
    className: PropTypes.string,
};

function SvgIdn({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "#E22B3A", stroke: "#CCC", strokeMiterlimit: 10, strokeWidth: 0.5, d: "M21.5 7.65A1.654 1.654 0 0 0 19.85 6H5.15A1.654 1.654 0 0 0 3.5 7.65v4.454h18z" }), jsxRuntime.jsx("path", { fill: "#fff", stroke: "#CCC", strokeMiterlimit: 10, strokeWidth: 0.5, d: "M21.5 16.669a1.675 1.675 0 0 1-1.65 1.69H5.15a1.675 1.675 0 0 1-1.65-1.69v-4.565h18z" })] }));
}
SvgIdn.propTypes = {
    className: PropTypes.string,
};

function SvgIncomeMenu({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m21.123 13.625-7.404 7.406a1.43 1.43 0 0 1-2.017 0L2.25 11.576a1.4 1.4 0 0 1-.241-.322c-.038.35.085.7.334.95l9.453 9.456a1.166 1.166 0 0 0 1.647 0l7.405-7.405a1.17 1.17 0 0 0 .333-.687q-.027.03-.055.057z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M20.938 11.795 11.483 2.34a1.16 1.16 0 0 0-1.003-.326L4.085 3.024c-.5.078-.89.47-.969.968l-1.01 6.395c-.057.368.065.74.328 1.004l9.454 9.454c.454.454 1.19.454 1.645 0l7.406-7.404a1.164 1.164 0 0 0 0-1.647zM7.098 7.126a1.163 1.163 0 1 1-1.646-1.645 1.163 1.163 0 0 1 1.645 1.645" })] }));
}
SvgIncomeMenu.propTypes = {
    className: PropTypes.string,
};

function SvgIncome({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m5.75-12.976q.084.03.146.088a.4.4 0 0 1 .1.318l-.032.654-.002.049q-.033.63-.062 1.256a.47.47 0 0 1-.13.332.5.5 0 0 1-.104.074.4.4 0 0 1-.174.042.43.43 0 0 1-.288-.146l-.54-.514-4.772 4.568a.62.62 0 0 1-.43.17.62.62 0 0 1-.428-.17l-1.9-1.82-1.99 1.905a.6.6 0 0 1-.428.17.63.63 0 0 1-.427-.17l-.111-.106a.58.58 0 0 1-.178-.41.56.56 0 0 1 .178-.41l2.531-2.42a.6.6 0 0 1 .428-.17.63.63 0 0 1 .428.17l1.9 1.819 4.23-4.054a22 22 0 0 1-.367-.352l-.175-.17a.35.35 0 0 1-.132-.19.33.33 0 0 1 .021-.23.4.4 0 0 1 .077-.106.47.47 0 0 1 .323-.106l1.16-.052.937-.042h.04a.4.4 0 0 1 .17.023", clipRule: "evenodd" })] }));
}
SvgIncome.propTypes = {
    className: PropTypes.string,
};

function SvgInfo({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.03 21A9.032 9.032 0 0 1 5.645 5.584a9.032 9.032 0 0 1 12.773 12.772 8.97 8.97 0 0 1-6.386 2.646m-.366-11.444v6.723h1.428V9.556zm.723-2.577a.82.82 0 0 0-.599.206.8.8 0 0 0-.21.59.78.78 0 0 0 .21.575.81.81 0 0 0 .599.209.8.8 0 0 0 .586-.21.78.78 0 0 0 .21-.574.8.8 0 0 0-.21-.59.8.8 0 0 0-.587-.205z" })] }));
}
SvgInfo.propTypes = {
    className: PropTypes.string,
};

function SvgInsight({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M20.708 11.583a2.292 2.292 0 1 0-1.938-1.069c-.28.422-.546.902-.801 1.36v.001q-.141.253-.276.491c-.832 1.459-1.675 2.616-3.13 2.867-.697.12-1.242-.088-1.756-.514-.548-.455-1.036-1.138-1.566-1.943l-.21-.32c-.445-.683-.936-1.434-1.478-2.01-.653-.692-1.495-1.256-2.588-1.16-.824.071-1.456.738-1.887 1.339-.462.644-.862 1.453-1.184 2.212a24 24 0 0 0-.575 1.497h-.027a2.292 2.292 0 1 0 1.58.632c.147-.42.323-.89.524-1.362.3-.706.637-1.372.985-1.856.378-.528.628-.644.716-.652.433-.038.832.156 1.303.656.426.451.816 1.048 1.27 1.742l.001.001.226.345c.524.795 1.14 1.689 1.91 2.327.805.668 1.794 1.07 3.013.86 2.247-.387 3.436-2.22 4.278-3.698q.174-.308.329-.585c.26-.468.487-.876.727-1.228q.267.066.554.067" })] }));
}
SvgInsight.propTypes = {
    className: PropTypes.string,
};

function SvgInventory({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M14.684 10.368h-5.75V4.5h1.923v3.173h1.9V4.5h1.923v5.868z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.374 4.5h-1.13v2.787h1.13zM11.628 16.855h-5.75v-5.869H7.8v3.173h1.9v-3.173h1.923v5.868z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M9.317 10.987H8.188v2.787h1.13zM18.122 16.855h-5.75v-5.869h1.923v3.173h1.9v-3.173h1.923v5.868z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.811 10.987h-1.129v2.787h1.13zM21 17.513H3v1.54h18z" })] }));
}
SvgInventory.propTypes = {
    className: PropTypes.string,
};

function SvgJala({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M18.356 19.6H4.644A2.144 2.144 0 0 1 2.5 17.457V6.144A2.144 2.144 0 0 1 4.644 4h13.712A2.144 2.144 0 0 1 20.5 6.144v11.312a2.144 2.144 0 0 1-2.144 2.145M9.26 14.23a.36.36 0 0 0-.286.181.45.45 0 0 0 .036.429q.25.244.541.433a3.86 3.86 0 0 0 1.984.613.7.7 0 0 0 .206-.04.5.5 0 0 1 .155-.032c.453-.08.876-.278 1.226-.577a2.29 2.29 0 0 0 .902-1.839V7.844a.24.24 0 0 0-.181-.253.6.6 0 0 0-.143-.02.3.3 0 0 0-.254.128v.036a.9.9 0 0 0-.04.406q.002.067.004.135v4.977q0 .015.003.029c.007.039.016.087-.04.115v.035a1.83 1.83 0 0 1-.722 1.299 1.7 1.7 0 0 1-1.158.412 3.024 3.024 0 0 1-2.087-.846.2.2 0 0 0-.146-.067" })] }));
}
SvgJala.propTypes = {
    className: PropTypes.string,
};

function SvgJali({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M10.973 19.325a22 22 0 0 1-2.068-.113c.595-.186 2.588-.81 3.551-1.12 1.059-.085 2.932-.251 3.48-.3h.028a2.78 2.78 0 0 0 .783-2.309 3.07 3.07 0 0 0-1.226-1.994 5 5 0 0 0 1.193-.642c.317.536.523 1.13.608 1.747a4.06 4.06 0 0 1-.775 3.175c-.023.013-2.449 1.355-3.862 1.374a6.1 6.1 0 0 1-1.712.182m-2.475-.156-.198-.024h-.008a3.92 3.92 0 0 1-1.656-2.826 5 5 0 0 1 .244-2.35c.379.341.808.621 1.273.83a3.7 3.7 0 0 0-.8 2.567A2.4 2.4 0 0 0 8.5 19.17zm.006-4.863a5.3 5.3 0 0 1-1.37-.962c.055-.12.11-.23.166-.338a1.6 1.6 0 0 0 .57.033 1.56 1.56 0 0 0 1.043-.585 1.53 1.53 0 0 0 .02-1.882 1.55 1.55 0 0 0-.63-.492c.098-.73.203-1.613.29-2.323l.007-.062V7.69c.103-.86.202-1.673.23-1.73 0-.003.005-.004.005-.004q.15.482.21.981c0-.004.006-.004.006-.004q.056.166.062.343v.01l.004.028v.02l.006.045c.013.095.03.224.05.353v.007l.016.09q.049.355.181.686.065.141.152.27l.006.009.035.05.011.013.011.014.014.017.014.017.01.01.008.012q.15.184.367.283v-.004l-.004-.01a3.8 3.8 0 0 1-.441-1.13c-.016-.247-.092-.86-.223-1.768-.054-.38-.096-.659-.102-.695v-.006a.04.04 0 0 1 .032-.011c.215 0 1.044 1.062 1.723 2.05.284-.877.822-2.37 1.03-2.37q.008 0 .017.004v.034c.011.093.043.334.088.66.086.622.203 1.427.27 1.737q.002.02.008.041v.008c.011.393-.029.786-.119 1.17q.17-.162.262-.38v-.002l.008-.02v-.013l.006-.014.006-.016.01-.025v-.029l.014-.038.005-.016a2 2 0 0 0 .068-.3c.023-.233.018-.47-.016-.702v-.01l-.004-.04v-.044a21 21 0 0 0-.06-.427l-.003-.025v-.014a1.5 1.5 0 0 1-.034-.329h.008a6 6 0 0 1-.072-.99h.006c.044.047.378.844.7 1.614l.007.017.027.067v.007c.301.716.64 1.528.94 2.21a1.51 1.51 0 0 0-.491 1.302 1.516 1.516 0 0 0 1.7 1.312c.2-.024.395-.088.571-.188q.204.225.38.459a5 5 0 0 1-1.432.742 2 2 0 0 1-.256-.213 24 24 0 0 1-1.25-2.4c-.295-.608-.527-1.088-.563-1.118h-.008q-.021.352.03.7h-.005a1 1 0 0 0 .022.245c.012.089.027.202.04.312q.002.035.006.068.032.25-.009.5a1.3 1.3 0 0 1-.068.217v.012l-.018.04-.02.04-.018.035a1 1 0 0 1-.245.29c.09-.271.137-.555.141-.84q0-.018-.006-.034c-.049-.217-.124-.784-.178-1.22l-.059-.485a.01.01 0 0 0-.011-.005c-.18 0-.7 1.1-.981 1.75-.553-.651-1.235-1.35-1.432-1.35a.05.05 0 0 0-.034.01l.01.067.057.427c.058.443.128 1.02.135 1.245.066.283.187.55.356.787h-.005a.8.8 0 0 1-.307-.179l-.016-.016-.012-.011-.03-.03-.025-.028-.006-.007a1 1 0 0 1-.126-.184 1.6 1.6 0 0 1-.135-.476l-.01-.07a9 9 0 0 1-.041-.315.7.7 0 0 0-.043-.245s-.004 0-.006.004a2.4 2.4 0 0 0-.15-.687s-.005 0-.007.004c-.026.041-.135.592-.266 1.29a27 27 0 0 1-.617 2.816q-.1.18-.223.345z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M4.659 11.279C2.942 8.05 2.987 6.304 3.004 5.889c.02-.456.08-.675.182-.73a.11.11 0 0 1 .12-.028c.183.057.135.518.152.869.022.442.028 1.908 1.937 5.287a5.57 5.57 0 0 0 3.093 2.624c.176.099.378.19.366.306s-.273.163-.41.173h-.008c-.202 0-2.267-.27-3.777-3.112" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.806 12.666a1.194 1.194 0 0 1-1.335-1.031 1.193 1.193 0 0 1 1.046-1.323 1.194 1.194 0 0 1 1.334 1.03 1.193 1.193 0 0 1-1.045 1.323m-.256-2.084a.46.46 0 0 0-.403.51.46.46 0 0 0 .514.397.46.46 0 0 0 .403-.51.46.46 0 0 0-.514-.397M15.304 11.658a1.193 1.193 0 0 1-1.335-1.03 1.194 1.194 0 0 1 1.046-1.323 1.193 1.193 0 0 1 1.335 1.03 1.193 1.193 0 0 1-1.046 1.323m-.255-2.083a.46.46 0 0 0-.403.51.46.46 0 0 0 .514.397.46.46 0 0 0 .403-.51.46.46 0 0 0-.514-.397M10.514 15.164c.27-.18 1.089.659 1.841.53.603-.108 1.168-1.144 1.565-1.036.698.192-.01.946-.63 1.366a2.02 2.02 0 0 1-1.849.302c-.7-.192-1.547-.746-.927-1.162" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M14.715 13.371c-.143-.012-.417-.07-.437-.187-.019-.117.18-.203.353-.296l.018-.01a5.3 5.3 0 0 0 3.12-2.613c1.852-3.417 1.794-4.92 1.799-5.372.004-.358-.068-.833.122-.887a.12.12 0 0 1 .126.033c.108.055.18.286.22.753.037.426.16 2.217-1.496 5.483-1.3 2.562-3.147 3.022-3.682 3.087a1 1 0 0 1-.144.01M8.864 20.616a9 9 0 0 1-1.122-.608c.03-.3.143-.586.327-.825.218-.224.819-.492 2.443-.492.968 0 1.855.096 1.892.1l.004.012.006-.004c.447-.208 2.736-1.251 3.956-1.251q.23-.007.447.067c.545.21 1.108 1.254 1.318 2.1q-.693.488-1.463.845c-.047-.699-.56-1.777-1.045-1.964a.9.9 0 0 0-.331-.05 9.8 9.8 0 0 0-2.939.93l-.003-.009c-.004 0-.676-.074-1.405-.074-1.205 0-1.65.199-1.812.365-.177.25-.273.548-.274.853zM4.005 10.985a6.9 6.9 0 0 1 1.368-1.522 7.1 7.1 0 0 1 1.826-.974.338.338 0 1 1 .416.532 7.2 7.2 0 0 0-1.879.98c-.52.429-.964.941-1.315 1.517a.338.338 0 0 1-.416-.533" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M17.735 9.225a6.9 6.9 0 0 0-1.675-1.176 7.1 7.1 0 0 0-1.998-.537.338.338 0 0 0-.285.612 7.2 7.2 0 0 1 2.05.532c.604.3 1.152.7 1.623 1.18a.338.338 0 0 0 .285-.611" })] }));
}
SvgJali.propTypes = {
    className: PropTypes.string,
};

function SvgLamp({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m11.584 3.75 1.228.064-.126 2.401-1.229-.064zM6.914 5.306l-.995.723 1.414 1.946.995-.723zM9.563 17.25a10.5 10.5 0 0 1-1.208-1.49 6.6 6.6 0 0 1-1.23-3.396 4.8 4.8 0 0 1 1.357-3.428A4.75 4.75 0 0 1 11.97 7.58q.472 0 .937.088a4.17 4.17 0 0 1 2.679 1.74c.588.873.897 1.904.886 2.956a6.7 6.7 0 0 1-1.128 3.342 12.5 12.5 0 0 1-1.119 1.587zm2.521-6.883-1.762 3.554 1.36.46-.158 2.828 1.272-3.318-1-.704.287-2.821zM3.52 9.074 3 10.19l2.18 1.016.52-1.115zM9.694 17.75h4.583v3.055H9.694zM17.318 5.928l.983.74-1.448 1.921-.982-.74zM21 10.649l-.39-1.168-2.28.76.388 1.168z" })] }));
}
SvgLamp.propTypes = {
    className: PropTypes.string,
};

function SvgLine({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M17.25 9.791c-.78-.368-1.6-.618-2.175-.532-.397.06-.584.214-.719.41-.17.244-.277.579-.416 1.07l-.032.116c-.245.877-.617 2.208-2.154 2.68-1.247.383-2.27-.387-2.93-.884l-.117-.087c-.343-.26-.626-.473-.915-.624-.295-.156-.528-.207-.745-.178-.736.1-1.218.764-1.502 1.781a1.93 1.93 0 1 1-1.433-.445c.336-1.163 1.077-2.597 2.733-2.822.633-.086 1.187.095 1.646.336.402.212.783.5 1.104.742l.098.074c.786.59 1.194.804 1.62.673.72-.22.898-.758 1.184-1.77l.002-.009c.127-.448.29-1.028.624-1.509.37-.534.923-.917 1.73-1.038 1.054-.157 2.23.28 3.037.66.222.104.428.21.611.31a1.93 1.93 0 1 1-.72 1.344l.003-.026q-.243-.133-.534-.272" })] }));
}
SvgLine.propTypes = {
    className: PropTypes.string,
};

function SvgLoan({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.965 8.148h-1.74v-3.51h1.74l6.74-1.233a1 1 0 0 1 .484.03l5.006 1.599a.2.2 0 0 1 .126.261l-.336.885a1 1 0 0 1-1.165.619l-3.57-.843a1 1 0 0 0-.586.039l-2.503.956a.2.2 0 0 0-.13.187v.22c0 .11.09.2.2.2h1.825a1 1 0 0 1 1 1v.604a.2.2 0 0 1-.2.2h-4.198a1 1 0 0 1-.442-.103zM3.604 8.114h1.77V4.608h-1.77z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.26 18.136V15.28h.839l1.777 2.856h1.75q-.508-.734-2.188-3.242.66-.29 1.023-.8.36-.514.361-1.17 0-1.125-.728-1.675-.728-.555-2.244-.555H3.68v7.442zm.508-4.138H5.26v-2.011h.479q.763 0 1.125.224.366.224.366.753 0 .535-.356.784-.357.25-1.105.25M12.347 17.51q.57.728 1.572.728a1.95 1.95 0 0 0 1.161-.351q.495-.352.758-1.024.27-.67.27-1.583 0-1.384-.57-2.163-.57-.78-1.578-.779-1.069 0-1.614.845h-.07l-.22-.738h-1.262v8.196h1.553v-2.306q0-.113-.082-.825zm.274-3.574q.265-.356.84-.356.55 0 .805.423.26.417.26 1.257 0 1.72-1.044 1.72-.59 0-.866-.396-.27-.398-.27-1.314v-.168q.01-.814.275-1.165", clipRule: "evenodd" })] }));
}
SvgLoan.propTypes = {
    className: PropTypes.string,
};

function SvgLowStock({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.613 6.622a.4.4 0 0 0-.022.164.4.4 0 0 0 .113.3.44.44 0 0 0 .315.107.43.43 0 0 0 .311-.109.464.464 0 0 0 0-.601.43.43 0 0 0-.312-.106.45.45 0 0 0-.318.104.4.4 0 0 0-.087.14M11.724 5.964h.593l.124-2.346h-.84z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "m12.605 1.797 3.9 5.77c.215.318.063.86-.241.862l-8.528-.002c-.304 0-.456-.544-.241-.862l3.903-5.768a.67.67 0 0 1 .604-.37.68.68 0 0 1 .603.37M8.941 7.629h6.116c.219 0 .328-.39.174-.618l-2.8-4.137A.48.48 0 0 0 12 2.61a.49.49 0 0 0-.433.265L8.768 7.011c-.154.228-.045.618.173.618", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "m12.3 9.675.01.036 7.73.023 1.83 3.098-7.521 1.412-2.019-4.459 1.337 5.261 6.374-1.288v7.09l-7.74 1.718zM3.958 20.852v-7.09l6.372 1.288 1.31-5.08-1.992 4.274-7.518-1.41L3.96 9.736h7.78v.022l-.041.09v12.725z" })] }));
}
SvgLowStock.propTypes = {
    className: PropTypes.string,
};

function SvgMicrobiology({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M8.094 11.25c2.218 0 3.594-1.383 3.594-2.625S10.312 6 8.094 6 4.5 7.383 4.5 8.625s1.375 2.625 3.594 2.625m0 1c2.537 0 4.594-1.623 4.594-3.625S10.63 5 8.093 5 3.5 6.623 3.5 8.625s2.057 3.625 4.594 3.625M18.699 8.315c.433-.292.551-.588.551-.784s-.118-.491-.551-.783c-.428-.288-1.075-.498-1.84-.498-.764 0-1.412.21-1.839.498-.434.292-.551.587-.551.783s.117.492.551.784c.428.287 1.075.498 1.84.498.764 0 1.411-.21 1.839-.498m-1.84 1.498c1.873 0 3.391-1.022 3.391-2.282S18.732 5.25 16.86 5.25s-3.391 1.021-3.391 2.281 1.518 2.282 3.39 2.282M15.728 17.49c1.956-1.046 2.516-2.914 1.93-4.01s-2.451-1.665-4.407-.619-2.516 2.915-1.93 4.01c.586 1.096 2.45 1.666 4.407.62m.472.882c2.237-1.197 3.284-3.598 2.34-5.363-.945-1.766-3.524-2.226-5.76-1.03-2.238 1.198-3.285 3.6-2.34 5.364.944 1.765 3.523 2.226 5.76 1.03", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.625 8.031a.906.906 0 1 1-1.812 0 .906.906 0 0 1 1.812 0M17.02 14.645a.906.906 0 1 1-1.812 0 .906.906 0 0 1 1.813 0M14.833 16.645a.719.719 0 1 1-1.437 0 .719.719 0 0 1 1.437 0" })] }));
}
SvgMicrobiology.propTypes = {
    className: PropTypes.string,
};

function SvgModal({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m-2.994-7.85 5.586.937h.095l3.987-1.312a.233.233 0 0 0 .14-.282l-.14-.375a.94.94 0 0 0-1.123-.61l-2.91.705-2.345-.937v-.466h1.407a.94.94 0 0 0 .937-.938v-.233a.233.233 0 0 0-.232-.233h-3.519l-1.875.939H8.106v2.814zM6.26 10.334v2.84h1.42v-2.84z" })] }));
}
SvgModal.propTypes = {
    className: PropTypes.string,
};

function SvgMortality({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M9.731 17.996a1.1 1.1 0 0 0 .715.089l2.707-.538q.45-.009.897-.072l-3.89-3.81a1.09 1.09 0 0 0-.818.437 1.12 1.12 0 0 0-.113 1.171l.308.615-.308.615a1.13 1.13 0 0 0 .113 1.17c.103.138.236.248.39.324zm5.624-5.087 1.373 1.345h.006l3.05-2.803H15.78a2.8 2.8 0 0 1-.425 1.458zm.19-2.57h5.21v-.032q.009-.06.007-.117v-.018c.01-.13.017-.255.017-.396a7.78 7.78 0 0 0-4.74-7.162l-1.99 6.262c.668.277 1.204.8 1.495 1.462zM8.558 8.672h4.39l2.036-6.403A7.8 7.8 0 0 0 13 2H4.113A1.11 1.11 0 0 0 3 3.113a5.56 5.56 0 0 0 5.56 5.56m-3.09-4.92a.55.55 0 0 1 .702.071.555.555 0 1 1-.7-.07zm10.376 13.96-2.85 2.85L14.432 22l2.85-2.85L20.135 22l1.437-1.438-2.85-2.85 2.85-2.85-1.437-1.438-2.851 2.85-2.85-2.85-1.438 1.437z" })] }));
}
SvgMortality.propTypes = {
    className: PropTypes.string,
};

function SvgNews({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M5.25 8.375H16.5V9.5H5.25zM15.376 15.125h-3.938v1.125h3.938zM11.438 12.875H16.5V14h-5.063zM16.5 10.625h-5.062v1.125H16.5zM5.25 10.625h5.063v5.625H5.25z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M3 5h15.75v2.25H21v10.125c0 2.215-1.688 2.25-1.688 2.25H5.25C3 19.625 3 17.375 3 17.375zm1.816 13.42q.209.084.434.08h12.755a1.63 1.63 0 0 1-.38-1.125V6.125h-13.5v11.25a1.1 1.1 0 0 0 .69 1.046", clipRule: "evenodd" })] }));
}
SvgNews.propTypes = {
    className: PropTypes.string,
};

function SvgNotification({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.5 18.503c-.945 0-1.105.018-2 0 .17.61.442 1.56.949 1.936a2.86 2.86 0 0 0 1.757.564 2.85 2.85 0 0 0 1.761-.566c.508-.379.864-1.323 1.033-1.934-.878.02-1.573-.002-2.5 0z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M18.13 14.405h-.035c-.269-4.335-2.524-11.402-5.886-11.402-3.466 0-5.764 7.059-5.912 11.413-.194.264-3.377 3.21-2.34 4.031.332.262 2.646.414 5.445.47.895.018 1.839.026 2.784.024h.094c.927 0 1.852-.013 2.73-.033 2.866-.065 5.228-.223 5.467-.461.986-.98-2.347-4.042-2.347-4.042" })] }));
}
SvgNotification.propTypes = {
    className: PropTypes.string,
};

function SvgOperational({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12 21a8.94 8.94 0 0 1-6.362-2.637A8.94 8.94 0 0 1 3 12a9.01 9.01 0 0 1 9-9 9.01 9.01 0 0 1 8.318 12.446 8.9 8.9 0 0 1-1.956 2.917A8.94 8.94 0 0 1 12 21m-2.264-6.89a.671.671 0 0 1 .674.617.68.68 0 0 1-.155.497l-.872 1.041a1.8 1.8 0 0 0 1.274-.088 1.76 1.76 0 0 0 .988-1.28 1.8 1.8 0 0 0-.064-.894.9.9 0 0 0 .193-.17l2.4-2.86a.8.8 0 0 0 .133-.22q.135.02.272.02a1.767 1.767 0 0 0 1.57-2.576l-.874 1.04a.68.68 0 0 1-.52.243.68.68 0 0 1-.601-.361.67.67 0 0 1-.046-.52.7.7 0 0 1 .127-.232l.872-1.04a1.75 1.75 0 0 0-1.274.086 1.76 1.76 0 0 0-1.003 1.376c-.042.336.012.677.158.982a1 1 0 0 0-.114.112l-2.405 2.861a1 1 0 0 0-.089.132 1.765 1.765 0 0 0-2.037 2.513l.874-1.038a.67.67 0 0 1 .518-.24z" })] }));
}
SvgOperational.propTypes = {
    className: PropTypes.string,
};

function SvgOthers({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12 21m2.98-8.776a.776.776 0 0 0-.776.776v1.64a.776.776 0 0 0 .776.776h1.64a.776.776 0 0 0 .776-.776V13a.776.776 0 0 0-.776-.776zm-3.83 0a.776.776 0 0 0-.776.776v1.64a.776.776 0 0 0 .775.776h1.64a.776.776 0 0 0 .777-.776V13a.776.776 0 0 0-.776-.776zm-3.83 0a.776.776 0 0 0-.777.776v1.64a.776.776 0 0 0 .776.776h1.64a.776.776 0 0 0 .776-.776V13a.776.776 0 0 0-.776-.776zm7.66-3.83a.776.776 0 0 0-.777.776v1.64a.776.776 0 0 0 .776.776h1.64a.776.776 0 0 0 .776-.776V9.17a.776.776 0 0 0-.776-.776zm-3.831 0a.776.776 0 0 0-.776.776v1.64a.776.776 0 0 0 .776.776h1.64a.776.776 0 0 0 .776-.776V9.17a.776.776 0 0 0-.776-.776zm-3.83 0a.776.776 0 0 0-.776.776v1.64a.776.776 0 0 0 .775.776h1.64a.776.776 0 0 0 .777-.776V9.17a.776.776 0 0 0-.776-.776z" })] }));
}
SvgOthers.propTypes = {
    className: PropTypes.string,
};

function SvgParameter({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.065 19.103a4.19 4.19 0 0 1-4.063-4.305v-1.704c0-2.377 2.395.77 4.426.77s2.702-1.53 4.392-1.578 2.611 1.5 4.607 1.579a4.76 4.76 0 0 0 2.296-.824c1.254-.723 2.275-1.445 2.275.053v1.705a4.19 4.19 0 0 1-4.063 4.304zm11.182-9.627V4.5h2.75v4.976zm.241-.436h2.27V4.935h-2.27zm-4.07.436V4.5h2.752v4.976zm.242-.436h2.269V4.935h-2.27zm-4.255.436V4.5h2.945v4.976zm-3.49 0V4.5h2.75v4.976zm-3.91 0V4.5H5.95v4.976z" })] }));
}
SvgParameter.propTypes = {
    className: PropTypes.string,
};

function SvgPh({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M9.006 7.994c.124.12.3.12.442.034a4.6 4.6 0 0 1 1.646-.668c.159-.034.283-.154.283-.326V3.932a.32.32 0 0 0-.372-.325 8.6 8.6 0 0 0-4.228 1.696.318.318 0 0 0-.018.497zM14.544 8.045a4.6 4.6 0 0 0-1.646-.668c-.159-.034-.283-.171-.265-.326V3.932c0-.188.177-.342.372-.325a8.6 8.6 0 0 1 4.228 1.696c.16.12.16.36.018.497l-2.265 2.211c-.124.12-.3.12-.442.034M3.957 11.653H7.16c.16 0 .301-.12.337-.274a4.3 4.3 0 0 1 .69-1.594c.088-.137.088-.308-.036-.428L5.868 7.163c-.142-.137-.39-.137-.513.018a8.05 8.05 0 0 0-1.752 4.095.347.347 0 0 0 .354.377M8.168 14.72a4.3 4.3 0 0 1-.69-1.593.34.34 0 0 0-.336-.274H3.957c-.212 0-.371.171-.336.36a8.05 8.05 0 0 0 1.751 4.096.342.342 0 0 0 .514.017l2.264-2.194c.106-.103.106-.274.018-.411M16.855 12.853h3.202c.212 0 .371.171.336.377a8.05 8.05 0 0 1-1.752 4.096c-.123.154-.371.154-.513.017l-2.264-2.194c-.124-.12-.124-.291-.036-.428a4.3 4.3 0 0 0 .69-1.594.354.354 0 0 1 .337-.274M11.105 16.623a4.6 4.6 0 0 1-1.645-.668c-.142-.086-.319-.086-.443.034l-2.264 2.21c-.142.138-.142.378.017.498A8.6 8.6 0 0 0 11 20.393c.194.017.371-.137.371-.325v-3.12c.018-.154-.106-.29-.265-.325M16.855 11.653a.34.34 0 0 1-.336-.274 4.2 4.2 0 0 0-.673-1.594c-.088-.137-.088-.308.036-.428l2.247-2.176a.342.342 0 0 1 .513.017 8.05 8.05 0 0 1 1.751 4.095c.035.189-.124.36-.336.36zM14.997 16.006c-.124-.12-.3-.12-.442-.034a4.6 4.6 0 0 1-1.646.668c-.159.034-.283.154-.283.326v3.102c0 .205.177.36.372.325a8.6 8.6 0 0 0 4.228-1.696c.16-.12.177-.36.018-.497z" })] }));
}
SvgPh.propTypes = {
    className: PropTypes.string,
};

function SvgPicture({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M21 19.146H3V5.003h18zm-6.334-1.389a.5.5 0 0 0 .302.103h5.249a.51.51 0 0 0 .508-.515l-.8-4.118a.516.516 0 0 0-.51-.515h-4.57a.5.5 0 0 0-.243.063.5.5 0 0 0-.243-.063H9.714c-.1-.001-.197.027-.28.08a.5.5 0 0 0-.278-.08h-4.57a.51.51 0 0 0-.508.515l-.802 4.119a.516.516 0 0 0 .509.514h5.248a.5.5 0 0 0 .338-.132.5.5 0 0 0 .343.132h4.646c.11 0 .218-.036.306-.102M9.109 6.723l-5.313 5.35h16.312l-3.614-3.08-3.405 2.038-3.973-4.308zm4.498.21a.966.966 0 0 0 0 1.928.966.966 0 0 0 .682-1.645.97.97 0 0 0-.682-.283m6.12 10.32H18.53a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386m-2.293 0H16.24a.38.38 0 0 1-.38-.386v-1.002a.38.38 0 0 1 .38-.386h1.192a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386zm-9.672 0H6.568a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386zm-2.291 0H4.275a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.196a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386m8.388-.011h-1.216a.39.39 0 0 1-.387-.392V15.83a.39.39 0 0 1 .387-.392h1.216a.39.39 0 0 1 .387.392v1.018a.39.39 0 0 1-.386.393zm-2.33 0h-1.216a.39.39 0 0 1-.386-.392V15.83a.39.39 0 0 1 .386-.392h1.217a.39.39 0 0 1 .386.392v1.018a.39.39 0 0 1-.386.393zm2.343-2.027h-1.216a.39.39 0 0 1-.387-.393v-1.017a.39.39 0 0 1 .387-.393h1.216a.39.39 0 0 1 .387.393v1.018a.39.39 0 0 1-.386.393zm-2.33 0h-1.216a.39.39 0 0 1-.387-.393v-1.017a.39.39 0 0 1 .387-.393h1.216a.39.39 0 0 1 .387.393v1.018a.39.39 0 0 1-.386.393zm7.395-.041h-1.195a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.383.383 0 0 1 .38.386v1.002a.383.383 0 0 1-.379.386m-2.292 0h-1.194a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386h1.194a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386m-8.095 0H7.355a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386H8.55a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386m-2.292 0H5.064a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386h1.194a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.379.386z" })] }));
}
SvgPicture.propTypes = {
    className: PropTypes.string,
};

function SvgPie({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M20.997 12.23a9 9 0 1 1-5.912-8.685L12 12z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M20.119 10.998h-6.515l2.299-6.115c1.244.642 2.165 1.425 2.941 2.6.776 1.177 1.173 2.118 1.274 3.515" })] }));
}
SvgPie.propTypes = {
    className: PropTypes.string,
};

function SvgPlankton({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M16.41 4.163a.5.5 0 0 1 .27.653l-.494 1.197c.54.313 1.048.802 1.387 1.452l1.17-.402a.5.5 0 1 1 .326.945l-1.16.398c.071.34.098.706.072 1.094h1.144a.5.5 0 0 1 0 1h-1.321a6.3 6.3 0 0 1-.411 1.058l1.157.623a.5.5 0 1 1-.475.88l-1.178-.634q-.281.432-.645.884l1.096.896a.5.5 0 0 1-.633.774l-1.12-.915a18 18 0 0 1-1.489 1.414l.844 1.032a.5.5 0 1 1-.775.633l-.847-1.037c-.5.382-.975.698-1.427.957l.416 1.21a.5.5 0 0 1-.946.325L11 17.522a6.5 6.5 0 0 1-1.555.477v1.376a.5.5 0 0 1-1 0V18.06a3.8 3.8 0 0 1-1.865-.577L5.513 18.57a.5.5 0 1 1-.713-.701l1.009-1.025a3.6 3.6 0 0 1-.422-.55c-.42-.681-.3-1.534.232-2.26l-1.09-1.051a.5.5 0 0 1 .693-.72l1.104 1.062c.349-.266.774-.503 1.275-.697q.344-.131.633-.25l-.638-1.132a.5.5 0 1 1 .87-.49l.689 1.22c.675-.33 1.164-.678 1.78-1.29l-.923-.691a.5.5 0 1 1 .6-.8l.982.736c.17-.263.326-.582.482-.943.083-.191.169-.403.256-.62.077-.19.156-.384.236-.573l-.922-.397a.5.5 0 0 1 .396-.919l.96.414c.172-.3.374-.583.623-.805a1.78 1.78 0 0 1 1.471-.458q.078.01.156.026l.505-1.221a.5.5 0 0 1 .653-.271m-2.119 2.67c-.212.19-.409.498-.609.918-.144.302-.269.612-.4.939-.09.222-.183.452-.288.694-.241.559-.533 1.144-.94 1.582-1.028 1.102-1.717 1.592-2.908 2.114-.347.152-.736.306-1.184.48-.588.227-1.014.51-1.304.796-.598.589-.592 1.133-.42 1.413.098.158.294.423.6.671.441.357 1.11.684 2.073.617.585-.041 1.298-.23 2.15-.672.607-.315 1.282-.756 2.03-1.361q.268-.217.548-.463a16 16 0 0 0 1.528-1.512 9.7 9.7 0 0 0 1.117-1.536c.342-.594.541-1.132.636-1.61.13-.65.07-1.198-.09-1.648a2.59 2.59 0 0 0-1.466-1.53 1.8 1.8 0 0 0-.398-.104.78.78 0 0 0-.675.211", clipRule: "evenodd" })] }));
}
SvgPlankton.propTypes = {
    className: PropTypes.string,
};

function SvgPlatformMobile({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.833 21.143a1.687 1.687 0 0 1-1.688-1.688V4.551a1.685 1.685 0 0 1 1.688-1.687h6.334a1.687 1.687 0 0 1 1.688 1.687v14.904a1.687 1.687 0 0 1-1.688 1.688zm.421-16.72a1 1 0 0 0-.998 1v11.082c0 .551.447.998.998.998h5.492a1 1 0 0 0 .998-.998V5.422a1 1 0 0 0-.998-.998zM12 20.35a.886.886 0 1 0 0-1.773.886.886 0 0 0 0 1.773" })] }));
}
SvgPlatformMobile.propTypes = {
    className: PropTypes.string,
};

function SvgPlatformPc({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.467 19.717a.76.76 0 0 1-.536-1.294.76.76 0 0 1 .536-.222h2.265v-1.518h-4.93a2.127 2.127 0 0 1-2.128-2.127V6.418A2.13 2.13 0 0 1 4.802 4.29h14.397a2.127 2.127 0 0 1 2.127 2.128v8.137a2.127 2.127 0 0 1-2.127 2.128H14.27V18.2h2.267a.76.76 0 0 1 .758.758.76.76 0 0 1-.758.758zM4.691 6.637V14h14.62V6.636a1.06 1.06 0 0 0-1.065-1.064H5.755A1.06 1.06 0 0 0 4.69 6.636" })] }));
}
SvgPlatformPc.propTypes = {
    className: PropTypes.string,
};

function SvgPlatform({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M17.786 19.454a.676.676 0 0 1-.676-.675v-6.372a.676.676 0 0 1 .676-.676h2.538a.676.676 0 0 1 .676.676v6.372a.676.676 0 0 1-.676.675zm.969-.443a.354.354 0 0 0 .678.135.352.352 0 0 0-.575-.384.36.36 0 0 0-.103.25m-1.15-5.806v4.068a.676.676 0 0 0 .677.676h1.547a.676.676 0 0 0 .676-.676v-4.068a.676.676 0 0 0-.676-.676h-1.545a.676.676 0 0 0-.677.677zM7.127 18.54a.654.654 0 0 1 0-1.307h1.951v-1.307H4.352A1.35 1.35 0 0 1 3 14.575v-7.97a1.35 1.35 0 0 1 1.352-1.352h13.361a1.35 1.35 0 0 1 1.352 1.352v4.42h-1.737V7.032a.676.676 0 0 0-.676-.676H5.412a.676.676 0 0 0-.676.676v7.114a.676.676 0 0 0 .676.676h10.993v1.105h-3.418v1.306h1.952a.654.654 0 0 1 0 1.307z" })] }));
}
SvgPlatform.propTypes = {
    className: PropTypes.string,
};

function SvgPoints({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M3.5 12a9.001 9.001 0 1 1 18.002.002A9.001 9.001 0 0 1 3.5 12m2.455 0a6.547 6.547 0 1 0 6.546-6.546A6.554 6.554 0 0 0 5.955 12m.746-.075a5.728 5.728 0 1 1 11.459 0 5.728 5.728 0 0 1-11.46.001zm5.934 2.491 1.888 1.009a.27.27 0 0 0 .342-.067.27.27 0 0 0 .06-.224l-.347-2.112a.28.28 0 0 1 .08-.244l1.543-1.484a.277.277 0 0 0-.15-.471l-2.116-.322a.28.28 0 0 1-.207-.15l-.934-1.929a.28.28 0 0 0-.249-.155.27.27 0 0 0-.246.15l-.964 1.915a.27.27 0 0 1-.208.15l-2.12.298a.277.277 0 0 0-.23.337q.018.077.074.132l1.523 1.505a.27.27 0 0 1 .074.244l-.373 2.108a.27.27 0 0 0 .154.297.28.28 0 0 0 .245-.005l1.906-.986a.27.27 0 0 1 .256 0z" })] }));
}
SvgPoints.propTypes = {
    className: PropTypes.string,
};

function SvgPondStep({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M9.09 17.465H3V3h12.181v6.302a3.7 3.7 0 0 0-1.032.443 3.4 3.4 0 0 1-1.794.559 4.3 4.3 0 0 1-1.869-.677A2.8 2.8 0 0 0 9.449 9.2c-.243 0-.356.188-.356.592v1.584H5.03v.507h4.06v2.538H5.03v.507h4.06zM5.03 8.329v.507h8.457V8.33zm0-3.044v.507h8.457v-.507z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M18.578 20.724h-5.88a2.375 2.375 0 0 1-2.422-2.32v-7.288c0-.326.092-.478.288-.478.3.057.586.175.84.346.453.298.97.485 1.51.546a2.75 2.75 0 0 0 1.45-.448 2.4 2.4 0 0 1 1.166-.4h.046c.44.025.867.16 1.243.391.443.265.942.422 1.456.458h.041c.471-.046.925-.198 1.328-.445L19.81 11h.005a2.4 2.4 0 0 1 .885-.355c.205 0 .3.15.3.472v7.289a2.375 2.375 0 0 1-2.422 2.319m-3.51-3.29a.418.418 0 0 0-.374.604l.116.232-.116.23a.418.418 0 0 0 .456.597l1.018-.203a2.9 2.9 0 0 0 1.025-.209l-.689-1.123a1 1 0 0 1-.363.078l-.99-.199a.4.4 0 0 0-.083-.007m2.09-.833a1.06 1.06 0 0 1-.306.733l.717 1.173a2.93 2.93 0 0 0 1.4-1.906zm.098-3.323-.749 2.357c.252.104.453.301.563.55h1.959q0-.027.003-.053c.004-.056.007-.104.007-.158a2.93 2.93 0 0 0-1.783-2.694zm-4.485-.23a.42.42 0 0 0-.418.418 2.09 2.09 0 0 0 2.088 2.09h1.652l.77-2.409a3 3 0 0 0-.75-.1zm.625 1.04a.21.21 0 1 1 .006-.417.21.21 0 0 1-.006.418" })] }));
}
SvgPondStep.propTypes = {
    className: PropTypes.string,
};

function SvgPond({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M16.933 20.68h-9.87A3.986 3.986 0 0 1 3 16.787V4.553c0-.55.154-.803.484-.803a3.8 3.8 0 0 1 1.407.58c.761.502 1.63.816 2.535.919a4.6 4.6 0 0 0 2.436-.757 4 4 0 0 1 1.954-.668h.077c.74.043 1.457.27 2.087.659a5.5 5.5 0 0 0 2.449.766h.069a5.24 5.24 0 0 0 2.226-.742l.279-.147.01-.005c.45-.294.954-.496 1.483-.594.343 0 .504.252.504.792v12.234a3.986 3.986 0 0 1-4.067 3.893m-5.892-5.523a.703.703 0 0 0-.627 1.015l.194.389-.194.387a.702.702 0 0 0 .765 1.003l1.709-.342a4.9 4.9 0 0 0 1.716-.35l-1.151-1.887c-.194.08-.4.124-.61.13l-1.663-.332a1 1 0 0 0-.137-.014zm3.508-1.399a1.78 1.78 0 0 1-.512 1.23l1.202 1.97a4.93 4.93 0 0 0 2.35-3.2zm.164-5.577-1.255 3.954c.422.175.76.505.946.923h3.285q.002-.045.006-.088a4 4 0 0 0 .011-.265 4.91 4.91 0 0 0-2.992-4.522zm-7.528-.387a.703.703 0 0 0-.702.701 3.51 3.51 0 0 0 3.508 3.509h2.774l1.286-4.043a5 5 0 0 0-1.252-.167zm1.052 1.749a.351.351 0 1 1-.001-.703.351.351 0 0 1 .001.703" })] }));
}
SvgPond.propTypes = {
    className: PropTypes.string,
};

function SvgPremium({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.975 21A8.974 8.974 0 0 1 5.629 5.68 8.974 8.974 0 1 1 18.32 18.37 8.91 8.91 0 0 1 11.975 21m-3.836-5.656v1.32h8.259v-1.317zM6.714 8.94l1.46 3.853v2.216h8.231v-2.272l1.232-3.755-3.578 1.386-1.88-2.984-2.03 3.133z" })] }));
}
SvgPremium.propTypes = {
    className: PropTypes.string,
};

function SvgPreparation({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.95 8.95 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m.284-14.143a22 22 0 0 0-1.888 2.25c-.86 1.186-1.884 2.902-1.884 4.338 0 2.39 1.199 3.504 3.772 3.504a4.47 4.47 0 0 0 2.736-.709 3.27 3.27 0 0 0 1.152-2.793c0-1.436-1.057-3.152-1.944-4.338a22 22 0 0 0-1.934-2.236s-.006-.006-.006-.008zm0 9.328c-1.84 0-2.697-.796-2.697-2.505 0-1.959 2.67-4.68 2.697-4.706.114.113 2.78 2.756 2.78 4.706-.003 1.683-.911 2.506-2.783 2.506z" })] }));
}
SvgPreparation.propTypes = {
    className: PropTypes.string,
};

function SvgPricePrediction({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m3.619 19.565-.169-.169a.896.896 0 0 1 0-1.27l3.758-3.753a.89.89 0 0 1 .977-.195.9.9 0 0 1 .292.195l2.82 2.819 6.278-6.28q-.276-.269-.545-.545l-.26-.263a.54.54 0 0 1-.164-.653.5.5 0 0 1 .113-.169.67.67 0 0 1 .48-.164c1.04-.047 2.075-.099 3.113-.146h.06a.62.62 0 0 1 .473.171.63.63 0 0 1 .15.494l-.05 1.013q-.049 1.015-.095 2.023a.74.74 0 0 1-.193.516.7.7 0 0 1-.154.114.5.5 0 0 1-.256.068.6.6 0 0 1-.429-.226l-.801-.797-7.083 7.082a.9.9 0 0 1-1.273 0l-2.819-2.818-2.953 2.953a.895.895 0 0 1-1.27 0m4.826-7.797v-6.6h1.017l.176.596h.06a1.45 1.45 0 0 1 1.3-.68 1.49 1.49 0 0 1 1.27.626c.334.518.495 1.128.459 1.743.01.434-.063.867-.215 1.275a1.8 1.8 0 0 1-.613.824c-.273.191-.6.29-.935.283a1.52 1.52 0 0 1-1.266-.586h-.066q.066.573.066.664v1.859zm1.472-5.4a1.63 1.63 0 0 0-.222.941v.136a1.93 1.93 0 0 0 .22 1.057.78.78 0 0 0 .694.32q.84 0 .84-1.385c.022-.35-.05-.7-.207-1.015a.71.71 0 0 0-.65-.338.79.79 0 0 0-.675.284M6.379 9.751 4.948 7.453h-.675V9.75H3V3.758h1.747a3 3 0 0 1 1.805.446 1.59 1.59 0 0 1 .589 1.349c.006.336-.095.666-.289.942-.21.288-.496.512-.826.646q1.354 2.02 1.762 2.61zM4.273 6.419h.408c.31.023.62-.047.89-.2a.72.72 0 0 0 .287-.632.66.66 0 0 0-.294-.607 1.8 1.8 0 0 0-.908-.18h-.383z" })] }));
}
SvgPricePrediction.propTypes = {
    className: PropTypes.string,
};

function SvgPrice({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.96 18.127a.84.84 0 0 1-.084-.906l.239-.477-.24-.474a.85.85 0 0 1 .086-.905.88.88 0 0 1 .86-.324l2.06.408q.171-.004.339-.037v2.607q-.152.01-.28.013l-2.119.416a.877.877 0 0 1-.86-.322m9.302.073v-5.758h.887l.154.518h.05a1.26 1.26 0 0 1 1.134-.594 1.3 1.3 0 0 1 1.108.55c.292.451.432.983.4 1.52a3 3 0 0 1-.187 1.112 1.56 1.56 0 0 1-.535.718 1.37 1.37 0 0 1-.816.244A1.33 1.33 0 0 1 18.353 16h-.057q.057.5.057.58v1.62zm1.282-4.712a1.43 1.43 0 0 0-.194.82v.116c-.025.32.041.64.192.922a.68.68 0 0 0 .606.28q.733 0 .733-1.21a1.7 1.7 0 0 0-.184-.885.62.62 0 0 0-.567-.295.69.69 0 0 0-.584.251zm-3.085 2.95L14.21 14.43h-.59v2.007h-1.11V11.21h1.527a2.6 2.6 0 0 1 1.577.389 1.38 1.38 0 0 1 .508 1.176c.005.294-.084.582-.253.821-.183.25-.432.446-.72.563a219 219 0 0 0 1.539 2.278zm-1.838-2.906h.358c.27.02.54-.041.776-.175a.62.62 0 0 0 .25-.55.57.57 0 0 0-.256-.53 1.55 1.55 0 0 0-.793-.156h-.335zm-2.838-2.37H7.348A4.33 4.33 0 0 1 3 6.862.866.866 0 0 1 3.869 6h6.958a6.2 6.2 0 0 1 1.553.207zM4.74 7.716a.434.434 0 1 0 .032-.165.4.4 0 0 0-.033.166m11.942 2.664h-4.735l1.256-3.902a6.1 6.1 0 0 1 3.479 3.9z" })] }));
}
SvgPrice.propTypes = {
    className: PropTypes.string,
};

function SvgPro({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M18.713 16.862H5.367v-2.59L3 8.026l5.568 1.553L11.86 4.5l3.052 4.837L21 8.026l-2.287 6.246zM18.7 17.411H5.31v2.14H18.7z" })] }));
}
SvgPro.propTypes = {
    className: PropTypes.string,
};

function SvgProbiotic({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M13.986 11.8h2.543v2.12h-2.543zM11.213 10.717H8.128v2.57h3.085z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.638-6.362A8.94 8.94 0 0 1 12.5 3a8.94 8.94 0 0 1 6.362 2.638A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m2.615-10.896a1.55 1.55 0 0 0-1.552 1.551v3.679a1.55 1.55 0 0 0 1.552 1.552h.29a1.55 1.55 0 0 0 1.55-1.552v-3.679a1.55 1.55 0 0 0-1.544-1.551h.698v-.496a.775.775 0 0 0-.776-.776h-.145a.776.776 0 0 0-.776.776v.496zM9.168 8.66a1.55 1.55 0 0 0-1.552 1.551v5.121a1.55 1.55 0 0 0 1.552 1.552h1.008a1.55 1.55 0 0 0 1.552-1.552v-5.12a1.55 1.55 0 0 0-1.542-1.552h.513v-.766a.776.776 0 0 0-.776-.776h-.505a.776.776 0 0 0-.776.776v.766z", clipRule: "evenodd" })] }));
}
SvgProbiotic.propTypes = {
    className: PropTypes.string,
};

function SvgProductCategories({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M18.895 21h-3.118v-3.18h1.044v1.721h1.03V17.82h1.045V21zm-5.389 0h-3.118v-3.18h1.044v1.721h1.031V17.82h1.045V21zm-5.388 0H5v-3.18h1.044v1.721h1.031V17.82H8.12V21zm8.912-1.671v-1.514h.612v1.514zm-5.389 0v-1.514h.613v1.514zm-5.387 0v-1.514h.612v1.514zm10.62-1.96v-2.245h-4.04v2.245h-1.348v-2.245h-4.04v2.245H6.099v-3.593h12.124v3.593zm-5.388-3.593V9.062h1.347v4.714zm3.401-5.244h-5.42V3h1.816v2.991h1.791V3h1.817v5.532zm-3.242-2.904V3h1.065v2.628z" })] }));
}
SvgProductCategories.propTypes = {
    className: PropTypes.string,
};

function SvgProduct({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m7.24 17.756-2.21.331v-3.855s2.42-.366 4.464-.544c1.14-.098 7.016-.274 7.5.25.21.223-.488 1.002-.701 1.224-.422.438-1.712.433-2.543.428h-.438c-.941.02-3.02.036-3.02.036s3.725.792 5.545.223c1.015-.318 3.38-1.825 3.892-1.934.405-.088 1.134-.306 1.244.111.19.716-.65 1.41-1.168 1.86-.865.755-4.038 3.25-4.99 3.481a2.3 2.3 0 0 1-.52.05c-2.089-.004-7.055-1.661-7.055-1.661M3 18.074v-3.837h1.625v3.837zm13.291-6.083h-7.34V4.5h2.455v4.05h2.425V4.5h2.455v7.49zm-4.39-3.933V4.5h1.443v3.557z" })] }));
}
SvgProduct.propTypes = {
    className: PropTypes.string,
};

function SvgProfile({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.536 11.153a4.076 4.076 0 1 0-.018 0H9.52a3.78 3.78 0 0 0-3.771 3.77V21h13.554v-6.076a3.78 3.78 0 0 0-3.77-3.771z" })] }));
}
SvgProfile.propTypes = {
    className: PropTypes.string,
};

function SvgPublic({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M3 12.003a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9m10.114 1.94c1.25.17.482 2.005.798 3.076.317 1.07-2.022 1.21-1.967 2.234a.9.9 0 0 0 .052.25 7.5 7.5 0 0 0 6.525-3.804c-.514-.12-1.174-.974-1.857-1.827-.857-1.07-1.745-2.143-2.412-1.761-1.36.771-2.417-.006-3.842-1.048a2.86 2.86 0 0 0-1.81-.428c-.771 0-1.31 0-1.074-1.2.208-1.07 4.935-1.32 5.251-1.873.454-.873-.092-2.207-.264-3.041a7.497 7.497 0 0 0-6.231 12.333c.286-.008.686.006 1.123.02 1.371.042 3.162.085 3.343-.515.108-.428 1.043-2.429 2.228-2.429q.07.002.137.012m-5.116.208c-.96-.487-1.395-1.513-2.174-1.371s-1.09-2.148-.397-3.015c.334-.417 1.42 2.159 2.236 2.297q.397-.052.78-.172c.929-.23 2.314-.457 2.29.89a1.48 1.48 0 0 1-1.568 1.655 2.7 2.7 0 0 1-1.167-.284" })] }));
}
SvgPublic.propTypes = {
    className: PropTypes.string,
};

function SvgRainHeavy({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.513 3c-1.707 0-2.905.783-3.695 1.752a6.35 6.35 0 0 0-1.216 2.502c-.859-.152-1.903.03-2.775.55C3.804 8.414 3 9.501 3 11.082c0 .786.209 1.421.561 1.924.35.5.828.85 1.336 1.094 1.007.484 2.18.573 2.897.573h.878l1.642-2.45a1.41 1.41 0 0 1 2.432 1.416l.368-.558a1.53 1.53 0 0 1 2.76 1.215l.406-.605a1.41 1.41 0 0 1 2.573.936 4.05 4.05 0 0 0 1.446-.541c.94-.588 1.659-1.654 1.659-3.405 0-1.645-.833-2.663-1.868-3.218-.882-.473-1.907-.613-2.694-.556a5.56 5.56 0 0 0-1.21-2.312C15.398 3.707 14.208 3 12.513 3" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.856 12.455a.666.666 0 0 1 .183.925l-2.123 3.166a.667.667 0 1 1-1.107-.742l2.123-3.166a.666.666 0 0 1 .924-.183M14.994 14.32a.723.723 0 1 0-1.207-.795l-3.824 5.804a.723.723 0 1 0 1.208.795zM18.005 14.847a.667.667 0 0 0-1.108-.742l-2.122 3.165a.666.666 0 1 0 1.107.743z" })] }));
}
SvgRainHeavy.propTypes = {
    className: PropTypes.string,
};

function SvgRainNormal({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.818 5.752C9.608 4.783 10.806 4 12.513 4c1.695 0 2.885.707 3.673 1.595a5.56 5.56 0 0 1 1.21 2.312c.787-.057 1.812.083 2.694.556 1.035.555 1.868 1.573 1.868 3.218 0 1.751-.72 2.817-1.66 3.405-.906.567-1.976.666-2.696.587h-.639a3.7 3.7 0 0 0 .079-.778c0-.95-.54-1.875-.925-2.437a10 10 0 0 0-.826-1.04l-.017-.017-.008-.008-.724-.758-.724.758-.002.002-.006.006-.017.018a6 6 0 0 0-.25.283 10 10 0 0 0-.576.756c-.385.562-.925 1.486-.925 2.437q0 .39.072.748l-.123-.185a9.6 9.6 0 0 0-.826-1.04l-.018-.017-.005-.006-.002-.002-.001-.002-.723-.756-.723.757H9.69l-.001.003-.006.006-.017.018a6 6 0 0 0-.25.283 10 10 0 0 0-.72.971H7.463c-.717 0-1.814-.09-2.743-.579a3.14 3.14 0 0 1-1.22-1.102C3.185 13.49 3 12.86 3 12.082c0-1.58.804-2.668 1.827-3.278.872-.52 1.916-.702 2.775-.55a6.35 6.35 0 0 1 1.216-2.502" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M16.042 14.895c0 1.242-.672 1.687-1.5 1.687s-1.5-.445-1.5-1.687c0-1.243 1.5-2.813 1.5-2.813s1.5 1.57 1.5 2.813M11.916 17.895c0 1.242-.672 1.687-1.5 1.687-.829 0-1.5-.445-1.5-1.687 0-1.243 1.5-2.813 1.5-2.813s1.5 1.57 1.5 2.813" })] }));
}
SvgRainNormal.propTypes = {
    className: PropTypes.string,
};

function SvgRainStorm({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.036 3c-1.801 0-3.065.826-3.898 1.849-.7.859-1.1 1.858-1.283 2.638-.906-.16-2.008.033-2.927.581C2.848 8.712 2 9.858 2 11.526c0 .821.194 1.486.527 2.015s.79.902 1.286 1.163c.98.517 2.138.61 2.894.61h2.165q.027-.104.077-.209l1.63-3.341a.9.9 0 0 1 .303-.484.96.96 0 0 1 .605-.212h3.018c.386 0 .751.22.91.6.146.35.069.717-.119.977l-.662.933a1.018 1.018 0 0 1 .614 1.402l.194-.295a1.346 1.346 0 0 1 2.468.655c.706-.005 1.578-.168 2.34-.645.992-.62 1.75-1.744 1.75-3.592 0-1.735-.879-2.809-1.97-3.395-.93-.499-2.012-.646-2.842-.586a5.9 5.9 0 0 0-1.277-2.439C15.08 3.746 13.825 3 12.036 3" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.487 11.917h3.018c.127 0 .177.13.101.234l-1.42 2.001c-.076.104 0 .234.102.234h1.065c.101 0 .177.13.127.234l-3.348 5.146c-.076.13-.279.052-.254-.104l.736-3.795c.025-.078-.05-.182-.127-.182H9.84a.142.142 0 0 1-.127-.208l1.699-3.482c-.025-.052.025-.078.076-.078M16.116 14.976a.637.637 0 0 1 .982.8l-3.366 5.11a.636.636 0 1 1-1.063-.7l3.366-5.11a.6.6 0 0 1 .081-.1M18.9 17.678a.587.587 0 1 0-.974-.654l-1.869 2.787a.587.587 0 0 0 .975.654z" })] }));
}
SvgRainStorm.propTypes = {
    className: PropTypes.string,
};

function SvgRefresh({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" })] }));
}
SvgRefresh.propTypes = {
    className: PropTypes.string,
};

function SvgReminder({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M17.876 6.876a8.4 8.4 0 0 1 1.901 2.627 3.23 3.23 0 0 0 .98-3.756 3.226 3.226 0 0 0-5.646-.59 8.4 8.4 0 0 1 2.765 1.72M4.374 9.617A3.225 3.225 0 1 1 8.93 5.22a8.43 8.43 0 0 0-4.556 4.396" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.106 19.774a7.18 7.18 0 0 1-5.11-2.117 7.18 7.18 0 0 1-2.116-5.109A7.18 7.18 0 0 1 6.997 7.44a7.18 7.18 0 0 1 5.108-2.117 7.18 7.18 0 0 1 5.11 2.117 7.18 7.18 0 0 1 2.116 5.11 7.18 7.18 0 0 1-2.117 5.108 7.18 7.18 0 0 1-5.108 2.117M11.81 8.102a.503.503 0 0 0-.503.503v4.523a.5.5 0 0 0 .296.457.5.5 0 0 0 .458.296h3.518a.503.503 0 0 0 0-1.005h-3.267V8.606a.503.503 0 0 0-.502-.503", clipRule: "evenodd" })] }));
}
SvgReminder.propTypes = {
    className: PropTypes.string,
};

function SvgRfid({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M19.116 17.315H4.884A1.884 1.884 0 0 1 3 15.43V7.885A1.884 1.884 0 0 1 4.884 6h14.232A1.884 1.884 0 0 1 21 7.884v7.547a1.884 1.884 0 0 1-1.884 1.884m-6.032-9.257a1 1 0 0 0-.095.006.31.31 0 0 0-.23.156.58.58 0 0 0-.034.482q.026.061.104.21c.543.951.842 2.022.871 3.117a4.37 4.37 0 0 1-.975 2.912.54.54 0 0 0-.1.44.41.41 0 0 0 .198.301.46.46 0 0 0 .212.046c.248-.005.484-.1.666-.268a6.55 6.55 0 0 0 1.049-3.43 7.6 7.6 0 0 0-1.035-3.587l-.015-.027a.69.69 0 0 0-.616-.358m-1.709 1.005a.5.5 0 0 0-.197.04.4.4 0 0 0-.2.24.52.52 0 0 0 .016.394q.048.076.105.148c.506.6.793 1.354.816 2.14a2.26 2.26 0 0 1-.835 1.933l-.015.012a.54.54 0 0 0-.146.42.4.4 0 0 0 .146.323c.07.044.152.066.234.063a.9.9 0 0 0 .514-.182 4.07 4.07 0 0 0 1.185-2.57 4.9 4.9 0 0 0-1.082-2.71.71.71 0 0 0-.54-.25zm-1.341 1.303a.4.4 0 0 0-.202.048.28.28 0 0 0-.122.188.54.54 0 0 0 .048.365 1 1 0 0 0 .076.079 1.38 1.38 0 0 1 .476 1.077c0 .691-.284.855-.436.942l-.042.026a.44.44 0 0 0-.14.296.4.4 0 0 0 .066.326.36.36 0 0 0 .265.09c.127 0 .252-.03.364-.09.44-.42.712-.985.767-1.59a2.7 2.7 0 0 0-.665-1.601.72.72 0 0 0-.455-.156" })] }));
}
SvgRfid.propTypes = {
    className: PropTypes.string,
};

function SvgRole({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M13.612 22.865a.535.535 0 0 1 0-1.07h1.597v-1.069h-3.476a1.5 1.5 0 0 1-1.5-1.5V13.49a1.5 1.5 0 0 1 1.5-1.5h10.149a1.5 1.5 0 0 1 1.5 1.5v5.736a1.5 1.5 0 0 1-1.5 1.5h-3.474v1.07h1.597a.535.535 0 1 1 0 1.069zm-1.957-9.22v5.428a.75.75 0 0 0 .75.75h8.805a.75.75 0 0 0 .75-.75v-5.428a.75.75 0 0 0-.75-.75h-8.805a.75.75 0 0 0-.75.75M9.33 20.108H4.755v-3.717h4.527v3.33q0 .195.05.383zm-5.106 0H1.206a8.2 8.2 0 0 1 2.175-5.63 8 8 0 0 1 .842-.78v6.41m11.714-.924a.65.65 0 0 1 0-.833.6.6 0 0 1 .431-.142.58.58 0 0 1 .424.145.64.64 0 0 1 0 .825.57.57 0 0 1-.422.15.6.6 0 0 1-.434-.146m-.047-1.54v-.245a1.1 1.1 0 0 1 .135-.55c.13-.197.299-.367.495-.498a2 2 0 0 0 .456-.401.6.6 0 0 0 .111-.347.38.38 0 0 0-.159-.326.75.75 0 0 0-.441-.112c-.395.018-.78.129-1.125.323l-.36-.722a3.14 3.14 0 0 1 1.559-.412c.387-.02.769.095 1.08.327a1.07 1.07 0 0 1 .4.87c.006.22-.052.437-.165.626a2.4 2.4 0 0 1-.626.593q-.225.15-.4.356a.55.55 0 0 0-.084.32v.198zm-6.61-1.782H6.347v-3.334a7.062 7.062 0 0 1 3.548-.27 1.5 1.5 0 0 0-.612 1.21v2.394m-3.466 0h-1.06v-2.71a8 8 0 0 1 1.06-.494v3.204M4.39 7.577h8.348a4.178 4.178 0 0 1-8.348 0m11.272-.53H1.736l7.08-5.806 6.847 5.804z" })] }));
}
SvgRole.propTypes = {
    className: PropTypes.string,
};

function SvgSalinity({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "m11.645 3.554.445-.329.005.007.014.018.052.072.195.271a71.996 71.996 0 0 1 2.806 4.224c.767 1.253 1.541 2.622 2.125 3.898.574 1.255 1.002 2.497 1.002 3.467a6.645 6.645 0 0 1-13.289 0c0-.97.428-2.212 1.002-3.467.584-1.276 1.358-2.645 2.125-3.898a72 72 0 0 1 3.001-4.495l.052-.072.014-.018.005-.007zm0 0 .445-.329a.554.554 0 0 0-.891 0zm-.496 1.658a74 74 0 0 1 .496-.71q.212.299.495.71a71 71 0 0 1 2.078 3.183c.755 1.234 1.504 2.562 2.062 3.781.568 1.241.902 2.294.902 3.006a5.537 5.537 0 1 1-11.075 0c0-.712.334-1.765.902-3.006.558-1.22 1.307-2.547 2.062-3.78a71 71 0 0 1 2.078-3.184m1.302 6.993V9.969h-1.612v2.236H8.602v1.612h2.237v2.236h1.612v-2.236h2.236v-1.612zm-3.849 5.782V16.77h6.085v1.216z", clipRule: "evenodd" })] }));
}
SvgSalinity.propTypes = {
    className: PropTypes.string,
};

function SvgSampling({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M3.074 19.982V16.49L3 16.448l.074-.128v-.165h.094L10.334 3.75l.636.367.07-.186.96.334.96-.334.07.186.636-.367 7.166 12.405h.094v.165l.074.128-.074.042v3.49zm16.282-3.827L14.237 7.29l3.377 8.866zm-3.1 0L12 4.972 7.74 16.155zm-9.873 0L9.76 7.292l-5.117 8.863z" })] }));
}
SvgSampling.propTypes = {
    className: PropTypes.string,
};

function SvgShop({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 20.4a9.2 9.2 0 0 1-3.445-.659 9 9 0 0 1-2.917-1.891 8.6 8.6 0 0 1-1.956-2.82A8.4 8.4 0 0 1 3.5 11.7a8.4 8.4 0 0 1 .682-3.33 8.6 8.6 0 0 1 1.956-2.82 9 9 0 0 1 2.917-1.891A9.2 9.2 0 0 1 12.5 3a9.2 9.2 0 0 1 3.445.659 9 9 0 0 1 2.917 1.891 8.6 8.6 0 0 1 1.956 2.82 8.4 8.4 0 0 1 .682 3.33 8.4 8.4 0 0 1-.682 3.33 8.6 8.6 0 0 1-1.956 2.82 9 9 0 0 1-2.917 1.891 9.2 9.2 0 0 1-3.445.659m3.034-5.05c-.261 0-.512.1-.696.28a.94.94 0 0 0-.289.672c0 .252.104.494.288.672a1 1 0 0 0 1.391 0 .94.94 0 0 0 .289-.672.94.94 0 0 0-.289-.673 1 1 0 0 0-.696-.279zm-4.623 0c-.261 0-.511.1-.696.28a.94.94 0 0 0-.289.672c0 .252.104.494.288.672a1 1 0 0 0 1.392 0 .94.94 0 0 0 .289-.672.94.94 0 0 0-.29-.673 1 1 0 0 0-.696-.279zM7.013 7.754a.42.42 0 0 0-.288.116.39.39 0 0 0 0 .558c.076.073.18.115.288.115h1.88v.913c-.04.152-.046.311-.019.466.009.105.018.215.018.332l1.035 3.5c0 .117-.01.225-.018.332-.02.246-.037.44.078.556a.5.5 0 0 0 .38.112h5.85a.52.52 0 0 0 .381-.112c.111-.117.095-.311.078-.556-.009-.106-.018-.216-.018-.332l1.034-3.5c0-.117.01-.226.018-.333.02-.245.037-.439-.078-.555a.5.5 0 0 0-.38-.112H9.707V8.148a.39.39 0 0 0-.12-.279.42.42 0 0 0-.288-.115z" })] }));
}
SvgShop.propTypes = {
    className: PropTypes.string,
};

function SvgShrimpWallet({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M18.82 5.922a3 3 0 0 0-.47-.035H5.375l11.29-2.88A2 2 0 0 1 18.82 4.79V5.92zM18.352 20.371H5.403C4.078 20.371 3 19.572 3 18.59V9.122C3 8.14 4.078 7.34 5.403 7.34h12.949c1.325 0 2.403.8 2.403 1.782v2.22h-6.582a2.532 2.532 0 1 0 0 5.064h6.581v2.184c0 .982-1.075 1.781-2.402 1.781" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M21 12.793h-6.828a1.08 1.08 0 0 0 0 2.16H21z" })] }));
}
SvgShrimpWallet.propTypes = {
    className: PropTypes.string,
};

function SvgShrimp({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.937 13.315a2.84 2.84 0 0 1-.82 1.972l1.927 3.158a7.91 7.91 0 0 0 3.767-5.13zM14.185 10.708c.677.28 1.22.81 1.514 1.481h5.273c.012-.21.028-.377.028-.566a7.89 7.89 0 0 0-4.8-7.251zM14.176 15.901c-.31.128-.641.2-.977.211l-2.67-.533a1.125 1.125 0 0 0-1.227 1.607l.31.622-.31.621a1.126 1.126 0 0 0 1.227 1.606l2.74-.548a7.8 7.8 0 0 0 2.756-.56zM15.134 4.02a7.8 7.8 0 0 0-2.008-.27H4.125A1.126 1.126 0 0 0 3 4.876a5.63 5.63 0 0 0 5.625 5.626h4.45zM5.813 6.555a.562.562 0 1 1 0-1.125.562.562 0 0 1 0 1.125" })] }));
}
SvgShrimp.propTypes = {
    className: PropTypes.string,
};

function SvgSimulation({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M4.217 16.045v2.918a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V13.83L5.483 15.47a2 2 0 0 1-1.266.576M8.248 13.793v5.17a.326.326 0 0 0 .325.325h2.253a.326.326 0 0 0 .326-.326V15.92a1.97 1.97 0 0 1-1.357-.577zM12.278 15.598v3.365a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .325-.325v-6.209l-2.584 2.585a2 2 0 0 1-.32.259M18.997 8.938l-2.689 2.685v7.337a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V9.14c-.074-.062-.13-.118-.17-.155z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M20.845 4.175a.63.63 0 0 0-.475-.174h-.06c-1.05.048-2.096.1-3.146.148a.68.68 0 0 0-.484.166.6.6 0 0 0-.115.17.544.544 0 0 0 .167.659l.262.266q.273.279.551.55l-6.344 6.35-2.857-2.85a.906.906 0 0 0-1.283 0l-3.795 3.794a.907.907 0 0 0 0 1.283l.17.17a.904.904 0 0 0 1.284 0l2.984-2.984 2.848 2.85a.91.91 0 0 0 1.286 0l7.159-7.159.81.807a.61.61 0 0 0 .433.229c.09 0 .18-.025.259-.07a.7.7 0 0 0 .155-.114c.13-.143.2-.33.196-.522q.046-1.021.096-2.045l.048-1.024a.64.64 0 0 0-.15-.5" })] }));
}
SvgSimulation.propTypes = {
    className: PropTypes.string,
};

function SvgSnowNormal({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M16.27 5.134a1 1 0 0 1 .367 1.366l-2.725 4.719h5.449a1 1 0 1 1 0 2h-5.449l2.725 4.718a1 1 0 1 1-1.732 1l-2.724-4.718-2.725 4.718a1 1 0 1 1-1.732-1l2.724-4.718H5a1 1 0 1 1 0-2h5.448L7.724 6.5a1 1 0 1 1 1.732-1l2.725 4.719L14.905 5.5a1 1 0 0 1 1.366-.366", clipRule: "evenodd" })] }));
}
SvgSnowNormal.propTypes = {
    className: PropTypes.string,
};

function SvgSnowstorm({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M9.99 12.835a.567.567 0 1 0 .983-.568l-1.814-3.14h3.627a.567.567 0 0 0 0-1.135H9.159l1.814-3.14a.567.567 0 0 0-.983-.568l-1.813 3.14-1.814-3.14a.567.567 0 1 0-.982.567l1.813 3.14H3.567a.567.567 0 1 0 0 1.136h3.627l-1.813 3.14a.567.567 0 1 0 .982.568l1.814-3.141zM9.566 15.322c1.077.302 2.75.925 3.44 2.625.31.765.02 1.196-.266 1.348-.302.161-.74.107-.999-.39a.433.433 0 0 0-.767.4c.48.923 1.446 1.141 2.173.754.743-.397 1.107-1.336.66-2.437-.855-2.11-2.908-2.825-4.008-3.133a.433.433 0 1 0-.233.833M18.286 17.462c-2.825-.902-4.019-3.517-4.614-5.152a.433.433 0 0 0-.813.296c.603 1.658 1.918 4.644 5.164 5.68 1.66.53 2.93-.113 3.398-1.177.46-1.048.064-2.373-1.298-2.956a.433.433 0 1 0-.34.796c.92.394 1.112 1.205.846 1.812-.26.59-1.029 1.12-2.343.701M14.59 10.532c.89-.242 2.321-.503 3.51.396.528.399.493.8.37 1.002-.13.218-.432.357-.802.129a.41.41 0 1 0-.43.698c.758.467 1.568.205 1.935-.404.376-.623.224-1.473-.578-2.08-1.524-1.15-3.308-.78-4.221-.532a.41.41 0 1 0 .215.791" })] }));
}
SvgSnowstorm.propTypes = {
    className: PropTypes.string,
};

function SvgSocial({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.7 20.4a8.64 8.64 0 0 1-6.15-2.55A8.64 8.64 0 0 1 3 11.7a8.64 8.64 0 0 1 2.55-6.15A8.64 8.64 0 0 1 11.7 3a8.64 8.64 0 0 1 6.15 2.55 8.64 8.64 0 0 1 2.55 6.15 8.64 8.64 0 0 1-2.55 6.15 8.64 8.64 0 0 1-6.15 2.55m2.426-6.952v3.43h1.604a4.4 4.4 0 0 0-1.17-3.026 4 4 0 0 0-.434-.404m-4.475 1.434v1.997h4.19v-1.997zm-.285-1.448a4 4 0 0 0-.45.418 4.4 4.4 0 0 0-1.17 3.027h1.622v-3.445zm3.905-.553v1.716h.57V13.15a4 4 0 0 0-.573-.27zm-3.05-.007a4 4 0 0 0-.57.267v1.456h.57V12.87zm1.517-.275c-.42 0-.835.07-1.231.207v1.79h2.475v-1.784c-.4-.14-.822-.213-1.247-.213zm-4.575-.624v1.218H8.83q.398-.42.887-.726v-.492zm6.793 0v.427q.491.341.883.79h1.672v-1.217zm2.729-.875v2.091h.975a2.69 2.69 0 0 0-.713-1.845 2.5 2.5 0 0 0-.265-.246zm-9.696-.009q-.147.117-.276.255A2.7 2.7 0 0 0 6 13.191h.99zm2.903.886v.385c.094-.052.181-.095.273-.138a3 3 0 0 1-.275-.247zm3.89-.2a3 3 0 0 1-.332.324q.173.086.332.185zm-4.327-1.632a2.243 2.243 0 0 0 2.244 2.139 2.24 2.24 0 0 0 2.244-2.14zm6.708.61V11.8h.348v-.882a2.5 2.5 0 0 0-.35-.164zm-.935-.173c-.255 0-.509.042-.75.126V11.8h1.51v-1.09a2.3 2.3 0 0 0-.763-.131zm-.925.35q-.136.335-.348.628v.24h.348zm-4.934.3v.57h.347v-.022a3 3 0 0 1-.348-.549zm-.934-.649a2.3 2.3 0 0 0-.75.126V11.8h1.51v-1.01q-.015-.046-.025-.087a2.3 2.3 0 0 0-.736-.125zm-.925.168q-.18.069-.347.162v.887h.347zm6.995-.564v.01a1.373 1.373 0 0 0 1.421-.009zm-6.718.054a1.37 1.37 0 0 0 1.25 0zm-.744-1.154c.012.284.114.557.289.78l.964-.78zm4.79-2.347L8.027 9.861h7.488zm3.642 2.347.855.715c.146-.21.23-.459.241-.715zM8.492 7.01l-2.32 1.903H8.51l1.14-.922zm6.794 0-1.158.95 1.138.953h2.264z" })] }));
}
SvgSocial.propTypes = {
    className: PropTypes.string,
};

function SvgSpecies({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M16.752 7.5c.366.001.73.05 1.083.145l-1.112 3.496h-2.398a3.04 3.04 0 0 1-3.035-3.034.607.607 0 0 1 .607-.607zM12.64 8.962a.301.301 0 1 0 .334-.5.301.301 0 0 0-.334.5", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M18.14 12.052a1.53 1.53 0 0 0-.816-.8l1.087-3.42A4.26 4.26 0 0 1 21 11.747c0 .081-.005.155-.01.239l-.005.067zM17.83 13.723c.28-.284.438-.666.442-1.064l2.63-.003a4.26 4.26 0 0 1-2.032 2.77zM17.319 14.054q-.254.104-.527.113l-1.439-.287a.606.606 0 0 0-.662.866l.168.335-.168.335a.606.606 0 0 0 .662.867l1.479-.296a4.2 4.2 0 0 0 1.484-.3zM5.731 11.137c.004-.4.162-.78.442-1.064l-1.04-1.706a4.27 4.27 0 0 0-2.03 2.77zM5.86 11.746c.159.361.451.647.816.797L5.59 15.96A4.25 4.25 0 0 1 3 12.052c0-.081.005-.155.01-.239l.005-.067zM6.681 9.742c.167-.07.346-.109.527-.115l1.438.289a.607.607 0 0 0 .662-.867l-.168-.335.168-.335a.607.607 0 0 0-.662-.866l-1.479.295a4.2 4.2 0 0 0-1.484.301z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M7.248 16.295a4.2 4.2 0 0 1-1.084-.145l1.112-3.496h2.4a3.04 3.04 0 0 1 3.034 3.034.607.607 0 0 1-.607.607zm4.112-1.462a.3.3 0 1 0-.334.5.3.3 0 0 0 .334-.5", clipRule: "evenodd" })] }));
}
SvgSpecies.propTypes = {
    className: PropTypes.string,
};

function SvgSrEstimation({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.765 3.172A5 5 0 0 0 10.485 3h-5.73a.716.716 0 0 0-.717.716A3.586 3.586 0 0 0 7.62 7.298h2.83zM5.829 4.785a.361.361 0 1 1 0-.722.361.361 0 0 1 0 .722", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.16 7.43c.431.179.776.517.964.944h3.357l.006-.087c.006-.096.012-.181.012-.275a5.02 5.02 0 0 0-3.056-4.616zM12.277 9.09c-.004.47-.192.92-.523 1.255l1.228 2.01a5.04 5.04 0 0 0 2.4-3.266zM10.533 10.87q.323-.011.622-.134l1.178 1.927a5 5 0 0 1-1.752.357l-1.746.349a.716.716 0 0 1-.782-1.023l.198-.396-.198-.396a.716.716 0 0 1 .782-1.024z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M20.623 9.122q.124.045.22.137a.64.64 0 0 1 .152.498l-.048 1.023q-.053 1.028-.096 2.047a.75.75 0 0 1-.197.521.7.7 0 0 1-.155.114.54.54 0 0 1-.259.07.62.62 0 0 1-.433-.229l-.81-.806-7.157 7.161a.91.91 0 0 1-1.287 0l-2.85-2.85-2.984 2.98a.906.906 0 0 1-1.283 0l-.17-.17a.906.906 0 0 1 0-1.284l3.797-3.792a.906.906 0 0 1 1.283 0l2.85 2.851 6.347-6.349q-.279-.272-.55-.55l-.263-.267a.54.54 0 0 1-.166-.657.6.6 0 0 1 .114-.17.68.68 0 0 1 .482-.167l1.573-.074 1.573-.074h.06a.6.6 0 0 1 .257.037" })] }));
}
SvgSrEstimation.propTypes = {
    className: PropTypes.string,
};

function SvgStackedBar({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M3.434 12.898h3.83v8.168h-3.83zM3.434 7.86a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1V12h-3.83zM16.914 13.05h3.83v8.016h-3.83zM16.914 5.183a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1V12.2h-3.83zM10.085 17.253h3.83v3.813h-3.83zM10.085 11.385a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v4.861h-3.83z" })] }));
}
SvgStackedBar.propTypes = {
    className: PropTypes.string,
};

function SvgStackedLine({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M6.415 9.56c-2.205 1.127-2.418 5.86-2.418 5.86s1.779-2.348 3.44-2.976c2.607-.984 4.46 2.683 6.976 1.488 2.184-1.037.997-5.773 3.348-5.208l2.232 1.86v-2.79s-2.28-2.475-4.185-2.511c-2.556-.05-2.501 3.56-4.955 4.278-1.663.487-2.895-.789-4.438 0" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.25 14.955c-2.593 1.551-4.84-2.47-7.626-1.302-1.811.76-3.669 3.441-3.669 3.441v1.623h16.09v-6.831s-.954-1.415-1.912-1.674c-2.092-.566-1.023 3.63-2.883 4.743" })] }));
}
SvgStackedLine.propTypes = {
    className: PropTypes.string,
};

function SvgStartCycle({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 21a8.94 8.94 0 0 1-6.362-2.638A8.94 8.94 0 0 1 3.5 12a9.008 9.008 0 0 1 12.445-8.318 8.9 8.9 0 0 1 2.917 1.956A8.94 8.94 0 0 1 21.5 12a8.94 8.94 0 0 1-2.638 6.362A8.94 8.94 0 0 1 12.5 21m-2.017-7.423a2.327 2.327 0 0 0-2.328 2.328h8.535a2.3 2.3 0 0 0-.683-1.645 2.31 2.31 0 0 0-1.645-.683H12.66V11.34c.257.078.524.12.792.12a2.07 2.07 0 0 0 1.43-.542c1.053-.95 1.45-3.137 1.465-3.23-.017.07-.155.425-1.13.72a7.5 7.5 0 0 0-2.135.977c-.372.3-.63.72-.734 1.186h-.02a2.14 2.14 0 0 0-.733-1.186 7.5 7.5 0 0 0-2.133-.977c-1.028-.31-1.126-.692-1.131-.719.01.057.387 2.26 1.463 3.229.39.356.902.55 1.43.543q.35-.002.685-.091v2.206z" })] }));
}
SvgStartCycle.propTypes = {
    className: PropTypes.string,
};

function SvgStockAdjust({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M18.24 5.601c.07.093.111.208.111.333q-.001.015-.005.03l-.006.023V12l.003.056A.554.554 0 1 1 17.237 12V6.485H4.002v12.13h8.28l.003.001a.554.554 0 0 1-.002 1.103H3.458a.554.554 0 0 1-.554-.554V5.915a.6.6 0 0 1 .038-.188l.008-.013q.007-.009.008-.018l.002-.004a.6.6 0 0 1 .05-.09l1.652-2.2V3.4a.55.55 0 0 1 .443-.22h11.583c.215 0 .4.123.494.305zM5.38 4.28l-.827 1.103h12.346l-.555-1.103z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.652 7.589h9.93a.555.555 0 0 1 .55.55V12l.003.056a.554.554 0 1 1-1.106-.056V8.696h-2.205v8.272a.554.554 0 0 1-.554.555H5.652a.555.555 0 0 1-.555-.555V8.143c0-.306.249-.554.555-.554m2.76 1.102H6.207v7.72h2.207zm3.308 0H9.516l.001 7.72h2.204zM17.237 17.791a.827.827 0 1 1 0-1.654.827.827 0 0 1 0 1.654m0-1.103a.276.276 0 1 0 .276.276.276.276 0 0 0-.276-.273z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M20.494 17.515h.602v-1.103h-.602a3.04 3.04 0 0 0-.564-1.363l.424-.425-.776-.776-.425.425a3.3 3.3 0 0 0-1.343-.562l-.02-.003v-.6h-1.103v.6c-.514.089-.97.285-1.363.565l-.425-.425-.776.776.425.425a3.26 3.26 0 0 0-.563 1.343l-.002.02h-.601v1.103h.6c.09.514.286.97.566 1.363l-.425.424.777.777.424-.425c.385.277.845.476 1.343.563l.02.002v.601h1.103v-.6c.514-.09.97-.286 1.363-.566l.425.425.776-.777-.425-.424a3.3 3.3 0 0 0 .562-1.343zm-5.465-.551c0 1.218.988 2.205 2.206 2.205h.003a2.205 2.205 0 1 0-2.209-2.205", clipRule: "evenodd" })] }));
}
SvgStockAdjust.propTypes = {
    className: PropTypes.string,
};

function SvgStockAsset({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m12.153 12.147.006.025 5.247.016 1.242 2.126-5.105.97-1.37-3.06.907 3.61 4.326-.884v4.866l-5.253 1.18zM6.49 19.819v-4.867l4.325.885.889-3.487-1.352 2.933-5.102-.968 1.243-2.126h5.28v.015l-.028.062V21zm6.881-8.584a.71.71 0 0 1-.711-.711V8.805a.71.71 0 0 1 .711-.712h1.72a.71.71 0 0 1 .71.712v1.719a.71.71 0 0 1-.71.711zM8.846 10.03a.71.71 0 0 1-.712-.712V7.6a.71.71 0 0 1 .712-.711h1.718a.71.71 0 0 1 .712.711v1.718a.71.71 0 0 1-.712.712zm2.263-3.888a.71.71 0 0 1-.711-.711V3.712A.71.71 0 0 1 11.108 3h1.719a.71.71 0 0 1 .712.712V5.43a.71.71 0 0 1-.712.712z" })] }));
}
SvgStockAsset.propTypes = {
    className: PropTypes.string,
};

function SvgStockUser({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.371 19.973h7.419v-7.57h-2.484v4.092h-2.452v-4.093h-2.483z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.352 12.403v3.596h1.458v-3.596zM4.21 19.973h7.418v-7.57H9.145v4.092H6.693v-4.093H4.209z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.19 12.403v3.596h1.458v-3.596zM8.661 11.598h7.419v-7.57h-2.484V8.12h-2.451V4.027H8.66z" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.643 4.028v3.597H13.1V4.028z" })] }));
}
SvgStockUser.propTypes = {
    className: PropTypes.string,
};

function SvgStock({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M15.791 19.788h-3.94v-4.021h1.319v2.174h1.302v-2.174h1.32zm-4.447 0h-3.94v-4.021h1.319v2.174h1.302v-2.174h1.32zm5.786-.032v-8.227L12.046 6.2l-5.169 5.351v8.205H5.815v-7.108l-.85.877H3L12.043 4 21 13.525h-1.963l-.849-.89v7.116zm-3.695-2.079v-1.91h.774v1.91zm-4.447 0v-1.91h.774v1.91zm2.357-2.333h-3.94v-4.022h1.319v2.174h1.302v-2.173h1.32zm-2.357-2.111v-1.91h.774v1.91z" })] }));
}
SvgStock.propTypes = {
    className: PropTypes.string,
};

function SvgSubtraction({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M19.214 19.592a1 1 0 0 1-1 1H6.032a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h12.182a1 1 0 0 1 1 1zM7.396 17.046v.59h9.848v-.59zm0-3.545v.59h9.848V13.5zm0-3.546v.59h9.848v-.59zm0-3.545V7h9.848v-.59z" })] }));
}
SvgSubtraction.propTypes = {
    className: PropTypes.string,
};

function SvgSuccess({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 21a9 9 0 0 1-3.455-.684 8.9 8.9 0 0 1-2.909-1.952A8.94 8.94 0 0 1 3.5 12a8.94 8.94 0 0 1 2.636-6.364 8.9 8.9 0 0 1 2.909-1.952A9 9 0 0 1 12.499 3a9 9 0 0 1 3.456.684 8.9 8.9 0 0 1 2.909 1.952 8.94 8.94 0 0 1 2.636 6.365 8.94 8.94 0 0 1-2.636 6.364 8.9 8.9 0 0 1-2.91 1.951A9 9 0 0 1 12.5 21m-4.705-9.439a1.3 1.3 0 0 0-.828.557c-.362.457-.499.98-.304 1.167l2.93 2.813.005.007.011.016v.003q.013.018.027.035.122.155.288.26l.178.17a.25.25 0 0 0 .181.067h.041a.7.7 0 0 0 .267-.092c.16-.027.31-.1.43-.208l7-6.294a1.108 1.108 0 0 0 .049-1.488 1.03 1.03 0 0 0-.814-.416.85.85 0 0 0-.574.22l-6.245 5.616-2.464-2.365a.25.25 0 0 0-.178-.068" })] }));
}
SvgSuccess.propTypes = {
    className: PropTypes.string,
};

function SvgSunnyCloudy({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M9.854 4.089a.75.75 0 0 1 1.015.308l1.127 2.108a.75.75 0 0 1-1.322.707L9.547 5.104a.75.75 0 0 1 .307-1.015" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M6.377 11.3c.617-.844 1.577-1.554 2.957-1.554a3.8 3.8 0 0 1 1.354.24 3.881 3.881 0 0 1 5.734 5.115s.194.32.194 1.239c0 1.499-.554 2.454-1.329 2.994-.731.51-1.589.601-2.174.533H5.567c-.552 0-1.426-.075-2.178-.516C2.596 18.885 2 18.045 2 16.673c0-1.37.628-2.339 1.459-2.89.62-.413 1.362-.596 2.023-.531.15-.6.433-1.32.895-1.951m.807.591c-.49.67-.74 1.486-.815 2.024a.5.5 0 0 1-.662.401c-.433-.154-1.113-.087-1.695.3C3.456 14.984 3 15.642 3 16.672c0 1.027.416 1.534.896 1.816.521.306 1.18.378 1.67.378h7.577a1 1 0 0 1 .064.004c.405.052 1.015-.013 1.508-.357.464-.324.9-.947.9-2.174 0-1.069-.462-1.661-1.011-1.99a2.72 2.72 0 0 0-1.75-.336.5.5 0 0 1-.581-.42 4 4 0 0 0-.787-1.808c-.465-.585-1.148-1.04-2.152-1.04-.985 0-1.671.49-2.15 1.145", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M19.76 6.47a.75.75 0 0 0-1.105-1.015l-1.665 1.81a.75.75 0 0 0 1.103 1.015zM22.524 15.312a.75.75 0 0 0-.485-.944l-2.205-.71a.75.75 0 1 0-.46 1.429l2.206.71a.75.75 0 0 0 .944-.485" })] }));
}
SvgSunnyCloudy.propTypes = {
    className: PropTypes.string,
};

function SvgSunnyHeavy({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.5 2c.263 0 .476.213.476.476v.953a.476.476 0 0 1-.952 0v-.953c0-.263.213-.476.476-.476M19.167 12a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0M12.976 20.571a.476.476 0 0 0-.952 0v.953a.476.476 0 1 0 .952 0zM22.5 12a.476.476 0 0 1-.476.476h-.953a.476.476 0 0 1 0-.952h.953c.263 0 .476.213.476.476M3.929 12.476a.476.476 0 0 0 0-.952h-.953a.476.476 0 0 0 0 .952zM19.571 19.071a.476.476 0 0 1-.673 0l-.674-.673a.476.476 0 1 1 .674-.674l.673.674a.476.476 0 0 1 0 .673M6.102 6.276a.476.476 0 0 0 .674-.674l-.674-.673a.476.476 0 0 0-.673.673zM5.429 19.071a.476.476 0 0 1 0-.673l.673-.674a.476.476 0 1 1 .674.674l-.674.673a.476.476 0 0 1-.673 0M18.224 5.602a.476.476 0 1 0 .674.674l.673-.674a.476.476 0 1 0-.674-.673z" })] }));
}
SvgSunnyHeavy.propTypes = {
    className: PropTypes.string,
};

function SvgSunny({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.026 4a.75.75 0 0 0-.75.75v1.882a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-.75-.75M14.8 12.026a2.812 2.812 0 1 1-5.625 0 2.812 2.812 0 0 1 5.624 0M4 12.026c0 .414.336.75.75.75h1.882a.75.75 0 0 0 0-1.5H4.75a.75.75 0 0 0-.75.75M17.42 12.776a.75.75 0 1 1 0-1.5h1.882a.75.75 0 0 1 0 1.5zM11.276 17.42a.75.75 0 0 1 1.5 0v1.882a.75.75 0 0 1-1.5 0zM6.35 6.35a.75.75 0 0 0 0 1.062l1.331 1.33a.75.75 0 0 0 1.061-1.06L7.412 6.35a.75.75 0 0 0-1.061 0M15.31 16.37a.75.75 0 0 1 1.06-1.06l1.331 1.33a.75.75 0 1 1-1.06 1.061zM17.701 6.35a.75.75 0 0 0-1.06 0l-1.33 1.331a.75.75 0 1 0 1.06 1.061l1.33-1.33a.75.75 0 0 0 0-1.061M7.681 15.31a.75.75 0 1 1 1.061 1.06l-1.33 1.331a.75.75 0 0 1-1.061-1.06z" })] }));
}
SvgSunny.propTypes = {
    className: PropTypes.string,
};

function SvgTable({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M20.125 3.25H3.875C2.839 3.25 2 4.09 2 5.125v13.75c0 1.035.84 1.875 1.875 1.875h16.25c1.035 0 1.875-.84 1.875-1.875V5.125c0-1.036-.84-1.875-1.875-1.875m-9.375 15H4.5V14.5h6.25zm0-6.25H4.5V8.25h6.25zm8.75 6.25h-6.25V14.5h6.25zm0-6.25h-6.25V8.25h6.25z" })] }));
}
SvgTable.propTypes = {
    className: PropTypes.string,
};

function SvgTag({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m6.247 16.761-2.88-3.822a1.825 1.825 0 0 1 .36-2.555l4.598-3.467q.088-.066.183-.122a1.64 1.64 0 0 1 1.06-.457q.06 0 .121.009l1.588.223a1.5 1.5 0 0 0-.296.226 2 2 0 0 0-.182.122l-4.6 3.467a1.83 1.83 0 0 0-.358 2.555l2.88 3.822q.101.135.226.248l-.146.111a1.825 1.825 0 0 1-2.555-.359zm4.458 0-2.88-3.822a1.825 1.825 0 0 1 .359-2.555l4.6-3.467q.086-.066.181-.122a1.64 1.64 0 0 1 1.06-.457q.061 0 .122.009l4.412.62a1 1 0 0 1 .296.09l1.514-1.06.631.899-1.59 1.112a1 1 0 0 1-.007.078l-.62 4.412a1.54 1.54 0 0 1-.745 1.001 2 2 0 0 1-.183.156l-4.6 3.467a1.825 1.825 0 0 1-2.554-.358zm4.76-7.626a1.36 1.36 0 1 0 2.697-.25l-1.135.794-.63-.899 1.144-.801a1.36 1.36 0 0 0-2.077 1.156" })] }));
}
SvgTag.propTypes = {
    className: PropTypes.string,
};

function SvgTemperature({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.514 6.176h2.74v.685h-2.74zM12.514 7.546h4.111v.685h-4.111zM12.514 8.917h3.426v.685h-3.426zM10.116 3.23c-.606 0-1.097.49-1.097 1.096v12.641l-.136.103a2.056 2.056 0 1 0 2.466 0l-.137-.103V4.326c0-.606-.49-1.096-1.096-1.096M8.334 4.326a1.781 1.781 0 1 1 3.563 0v12.306a2.74 2.74 0 1 1-3.563 0z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", d: "M10.458 17.883V9.944h-.685v7.938a1.028 1.028 0 1 0 .685 0" })] }));
}
SvgTemperature.propTypes = {
    className: PropTypes.string,
};

function SvgTimeDay({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12 2.004c.263 0 .476.213.476.476v.952a.476.476 0 1 1-.952 0V2.48c0-.263.213-.476.476-.476M18.667 12.003a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0M12.476 20.575a.476.476 0 1 0-.952 0v.953a.476.476 0 1 0 .952 0zM22 12.004a.476.476 0 0 1-.477.476h-.952a.476.476 0 1 1 0-.953h.952c.264 0 .477.213.477.477M3.428 12.48a.476.476 0 1 0 0-.953h-.952a.476.476 0 1 0 0 .953zM19.071 19.074a.476.476 0 0 1-.674 0l-.673-.673a.476.476 0 1 1 .674-.674l.673.674a.476.476 0 0 1 0 .673M5.603 6.28a.476.476 0 1 0 .673-.674l-.673-.674a.476.476 0 1 0-.674.674zM4.93 19.074a.476.476 0 0 1 0-.673l.673-.674a.476.476 0 1 1 .673.674l-.673.673a.476.476 0 0 1-.674 0M17.724 5.606a.476.476 0 1 0 .674.673l.673-.673a.476.476 0 1 0-.674-.674z" })] }));
}
SvgTimeDay.propTypes = {
    className: PropTypes.string,
};

function SvgTimeNight({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.052 18.003c4.096 0 7.416-3.223 7.416-7.2 0-3.075-1.986-5.701-4.782-6.732q.528-.068 1.074-.068c4.551 0 8.24 3.582 8.24 8s-3.689 8-8.24 8A8.34 8.34 0 0 1 5 17.725a7.6 7.6 0 0 0 2.052.28" })] }));
}
SvgTimeNight.propTypes = {
    className: PropTypes.string,
};

function SvgToolsParameter({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M18.148 17.551H4.951A1.95 1.95 0 0 1 3 15.6V8.705a1.95 1.95 0 0 1 1.951-1.952H18.15A1.95 1.95 0 0 1 20.1 8.705v1.648h.25a.65.65 0 0 1 .65.65v2.3a.65.65 0 0 1-.65.65h-.25V15.6a1.95 1.95 0 0 1-1.952 1.951M5.724 9.068v6.367H13.8V9.068z" })] }));
}
SvgToolsParameter.propTypes = {
    className: PropTypes.string,
};

function SvgTools({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M11.7 20.4a8.64 8.64 0 0 1-6.15-2.55A8.64 8.64 0 0 1 3 11.7a8.64 8.64 0 0 1 2.55-6.15A8.64 8.64 0 0 1 11.7 3a8.64 8.64 0 0 1 6.15 2.55 8.64 8.64 0 0 1 2.55 6.15 8.64 8.64 0 0 1-2.55 6.15 8.64 8.64 0 0 1-6.15 2.55m-2.664-5.43c.631.522 1.4.848 2.215.938V18H12v-2.079a4.2 4.2 0 0 0 2.296-.874l1.2 1.2.53-.531-1.176-1.176A4.23 4.23 0 0 0 15.922 12H18v-.75h-2.093a4.2 4.2 0 0 0-.94-2.217l1.274-1.275-.53-.53-1.274 1.275a4.18 4.18 0 0 0-2.44-.99V6h-.75v1.526c-.876.096-1.7.466-2.352 1.058L7.536 7.227l-.53.53 1.378 1.378a4.2 4.2 0 0 0-.86 2.115H6V12h1.51a4.2 4.2 0 0 0 .99 2.44l-1.274 1.276.53.53 1.276-1.274zm2.966.203V12.75l1.763 1.763a3.46 3.46 0 0 1-1.762.657zm-.75-.02a3.46 3.46 0 0 1-1.682-.717l1.68-1.686v2.4zm3.068-1.145-2.007-2.005h2.861a3.43 3.43 0 0 1-.854 2.005m-5.285-.098a3.45 3.45 0 0 1-.77-1.906h2.678zm6.12-2.657H12.75l1.683-1.683a3.45 3.45 0 0 1 .717 1.68zm-4.65 0h-2.22a3.46 3.46 0 0 1 .64-1.58L10.5 11.25zm1.5-.311V8.265a3.45 3.45 0 0 1 1.906.77l-1.905 1.905zm-.75 0L9.433 9.12a3.46 3.46 0 0 1 1.822-.834v2.657z" })] }));
}
SvgTools.propTypes = {
    className: PropTypes.string,
};

function SvgTopStock({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "m12.298 9.774.01.036 7.67.023 1.816 3.074-7.463 1.401-2.003-4.424 1.326 5.22 6.325-1.278v7.035l-7.68 1.706zM4.02 20.865V13.83l6.323 1.279 1.3-5.041-1.977 4.24-7.46-1.399 1.817-3.074h7.72v.022l-.04.09v12.626zM11.247 2.818a.5.5 0 0 1 .951 0l.336 1.034a.5.5 0 0 0 .476.346h1.087a.5.5 0 0 1 .293.904l-.879.64a.5.5 0 0 0-.182.558l.336 1.034a.5.5 0 0 1-.77.56l-.878-.64a.5.5 0 0 0-.588 0l-.88.64a.5.5 0 0 1-.77-.56l.337-1.034a.5.5 0 0 0-.182-.559l-.88-.639a.5.5 0 0 1 .295-.904h1.087a.5.5 0 0 0 .475-.346z" })] }));
}
SvgTopStock.propTypes = {
    className: PropTypes.string,
};

function SvgTrading({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M4.102 13.158a.35.35 0 0 0 0 .493l1.01 1.01a.35.35 0 0 0 .495 0L11.3 8.969a.35.35 0 0 1 .494 0l.949.949c.19.19.514.103.584-.157l1.425-5.32a.35.35 0 0 0-.427-.428l-5.32 1.426a.35.35 0 0 0-.157.584l.948.948a.35.35 0 0 1 0 .494zM19.898 10.842a.35.35 0 0 0 0-.493l-1.01-1.01a.35.35 0 0 0-.495 0L12.7 15.031a.35.35 0 0 1-.494 0l-.949-.949a.35.35 0 0 0-.584.157l-1.425 5.32c-.07.26.168.497.427.428l5.32-1.426a.35.35 0 0 0 .157-.584l-.948-.948a.35.35 0 0 1 0-.494z" })] }));
}
SvgTrading.propTypes = {
    className: PropTypes.string,
};

function SvgTransparency({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 3a8.97 8.97 0 0 1 6.364 2.636A8.97 8.97 0 0 1 21 12a8.97 8.97 0 0 1-2.776 6.5A9 9 0 1 1 12 3M6.343 17.657 12 12l5.657 5.657A7.98 7.98 0 0 0 20 12c0-2.21-.895-4.21-2.343-5.657L12 12 6.343 6.343A7.98 7.98 0 0 0 4 12c0 2.21.895 4.21 2.343 5.657", clipRule: "evenodd" })] }));
}
SvgTransparency.propTypes = {
    className: PropTypes.string,
};

function SvgTreatmentBottle({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.5 15.237v-3.605h1v3.605z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.198 12.934h3.604v1h-3.604zM8.2 4.577a.5.5 0 0 1 .5-.5h6.6a.5.5 0 0 1 .5.5v2.019a.5.5 0 0 1-.5.5H8.7a.5.5 0 0 1-.5-.5zm1 .5v1.019h5.6V5.077z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M8.978 6.596a.5.5 0 0 1 .5-.5h5.044a.5.5 0 0 1 .5.5v.736a2.5 2.5 0 0 1 2.415 2.498v7.592a2.5 2.5 0 0 1-2.5 2.5H9.064a2.5 2.5 0 0 1-2.5-2.5V9.83a2.5 2.5 0 0 1 2.415-2.498zm1 .5v.734a.5.5 0 0 1-.5.5h-.415a1.5 1.5 0 0 0-1.5 1.5v7.592a1.5 1.5 0 0 0 1.5 1.5h5.874a1.5 1.5 0 0 0 1.5-1.5V9.83a1.5 1.5 0 0 0-1.5-1.5h-.415a.5.5 0 0 1-.5-.5v-.734z", clipRule: "evenodd" })] }));
}
SvgTreatmentBottle.propTypes = {
    className: PropTypes.string,
};

function SvgTreatmentInput({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M17.275 20.998a9.6 9.6 0 0 1-1.786-.128c-.093-.023-.144-.048-.144-.075v-.634c.648.2 1.328.269 2.003.203a5.1 5.1 0 0 0 2.003-.203v.634c0 .055-.216.104-.567.14-.35.037-.83.06-1.364.063zM5.65 20.725A1.65 1.65 0 0 1 4 19.076V7.45a1.65 1.65 0 0 1 1.65-1.649h.216V3.825A.825.825 0 0 1 6.69 3h2.082a.825.825 0 0 1 .825.825v1.974h.219a1.65 1.65 0 0 1 1.649 1.649v11.626a1.65 1.65 0 0 1-1.65 1.649zm-.824-7.64h5.771V9.787H4.825zm8.323 7.518a.8.8 0 0 1-.337-.13 1.04 1.04 0 0 1-.177-1.451l.644-.966 1.588 1.06-.646.965a1.15 1.15 0 0 1-.931.534 1 1 0 0 1-.136-.012zm2.193-.644a5.1 5.1 0 0 1 2.003-.202 5.1 5.1 0 0 1 2.003.202c-.648.2-1.329.27-2.003.204a5.1 5.1 0 0 1-2.001-.204zm-1.951-2.072.644-.964a1.04 1.04 0 0 1 1.41-.392 1.04 1.04 0 0 1 .178 1.451l-.644.966z" })] }));
}
SvgTreatmentInput.propTypes = {
    className: PropTypes.string,
};

function SvgUsa({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "#F5F5F5", d: "M19.976 6.001H4.994a1.357 1.357 0 0 0-1.32 1.391v9.39a1.357 1.357 0 0 0 1.32 1.39h14.982a1.357 1.357 0 0 0 1.319-1.39v-9.39a1.357 1.357 0 0 0-1.32-1.391" }), jsxRuntime.jsx("path", { fill: "#FF4B55", d: "M3.751 6.937H21.22a1.33 1.33 0 0 0-1.246-.936H4.998a1.33 1.33 0 0 0-1.247.936M21.295 9.746H3.675v.936h17.62zM21.295 7.873H3.675v.936h17.62zM3.675 12.235a.313.313 0 0 0 .304.32h17.316v-.935H3.675zM21.295 15.364H3.675v.936h17.62zM21.22 17.236H3.75a1.33 1.33 0 0 0 1.247.937h14.974a1.33 1.33 0 0 0 1.248-.937M21.295 13.491H3.675v.937h17.62z" }), jsxRuntime.jsx("path", { fill: "#41479B", d: "M3.995 12.555h8.009a.32.32 0 0 0 .32-.32V6.32a.32.32 0 0 0-.32-.32H5.066a1.39 1.39 0 0 0-1.39 1.392v4.842a.32.32 0 0 0 .32.32" }), jsxRuntime.jsx("path", { fill: "#F5F5F5", d: "m4.574 6.735.071.213h.224a.03.03 0 0 1 .018.054l-.183.134.068.213a.03.03 0 0 1-.047.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.213-.182-.134a.03.03 0 0 1 .017-.054h.224l.071-.212a.032.032 0 1 1 .063 0M4.574 7.848l.07.213h.225a.03.03 0 0 1 .017.055l-.182.133.067.214a.03.03 0 0 1-.046.033l-.183-.13-.182.13a.03.03 0 0 1-.047-.033l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 1 1 .064 0M4.574 8.96l.07.213h.225a.03.03 0 0 1 .017.055l-.182.133.067.214a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M4.574 10.073l.07.213h.225a.03.03 0 0 1 .027.02.03.03 0 0 1-.01.034l-.182.133.067.214a.03.03 0 0 1-.011.033.03.03 0 0 1-.035 0l-.183-.13-.182.13a.03.03 0 0 1-.046-.015.03.03 0 0 1 0-.018l.067-.214-.183-.133a.03.03 0 0 1 0-.049.03.03 0 0 1 .018-.006h.224l.07-.212a.032.032 0 0 1 .064 0M4.574 11.186l.07.212h.225a.03.03 0 0 1 .028.021.03.03 0 0 1-.01.034l-.183.133.067.214a.03.03 0 0 1-.029.038.03.03 0 0 1-.017-.005l-.183-.13-.182.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.012-.033l.068-.214-.183-.133a.03.03 0 0 1-.01-.033.03.03 0 0 1 .028-.02h.224l.07-.214a.032.032 0 1 1 .064 0M5.437 7.281l.07.213h.225a.03.03 0 0 1 .018.054l-.183.134.067.213a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.046-.034l.067-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.032.032 0 0 1 .064 0M5.437 8.394l.07.212h.225a.03.03 0 0 1 .018.055l-.183.134.069.216a.03.03 0 0 1-.047.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.213-.182-.134a.03.03 0 0 1 .017-.054h.224l.071-.213a.031.031 0 0 1 .062-.003M5.437 9.506l.07.213h.225a.03.03 0 0 1 .018.055l-.183.133.067.214a.03.03 0 0 1-.046.033l-.183-.13-.182.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.067-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 0 1 .064 0M5.437 10.618l.07.213h.225a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.034l-.183.134.067.213a.03.03 0 0 1-.011.033.03.03 0 0 1-.035 0l-.183-.13-.182.13a.03.03 0 0 1-.046-.014.03.03 0 0 1 0-.019l.067-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213q0-.012.01-.022a.032.032 0 0 1 .054.022M6.3 6.735l.071.212h.224a.03.03 0 0 1 .029.04.03.03 0 0 1-.011.015l-.183.134.068.213a.03.03 0 0 1-.046.034l-.183-.13-.183.13a.03.03 0 0 1-.046-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 0 1 .064 0M6.3 7.848l.071.212h.224a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.046.034l-.183-.13-.183.13a.03.03 0 0 1-.046-.034l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 0 1 .064 0M6.3 8.96l.071.213h.224a.03.03 0 0 1 .018.054l-.183.134.068.214a.03.03 0 0 1-.046.033l-.183-.13-.183.13a.03.03 0 0 1-.046-.033l.068-.214-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.212a.032.032 0 0 1 .064 0M6.3 10.073l.071.213h.224a.03.03 0 0 1 .029.02.03.03 0 0 1-.011.035l-.183.133.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.035 0l-.182-.13-.183.131a.03.03 0 0 1-.046-.034l.068-.213-.183-.133a.03.03 0 0 1 0-.05.03.03 0 0 1 .018-.005h.224l.07-.213a.03.03 0 0 1 .032-.032.03.03 0 0 1 .032.032M6.3 11.185l.071.212h.224q.01 0 .018.006a.03.03 0 0 1 .01.034.03.03 0 0 1-.01.015l-.183.134.068.213a.03.03 0 0 1-.029.039.03.03 0 0 1-.017-.005l-.183-.13-.183.13a.03.03 0 0 1-.017.005.03.03 0 0 1-.017-.006.03.03 0 0 1-.012-.033l.068-.213-.183-.134a.03.03 0 0 1 0-.049.03.03 0 0 1 .018-.006h.224l.07-.212a.032.032 0 1 1 .064 0M7.164 7.281l.07.213h.225a.03.03 0 0 1 .017.054l-.182.134.067.213a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.032.032 0 1 1 .064 0M7.164 8.394l.07.212h.225a.03.03 0 0 1 .017.055l-.182.134.067.213a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M7.164 9.506l.07.213h.225a.03.03 0 0 1 .017.055l-.182.133.067.214a.03.03 0 0 1-.029.038.03.03 0 0 1-.017-.005l-.183-.13-.182.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.012-.033l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 0 1 .064 0M7.164 10.618l.07.213h.225a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.034l-.183.134.067.213a.03.03 0 0 1-.011.033.03.03 0 0 1-.035 0l-.183-.13-.182.13a.03.03 0 0 1-.047-.033l.068-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.03.03 0 0 1 .032-.032.03.03 0 0 1 .032.032M8.027 6.735l.07.212h.225a.03.03 0 0 1 .018.055l-.183.134.067.213a.03.03 0 0 1-.046.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.213-.182-.134a.03.03 0 0 1 .017-.054h.224l.07-.213a.03.03 0 0 1 .032-.031.03.03 0 0 1 .032.03M8.027 7.848l.07.212h.225a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.047.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.214-.182-.133a.03.03 0 0 1 .017-.055h.224l.07-.212a.032.032 0 1 1 .064 0M8.027 8.96l.07.213h.225a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.047.034l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.214-.182-.133a.03.03 0 0 1 .017-.055h.224l.07-.212a.032.032 0 1 1 .064 0M8.027 10.073l.07.213h.225a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.035l-.183.133.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.035 0l-.182-.13-.183.131a.03.03 0 0 1-.046-.015.03.03 0 0 1 0-.018l.067-.214-.182-.133a.03.03 0 0 1 .017-.055h.224l.07-.213a.03.03 0 0 1 .033-.032.03.03 0 0 1 .031.032M8.027 11.185l.07.212h.225q.009 0 .018.006a.03.03 0 0 1 .01.034.03.03 0 0 1-.01.015l-.183.134.068.213a.03.03 0 0 1-.03.039.03.03 0 0 1-.017-.005l-.182-.13-.183.13a.03.03 0 0 1-.018.005.03.03 0 0 1-.017-.006.03.03 0 0 1-.011-.033l.067-.213-.182-.134a.03.03 0 0 1 .017-.055h.224l.07-.212a.032.032 0 1 1 .064 0M8.89 7.281l.071.213h.224a.03.03 0 0 1 .018.054l-.183.134.068.213a.03.03 0 0 1-.046.034l-.183-.13-.183.13a.03.03 0 0 1-.046-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.032.032 0 1 1 .064 0M8.89 8.394l.071.212h.224a.03.03 0 0 1 .018.055l-.183.134.068.213a.03.03 0 0 1-.046.034l-.183-.13-.183.13a.03.03 0 0 1-.045-.015.03.03 0 0 1-.001-.019l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M8.89 9.506l.071.213h.224a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.046.033l-.183-.13-.183.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 1 1 .064 0M8.89 10.618l.071.213h.224a.03.03 0 0 1 .029.02.03.03 0 0 1-.011.034l-.183.134.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.034 0l-.183-.13-.183.13a.03.03 0 0 1-.045-.014.03.03 0 0 1-.001-.019l.068-.213-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.213a.03.03 0 0 1 .032-.032.03.03 0 0 1 .032.032M9.754 6.735l.07.212h.225a.03.03 0 0 1 .028.04.03.03 0 0 1-.01.015l-.183.134.067.213a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M9.754 7.848l.07.212h.225a.03.03 0 0 1 .017.055l-.182.133.067.214a.03.03 0 0 1-.046.034l-.183-.13-.182.13a.03.03 0 0 1-.047-.034l.068-.214-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.212a.032.032 0 1 1 .064 0M9.754 8.96l.07.213h.225a.03.03 0 0 1 .017.054l-.182.134.067.214a.03.03 0 0 1-.046.033l-.183-.13-.182.13a.03.03 0 0 1-.047-.033l.068-.214-.183-.134a.03.03 0 0 1 .018-.054h.224l.07-.212a.032.032 0 0 1 .064 0M9.754 10.073l.07.213h.225a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.035l-.183.133.067.213a.03.03 0 0 1-.011.033.03.03 0 0 1-.035 0l-.183-.13-.182.131a.03.03 0 0 1-.046-.015.03.03 0 0 1 0-.018l.067-.214-.183-.133a.03.03 0 0 1 0-.05.03.03 0 0 1 .018-.005h.224l.07-.213a.03.03 0 0 1 .032-.032.03.03 0 0 1 .032.032M9.754 11.185l.07.212h.225q.01 0 .017.006a.03.03 0 0 1 .011.034.03.03 0 0 1-.01.015l-.183.134.067.213a.03.03 0 0 1-.028.039.03.03 0 0 1-.018-.005l-.183-.13-.182.13a.03.03 0 0 1-.018.005.03.03 0 0 1-.017-.006.03.03 0 0 1-.012-.033l.068-.213-.183-.134a.03.03 0 0 1 0-.049.03.03 0 0 1 .018-.006h.224l.07-.212a.032.032 0 1 1 .064 0M10.617 7.281l.071.213h.224a.03.03 0 0 1 .018.054l-.183.134.068.213a.03.03 0 0 1-.001.019.03.03 0 0 1-.046.015l-.182-.13-.183.13a.03.03 0 0 1-.046-.034l.067-.213-.182-.134a.03.03 0 0 1 0-.048.03.03 0 0 1 .017-.006h.224l.071-.213a.032.032 0 0 1 .054-.022q.01.01.01.022M10.617 8.394l.071.212h.224a.03.03 0 0 1 .018.055l-.183.134.068.213a.03.03 0 0 1-.001.019.03.03 0 0 1-.046.015l-.182-.13-.183.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.067-.214-.182-.134a.03.03 0 0 1 0-.049.03.03 0 0 1 .017-.006h.224l.071-.212a.03.03 0 0 1 .032-.032.03.03 0 0 1 .031.032M10.617 9.506l.071.213h.224a.03.03 0 0 1 .018.055l-.183.133.068.214a.03.03 0 0 1-.001.018.03.03 0 0 1-.028.02.03.03 0 0 1-.018-.005l-.182-.13-.183.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.067-.214-.182-.133a.03.03 0 0 1 0-.05.03.03 0 0 1 .017-.005h.224l.071-.213a.03.03 0 0 1 .032-.031.03.03 0 0 1 .031.031M10.617 10.618l.071.213h.224a.03.03 0 0 1 .028.02.03.03 0 0 1-.01.034l-.183.134.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.035 0l-.182-.13-.183.13a.03.03 0 0 1-.035 0 .03.03 0 0 1-.011-.033l.067-.213-.182-.134a.03.03 0 0 1 .017-.054h.224l.071-.213q0-.012.01-.022a.032.032 0 0 1 .053.022M11.48 6.735l.071.212h.224a.03.03 0 0 1 .029.021.03.03 0 0 1-.011.034l-.183.134.068.213a.03.03 0 0 1 0 .018.03.03 0 0 1-.046.015l-.183-.13-.183.13a.03.03 0 0 1-.045-.015.03.03 0 0 1-.001-.018l.068-.213-.183-.134a.03.03 0 0 1-.01-.034.03.03 0 0 1 .028-.021h.224l.07-.212q0-.014.01-.023a.032.032 0 0 1 .054.023M11.48 7.848l.071.212h.224a.03.03 0 0 1 .029.021.03.03 0 0 1-.011.034l-.183.133.068.214a.03.03 0 0 1 0 .018.03.03 0 0 1-.046.015l-.183-.13-.183.13a.03.03 0 0 1-.034 0 .03.03 0 0 1-.011-.015.03.03 0 0 1-.001-.018l.068-.214-.183-.133a.03.03 0 0 1 0-.049.03.03 0 0 1 .018-.006h.224l.07-.212a.03.03 0 0 1 .032-.032q.012 0 .022.01.01.008.01.022M11.48 8.96l.071.213h.224a.03.03 0 0 1 .028.04.03.03 0 0 1-.01.014l-.183.134.068.214a.03.03 0 0 1 0 .018.03.03 0 0 1-.046.015l-.183-.13-.183.13a.03.03 0 0 1-.034 0 .03.03 0 0 1-.011-.015.03.03 0 0 1-.001-.018l.068-.214-.183-.134a.03.03 0 0 1-.01-.033.03.03 0 0 1 .028-.02h.224l.07-.213q0-.014.01-.023a.03.03 0 0 1 .044 0q.01.01.01.023M11.48 10.073l.071.213h.224a.03.03 0 0 1 .018.055l-.183.133.068.213a.03.03 0 0 1-.012.033.03.03 0 0 1-.034.001l-.183-.13-.183.13a.03.03 0 0 1-.046-.034l.068-.213-.183-.133a.03.03 0 0 1 .018-.055h.224l.07-.213a.032.032 0 0 1 .054-.022q.01.01.01.022M11.48 11.185l.071.212h.224q.01 0 .018.006.008.007.01.015a.03.03 0 0 1-.01.034l-.183.134.068.213a.03.03 0 0 1 0 .019.03.03 0 0 1-.012.014.03.03 0 0 1-.017.006.03.03 0 0 1-.017-.005l-.183-.13-.183.13a.03.03 0 0 1-.017.005.03.03 0 0 1-.029-.039l.068-.213-.183-.134a.03.03 0 0 1 .018-.055h.224l.07-.212q0-.013.01-.022a.03.03 0 0 1 .044 0q.01.009.01.022" }), jsxRuntime.jsx("path", { stroke: "#CCC", strokeMiterlimit: 10, strokeWidth: 0.5, d: "M5.15 18.173a1.66 1.66 0 0 1-1.65-1.665V7.625a1.644 1.644 0 0 1 1.65-1.624h14.7a1.644 1.644 0 0 1 1.65 1.624v8.883a1.66 1.66 0 0 1-1.65 1.665z" })] }));
}
SvgUsa.propTypes = {
    className: PropTypes.string,
};

function SvgUser({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.772 12.843a3.98 3.98 0 0 1-3.983-3.798h7.966a3.98 3.98 0 0 1-3.983 3.798M19.93 20.999H17.08v-6.09q.412.332.772.718A7.83 7.83 0 0 1 19.929 21m-11.3 0H5.75a7.83 7.83 0 0 1 2.076-5.371q.375-.402.804-.743zm6.425-4.051h-4.399v-3.181a6.7 6.7 0 0 1 4.4.01zM13.013 3l6.535 5.539H6.256zM9.136 21v-3.545h7.438V21zm6.425-4.052v-3.044q.524.2 1.012.477v2.567zm-6.425 0v-2.584a7.5 7.5 0 0 1 1.013-.472v3.056z" })] }));
}
SvgUser.propTypes = {
    className: PropTypes.string,
};

function SvgUsers({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 25 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.867 14.459H5.292V12.58h3.943v.76c-.5.314-.96.69-1.368 1.119m-2.84 0H3.5a4.15 4.15 0 0 1 1.1-2.847q.2-.213.427-.395v3.242m4.48-1.278v-.598q.196.204.418.382-.209.097-.418.214zm-.272-.87h-.537v-.878q.221.452.537.845zm-3.405 0h-.538v-1.37a4 4 0 0 1 .538-.25zm2.6 0H6.1v-1.686a3.56 3.56 0 0 1 2.293-.007q.017.063.039.134v1.559zm-1.208-2.176a2.1 2.1 0 0 1-.965-.232h1.93c-.299.153-.63.233-.965.232m-1.665-.808a2.1 2.1 0 0 1-.446-1.204h1.933zm1.82-1.474h-3.61l3.582-2.937L9.134 6.43zM19.721 14.459h-2.579a7.5 7.5 0 0 0-1.364-1.22v-.657h3.943v1.879zm1.778 0H19.99v-3.226q.219.176.41.38a4.15 4.15 0 0 1 1.1 2.846m-5.989-1.396a7 7 0 0 0-.51-.287q.275-.23.511-.499v.787m4.21-.751h-.537v-1.613q.278.105.538.253zm-3.405 0h-.537v-.372q.325-.451.537-.967zm2.601 0h-2.33v-1.687a3.56 3.56 0 0 1 2.33.006zm-1.21-2.177c-.38 0-.755-.104-1.082-.299v-.015h2.194c-.334.206-.72.314-1.112.314m1.738-.908-1.319-1.105h1.694a2.1 2.1 0 0 1-.373 1.104zm1.852-1.374h-3.492l-1.758-1.471 1.787-1.466 3.465 2.935zM12.503 4.5l5.682 4.816H6.628zM9.9 12.103a3.46 3.46 0 0 0 2.395.955 3.46 3.46 0 0 0 3.462-3.302H8.83c.041.89.425 1.731 1.07 2.346M16.04 20.149h2.476a6.8 6.8 0 0 0-1.804-4.67 6.4 6.4 0 0 0-.672-.624zM6.189 20.149h2.504v-5.316a6.4 6.4 0 0 0-.7.646 6.8 6.8 0 0 0-1.804 4.67M10.455 16.624h3.824v-2.752a5.83 5.83 0 0 0-3.824-.01zM9.133 17.068v3.082h6.466v-3.082zM14.719 13.98v2.645l.88.003v-2.23a6.5 6.5 0 0 0-.88-.418M9.133 14.38v2.248h.88V13.97a6.5 6.5 0 0 0-.88.41" })] }));
}
SvgUsers.propTypes = {
    className: PropTypes.string,
};

function SvgVendor({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M4.76 21V8.664a1.32 1.32 0 0 1-1.01-1.282V4.319A1.32 1.32 0 0 1 5.07 3h13.19a1.32 1.32 0 0 1 1.321 1.32v3.062a1.32 1.32 0 0 1-.974 1.273V21zm12.462-4.846v-7.96a1.3 1.3 0 0 1-.28-.813 1.32 1.32 0 1 1-2.64 0 1.318 1.318 0 1 1-2.637 0 1.319 1.319 0 0 1-2.64 0 1.32 1.32 0 1 1-2.639 0c0 .274-.085.54-.243.764v8.008H8.94a3.23 3.23 0 0 1 .834-1.775q.156-.168.335-.31v2.085h.21v-1.015h3.098v1.015h.21v-2.074q.173.137.322.299a3.23 3.23 0 0 1 .834 1.775zm-4.22-1.225V13.66q.216.084.421.199v1.069zm-2.677 0v-1.077q.204-.112.422-.196v1.273zm.633 0v-1.325a2.8 2.8 0 0 1 1.832.005v1.32zm-.778-3.291h3.318a1.66 1.66 0 0 1-1.658 1.578 1.66 1.66 0 0 1-1.66-1.58zm-1.055-.211 2.814-2.308 2.722 2.308z" })] }));
}
SvgVendor.propTypes = {
    className: PropTypes.string,
};

function SvgVie({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("rect", { width: 18, height: 12.857, x: 3, y: 6, fill: "#fff", rx: 2 }), jsxRuntime.jsx("mask", { id: "vie_svg__a", width: 18, height: 13, x: 3, y: 6, maskUnits: "userSpaceOnUse", style: {
                    maskType: "luminance",
                }, children: jsxRuntime.jsx("rect", { width: 18, height: 12.857, x: 3, y: 6, fill: "#fff", rx: 2 }) }), jsxRuntime.jsxs("g", { mask: "url(#vie_svg__a)", children: [jsxRuntime.jsx("path", { fill: "#EA403F", d: "M3 6h18v12.857H3z" }), jsxRuntime.jsx("path", { fill: "#FFFE4E", fillRule: "evenodd", d: "m12 13.933-2.267 1.616.836-2.656-2.237-1.656 2.784-.025.884-2.64.884 2.64 2.784.025-2.237 1.656.836 2.656z", clipRule: "evenodd" })] })] }));
}
SvgVie.propTypes = {
    className: PropTypes.string,
};

function SvgViewCard({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M13.563 3.25h7.5c.517 0 .937.42.937.938v6.25c0 .517-.42.937-.937.937h-7.5a.937.937 0 0 1-.938-.937v-6.25c0-.518.42-.938.938-.938m-3.126 0h-7.5A.937.937 0 0 0 2 4.188v6.25c0 .517.42.937.938.937h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938M2 13.563v6.25c0 .517.42.937.938.937h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938h-7.5a.937.937 0 0 0-.938.938m11.563 7.187h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938h-7.5a.937.937 0 0 0-.938.938v6.25c0 .517.42.937.938.937" })] }));
}
SvgViewCard.propTypes = {
    className: PropTypes.string,
};

function SvgViewList({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M7.833 10.438v3.124c0 .518-.42.938-.937.938H2.938A.937.937 0 0 1 2 13.563v-3.126c0-.517.42-.937.938-.937h3.958c.518 0 .937.42.937.938M2 16.688v3.125c0 .517.42.937.938.937h3.958c.518 0 .937-.42.937-.937v-3.125a.937.937 0 0 0-.937-.938H2.938a.937.937 0 0 0-.938.938M6.896 3.25H2.938A.937.937 0 0 0 2 4.188v3.125c0 .517.42.937.938.937h3.958c.518 0 .937-.42.937-.937V4.188a.937.937 0 0 0-.937-.938m3.125 17.5h11.042c.517 0 .937-.42.937-.937v-3.125a.937.937 0 0 0-.937-.938H10.02a.937.937 0 0 0-.938.938v3.125c0 .517.42.937.938.937M9.083 4.188v3.125c0 .517.42.937.938.937h11.042c.517 0 .937-.42.937-.937V4.188a.937.937 0 0 0-.937-.938H10.02a.937.937 0 0 0-.938.938m.938 10.312h11.042c.517 0 .937-.42.937-.937v-3.126a.937.937 0 0 0-.937-.937H10.02a.937.937 0 0 0-.938.938v3.124c0 .518.42.938.938.938" })] }));
}
SvgViewList.propTypes = {
    className: PropTypes.string,
};

function SvgWaterColor({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M8.791 7.707c.133.128.323.128.474.036a4.9 4.9 0 0 1 1.764-.716c.17-.037.303-.165.303-.349V3.354c0-.22-.19-.386-.398-.349a9.2 9.2 0 0 0-4.531 1.818.34.34 0 0 0-.02.533zM14.726 7.762a4.9 4.9 0 0 0-1.763-.716c-.17-.037-.304-.184-.285-.35V3.355c0-.202.19-.367.398-.349a9.2 9.2 0 0 1 4.532 1.818c.17.129.17.386.019.533L15.2 7.726c-.133.128-.322.128-.474.036M3.38 11.628h3.432a.38.38 0 0 0 .36-.293q.2-.937.74-1.708c.095-.147.095-.331-.038-.46l-2.446-2.35c-.151-.147-.417-.147-.55.018a8.6 8.6 0 0 0-1.877 4.39.372.372 0 0 0 .38.403M7.893 14.916a4.6 4.6 0 0 1-.74-1.708.364.364 0 0 0-.36-.294H3.381c-.228 0-.399.184-.36.386a8.6 8.6 0 0 0 1.876 4.39.367.367 0 0 0 .55.017l2.427-2.35c.114-.11.114-.294.019-.441M17.202 12.914h3.432c.228 0 .398.184.36.404a8.6 8.6 0 0 1-1.877 4.39c-.132.165-.398.165-.55.018l-2.426-2.351c-.133-.129-.133-.312-.038-.46q.54-.77.74-1.707a.38.38 0 0 1 .36-.294M11.04 16.954a4.9 4.9 0 0 1-1.763-.716c-.151-.092-.34-.092-.474.037l-2.427 2.37c-.151.146-.151.403.02.532a9.2 9.2 0 0 0 4.53 1.818c.21.018.399-.147.399-.35v-3.342c.019-.165-.114-.312-.284-.349M17.203 11.628a.364.364 0 0 1-.36-.293 4.5 4.5 0 0 0-.721-1.708c-.095-.147-.095-.331.038-.46l2.408-2.332a.367.367 0 0 1 .55.018 8.6 8.6 0 0 1 1.877 4.39c.038.202-.133.385-.36.385zM15.212 16.293c-.133-.128-.322-.128-.474-.037a4.9 4.9 0 0 1-1.763.717c-.171.037-.304.165-.304.349v3.324c0 .22.19.386.398.349a9.2 9.2 0 0 0 4.532-1.818.34.34 0 0 0 .019-.533z" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.49 9.368c.37.607 1.592 2.632 1.592 3.52 0 1.121-.933 2.009-2.075 2.009-1.141 0-2.074-.903-2.074-2.01 0-.887 1.222-2.912 1.592-3.519a.55.55 0 0 1 .482-.265.55.55 0 0 1 .483.265m-.746 2.674.006-.01c.097-.157.049-.359-.08-.437-.08-.047-.177-.062-.257-.047a.32.32 0 0 0-.21.14c-.032.047-.755 1.169-.144 2.056.064.094.16.14.273.14a.34.34 0 0 0 .177-.062.3.3 0 0 0 .145-.202.31.31 0 0 0-.048-.234c-.351-.502.079-1.242.138-1.344", clipRule: "evenodd" })] }));
}
SvgWaterColor.propTypes = {
    className: PropTypes.string,
};

function SvgWaterInput({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", d: "M12.242 20.985a7.45 7.45 0 0 1-4.767-1.35C6.165 18.579 5.5 16.872 5.5 14.563c0-2.565 1.834-5.572 3.37-7.643A37 37 0 0 1 12.243 3l.01.008a37 37 0 0 1 3.359 3.91c1.537 2.07 3.37 5.077 3.37 7.643 0 2.309-.664 4.016-1.974 5.073a7.45 7.45 0 0 1-4.765 1.351m4.068-8.198a9.7 9.7 0 0 1-1.091 2.495 7.4 7.4 0 0 1-1.35 1.489c-.543.5-1.012.933-.978 1.27a.44.44 0 0 0 .248.323c.272.168.584.258.904.26a2.61 2.61 0 0 0 2.104-1.497c.836-1.39.17-4.31.16-4.34z" })] }));
}
SvgWaterInput.propTypes = {
    className: PropTypes.string,
};

function SvgWaterQuality({ title, titleId, ...props }) {
    return (jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 24 24", "aria-labelledby": titleId, ...props, children: [title ? jsxRuntime.jsx("title", { id: titleId, children: title }) : null, jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "m11.936 3.22-.436.322-.436-.322a.542.542 0 0 1 .872 0M11.5 4.47a72 72 0 0 0-2.517 3.808c-.74 1.207-1.472 2.506-2.018 3.698-.555 1.214-.882 2.244-.882 2.94a5.417 5.417 0 0 0 10.834 0c0-.696-.327-1.726-.882-2.94-.546-1.192-1.278-2.49-2.018-3.698A69 69 0 0 0 11.5 4.47m0-.928-.436-.322-.005.007-.013.018-.051.07q-.068.091-.191.265a70.525 70.525 0 0 0-2.745 4.132c-.75 1.226-1.508 2.565-2.079 3.814-.562 1.227-.98 2.442-.98 3.39a6.5 6.5 0 0 0 13 0c0-.948-.419-2.163-.98-3.39-.571-1.249-1.329-2.588-2.079-3.814a71 71 0 0 0-2.936-4.397l-.05-.07-.014-.018-.005-.007z", clipRule: "evenodd" }), jsxRuntime.jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M14.632 13.807a.5.5 0 0 1 .579.405 3.41 3.41 0 0 1-1.998 3.608.5.5 0 1 1-.426-.905c1.4-.658 1.537-1.975 1.44-2.53a.5.5 0 0 1 .405-.578", clipRule: "evenodd" })] }));
}
SvgWaterQuality.propTypes = {
    className: PropTypes.string,
};

exports.JalaAccess = SvgAccess;
exports.JalaAchievement = SvgAchievement;
exports.JalaActivity2 = SvgActivity2;
exports.JalaAge = SvgAge;
exports.JalaAiGenerate = SvgAiGenerate;
exports.JalaAnco = SvgAnco;
exports.JalaBar = SvgBar;
exports.JalaBiomass = SvgBiomass;
exports.JalaChemical = SvgChemical;
exports.JalaCloudy = SvgCloudy;
exports.JalaCoin = SvgCoin;
exports.JalaConfirmStep = SvgConfirmStep;
exports.JalaCultivationReport = SvgCultivationReport;
exports.JalaDanger = SvgDanger;
exports.JalaDebt = SvgDebt;
exports.JalaDebtLoan = SvgDebtLoan;
exports.JalaDisease = SvgDisease;
exports.JalaDiseaseInput = SvgDiseaseInput;
exports.JalaDo = SvgDo;
exports.JalaElectricity = SvgElectricity;
exports.JalaEmptyStock = SvgEmptyStock;
exports.JalaEsp = SvgEsp;
exports.JalaExpense = SvgExpense;
exports.JalaExpenseMenu = SvgExpenseMenu;
exports.JalaFarm = SvgFarm;
exports.JalaFarmStep = SvgFarmStep;
exports.JalaFarmStory = SvgFarmStory;
exports.JalaFeed = SvgFeed;
exports.JalaFeedCumulative = SvgFeedCumulative;
exports.JalaFilter = SvgFilter;
exports.JalaFinance = SvgFinance;
exports.JalaFinanceDue = SvgFinanceDue;
exports.JalaFinancialReport = SvgFinancialReport;
exports.JalaFinancialReport2 = SvgFinancialReport2;
exports.JalaFixedAssetMenuPaddleWheel = SvgFixedAssetMenuPaddleWheel;
exports.JalaFood = SvgFood;
exports.JalaFry = SvgFry;
exports.JalaFuel = SvgFuel;
exports.JalaHarvest = SvgHarvest;
exports.JalaHeavySnow = SvgHeavySnow;
exports.JalaHelp = SvgHelp;
exports.JalaHome = SvgHome;
exports.JalaHotNews = SvgHotNews;
exports.JalaHr = SvgHr;
exports.JalaIdn = SvgIdn;
exports.JalaIncome = SvgIncome;
exports.JalaIncomeMenu = SvgIncomeMenu;
exports.JalaInfo = SvgInfo;
exports.JalaInsight = SvgInsight;
exports.JalaInventory = SvgInventory;
exports.JalaJala = SvgJala;
exports.JalaJali = SvgJali;
exports.JalaLamp = SvgLamp;
exports.JalaLine = SvgLine;
exports.JalaLoan = SvgLoan;
exports.JalaLowStock = SvgLowStock;
exports.JalaMicrobiology = SvgMicrobiology;
exports.JalaModal = SvgModal;
exports.JalaMortality = SvgMortality;
exports.JalaNews = SvgNews;
exports.JalaNotification = SvgNotification;
exports.JalaOperational = SvgOperational;
exports.JalaOthers = SvgOthers;
exports.JalaParameter = SvgParameter;
exports.JalaPh = SvgPh;
exports.JalaPicture = SvgPicture;
exports.JalaPie = SvgPie;
exports.JalaPlankton = SvgPlankton;
exports.JalaPlatform = SvgPlatform;
exports.JalaPlatformMobile = SvgPlatformMobile;
exports.JalaPlatformPc = SvgPlatformPc;
exports.JalaPlus = SvgPlus;
exports.JalaPoints = SvgPoints;
exports.JalaPond = SvgPond;
exports.JalaPondStep = SvgPondStep;
exports.JalaPremium = SvgPremium;
exports.JalaPreparation = SvgPreparation;
exports.JalaPrice = SvgPrice;
exports.JalaPricePrediction = SvgPricePrediction;
exports.JalaPro = SvgPro;
exports.JalaProbiotic = SvgProbiotic;
exports.JalaProduct = SvgProduct;
exports.JalaProductCategories = SvgProductCategories;
exports.JalaProfile = SvgProfile;
exports.JalaPublic = SvgPublic;
exports.JalaRainHeavy = SvgRainHeavy;
exports.JalaRainNormal = SvgRainNormal;
exports.JalaRainStorm = SvgRainStorm;
exports.JalaRefresh = SvgRefresh;
exports.JalaReminder = SvgReminder;
exports.JalaRfid = SvgRfid;
exports.JalaRole = SvgRole;
exports.JalaSalinity = SvgSalinity;
exports.JalaSampling = SvgSampling;
exports.JalaShop = SvgShop;
exports.JalaShrimp = SvgShrimp;
exports.JalaShrimpWallet = SvgShrimpWallet;
exports.JalaSimulation = SvgSimulation;
exports.JalaSnowNormal = SvgSnowNormal;
exports.JalaSnowstorm = SvgSnowstorm;
exports.JalaSocial = SvgSocial;
exports.JalaSpecies = SvgSpecies;
exports.JalaSrEstimation = SvgSrEstimation;
exports.JalaStackedBar = SvgStackedBar;
exports.JalaStackedLine = SvgStackedLine;
exports.JalaStartCycle = SvgStartCycle;
exports.JalaStock = SvgStock;
exports.JalaStockAdjust = SvgStockAdjust;
exports.JalaStockAsset = SvgStockAsset;
exports.JalaStockUser = SvgStockUser;
exports.JalaSubtraction = SvgSubtraction;
exports.JalaSuccess = SvgSuccess;
exports.JalaSunny = SvgSunny;
exports.JalaSunnyCloudy = SvgSunnyCloudy;
exports.JalaSunnyHeavy = SvgSunnyHeavy;
exports.JalaTable = SvgTable;
exports.JalaTag = SvgTag;
exports.JalaTemperature = SvgTemperature;
exports.JalaTimeDay = SvgTimeDay;
exports.JalaTimeNight = SvgTimeNight;
exports.JalaTools = SvgTools;
exports.JalaToolsParameter = SvgToolsParameter;
exports.JalaTopStock = SvgTopStock;
exports.JalaTrading = SvgTrading;
exports.JalaTransparency = SvgTransparency;
exports.JalaTreatmentBottle = SvgTreatmentBottle;
exports.JalaTreatmentInput = SvgTreatmentInput;
exports.JalaUsa = SvgUsa;
exports.JalaUser = SvgUser;
exports.JalaUsers = SvgUsers;
exports.JalaVendor = SvgVendor;
exports.JalaVie = SvgVie;
exports.JalaViewCard = SvgViewCard;
exports.JalaViewList = SvgViewList;
exports.JalaWaterColor = SvgWaterColor;
exports.JalaWaterInput = SvgWaterInput;
exports.JalaWaterQuality = SvgWaterQuality;
