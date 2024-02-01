'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const SvgAchievement = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.68 15.36a1.203 1.203 0 0 1-.858-.356l-1.096-1.1h-1.56a1.212 1.212 0 0 1-1.211-1.211v-1.557l-1.1-1.1a1.212 1.212 0 0 1 0-1.713l1.1-1.1V5.667a1.212 1.212 0 0 1 1.212-1.212h1.555l1.1-1.1a1.212 1.212 0 0 1 1.715 0l1.1 1.1h1.555a1.212 1.212 0 0 1 1.212 1.212v1.559l1.1 1.097a1.212 1.212 0 0 1 0 1.713l-1.1 1.1v1.556a1.212 1.212 0 0 1-1.212 1.212h-1.556l-1.1 1.1a1.203 1.203 0 0 1-.857.355m0-10.23a4.05 4.05 0 1 0 0 8.099 4.05 4.05 0 0 0 0-8.099m0 7.425a3.375 3.375 0 1 1 3.374-3.375 3.38 3.38 0 0 1-3.375 3.375"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.443 21v-6.444h.28l1.1 1.099c.157.158.356.27.573.322v3.902zm4.585 0-1.98-1.137v-3.91c.185-.058.353-.16.49-.298l1.098-1.1h.391v6.443z"
  }));
};

const SvgActivity2 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.978 6.108h-1.43v.947c0 .701-.614 1.27-1.37 1.27H8.72c-.756 0-1.37-.569-1.37-1.27v-.947H6.001C5.45 6.108 5 6.525 5 7.036v13.036c0 .511.45.928 1.001.928h11.997c.552 0 1.002-.417 1.002-.928V7.036c0-.511-.45-.928-1.022-.928M7.412 10.939l.245-.227a.273.273 0 0 1 .368 0l.613.568 1.328-1.231a.274.274 0 0 1 .368 0l.225.208a.223.223 0 0 1 .02.322l-1.737 1.857a.264.264 0 0 1-.388 0l-1.022-1.194c-.122-.094-.122-.227-.02-.303m3.168 6.006L8.822 18.84c-.102.114-.307.114-.388 0L7.37 17.627a.224.224 0 0 1 .02-.322l.245-.227a.273.273 0 0 1 .368 0l.634.568 1.349-1.25a.274.274 0 0 1 .367 0l.246.227a.27.27 0 0 1-.02.322m0-3.183-1.758 1.895c-.102.114-.307.114-.388 0L7.37 14.444a.224.224 0 0 1 .02-.322l.245-.227a.273.273 0 0 1 .368 0l.634.568 1.349-1.25a.273.273 0 0 1 .367 0l.246.227c.061.076.061.228-.02.322m6.11 4.396c0 .095-.081.17-.183.17H12.01c-.102 0-.184-.075-.184-.17v-.607c0-.094.082-.17.184-.17h4.497c.102 0 .183.076.183.17zm0-3.202c0 .095-.081.17-.183.17H12.01c-.102 0-.184-.075-.184-.17v-.607c0-.094.082-.17.184-.17h4.497c.102 0 .183.076.183.17zm0-3.183c0 .095-.081.17-.183.17H12.01c-.102 0-.184-.075-.184-.17v-.607c0-.094.082-.17.184-.17h4.497c.102 0 .183.076.183.17z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.72 7.471h6.478c.245 0 .45-.19.45-.416V5.349c0-.227-.204-.416-.45-.416h-1.062C14.074 3.853 13.114 3 11.949 3c-1.165 0-2.105.853-2.167 1.933H8.72c-.246 0-.45.19-.45.416v1.706c0 .227.204.416.45.416m3.229-3.22c.45 0 .838.34.838.776 0 .417-.368.777-.838.777-.45 0-.838-.34-.838-.777a.826.826 0 0 1 .838-.777"
  }));
};

const SvgActivity = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.437 5.882a8.178 8.178 0 0 1 9.13.018 8.19 8.19 0 0 1 3.013 3.725s-3.214-3.404-7.593-3.095A6.522 6.522 0 0 0 6.692 9.56h1.236L5.464 12.48 3 9.561h1.423a8.189 8.189 0 0 1 3.014-3.68"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.466 15.557h.6a.65.65 0 0 0 .65-.651v-1.724h1.723a.65.65 0 0 0 .649-.65v-.6a.652.652 0 0 0-.649-.65h-1.723V9.557a.652.652 0 0 0-.65-.65h-.6a.65.65 0 0 0-.649.65v1.725H9.095a.65.65 0 0 0-.649.65v.6a.652.652 0 0 0 .649.65h1.722v1.725a.651.651 0 0 0 .65.65"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.536 11.524 21 14.44h-1.424a8.193 8.193 0 0 1-7.6 5.059 8.183 8.183 0 0 1-7.556-5.125s3.214 3.404 7.593 3.096a6.52 6.52 0 0 0 5.294-3.03h-1.236z"
  }));
};

const SvgAdd = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.446 18.425v-4.882H5.52a1.561 1.561 0 0 1-1.077-.463 1.535 1.535 0 0 1 0-2.157 1.561 1.561 0 0 1 1.077-.464h4.925V5.576a1.53 1.53 0 0 1 .443-1.112A1.557 1.557 0 0 1 12 4a1.567 1.567 0 0 1 1.112.464 1.541 1.541 0 0 1 .443 1.112v4.883h4.924c.406.008.793.175 1.078.463a1.536 1.536 0 0 1 0 2.157 1.562 1.562 0 0 1-1.078.463h-4.924v4.882a1.531 1.531 0 0 1-.443 1.112A1.555 1.555 0 0 1 12 20a1.567 1.567 0 0 1-1.111-.464 1.54 1.54 0 0 1-.443-1.111"
  }));
};

const SvgAge = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.332 17.09a.708.708 0 0 0 .448.06l1.708-.34a4.884 4.884 0 0 0 1.715-.35l-1.152-1.885c-.194.08-.4.125-.61.131l-1.66-.332a.707.707 0 0 0-.696.262.705.705 0 0 0-.07.737l.195.387-.195.388a.705.705 0 0 0 .317.941M10.641 16.914h.514v-4.621h.513v-.513h-.513a.513.513 0 0 0-.514.513zM16.839 16.158a4.921 4.921 0 0 0 2.347-3.196h-3.038c-.005.46-.188.9-.51 1.229zM16.001 12.26h3.287l.002-.029a.576.576 0 0 0 .003-.05v-.005l.001-.012c.006-.09.011-.17.011-.258a4.908 4.908 0 0 0-2.99-4.518l-1.257 3.948c.421.175.76.506.943.924"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M9.585 9.249c.2.2.472.313.755.313h.001a1.07 1.07 0 0 0 .754-1.824 1.07 1.07 0 0 0-1.51 0 1.07 1.07 0 0 0 0 1.51m.003-1.1a.35.35 0 0 1 .248-.103.351.351 0 0 1 0 .701.35.35 0 0 1-.248-.598",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M11.591 11.208h2.772l1.285-4.038A4.924 4.924 0 0 0 14.395 7H8.787a.702.702 0 0 0-.702.701 3.512 3.512 0 0 0 3.506 3.507m-2.206-3.67c.253-.253.597-.396.955-.396h.001a1.353 1.353 0 0 1 .955 2.307 1.354 1.354 0 0 1-1.911 0 1.353 1.353 0 0 1 0-1.91",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.316 16.863a.33.33 0 0 0 .394.293l.804-.16a2.29 2.29 0 0 0 .807-.165l-.542-.888a.81.81 0 0 1-.287.062l-.782-.156a.329.329 0 0 0-.36.47l.091.183-.091.183a.33.33 0 0 0-.034.178M8.296 15.183a.834.834 0 0 1-.24.58l.564.926a2.32 2.32 0 0 0 1.105-1.506zM7.78 14.423a.83.83 0 0 1 .445.434l1.547-.002.003-.041c.003-.043.006-.082.006-.125a2.314 2.314 0 0 0-1.409-2.127z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M4.984 13.876c.31.309.728.483 1.166.484h1.305l.605-1.901a2.295 2.295 0 0 0-.59-.08H4.83a.33.33 0 0 0-.33.33c0 .438.175.857.484 1.167m.204-.747a.165.165 0 1 1 .274-.184.165.165 0 0 1-.274.184",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.176 11.95c.022.144.053.286.092.426h.771s.05-.21.085-.426.822.16.822.16-.738-.836-.907-.836c-.169 0-.386.24-.386.24s-.204-.24-.385-.24c-.182 0-.898.838-.898.838s.775-.377.806-.162"
  }));
};

const SvgAiGenerate = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.486 5.091c.338-.83 1.513-.83 1.851 0l1.167 2.857a1 1 0 0 0 .548.548l2.857 1.166c.83.339.83 1.513 0 1.852l-2.857 1.167a1 1 0 0 0-.548.547l-1.166 2.857c-.34.83-1.513.83-1.852 0l-1.167-2.857a1 1 0 0 0-.547-.547l-2.857-1.167c-.83-.339-.83-1.513 0-1.852l2.857-1.166a1 1 0 0 0 .547-.548z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.347 14.345a.515.515 0 0 1 .953 0l.601 1.471c.053.129.154.23.283.283l1.471.6a.515.515 0 0 1 0 .954l-1.471.601a.515.515 0 0 0-.283.283l-.6 1.471a.515.515 0 0 1-.954 0l-.601-1.471a.515.515 0 0 0-.283-.283l-1.471-.6a.515.515 0 0 1 0-.954l1.471-.601a.516.516 0 0 0 .283-.283z",
    opacity: 0.5
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.63 3.442a.273.273 0 0 1 .505 0l.318.78a.273.273 0 0 0 .15.149l.779.318a.273.273 0 0 1 0 .505l-.78.318a.273.273 0 0 0-.15.15l-.317.778a.273.273 0 0 1-.505 0l-.318-.779a.273.273 0 0 0-.15-.15l-.779-.317a.273.273 0 0 1 0-.505l.78-.318a.273.273 0 0 0 .149-.15z",
    opacity: 0.2
  }));
};

const SvgAnco = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "m18.663 16.867-5.863-6.7V3h-1.6v7.166l-5.863 6.7h-.804a2.133 2.133 0 0 0 0 4.267h14.934a2.133 2.133 0 1 0 0-4.266zm-2.126 0L12 11.68l-4.537 5.186z",
    clipRule: "evenodd"
  }));
};

const SvgArchive = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M19.872 7.892H4.128v10.882a1 1 0 0 0 1 1h13.744a1 1 0 0 0 1-1zm-8.223 9.762a.907.907 0 0 0 .357.066h.016a.914.914 0 0 0 .772-.426l3.059-3.06a.91.91 0 1 0-1.288-1.287L12.9 14.61v-3.754a.91.91 0 0 0-1.821 0v3.722l-1.632-1.631a.911.911 0 1 0-1.287 1.287l3.058 3.059a.907.907 0 0 0 .43.362",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.4 5.226a1 1 0 0 1 1-1h15.2a1 1 0 0 1 1 1v1.758H3.4z"
  }));
};

const SvgArrowDown = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.009 18.067a1.416 1.416 0 0 1-1.23-.668l-4.772-4.772a1.426 1.426 0 0 1-.436-1.01 1.43 1.43 0 0 1 .883-1.329 1.431 1.431 0 0 1 1.1.01c.174.075.33.184.462.32l2.546 2.547V7.356a1.423 1.423 0 0 1 2.426-1.005 1.418 1.418 0 0 1 .417 1.005v5.858l2.598-2.595a1.421 1.421 0 0 1 2.01 2.01l-4.773 4.774a1.426 1.426 0 0 1-1.205.666h-.025z"
  }));
};

const SvgArrowUp = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.991 5.934a1.416 1.416 0 0 1 1.23.667l4.772 4.773a1.425 1.425 0 0 1 .436 1.01 1.417 1.417 0 0 1-.884 1.329 1.432 1.432 0 0 1-1.1-.01 1.417 1.417 0 0 1-.462-.32l-2.546-2.547v5.809a1.424 1.424 0 0 1-.877 1.313 1.41 1.41 0 0 1-1.088 0 1.418 1.418 0 0 1-.877-1.313v-5.859l-2.6 2.595a1.421 1.421 0 1 1-2.01-2.01l4.775-4.774a1.425 1.425 0 0 1 1.204-.666h.026z"
  }));
};

const SvgBiomass = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.018 3h13.95a1.268 1.268 0 0 1 0 2.537H5.018a1.268 1.268 0 0 1 0-2.537M10.091 6.015h3.17V7.84h-3.17zM12.733 12.863a4.485 4.485 0 0 0-.581-2.114 4.485 4.485 0 0 0-.582 2.114c0 1.167.259 2.113.582 2.113.323 0 .58-.947.58-2.113"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M18.546 21H5.44a1.693 1.693 0 0 1-1.691-1.691l1.48-9.3a1.693 1.693 0 0 1 1.69-1.691h9.934a1.693 1.693 0 0 1 1.692 1.691l1.69 9.3A1.693 1.693 0 0 1 18.546 21m-6.447-10.99a4.756 4.756 0 1 0 0 9.511 4.756 4.756 0 0 0 0-9.512",
    clipRule: "evenodd"
  }));
};

const SvgBookmarkChecked = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"
  }));
};

const SvgBookmarkUnchecked = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M7 3h10c1.1 0 2 .9 2 2v16l-7-3-7 3 .01-16c0-1.1.89-2 1.99-2m5 12.82L17 18V5H7v13z",
    clipRule: "evenodd"
  }));
};

const SvgCalendar = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M18.455 3.822h.909c1 0 1.818.818 1.818 1.818v14.545c0 1-.818 1.818-1.818 1.818H4.818c-1 0-1.818-.818-1.818-1.818V5.64c0-1 .818-1.818 1.818-1.818h.91V2.003h1.817v1.819h9.091V2.003h1.819zM4.817 20.185h14.546V8.367H4.818z",
    clipRule: "evenodd"
  }));
};

const SvgCheck = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m8.643 17.476-.255-.25a1.654 1.654 0 0 1-.48-.471l-4.201-4.111c-.279-.275-.085-1.038.434-1.71.52-.673 1.168-.99 1.448-.717l3.533 3.454 8.948-8.21a1.346 1.346 0 0 1 1.988.29 1.637 1.637 0 0 1-.07 2.175L9.963 17.14a1.2 1.2 0 0 1-.616.304c-.117.07-.247.116-.382.135a.38.38 0 0 1-.32-.102"
  }));
};

const SvgCheckboxChecked = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M6 3a3 3 0 0 0-3 3v11.673a3 3 0 0 0 3 3h11.673a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm3.886 12.619.159.155a.237.237 0 0 0 .2.06.636.636 0 0 0 .237-.085.747.747 0 0 0 .382-.189l6.231-5.726a1.019 1.019 0 0 0 .044-1.352.838.838 0 0 0-1.235-.178l-5.561 5.11-2.198-2.15c-.174-.171-.577.034-.9.445-.322.411-.446.891-.27 1.062l2.612 2.556a1.031 1.031 0 0 0 .298.291",
    clipRule: "evenodd"
  }));
};

const SvgCheckboxUnchecked = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M6 5a1 1 0 0 0-1 1v11.673a1 1 0 0 0 1 1h11.673a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h11.673a3 3 0 0 1 3 3v11.673a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z",
    clipRule: "evenodd"
  }));
};

const SvgChemical = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m7.5 14.716-1.392 4.343h12.205L16.5 14.716z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "#182230",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M13.683 4h-3.366m3.366 0c.465 0 .842.421.842.941v4.466c0 .158.035.313.103.45l4.268 8.751c.306.627-.1 1.392-.739 1.392H5.843c-.639 0-1.045-.765-.739-1.392l4.268-8.75a1.03 1.03 0 0 0 .103-.45V4.94c0-.52.377-.941.842-.941m3.366 0h2.525m-5.891 0H7.792M6.108 19.059 7.5 14.716h9l1.813 4.343z"
  }));
};

const SvgClock = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9.392 1.56c.1.065.218.1.338.1h4.38a.625.625 0 1 0 0-1.25h-4.068V7.09a.626.626 0 1 0-1.25 0v5.632a.626.626 0 0 0 .37.57c.05.11.13.203.23.268",
    clipRule: "evenodd"
  }));
};

const SvgClose = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18 7.208 16.792 6 12 10.792 7.208 6 6 7.208 10.792 12 6 16.792 7.208 18 12 13.208 16.792 18 18 16.792 13.208 12z"
  }));
};

const SvgCoin = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 8.036V5.464c0-.947 3.262-1.714 7.285-1.714 4.024 0 7.286.767 7.286 1.714v2.572c0 .947-3.262 1.714-7.286 1.714C6.261 9.75 3 8.978 3 8.036M4.714 18.32c0 .944 3.268 1.715 7.286 1.715s7.285-.77 7.285-1.714v-2.572a.686.686 0 0 0-.343-.522 23.28 23.28 0 0 1-5.228.522c-3.184 0-5.973-.48-6.943-1.194-1.326.322-2.057.746-2.057 1.194z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.428 13.178c0 .943 3.269 1.714 7.286 1.714 4.017 0 7.285-.771 7.286-1.714v-2.571c0-.604-1.31-1.152-3.505-1.466-.517.835-3.616 1.465-7.209 1.465a27.283 27.283 0 0 1-3.781-.249.471.471 0 0 0-.077.25z"
  }));
};

const SvgComment1 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.29 4.5a2.375 2.375 0 0 1 2.374 2.375v9.05L21 19.18l-4.5.035c-.07.007-.14.01-.21.01H5.374A2.375 2.375 0 0 1 3 16.85V6.875A2.375 2.375 0 0 1 5.375 4.5z"
  }));
};

const SvgComment2 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.908 6.421A1.437 1.437 0 0 0 17.892 6h-8.33a1.437 1.437 0 0 0-1.438 1.437v5.274a1.438 1.438 0 0 0 1.438 1.438h8.33c.045 0 .09-.002.134-.007L21 14.124l-1.671-1.8V7.438c0-.38-.151-.746-.421-1.016"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.724 18.587h6.415a1.437 1.437 0 0 0 1.438-1.437v-2.092H8.653a1.437 1.437 0 0 1-1.437-1.438v-1.788H5.724a1.437 1.437 0 0 0-1.438 1.437v3.804L3 18.46l2.156.012c.18.077.373.116.568.115"
  }));
};

const SvgConfirmStep = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.56 17.283a.772.772 0 0 1-.619-.307.783.783 0 0 1-.079-.82l.216-.43-.216-.431a.783.783 0 0 1 .652-1.126l2.725 2.669c-.208.029-.418.046-.628.05l-1.896.377a.786.786 0 0 1-.155.018m4.555-2.7-.962-.943c.192-.306.295-.66.298-1.02h2.803l-2.135 1.962zm2.82-2.742h-3.65a1.97 1.97 0 0 0-1.047-1.025l1.394-4.385a5.446 5.446 0 0 1 3.32 5.016c0 .102-.006.193-.012.29 0 .026 0 .053-.005.082zm-5.464-1.168H7.394A3.894 3.894 0 0 1 3.5 6.78.78.78 0 0 1 4.28 6h6.224c.47.003.936.066 1.39.188l-1.426 4.485zM5.447 7.162a.39.39 0 1 0-.003.779.39.39 0 0 0 .003-.78"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m12.769 17.923-.175-.18a1.177 1.177 0 0 1-.327-.34L9.381 14.43c-.192-.198-.061-.747.29-1.226.352-.48.793-.707.985-.51l2.425 2.5 6.074-5.873a.894.894 0 0 1 1.357.213 1.223 1.223 0 0 1-.04 1.564l-6.805 6.582a.793.793 0 0 1-.42.216.668.668 0 0 1-.26.096.252.252 0 0 1-.218-.07"
  }));
};

const SvgCopy = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.205 21a2.455 2.455 0 0 1-2.455-2.455V8.727a2.47 2.47 0 0 1 1.742-2.349c-.07.231-.105.471-.105.713v9.818a2.454 2.454 0 0 0 2.455 2.455h8.182c.24 0 .481-.036.712-.106A2.44 2.44 0 0 1 14.386 21zm3.272-3.273a2.454 2.454 0 0 1-2.454-2.454V5.455A2.455 2.455 0 0 1 9.477 3h8.182a2.454 2.454 0 0 1 2.455 2.455v9.818a2.454 2.454 0 0 1-2.455 2.454z"
  }));
};

const SvgCoupon = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.869 5.084a2.243 2.243 0 0 0-2.244 2.243v2.598a2.3 2.3 0 0 1 .839.159c.266.104.507.257.71.45.203.192.365.421.475.672a1.977 1.977 0 0 1 0 1.589c-.11.252-.272.48-.475.673a2.199 2.199 0 0 1-.71.45c-.266.104-.55.158-.839.158v2.598a2.243 2.243 0 0 0 2.244 2.243h16.264a2.243 2.243 0 0 0 2.243-2.243v-2.598a2.443 2.443 0 0 1-1.63-.607 1.974 1.974 0 0 1-.676-1.467c0-.551.243-1.078.675-1.468a2.44 2.44 0 0 1 1.63-.607V7.328a2.243 2.243 0 0 0-2.242-2.243H3.869zm5.687 13.833H6.719l.483-.731a1.122 1.122 0 0 1 1.871 0zM9.072 5.814c-.443.671-1.428.671-1.871 0l-.485-.732h2.84zm-1.82 2.122a1.122 1.122 0 0 1 1.87 0l.484.731H6.768zm2.354.733-.484.731c-.443.67-1.428.67-1.87 0l-.485-.731zm-2.355 2.6a1.122 1.122 0 0 1 1.871 0l.484.73H6.768zm2.355.732-.484.73c-.443.671-1.428.671-1.87 0l-.485-.73zm-2.355 2.696a1.122 1.122 0 0 1 1.871 0l.484.732H6.768zm2.355.732-.484.732c-.443.67-1.428.67-1.87 0l-.485-.731z"
  }));
};

const SvgCultivationReport = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.227 2.004h-7.68a.927.927 0 0 0-.922.937v18.11c0 .518.411.936.922.936h12.902c.511 0 .922-.418.922-.937V8.25h-5.222a.932.932 0 0 1-.922-.937zm-.718 9.602c.318.002.636.044.942.127l-.966 3.041h-2.088a2.643 2.643 0 0 1-2.64-2.64.528.528 0 0 1 .527-.528zm-3.578 1.271a.268.268 0 0 1-.098-.118.267.267 0 0 1 .192-.36.264.264 0 1 1-.095.48zm4.786 2.688a1.328 1.328 0 0 0-.71-.695l.945-2.973a3.706 3.706 0 0 1 2.252 3.402c0 .067-.003.128-.009.196l-.004.07zm-.274 1.454c.244-.247.382-.578.385-.925h2.287a3.703 3.703 0 0 1-1.768 2.406zm-.441.288.868 1.419c-.412.165-.85.254-1.293.263l-1.286.258a.528.528 0 0 1-.576-.753l.146-.292-.146-.292a.531.531 0 0 1 .052-.556.525.525 0 0 1 .524-.197l1.252.25c.158-.006.313-.04.459-.1"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.403 7.144h4.001a1.179 1.179 0 0 0-.232-.335c-4.822-4.821-4.61-4.672-4.91-4.804v3.997c0 .632.51 1.142 1.14 1.142"
  }));
};

const SvgDebt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M5.183 10.653V7.796h.84L7.8 10.652h1.752c-.34-.488-1.07-1.57-2.19-3.243.442-.193.783-.46 1.024-.8.24-.342.361-.732.361-1.17 0-.75-.242-1.309-.728-1.675-.485-.37-1.234-.555-2.245-.555H3.605v7.443zm.51-4.14h-.51V4.502h.479c.51 0 .884.075 1.125.224.245.15.367.4.367.754 0 .356-.119.617-.357.784-.237.166-.606.25-1.104.25M12.272 10.026c.38.486.905.728 1.574.728a1.95 1.95 0 0 0 1.16-.35c.33-.235.583-.576.76-1.024.179-.448.269-.976.269-1.584 0-.923-.19-1.644-.57-2.164-.38-.519-.907-.779-1.579-.779-.712 0-1.25.282-1.614.845h-.07l-.22-.738H10.72v8.198h1.553V10.85c0-.075-.027-.35-.081-.825zm.275-3.574c.177-.238.457-.356.84-.356.367 0 .635.14.805.422.173.279.26.698.26 1.258 0 1.147-.348 1.72-1.044 1.72-.394 0-.682-.132-.866-.396-.18-.265-.27-.703-.27-1.314v-.168c.007-.543.099-.932.275-1.166",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.965 15.637h-1.74v3.51h1.74l6.74 1.233a1 1 0 0 0 .484-.03l5.005-1.599a.2.2 0 0 0 .126-.261l-.335-.885a1 1 0 0 0-1.165-.619l-3.57.843a1 1 0 0 1-.586-.039l-2.503-.956a.2.2 0 0 1-.129-.187v-.22c0-.11.09-.2.2-.2h1.824a1 1 0 0 0 1-1v-.603a.2.2 0 0 0-.2-.2h-4.198a1 1 0 0 0-.442.103zM3.605 15.672h1.77v3.505h-1.77z"
  }));
};

const SvgDelete = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.984 3.984V6H5.016V3.984h3.468L9.516 3h4.968l1.032.984zM6 18.984v-12h12v12c0 .532-.203 1-.61 1.407-.406.406-.874.609-1.406.609H8.016c-.532 0-1-.203-1.407-.61-.406-.406-.609-.874-.609-1.406"
  }));
};

const SvgDiseaseInput = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.684 21v-5.684H3V8.685h5.684V3h6.632v5.685H21v6.631h-5.684V21z"
  }));
};

const SvgDisease = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.572 13.873v-.828a5.399 5.399 0 0 1-4.908-5.373v-.704A1.151 1.151 0 0 1 3 5.924v-.771a1.153 1.153 0 0 1 2.306 0v.77a1.152 1.152 0 0 1-.62 1.023v.69a4.417 4.417 0 0 0 4.409 4.41 4.413 4.413 0 0 0 4.407-4.41V6.98a1.152 1.152 0 0 1-.687-1.052v-.77a1.153 1.153 0 0 1 2.305 0v.77a1.155 1.155 0 0 1-.67 1.048v.702a5.399 5.399 0 0 1-4.834 5.365v.82a4.504 4.504 0 0 0 4.498 4.498 4.504 4.504 0 0 0 4.499-4.499v-.56a1.893 1.893 0 0 1-1.246-2.546 1.887 1.887 0 1 1 2.212 2.552v.57a5.509 5.509 0 0 1-5.502 5.504 5.51 5.51 0 0 1-5.505-5.508m-.133-3.653V8.392H6.611a.578.578 0 0 1 0-1.154H8.44V5.411a.578.578 0 0 1 1.154 0v1.827h1.828a.578.578 0 0 1 0 1.154H9.593v1.828a.578.578 0 0 1-1.154 0"
  }));
};

const SvgDo = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.13 17.018H12.97v-.47l.775-.814c.23-.244.38-.412.45-.506.07-.095.121-.183.152-.263a.689.689 0 0 0 .047-.25c0-.128-.035-.224-.104-.287a.384.384 0 0 0-.272-.094.763.763 0 0 0-.349.085c-.112.057-.23.138-.352.243l-.355-.436a2.32 2.32 0 0 1 .378-.285c.1-.055.21-.097.327-.127.119-.03.25-.046.397-.046.193 0 .364.037.511.11a.825.825 0 0 1 .345.307.838.838 0 0 1 .122.451c0 .148-.025.287-.076.417-.05.128-.127.26-.232.396-.104.136-.289.33-.553.581l-.398.388v.03h1.346z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "m11.936 3.012-.436.321-.436-.321a.542.542 0 0 1 .872 0m-.436 1.25A71.69 71.69 0 0 0 8.983 8.07c-.74 1.207-1.472 2.505-2.018 3.698-.555 1.214-.882 2.244-.882 2.94a5.417 5.417 0 1 0 10.834 0c0-.696-.327-1.726-.882-2.94-.546-1.193-1.278-2.491-2.018-3.698A69.421 69.421 0 0 0 11.5 4.262m0-.929-.436-.321-.005.007-.013.018-.051.07a68.62 68.62 0 0 0-.872 1.234A70.525 70.525 0 0 0 8.06 7.503c-.75 1.225-1.508 2.565-2.079 3.813C5.418 12.545 5 13.76 5 14.708a6.5 6.5 0 1 0 13 0c0-.949-.419-2.163-.98-3.39-.571-1.249-1.329-2.589-2.079-3.814a70.516 70.516 0 0 0-2.936-4.398l-.05-.07-.014-.017-.005-.007z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M10.093 15.393a1.625 1.625 0 1 0 0-3.25 1.625 1.625 0 0 0 0 3.25m0 1.084a2.708 2.708 0 1 0 0-5.417 2.708 2.708 0 0 0 0 5.417",
    clipRule: "evenodd"
  }));
};

const SvgDownload = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.045 19.975a1.637 1.637 0 0 1-1.341-.702A1.636 1.636 0 0 1 3 17.93v-3.273a1.636 1.636 0 0 1 3.273 0v2.046h11.454v-2.046a1.636 1.636 0 1 1 3.273 0v3.273a1.636 1.636 0 0 1-.702 1.344 1.635 1.635 0 0 1-1.343.702zm6.83-4.091a1.416 1.416 0 0 1-1.23-.668l-4.772-4.772a1.42 1.42 0 1 1 2.01-2.01l2.546 2.546V5.171a1.422 1.422 0 0 1 2.842 0v5.858l2.599-2.595a1.421 1.421 0 0 1 2.01 2.01l-4.775 4.775a1.427 1.427 0 0 1-1.204.665z"
  }));
};

const SvgEdit = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.133 4.242a.834.834 0 0 1 1.175 0l1.95 1.95a.83.83 0 0 1 0 1.175l-1.524 1.525-3.126-3.126zM4.5 15.875l9.217-9.217 3.125 3.125L7.625 19H4.5z"
  }));
};

const SvgEmptyStock = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m12.298 10.205.01.036 7.67.022 1.816 3.066-7.463 1.397-2.003-4.412 1.326 5.206 6.325-1.275v7.015l-7.68 1.701zM4.02 21.265v-7.016l6.323 1.275 1.3-5.027-1.977 4.229-7.46-1.395 1.817-3.066h7.72v.022l-.04.089v12.591z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M14.116 7.95a3.486 3.486 0 1 1-4.93-4.929 3.486 3.486 0 0 1 4.93 4.93m-4.598-.938 3.66-3.66a2.623 2.623 0 0 0-3.66 3.66m.607.607a2.623 2.623 0 0 0 3.66-3.66z",
    clipRule: "evenodd"
  }));
};

const SvgExpenseMenu = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m17.52 11.102-1.415.407-.16-.558a.826.826 0 0 0-.446-1.55l-.378-1.315-.754-2.62c-.338-1.173-1.397-1.994-2.577-1.995-.04 0-.083 0-.125.002-1.142.05-2.13.85-2.458 1.99L8.074 9.4a.827.827 0 0 0-.445 1.551l-.16.558-1.414-.407.867-3.016.871-3.03c.503-1.75 2.034-2.976 3.808-3.052.064-.003.127-.005.191-.004 1.83.002 3.471 1.26 3.989 3.06z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.567 20.638 19.42 9.24c-.065-.653-.722-1.154-1.51-1.154H5.661c-.79 0-1.446.501-1.512 1.154L3.004 20.638C2.93 21.372 3.628 22 4.516 22h14.538c.888 0 1.586-.628 1.512-1.362zm-12.54-9.585a.827.827 0 1 1 0-1.654.827.827 0 0 1-.001 1.654zm7.519 0a.827.827 0 1 1 0-1.653.827.827 0 0 1 0 1.653z"
  }));
};

const SvgExpense = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.844 17.544a.628.628 0 0 1-.477.174h-.059c-1.05-.048-2.096-.1-3.146-.148a.679.679 0 0 1-.484-.166.551.551 0 0 1 .051-.825l.263-.266c.18-.185.366-.37.55-.55L11.198 9.41l-2.85 2.85a.905.905 0 0 1-1.283 0L3.266 8.466a.906.906 0 0 1 0-1.283l.167-.167a.906.906 0 0 1 1.283 0L7.7 10l2.854-2.854a.91.91 0 0 1 1.287 0l7.157 7.158.81-.806a.615.615 0 0 1 .433-.229c.09.001.18.025.259.07.056.031.109.07.155.115.13.142.2.33.196.522.029.68.062 1.36.095 2.045l.049 1.024a.637.637 0 0 1-.151.499"
  }));
};

const SvgFarmStep = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.046 18.043H3V3.75h12.036v4.44H9.295a1.256 1.256 0 0 0-1.173.827H5.003v.5h3.043v2.508h-3.04v.502h3.04v2.509h-3.04v.501h3.04zM5.006 6.007v.502h8.36v-.502z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.908 9.066h-9.803a1.097 1.097 0 0 0-1.086 1.1v8.606a1.098 1.098 0 0 0 1.089 1.099h9.803A1.098 1.098 0 0 0 21 18.77v-8.606a1.097 1.097 0 0 0-1.092-1.1m-5.156 8.682a.821.821 0 0 1-.815.823h-2.559a.822.822 0 0 1-.815-.823v-2.135a.822.822 0 0 1 .815-.823h2.562a.821.821 0 0 1 .815.823zm.03-4.254a.822.822 0 0 1-.815.824h-2.562a.822.822 0 0 1-.815-.823v-2.136a.822.822 0 0 1 .815-.823h2.562a.822.822 0 0 1 .815.823zm4.888 4.254a.822.822 0 0 1-.816.823h-2.561a.822.822 0 0 1-.816-.823v-2.135a.822.822 0 0 1 .816-.823h2.561a.822.822 0 0 1 .816.823zm.026-4.254a.822.822 0 0 1-.816.824H16.32a.822.822 0 0 1-.816-.823v-2.136a.822.822 0 0 1 .816-.823h2.561a.822.822 0 0 1 .816.823z"
  }));
};

const SvgFarm = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.364 3.863H4.636A1.649 1.649 0 0 0 3 5.514v12.933a1.649 1.649 0 0 0 1.636 1.655h14.728A1.65 1.65 0 0 0 21 18.45V5.514a1.649 1.649 0 0 0-1.636-1.651M11.62 16.909a1.235 1.235 0 0 1-1.225 1.237h-3.85A1.235 1.235 0 0 1 5.32 16.91V13.7a1.235 1.235 0 0 1 1.225-1.237h3.85a1.234 1.234 0 0 1 1.224 1.237zm.04-6.392a1.235 1.235 0 0 1-1.226 1.238h-3.85a1.234 1.234 0 0 1-1.224-1.238V7.31a1.235 1.235 0 0 1 1.225-1.235h3.849A1.234 1.234 0 0 1 11.66 7.31zm7.343 6.392a1.235 1.235 0 0 1-1.225 1.237h-3.85a1.234 1.234 0 0 1-1.224-1.237V13.7a1.235 1.235 0 0 1 1.225-1.237h3.849a1.235 1.235 0 0 1 1.225 1.237zm.042-6.392a1.235 1.235 0 0 1-1.225 1.238h-3.854a1.234 1.234 0 0 1-1.225-1.238V7.31a1.235 1.235 0 0 1 1.225-1.235h3.849a1.235 1.235 0 0 1 1.23 1.235z"
  }));
};

const SvgFavorite = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m17.14 20.456-4.524-2.417a.66.66 0 0 0-.615-.003L7.446 20.39a.662.662 0 0 1-.955-.709l.9-5.05a.66.66 0 0 0-.186-.586l-3.647-3.598a.662.662 0 0 1 .377-1.125l5.08-.703a.662.662 0 0 0 .5-.359l2.3-4.584A.662.662 0 0 1 13 3.685l2.24 4.613a.66.66 0 0 0 .495.366l5.072.77a.661.661 0 0 1 .358 1.13l-3.696 3.557a.66.66 0 0 0-.194.584l.836 5.061a.661.661 0 0 1-.972.69"
  }));
};

const SvgFeedCumulative = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m3.437 19.673-.17-.17a.905.905 0 0 1 0-1.284l3.797-3.794a.896.896 0 0 1 .987-.197c.11.046.211.113.296.197l2.848 2.85 6.345-6.35a33.67 33.67 0 0 1-.551-.55l-.263-.266a.546.546 0 0 1-.166-.658.55.55 0 0 1 .115-.17.68.68 0 0 1 .485-.167c1.05-.048 2.096-.1 3.146-.148h.06a.628.628 0 0 1 .477.174.637.637 0 0 1 .152.499l-.048 1.024c-.033.684-.067 1.364-.096 2.044a.75.75 0 0 1-.196.521.711.711 0 0 1-.155.115.538.538 0 0 1-.26.07.612.612 0 0 1-.432-.23l-.81-.805-7.158 7.158a.91.91 0 0 1-1.286 0l-2.849-2.849-2.983 2.984a.898.898 0 0 1-.64.266.904.904 0 0 1-.645-.265m4.42-6.396c-.293 0-.581-.07-.842-.205a2.237 2.237 0 0 1-.69-.559 2.698 2.698 0 0 1-.464-.826 3.007 3.007 0 0 1-.13-1.503l.388-1.867h8.113l.29 1.97c.02.13.03.26.034.391 0 .343-.058.685-.172 1.009a2.66 2.66 0 0 1-.466.826c-.19.231-.424.422-.69.56-.26.133-.547.203-.84.204zm1.818-1.803a.21.21 0 0 0-.02.22l.058.116-.058.116a.21.21 0 0 0 .187.303.198.198 0 0 0 .04-.005l.51-.101c.176-.005.349-.04.512-.104l-.345-.563a.529.529 0 0 1-.182.04l-.496-.1a.204.204 0 0 0-.133.018.209.209 0 0 0-.073.06zm1.06-.132.359.586a1.471 1.471 0 0 0 .7-.953h-.906a.52.52 0 0 1-.153.366zm-.172-.849c.126.051.227.15.28.275h.982v-.018c0-.033.005-.06.005-.088a1.464 1.464 0 0 0-.892-1.347zM8.483 9.41a1.046 1.046 0 0 0 1.046 1.045h.825l.384-1.203a1.434 1.434 0 0 0-.373-.051H8.692a.21.21 0 0 0-.209.206zm.418.207a.105.105 0 1 1 .03.074.105.105 0 0 1-.03-.077zm-2.839-1.57-.58-1.323h9.369l-.588 1.322zm7.451-1.605H5.9l1.42-.495h.034a1.168 1.168 0 0 1 1.113-.951c.079 0 .157.008.234.026a1.12 1.12 0 0 1 .93-.521c.264 0 .518.098.714.275.131-.056.272-.085.414-.085.283.002.554.113.756.312a1.091 1.091 0 0 1 .882.304c.21.205.344.477.379.77l1.025.363h-.287z"
  }));
};

const SvgFeed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.271 20.616H7.565a3.544 3.544 0 0 1-1.617-.393 4.27 4.27 0 0 1-1.325-1.072 5.203 5.203 0 0 1-.894-1.588 5.803 5.803 0 0 1-.247-2.887l.746-3.586h15.585l.555 3.783c.038.249.059.5.064.752.002.66-.11 1.316-.33 1.938a5.16 5.16 0 0 1-.893 1.588 4.235 4.235 0 0 1-1.325 1.072c-.499.257-1.052.391-1.613.393m-4.894-3.621a.394.394 0 0 0-.317.157.4.4 0 0 0-.042.422l.112.222-.112.222a.4.4 0 0 0 .042.421.4.4 0 0 0 .396.151l.98-.196c.336-.008.669-.075.982-.199l-.662-1.081c-.111.045-.23.07-.349.075l-.953-.19a.382.382 0 0 0-.077-.005zm2.01-.8a.998.998 0 0 1-.294.703l.689 1.127a2.82 2.82 0 0 0 1.345-1.83zm.094-3.192-.723 2.261a.996.996 0 0 1 .542.53h1.883V15.757c.004-.06.008-.111.008-.168a2.807 2.807 0 0 0-1.713-2.587zm-4.312-.224a.403.403 0 0 0-.4.402 2.01 2.01 0 0 0 2.007 2.008h1.586l.737-2.313a2.815 2.815 0 0 0-.716-.097zm.602 1.003a.202.202 0 0 1-.202-.202.201.201 0 1 1 .203.202zm10.098-3.22H4.116L3 8.02h18l-1.131 2.54zm-.89-3.08H3.802l2.726-.953h.065A2.248 2.248 0 0 1 8.73 4.7c.152 0 .303.017.45.05a2.151 2.151 0 0 1 1.784-1.001c.508.001.998.19 1.376.529a2 2 0 0 1 .794-.162 2.09 2.09 0 0 1 1.453.598 2.096 2.096 0 0 1 1.692.584c.404.395.661.917.728 1.479l1.97.702z"
  }));
};

const SvgFilter = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.954 9.855c.243-.527.38-1.113.38-1.731 0-.619-.137-1.206-.38-1.732h1.322c.456.01.89.197 1.21.52a1.724 1.724 0 0 1 0 2.422c-.32.324-.754.51-1.21.52zM10.468 9.855H4.724a1.754 1.754 0 0 1-1.21-.52 1.724 1.724 0 0 1 0-2.422c.32-.324.753-.51 1.21-.52h5.744a4.106 4.106 0 0 0-.38 1.73c0 .62.136 1.206.38 1.732M17.213 8.124a3.002 3.002 0 1 1-6.004 0 3.002 3.002 0 0 1 6.004 0M6.046 14.145a4.106 4.106 0 0 0-.38 1.731c0 .619.136 1.206.38 1.732H4.724a1.754 1.754 0 0 1-1.21-.52 1.724 1.724 0 0 1 0-2.422c.319-.324.753-.51 1.21-.52zM13.531 14.145h5.745c.456.01.89.196 1.21.52a1.724 1.724 0 0 1 0 2.422c-.32.324-.754.51-1.21.52H13.53c.244-.526.38-1.112.38-1.73 0-.62-.136-1.206-.38-1.732M6.787 15.876a3.002 3.002 0 1 1 6.003 0 3.002 3.002 0 0 1-6.003 0"
  }));
};

const SvgFinanceDue = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.268 8.094a.732.732 0 0 1 .331-.518c.184-.122.41-.16.672-.118.26.042.459.15.596.325a.744.744 0 0 1 .15.597.724.724 0 0 1-.332.51c-.183.122-.406.16-.666.118-.263-.042-.465-.149-.602-.32a.733.733 0 0 1-.15-.594M14.754 6.502l.15-1.33c.471.298.893.668 1.253 1.095l-.097.45a.347.347 0 0 1-.392.266l-.628-.103a.347.347 0 0 1-.287-.377z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.684 19.492H4.187l1.602-2.283a3.396 3.396 0 0 0 .618-1.954V9.832c0-1.525.618-2.907 1.619-3.907a5.507 5.507 0 0 1 3.907-1.62 5.5 5.5 0 0 1 2.468.579l-.176 1.556a.873.873 0 0 0 .174.632 1.282 1.282 0 0 0-.659.932c-.06.375.028.724.26 1.012.22.277.534.453.933.516.396.065.747-.002 1.045-.2.309-.205.504-.505.566-.871a1.266 1.266 0 0 0-.328-1.094.864.864 0 0 0 .362-.534c.558.864.883 1.892.883 2.997v5.423c0 .7.216 1.381.618 1.953l1.604 2.286z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.79 6.498h-.025a.83.83 0 0 1-.83-.83V3.9a.83.83 0 0 1 .83-.83h.024a.83.83 0 0 1 .83.83v1.768a.829.829 0 0 1-.83.83M11.801 21.21h-.05a1.69 1.69 0 0 1-1.69-1.691v-.05c0-.933.757-1.69 1.69-1.69h.05c.934 0 1.69.757 1.69 1.69v.05a1.69 1.69 0 0 1-1.69 1.69M15.867 7.781a.744.744 0 0 1 .15.597.724.724 0 0 1-.332.511c-.183.122-.406.16-.666.118-.263-.042-.465-.15-.602-.321a.73.73 0 0 1-.15-.594.732.732 0 0 1 .332-.518c.184-.121.41-.16.672-.117.262.044.459.15.596.324M16.689 3.774l-.53 2.493-.097.45a.347.347 0 0 1-.392.266l-.628-.103a.345.345 0 0 1-.286-.378l.15-1.33.192-1.658a.34.34 0 0 1 .395-.298l.917.15c.191.03.32.215.279.408"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.867 7.781c-.137-.174-.335-.28-.596-.324-.263-.042-.488-.004-.672.117a.741.741 0 0 0-.331.518.73.73 0 0 0 .15.594c.136.17.338.277.601.32.26.043.483.005.666-.117a.735.735 0 0 0 .331-.51.739.739 0 0 0-.15-.598m.542-4.418-.916-.15a.342.342 0 0 0-.396.3l-.19 1.657-.152 1.33c-.02.181.105.348.287.378l.628.103c.181.028.353-.09.392-.267l.097-.45.53-2.492a.343.343 0 0 0-.28-.409z"
  }));
};

const SvgFinance = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m6.122 20.548-.297-3.275a.497.497 0 0 1 .446-.542l3.276-.298a.497.497 0 1 1 .091.991l-2.166.196a7.187 7.187 0 0 0 11.574-7.226.496.496 0 1 1 .966-.236 8.183 8.183 0 0 1-8.353 10.107 8.129 8.129 0 0 1-4.727-1.802l.178 1.994a.498.498 0 0 1-.49.542.497.497 0 0 1-.498-.45m5.774-5.252v-4.671h.72l.124.42h.041a1.025 1.025 0 0 1 .92-.481 1.052 1.052 0 0 1 .9.446c.236.366.35.799.325 1.234.007.308-.043.614-.149.903a1.273 1.273 0 0 1-.434.584 1.115 1.115 0 0 1-.662.2 1.076 1.076 0 0 1-.898-.415h-.046c.03.271.046.428.046.471v1.309zm1.04-3.826a1.162 1.162 0 0 0-.156.67v.096c-.021.259.033.519.155.748a.554.554 0 0 0 .492.227c.397 0 .595-.327.595-.981a1.403 1.403 0 0 0-.149-.719.5.5 0 0 0-.46-.239.56.56 0 0 0-.475.202zm-8.954 2.328a8.181 8.181 0 0 1 8.357-10.104c1.736.08 3.4.718 4.746 1.817l-.074-2.038a.498.498 0 0 1 .991-.037l.122 3.25v.062a.496.496 0 0 1-.479.497l-3.286.122h-.02a.497.497 0 1 1-.017-.995l2.14-.08a7.186 7.186 0 0 0-11.515 7.27.498.498 0 0 1-.965.236m6.45.075L9.42 12.242h-.48v1.628h-.9V9.626h1.237c.45-.033.899.078 1.281.318a1.124 1.124 0 0 1 .416.957 1.13 1.13 0 0 1-.206.669 1.365 1.365 0 0 1-.585.458c.64.954 1.056 1.57 1.25 1.849zM8.94 11.51h.29c.22.016.44-.034.63-.143a.509.509 0 0 0 .204-.446.464.464 0 0 0-.208-.43 1.264 1.264 0 0 0-.643-.128H8.94z"
  }));
};

const SvgFinancialReport2 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.888 8.584A2.085 2.085 0 0 1 12.805 6.5V2.005h-6.93c-.691 0-1.25.558-1.25 1.25v17.5c0 .691.563 1.25 1.25 1.25h12.259c.691 0 1.25-.558 1.25-1.25V8.584zm-3.537 2.15 2.195 2.195 2.409-2.408a.414.414 0 0 1 .587 0 .42.42 0 0 1 0 .592l-2.7 2.7a.42.42 0 0 1-.592 0l-2.196-2.196-3.558 3.558a.4.4 0 0 1-.292.12.414.414 0 0 1-.295-.708l3.854-3.854a.416.416 0 0 1 .588 0m-3.234 9.604H6.292v-3.754h1.825zm3.2 0H9.494v-4.546h1.825zm3.2 0h-1.825v-2.392h1.825zm3.2 0h-1.824v-6.659h1.824z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.888 7.75h4.383a1.284 1.284 0 0 0-.254-.366c-5.282-5.283-5.05-5.118-5.38-5.263v4.38c0 .69.559 1.25 1.251 1.25"
  }));
};

const SvgFinancialReport = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.885 8.584h4.506v12.17c0 .692-.56 1.251-1.253 1.251H5.852c-.689 0-1.252-.558-1.252-1.25v-17.5c0-.691.56-1.25 1.252-1.25h6.945V6.5c0 1.15.936 2.084 2.088 2.084m-2.249 4.234v6.105l1.156-.001v-1.719c0-.055-.021-.26-.06-.614h.06a1.405 1.405 0 0 0 1.172.543c.308.007.611-.083.865-.26.26-.192.457-.457.568-.761.14-.378.207-.777.198-1.18a2.685 2.685 0 0 0-.424-1.611 1.374 1.374 0 0 0-1.175-.583 1.341 1.341 0 0 0-1.203.63h-.053l-.163-.55h-.94zm1.154 1.98v.121c-.027.339.044.679.204.979a.727.727 0 0 0 .642.296c.518 0 .777-.427.777-1.282a1.83 1.83 0 0 0-.194-.938.65.65 0 0 0-.601-.312.726.726 0 0 0-.62.266l-.003.001a1.52 1.52 0 0 0-.205.87zm-4.39.13 1.324 2.127h1.305c-.253-.364-.796-1.17-1.632-2.416a1.78 1.78 0 0 0 .763-.598c.18-.254.274-.558.27-.87a1.47 1.47 0 0 0-.54-1.248 2.765 2.765 0 0 0-1.672-.412H7.6v5.543h1.176v-2.128H9.4zm-.245-.955a1.45 1.45 0 0 0 .823-.186.662.662 0 0 0 .265-.583.605.605 0 0 0-.27-.561 1.649 1.649 0 0 0-.842-.167h-.356v1.496z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.863 7.75h4.383a1.284 1.284 0 0 0-.255-.366C13.71 2.1 13.941 2.266 13.613 2.12v4.38c0 .69.558 1.25 1.25 1.25"
  }));
};

const SvgFixedAssetMenuPaddleWheel = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.759 13.14h-2.47c-.236 0-.427.171-.427.38v.075h-3.745a1.132 1.132 0 0 0-.166-.399l2.648-2.648.053.053a.353.353 0 0 0 .254.1.448.448 0 0 0 .316-.135l1.747-1.747c.166-.166.181-.422.033-.57l-.428-.427a.354.354 0 0 0-.254-.1.448.448 0 0 0-.316.135l-1.747 1.747c-.166.166-.181.421-.033.57l.053.053-2.648 2.647a1.138 1.138 0 0 0-.4-.165V8.964h.076c.21 0 .38-.191.38-.427v-2.47c0-.236-.171-.427-.38-.427H11.7c-.209 0-.378.191-.378.427v2.47c0 .236.17.427.378.427h.076v3.745c-.142.029-.278.085-.399.165l-2.648-2.647.053-.053c.149-.149.133-.404-.034-.57L7.001 7.857a.454.454 0 0 0-.316-.136.356.356 0 0 0-.254.1l-.428.428c-.148.148-.133.405.034.57l1.747 1.747a.448.448 0 0 0 .315.136.356.356 0 0 0 .255-.1l.053-.054 2.647 2.648c-.08.122-.136.257-.165.4H7.145v-.076c0-.21-.192-.38-.427-.38h-2.47c-.236 0-.427.171-.427.38v.606c0 .209.19.378.426.378h2.47c.236 0 .428-.17.428-.378v-.076h3.744c.029.142.085.278.165.399l-2.647 2.648-.053-.053a.354.354 0 0 0-.255-.1.448.448 0 0 0-.315.135l-1.747 1.747c-.167.166-.182.422-.033.57l.427.427a.352.352 0 0 0 .255.1.448.448 0 0 0 .315-.135l1.747-1.747c.167-.166.182-.421.034-.57l-.053-.053 2.648-2.647c.121.08.256.136.399.165v3.744H11.7c-.21 0-.379.192-.379.427v2.47c0 .236.17.427.38.427h.605c.21 0 .379-.191.379-.427v-2.47c0-.235-.17-.427-.379-.427h-.076v-3.744c.143-.029.279-.085.4-.165l2.648 2.647-.054.053c-.148.149-.132.404.034.57l1.747 1.747a.448.448 0 0 0 .316.136.356.356 0 0 0 .254-.1l.427-.428c.149-.148.133-.405-.033-.57l-1.747-1.747a.448.448 0 0 0-.316-.136.356.356 0 0 0-.254.1l-.053.054-2.648-2.648c.08-.122.137-.257.166-.4h3.745v.077c0 .209.19.378.426.378h2.47c.236 0 .428-.17.428-.378v-.606c0-.209-.192-.38-.427-.38"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.399 17.459v-2.174l-2.174 2.174zM12.61 15.286v2.173h2.173zM7.517 16.809a.833.833 0 0 1 .584-.247c.088 0 .177.015.26.046l2.18-2.18H7.46a.81.81 0 0 1-.738.454H4.249c-.444 0-.805-.34-.805-.757v-.303h-.686a.755.755 0 0 0-.753.753 2.87 2.87 0 0 0 .844 2.038 2.883 2.883 0 0 0 2.039.845h1.98zM21.251 13.823h-.686v.303a.742.742 0 0 1-.253.55.829.829 0 0 1-.553.207h-2.47a.811.811 0 0 1-.738-.454h-3.083l2.18 2.18a.751.751 0 0 1 .26-.046c.22.002.43.09.584.247l.65.65h1.98a2.87 2.87 0 0 0 2.038-.845 2.883 2.883 0 0 0 .844-2.039.755.755 0 0 0-.753-.753zM14.276 13.217v-.81l-.809.81zM11.398 12.36V9.276a.81.81 0 0 1-.455-.738V6.068c0-.444.34-.806.758-.806h.606c.418 0 .757.362.757.806v2.47a.811.811 0 0 1-.454.738v3.083l1.666-1.666V3.206a1.2 1.2 0 0 0-1.2-1.201H10.93a1.2 1.2 0 0 0-1.2 1.2v7.488zM9.731 13.217h.81l-.81-.81z"
  }));
};

const SvgHarvest = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.904 21h-9.45A2.455 2.455 0 0 1 5 18.546v-8.083A2.454 2.454 0 0 1 7.455 8.01h9.45a2.455 2.455 0 0 1 2.454 2.454v8.083A2.455 2.455 0 0 1 16.904 21m-5.569-5.205a.447.447 0 0 0-.402.65l.125.245-.124.245a.446.446 0 0 0 .203.603.452.452 0 0 0 .287.038l1.093-.219a3.11 3.11 0 0 0 1.097-.224l-.737-1.207a1.12 1.12 0 0 1-.39.082l-1.063-.212a.465.465 0 0 0-.089-.001m2.244-.895a1.14 1.14 0 0 1-.327.787l.77 1.259a3.148 3.148 0 0 0 1.502-2.046zm.106-3.567-.804 2.528c.27.112.486.323.604.59h2.103v-.055c0-.06.008-.112.008-.17a3.14 3.14 0 0 0-1.915-2.892zm-4.818-.245a.45.45 0 0 0-.449.448 2.247 2.247 0 0 0 2.244 2.244h1.774l.823-2.585a3.16 3.16 0 0 0-.802-.107zm.673 1.118a.225.225 0 1 1 .224-.225.224.224 0 0 1-.223.223zm5.696-4.879h-6.3v-.005a8.658 8.658 0 0 1-.746-1.666c-.25-.833-1.686-1.704-1.7-1.713A3.876 3.876 0 0 1 8.937 3a7.841 7.841 0 0 1 3.15.94A8.333 8.333 0 0 1 15.236 3a4.642 4.642 0 0 1 2.542.94c-.015.01-1.561.876-1.85 1.713a17.35 17.35 0 0 1-.693 1.671z"
  }));
};

const SvgHelpFill = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.047 11.25A3.069 3.069 0 0 0 15.984 9c0-1.094-.39-2.031-1.171-2.812-.782-.782-1.72-1.172-2.813-1.172-1.094 0-2.031.39-2.812 1.172-.782.78-1.172 1.718-1.172 2.812h1.968c0-.531.204-1 .61-1.406.406-.407.875-.61 1.406-.61.531 0 1 .204 1.406.61.406.406.61.875.61 1.406 0 .531-.203 1-.61 1.406l-1.219 1.266c-.78.844-1.171 1.781-1.171 2.812V15h1.968c0-1.031.391-1.969 1.172-2.812zm-2.063 7.734v-1.968h-1.968v1.968zM4.922 4.97C6.89 3 9.25 2.016 12 2.016s5.094.984 7.031 2.953C21 6.906 21.984 9.25 21.984 12s-.984 5.11-2.953 7.078c-1.937 1.938-4.281 2.906-7.031 2.906s-5.11-.968-7.078-2.906C2.984 17.11 2.016 14.75 2.016 12s.968-5.094 2.906-7.031"
  }));
};

const SvgHelpOutline = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.188 7.172C9.968 6.39 10.906 6 12 6c1.094 0 2.031.39 2.813 1.172.78.781 1.171 1.719 1.171 2.812 0 .844-.5 1.72-1.5 2.625-1 .875-1.5 1.672-1.5 2.391h-1.968c0-.719.156-1.328.468-1.828.313-.531.657-.906 1.032-1.125.375-.25.718-.547 1.03-.89.313-.344.47-.735.47-1.173 0-.53-.203-.984-.61-1.359-.406-.406-.875-.61-1.406-.61-.531 0-1 .204-1.406.61-.406.375-.61.828-.61 1.36H8.016c0-1.094.39-2.032 1.172-2.813m-2.86 10.5c1.594 1.562 3.484 2.344 5.672 2.344 2.188 0 4.063-.782 5.625-2.344 1.594-1.594 2.39-3.485 2.39-5.672s-.796-4.062-2.39-5.625c-1.562-1.594-3.437-2.39-5.625-2.39-2.187 0-4.078.796-5.672 2.39C4.766 7.938 3.984 9.813 3.984 12c0 2.188.782 4.078 2.344 5.672M4.922 4.969C6.89 3 9.25 2.016 12 2.016s5.094.984 7.031 2.953C21 6.906 21.984 9.25 21.984 12s-.984 5.11-2.953 7.078c-1.937 1.938-4.281 2.906-7.031 2.906s-5.11-.968-7.078-2.906C2.984 17.11 2.016 14.75 2.016 12s.968-5.094 2.906-7.031M11.016 18v-2.016h1.968V18z"
  }));
};

const SvgHide = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.974 8.95C4.237 10.05 3 11.314 3 12.12c0 1.686 5.404 5.37 9.472 5.37a10.514 10.514 0 0 0 3.525-.802l-1.76-1.359a3.608 3.608 0 0 1-2.588.465 3.6 3.6 0 0 1-2.742-4.579zM15.949 12.413a3.59 3.59 0 0 0-1.054-2.695 3.604 3.604 0 0 0-3.6-.897L9.356 7.325c1.053-.356 2.124-.575 3.116-.575 2.1.107 4.121.842 5.8 2.11C19.878 10.001 21 11.342 21 12.12c0 .65-.778 1.687-1.966 2.675z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.188 12.204a2.166 2.166 0 0 0 .738 1.685 2.16 2.16 0 0 0 2.026.448zM4.792 6.194a1 1 0 0 1 1.222-1.583l14.414 11.127a1 1 0 1 1-1.222 1.583z"
  }));
};

const SvgHome = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.392 19.978v-4.285H10.61v4.285H7.206a1.56 1.56 0 0 1-1.625-1.485v-5.605l-.619.64H3l9.041-9.525L21 13.528h-1.963l-.618-.648v5.616a1.56 1.56 0 0 1-1.629 1.485zM10.2 9.811a1.728 1.728 0 0 0 1.8 1.646 1.728 1.728 0 0 0 1.8-1.646A1.726 1.726 0 0 0 12 8.166a1.724 1.724 0 0 0-1.8 1.645"
  }));
};

const SvgHotNews = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.456 9.434A9.195 9.195 0 0 0 12.475 12a9.977 9.977 0 0 0 2.4 5.261 2.192 2.192 0 0 1 .566 2.356 4.595 4.595 0 0 1-3.98 2.206 9.939 9.939 0 0 0 4.794-.945 5.458 5.458 0 0 0 2.669-2.466 3.443 3.443 0 0 0-.849-3.839 15.815 15.815 0 0 1-3.803-8.346 14.934 14.934 0 0 1-.03-4.073 40.988 40.988 0 0 0-5.869 5.822 17.62 17.62 0 0 0-3.136 5.394 6.05 6.05 0 0 0 .466 5.364 6.45 6.45 0 0 0 2.258 2.115c-.344-.273-.64-.6-.878-.97a3.803 3.803 0 0 1-.295-3.38c.451-1.24 1.12-2.39 1.975-3.394a26.069 26.069 0 0 1 3.686-3.664z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.136 15.635c-.044.036-4.024 3.175-2.69 5.229a2.284 2.284 0 0 0 1.979.977 2.448 2.448 0 0 0 2.187-1.08 1.084 1.084 0 0 0-.27-1.21 5.065 5.065 0 0 1-1.206-3.916"
  }));
};

const SvgIncomeMenu = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m21.123 13.625-7.404 7.406a1.428 1.428 0 0 1-2.017 0L2.25 11.576a1.366 1.366 0 0 1-.241-.322c-.038.35.085.7.334.95l9.453 9.456a1.166 1.166 0 0 0 1.647 0l7.405-7.405a1.17 1.17 0 0 0 .333-.687c-.018.02-.037.04-.055.057z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.938 11.795 11.483 2.34a1.164 1.164 0 0 0-1.003-.326L4.085 3.024c-.5.078-.89.47-.969.968l-1.01 6.395c-.057.368.065.74.328 1.004l9.454 9.454c.454.454 1.19.454 1.645 0l7.406-7.404a1.164 1.164 0 0 0 0-1.647zM7.098 7.126a1.163 1.163 0 1 1-1.646-1.645 1.163 1.163 0 0 1 1.645 1.645"
  }));
};

const SvgIncome = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.845 6.926a.627.627 0 0 0-.477-.175h-.06c-1.049.049-2.096.1-3.146.148a.679.679 0 0 0-.484.166.55.55 0 0 0 .052.825l.262.266c.181.185.366.37.551.551l-6.345 6.352-2.851-2.85a.905.905 0 0 0-1.283 0l-3.798 3.794a.905.905 0 0 0 0 1.283l.167.166a.908.908 0 0 0 1.283 0L7.7 14.469l2.851 2.851a.91.91 0 0 0 1.287 0l7.158-7.158.81.806a.615.615 0 0 0 .432.23.536.536 0 0 0 .262-.067.71.71 0 0 0 .155-.116.75.75 0 0 0 .196-.521c.029-.68.062-1.36.095-2.045l.049-1.024a.638.638 0 0 0-.15-.498"
  }));
};

const SvgIndeterminateCheckbox = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-2-8H7v2h10z",
    clipRule: "evenodd"
  }));
};

const SvgInfoOutline = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.33 16.11h1.322V9.889H11.33zM11.291 7.946a.731.731 0 0 0-.04.293.717.717 0 0 0 .192.532.749.749 0 0 0 .555.191.734.734 0 0 0 .543-.191.72.72 0 0 0 .191-.532.735.735 0 0 0-.191-.546.74.74 0 0 0-.543-.191.757.757 0 0 0-.555.191.733.733 0 0 0-.152.253"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.554 20.32A8.942 8.942 0 0 0 12 21a8.94 8.94 0 0 0 6.364-2.636A8.94 8.94 0 0 0 21 12a8.943 8.943 0 0 0-2.636-6.364A8.941 8.941 0 0 0 12 3a8.942 8.942 0 0 0-6.364 2.635A8.94 8.94 0 0 0 3 12a8.941 8.941 0 0 0 2.636 6.364 8.941 8.941 0 0 0 2.918 1.955m.49-15.458A7.669 7.669 0 0 1 12 4.278 7.669 7.669 0 0 1 17.46 6.54 7.67 7.67 0 0 1 19.721 12a7.67 7.67 0 0 1-2.262 5.46 7.668 7.668 0 0 1-5.46 2.261 7.669 7.669 0 0 1-5.46-2.261A7.667 7.667 0 0 1 4.28 12 7.669 7.669 0 0 1 6.54 6.54a7.669 7.669 0 0 1 2.504-1.678",
    clipRule: "evenodd"
  }));
};

const SvgInventory = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.684 10.368h-5.75V4.5h1.923v3.173h1.9V4.5h1.923v5.868z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.374 4.5h-1.13v2.787h1.13zM11.628 16.855h-5.75v-5.869H7.8v3.173h1.9v-3.173h1.923v5.868z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.317 10.987H8.188v2.787h1.13zM18.122 16.855h-5.75v-5.869h1.923v3.173h1.9v-3.173h1.923v5.868z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.811 10.987h-1.129v2.787h1.13zM21 17.513H3v1.54h18z"
  }));
};

const SvgJala = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.356 19.6H4.644A2.144 2.144 0 0 1 2.5 17.457V6.144A2.144 2.144 0 0 1 4.644 4h13.712A2.144 2.144 0 0 1 20.5 6.144v11.312a2.144 2.144 0 0 1-2.144 2.145M9.26 14.23a.363.363 0 0 0-.286.181.446.446 0 0 0 .036.429c.166.162.347.307.541.433a3.855 3.855 0 0 0 1.984.613.677.677 0 0 0 .206-.04.533.533 0 0 1 .155-.032c.453-.08.876-.278 1.226-.577a2.287 2.287 0 0 0 .902-1.839V7.844a.241.241 0 0 0-.181-.253.587.587 0 0 0-.143-.02.3.3 0 0 0-.254.128v.036a.932.932 0 0 0-.04.406c0 .044.004.09.004.135v4.977c0 .01.001.02.003.029.007.039.016.087-.04.115v.035a1.831 1.831 0 0 1-.722 1.299 1.707 1.707 0 0 1-1.158.412 3.024 3.024 0 0 1-2.087-.846.19.19 0 0 0-.146-.067z"
  }));
};

const SvgJali = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.973 19.325a22.26 22.26 0 0 1-2.068-.113c.595-.186 2.588-.81 3.551-1.12 1.059-.085 2.932-.251 3.48-.3h.028a2.783 2.783 0 0 0 .783-2.309 3.07 3.07 0 0 0-1.226-1.994 4.948 4.948 0 0 0 1.193-.642c.317.536.523 1.13.608 1.747a4.061 4.061 0 0 1-.775 3.175c-.023.013-2.449 1.355-3.862 1.374a6.1 6.1 0 0 1-1.712.182m-2.475-.156-.198-.024h-.008a3.916 3.916 0 0 1-1.656-2.826 4.986 4.986 0 0 1 .244-2.35c.379.341.808.621 1.273.83a3.71 3.71 0 0 0-.8 2.567A2.4 2.4 0 0 0 8.5 19.17zm.006-4.863a5.31 5.31 0 0 1-1.37-.962c.055-.12.11-.23.166-.338a1.562 1.562 0 0 0 .57.033 1.558 1.558 0 0 0 1.043-.585 1.529 1.529 0 0 0 .02-1.882 1.553 1.553 0 0 0-.63-.492c.098-.73.203-1.613.29-2.323l.007-.062V7.69c.103-.86.202-1.673.23-1.73 0-.003.005-.004.005-.004.1.32.17.649.21.981 0-.004.006-.004.006-.004.037.11.058.226.062.343v.01l.004.028v.02l.006.045c.013.095.03.224.05.353v.007l.016.09c.032.236.093.466.181.686.043.094.094.184.152.27l.006.009.035.05.011.013.011.014.014.017.014.017.01.01.008.012c.099.121.224.218.367.283v-.004l-.004-.01a3.804 3.804 0 0 1-.441-1.13c-.016-.247-.092-.86-.223-1.768-.054-.38-.096-.659-.102-.695v-.006a.043.043 0 0 1 .032-.011c.215 0 1.044 1.062 1.723 2.05.284-.877.822-2.37 1.03-2.37.006 0 .011.002.017.004v.034c.011.093.043.334.088.66.086.622.203 1.427.27 1.737 0 .014.005.027.008.041v.008c.011.393-.029.786-.119 1.17.113-.107.202-.236.262-.38v-.002l.008-.02v-.013l.006-.014.006-.016.01-.025v-.029l.014-.038.005-.016a2.01 2.01 0 0 0 .068-.3c.023-.233.018-.47-.016-.702v-.01l-.004-.04v-.044a20.637 20.637 0 0 0-.06-.427l-.003-.025v-.014a1.448 1.448 0 0 1-.034-.329h.008a6.09 6.09 0 0 1-.072-.99h.006c.044.047.378.844.7 1.614l.007.017.027.067v.007c.301.716.64 1.528.94 2.21a1.508 1.508 0 0 0-.491 1.302 1.516 1.516 0 0 0 1.7 1.312c.2-.024.395-.088.571-.188.136.15.263.303.38.459a5.05 5.05 0 0 1-1.432.742 2.148 2.148 0 0 1-.256-.213 23.446 23.446 0 0 1-1.25-2.4c-.295-.608-.527-1.088-.563-1.118h-.008c-.014.234-.004.469.03.7h-.005a.917.917 0 0 0 .022.245c.012.089.027.202.04.312 0 .023.004.046.006.068.022.166.018.335-.009.5a1.336 1.336 0 0 1-.068.217v.012a.52.52 0 0 1-.018.04l-.02.04-.018.035a.95.95 0 0 1-.245.29c.09-.271.137-.555.141-.84 0-.012-.003-.024-.006-.034-.049-.217-.124-.784-.178-1.22l-.059-.485a.014.014 0 0 0-.011-.005c-.18 0-.7 1.1-.981 1.75-.553-.651-1.235-1.35-1.432-1.35a.053.053 0 0 0-.034.01l.01.067.057.427c.058.443.128 1.02.135 1.245.066.283.187.55.356.787h-.005a.836.836 0 0 1-.307-.179l-.016-.016-.012-.011-.03-.03-.025-.028-.006-.007a1.14 1.14 0 0 1-.126-.184 1.605 1.605 0 0 1-.135-.476l-.01-.07a8.726 8.726 0 0 1-.041-.315.733.733 0 0 0-.043-.245s-.004 0-.006.004a2.409 2.409 0 0 0-.15-.687s-.005 0-.007.004c-.026.041-.135.592-.266 1.29a26.945 26.945 0 0 1-.617 2.816c-.067.12-.141.235-.223.345z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.659 11.279C2.942 8.05 2.987 6.304 3.004 5.889c.02-.456.08-.675.182-.73a.108.108 0 0 1 .12-.028c.183.057.135.518.152.869.022.442.028 1.908 1.937 5.287a5.57 5.57 0 0 0 3.093 2.624c.176.099.378.19.366.306-.012.116-.273.163-.41.173h-.008c-.202 0-2.267-.27-3.777-3.112"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.806 12.666a1.194 1.194 0 0 1-1.335-1.031 1.193 1.193 0 0 1 1.046-1.323 1.194 1.194 0 0 1 1.334 1.03 1.193 1.193 0 0 1-1.045 1.323m-.256-2.084a.46.46 0 0 0-.403.51.46.46 0 0 0 .514.397.46.46 0 0 0 .403-.51.46.46 0 0 0-.514-.397M15.304 11.658a1.193 1.193 0 0 1-1.335-1.03 1.194 1.194 0 0 1 1.046-1.323 1.193 1.193 0 0 1 1.335 1.03 1.193 1.193 0 0 1-1.046 1.323m-.255-2.083a.46.46 0 0 0-.403.51.46.46 0 0 0 .514.397.46.46 0 0 0 .403-.51.46.46 0 0 0-.514-.397M10.514 15.164c.27-.18 1.089.659 1.841.53.603-.108 1.168-1.144 1.565-1.036.698.192-.01.946-.63 1.366a2.022 2.022 0 0 1-1.849.302c-.7-.192-1.547-.746-.927-1.162"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.715 13.371c-.143-.012-.417-.07-.437-.187-.019-.117.18-.203.353-.296l.018-.01a5.306 5.306 0 0 0 3.12-2.613c1.852-3.417 1.794-4.92 1.799-5.372.004-.358-.068-.833.122-.887a.119.119 0 0 1 .126.033c.108.055.18.286.22.753.037.426.16 2.217-1.496 5.483-1.3 2.562-3.147 3.022-3.682 3.087a.88.88 0 0 1-.144.01M8.864 20.616a9.224 9.224 0 0 1-1.122-.608c.03-.3.143-.586.327-.825.218-.224.819-.492 2.443-.492.968 0 1.855.096 1.892.1l.004.012.006-.004c.447-.208 2.736-1.251 3.956-1.251.152-.005.303.018.447.067.545.21 1.108 1.254 1.318 2.1-.461.325-.951.608-1.463.845-.047-.699-.56-1.777-1.045-1.964a.933.933 0 0 0-.331-.05 9.817 9.817 0 0 0-2.939.93l-.003-.009c-.004 0-.676-.074-1.405-.074-1.205 0-1.65.199-1.812.365-.177.25-.273.548-.274.853zM4.005 10.985a6.876 6.876 0 0 1 1.368-1.522 7.123 7.123 0 0 1 1.826-.974.338.338 0 1 1 .416.532 7.175 7.175 0 0 0-1.879.98c-.52.429-.964.941-1.315 1.517a.338.338 0 0 1-.416-.533"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.735 9.225a6.874 6.874 0 0 0-1.675-1.176 7.121 7.121 0 0 0-1.998-.537.338.338 0 0 0-.285.612 7.173 7.173 0 0 1 2.05.532c.604.3 1.152.7 1.623 1.18a.338.338 0 0 0 .285-.611"
  }));
};

const SvgLamp = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m11.584 3.75 1.228.064-.126 2.401-1.229-.064zM6.914 5.306l-.995.723 1.414 1.946.995-.723zM9.563 17.25a10.45 10.45 0 0 1-1.208-1.49 6.59 6.59 0 0 1-1.23-3.396 4.8 4.8 0 0 1 1.357-3.428A4.75 4.75 0 0 1 11.97 7.58c.314 0 .628.03.937.088a4.171 4.171 0 0 1 2.679 1.74c.588.873.897 1.904.886 2.956a6.692 6.692 0 0 1-1.128 3.342 12.535 12.535 0 0 1-1.119 1.587zm2.521-6.883-1.762 3.554 1.36.46-.158 2.828 1.272-3.318-1-.704.287-2.821zM3.52 9.074 3 10.19l2.18 1.016.52-1.115zM9.694 17.75h4.583v3.055H9.694zM17.318 5.928l.983.74-1.448 1.921-.982-.74zM21 10.649l-.39-1.168-2.28.76.388 1.168z"
  }));
};

const SvgLike = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m12.003 19.843-.014.009v-.02a32.889 32.889 0 0 1-8.092-7.552 5.052 5.052 0 0 1 1.94-7.411C8.909 3.49 11.773 6.426 12 6.669c.223-.241 3.091-3.18 6.164-1.802a5.052 5.052 0 0 1 1.942 7.411 32.903 32.903 0 0 1-8.09 7.555v.019z"
  }));
};

const SvgLinkConnected = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m20.965 15.58-4.76-4.76a.797.797 0 0 0-1.14 0l-1.56 1.56-1.88-1.88 1.56-1.56c.32-.32.32-.82 0-1.14l-4.76-4.76a.797.797 0 0 0-1.14 0L3.025 7.3a.79.79 0 0 0-.24.56c0 .22.08.42.24.56l4.76 4.76c.16.16.36.24.56.24.2 0 .4-.08.56-.24l1.56-1.56 1.88 1.88-1.56 1.56c-.32.32-.32.82 0 1.14l4.76 4.76c.16.16.36.24.56.24.22 0 .42-.08.56-.24l4.26-4.26c.36-.3.36-.82.04-1.12m-12.6-4.1-3.62-3.62 3.12-3.12 3.62 3.62-1 1-.6-.6a.797.797 0 0 0-1.14 0c-.32.32-.32.82 0 1.14l.6.6zm7.78 7.78-3.62-3.62 1-1 .6.6c.16.16.36.24.56.24.2 0 .4-.08.56-.24.32-.32.32-.82 0-1.14l-.6-.6 1-1 3.62 3.62z"
  }));
};

const SvgLoan = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.965 8.148h-1.74v-3.51h1.74l6.74-1.233a1 1 0 0 1 .484.03l5.006 1.599a.2.2 0 0 1 .126.261l-.336.885a1 1 0 0 1-1.165.619l-3.57-.843a1 1 0 0 0-.586.039l-2.503.956a.2.2 0 0 0-.13.187v.22c0 .11.09.2.2.2h1.825a1 1 0 0 1 1 1v.604a.2.2 0 0 1-.2.2h-4.198a1 1 0 0 1-.442-.103zM3.604 8.114h1.77V4.608h-1.77z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M5.26 18.136V15.28h.839l1.777 2.856h1.75c-.339-.489-1.068-1.57-2.188-3.242.44-.194.782-.46 1.023-.8.24-.342.361-.733.361-1.17 0-.75-.242-1.309-.728-1.675-.485-.37-1.233-.555-2.244-.555H3.68v7.442zm.508-4.138H5.26v-2.011h.479c.509 0 .884.075 1.125.224.244.15.366.4.366.753 0 .357-.119.618-.356.784-.238.167-.606.25-1.105.25M12.347 17.51c.38.485.904.728 1.572.728a1.95 1.95 0 0 0 1.161-.351c.33-.235.582-.576.758-1.024.18-.447.27-.975.27-1.583 0-.923-.19-1.644-.57-2.163-.38-.52-.906-.779-1.578-.779-.713 0-1.25.282-1.614.845h-.07l-.22-.738h-1.262v8.196h1.553v-2.306c0-.075-.028-.35-.082-.825zm.274-3.574c.177-.237.457-.356.84-.356.367 0 .635.141.805.423.173.278.26.697.26 1.257 0 1.147-.349 1.72-1.044 1.72-.394 0-.682-.132-.866-.396-.18-.265-.27-.703-.27-1.314v-.168c.007-.543.099-.931.275-1.165",
    clipRule: "evenodd"
  }));
};

const SvgLocation = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.078 21.003c-.536 0-2.148-1.915-3.518-4.182-1.741-2.879-2.74-5.634-2.74-7.557a7.258 7.258 0 0 1 .539-2.876 5.247 5.247 0 0 1 1.42-1.94 6.595 6.595 0 0 1 4.3-1.442 6.594 6.594 0 0 1 4.302 1.442 5.246 5.246 0 0 1 1.42 1.94c.373.912.556 1.89.539 2.876-.004 4.502-5.145 11.74-6.262 11.74m.113-14.964a3.336 3.336 0 1 0 0 6.673 3.336 3.336 0 0 0 0-6.673"
  }));
};

const SvgLogout = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.346 12.885H17.71a.944.944 0 1 0 0-1.887H6.346L7.615 9.78a.918.918 0 0 0 0-1.334 1.009 1.009 0 0 0-1.388 0l-2.942 2.83a.989.989 0 0 0-.065.068l-.014.018a.762.762 0 0 0-.043.056l-.01.017a1.68 1.68 0 0 0-.04.06l-.006.014a1.08 1.08 0 0 0-.035.07l-.003.009a.854.854 0 0 0-.03.078v.01a.875.875 0 0 0-.02.079c0 .008 0 .016-.004.024a.825.825 0 0 0-.01.256c0 .023.007.045.01.068a.912.912 0 0 0 .024.104v.01a.864.864 0 0 0 .03.077l.003.009c.01.024.022.048.035.07l.006.014a.734.734 0 0 0 .039.06l.01.017c.013.02.029.038.043.057l.014.018a.97.97 0 0 0 .065.068l2.942 2.83a1.008 1.008 0 0 0 1.387 0 .917.917 0 0 0 0-1.334z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.525 5.25a6.41 6.41 0 0 0-5.373 2.963.836.836 0 0 0 .216 1.135.775.775 0 0 0 1.097-.223 4.844 4.844 0 0 1 4.062-2.24 5.058 5.058 0 0 1 0 10.112 4.846 4.846 0 0 1-4.055-2.228.778.778 0 0 0-.813-.343.775.775 0 0 0-.285.123.836.836 0 0 0-.213 1.135 6.412 6.412 0 0 0 5.364 2.95 6.696 6.696 0 0 0 0-13.384"
  }));
};

const SvgLowStock = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.613 6.622a.399.399 0 0 0-.022.164.395.395 0 0 0 .113.3.437.437 0 0 0 .315.107.428.428 0 0 0 .311-.109.464.464 0 0 0 0-.601.434.434 0 0 0-.312-.106.447.447 0 0 0-.318.104.403.403 0 0 0-.087.14M11.724 5.964h.593l.124-2.346h-.84z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "m12.605 1.797 3.9 5.77c.215.318.063.86-.241.862l-8.528-.002c-.304 0-.456-.544-.241-.862l3.903-5.768a.669.669 0 0 1 .604-.37.68.68 0 0 1 .603.37M8.941 7.629h6.116c.219 0 .328-.39.174-.618l-2.8-4.137A.48.48 0 0 0 12 2.61a.487.487 0 0 0-.433.265L8.768 7.011c-.154.228-.045.618.173.618",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m12.3 9.675.01.036 7.73.023 1.83 3.098-7.521 1.412-2.019-4.459 1.337 5.261 6.374-1.288v7.09l-7.74 1.718zM3.958 20.852v-7.09l6.372 1.288 1.31-5.08-1.992 4.274-7.518-1.41L3.96 9.736h7.78v.022l-.041.09v12.725z"
  }));
};

const SvgMessage = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.16 18.09a2.116 2.116 0 0 1-2.116-2.116V9.388c0-.048 0-.097.005-.145.22 1.416 7.816 4.363 7.892 4.391.076-.03 7.674-2.984 7.892-4.39a2.3 2.3 0 0 1 .005.144v6.585a2.119 2.119 0 0 1-2.116 2.116zM4.161 8.036V7.4C4.161 5.993 5.091 6 6.384 6H17.5c1.292 0 2.456-.007 2.456 1.4v.634c0 1.406-8.014 4.327-8.014 4.327s-7.78-2.92-7.78-4.325"
  }));
};

const SvgMicrobiology = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.094 11.25c2.218 0 3.594-1.383 3.594-2.625S10.312 6 8.094 6C5.875 6 4.5 7.383 4.5 8.625s1.375 2.625 3.594 2.625m0 1c2.537 0 4.594-1.623 4.594-3.625S10.63 5 8.093 5C5.557 5 3.5 6.623 3.5 8.625s2.057 3.625 4.594 3.625M18.699 8.315c.433-.292.551-.588.551-.784 0-.196-.118-.491-.551-.783-.428-.288-1.075-.498-1.84-.498-.764 0-1.412.21-1.839.498-.434.292-.551.587-.551.783 0 .196.117.492.551.784.428.287 1.075.498 1.84.498.764 0 1.411-.21 1.839-.498m-1.84 1.498c1.873 0 3.391-1.022 3.391-2.282S18.732 5.25 16.86 5.25c-1.873 0-3.391 1.021-3.391 2.281 0 1.26 1.518 2.282 3.39 2.282M15.728 17.49c1.956-1.046 2.516-2.914 1.93-4.01-.586-1.095-2.451-1.665-4.407-.619-1.956 1.047-2.516 2.915-1.93 4.01.586 1.096 2.45 1.666 4.407.62m.472.882c2.237-1.197 3.284-3.598 2.34-5.363-.945-1.766-3.524-2.226-5.76-1.03-2.238 1.198-3.285 3.6-2.34 5.364.944 1.765 3.523 2.226 5.76 1.03",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.625 8.031a.906.906 0 1 1-1.812 0 .906.906 0 0 1 1.812 0M17.02 14.645a.906.906 0 1 1-1.812 0 .906.906 0 0 1 1.813 0M14.833 16.645a.719.719 0 1 1-1.437 0 .719.719 0 0 1 1.437 0"
  }));
};

const SvgMortality = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.731 17.996a1.1 1.1 0 0 0 .715.089l2.707-.538c.3-.006.6-.03.897-.072l-3.89-3.81a1.09 1.09 0 0 0-.818.437 1.12 1.12 0 0 0-.113 1.171l.308.615-.308.615a1.125 1.125 0 0 0 .113 1.17c.103.138.236.248.39.324zm5.624-5.087 1.373 1.345h.006l3.05-2.803H15.78a2.804 2.804 0 0 1-.425 1.458zm.19-2.57h5.21v-.032c.007-.041.007-.079.007-.117v-.018c.01-.13.017-.255.017-.396a7.783 7.783 0 0 0-4.74-7.162l-1.99 6.262c.668.277 1.204.8 1.495 1.462zM8.558 8.672h4.39l2.036-6.403A7.803 7.803 0 0 0 13 2H4.113A1.111 1.111 0 0 0 3 3.113a5.559 5.559 0 0 0 5.56 5.56m-3.09-4.92a.552.552 0 0 1 .702.071.555.555 0 1 1-.7-.07zm10.376 13.96-2.85 2.85L14.432 22l2.85-2.85L20.135 22l1.437-1.438-2.85-2.85 2.85-2.85-1.437-1.438-2.851 2.85-2.85-2.85-1.438 1.437z"
  }));
};

const SvgNews = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.25 8.375H16.5V9.5H5.25zM15.376 15.125h-3.938v1.125h3.938zM11.438 12.875H16.5V14h-5.063zM16.5 10.625h-5.062v1.125H16.5zM5.25 10.625h5.063v5.625H5.25z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5h15.75v2.25H21v10.125c0 2.215-1.688 2.25-1.688 2.25H5.25C3 19.625 3 17.375 3 17.375zm1.816 13.42c.138.056.285.083.434.08h12.755a1.627 1.627 0 0 1-.38-1.125V6.125h-13.5v11.25a1.102 1.102 0 0 0 .69 1.046",
    clipRule: "evenodd"
  }));
};

const SvgNotification = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.5 18.503c-.945 0-1.105.018-2 0 .17.61.442 1.56.949 1.936a2.855 2.855 0 0 0 1.757.564 2.854 2.854 0 0 0 1.761-.566c.508-.379.864-1.323 1.033-1.934-.878.02-1.573-.002-2.5 0z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.13 14.405h-.035c-.269-4.335-2.524-11.402-5.886-11.402-3.466 0-5.764 7.059-5.912 11.413-.194.264-3.377 3.21-2.34 4.031.332.262 2.646.414 5.445.47.895.018 1.839.026 2.784.024h.094c.927 0 1.852-.013 2.73-.033 2.866-.065 5.228-.223 5.467-.461.986-.98-2.347-4.042-2.347-4.042"
  }));
};

const SvgOperational = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.225 14.65a3.024 3.024 0 0 1 3.103-.973c.03-.047.064-.092.1-.134l4.246-5.061c.036-.043.074-.083.115-.122a3.02 3.02 0 0 1 3.634-4.166l-1.494 1.78a1.161 1.161 0 0 0 1.78 1.493l1.493-1.78a3.02 3.02 0 0 1-3.122 4.376c-.049.102-.11.198-.183.284L10.65 15.41a1.338 1.338 0 0 1-.248.23 3.02 3.02 0 0 1-3.768 3.834l1.492-1.778a1.161 1.161 0 0 0-1.78-1.492l-1.493 1.78a3.014 3.014 0 0 1 .372-3.334"
  }));
};

const SvgParameter = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.065 19.103a4.19 4.19 0 0 1-4.063-4.305v-1.704c0-2.377 2.395.77 4.426.77s2.702-1.53 4.392-1.578c1.69-.048 2.611 1.5 4.607 1.579a4.757 4.757 0 0 0 2.296-.824c1.254-.723 2.275-1.445 2.275.053v1.705a4.188 4.188 0 0 1-4.063 4.304zm11.182-9.627V4.5h2.75v4.976zm.241-.436h2.27V4.935h-2.27zm-4.07.436V4.5h2.752v4.976zm.242-.436h2.269V4.935h-2.27zm-4.255.436V4.5h2.945v4.976zm-3.49 0V4.5h2.75v4.976zm-3.91 0V4.5H5.95v4.976z"
  }));
};

const SvgPassword = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.708 21A1.208 1.208 0 0 1 4.5 19.792v-9.38a1.208 1.208 0 0 1 1.208-1.207h.604a8.745 8.745 0 0 1 1.606-3.946A5.166 5.166 0 0 1 12.018 3a5.17 5.17 0 0 1 4.1 2.26 8.73 8.73 0 0 1 1.604 3.945h.64a1.208 1.208 0 0 1 1.207 1.208v9.379A1.208 1.208 0 0 1 18.361 21zm4.688-7.087a1.439 1.439 0 0 0 .557 1.133l-.556 2.209h2.861l-.56-2.203a1.431 1.431 0 1 0-2.303-1.138zm4.92-4.708c-.431-2.227-1.75-3.857-3.299-3.857-1.548 0-2.869 1.63-3.3 3.857z"
  }));
};

const SvgPh = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.006 7.994c.124.12.3.12.442.034a4.605 4.605 0 0 1 1.646-.668c.159-.034.283-.154.283-.326V3.932a.321.321 0 0 0-.372-.325 8.594 8.594 0 0 0-4.228 1.696.318.318 0 0 0-.018.497zM14.544 8.045a4.604 4.604 0 0 0-1.646-.668c-.159-.034-.283-.171-.265-.326V3.932c0-.188.177-.342.372-.325a8.594 8.594 0 0 1 4.228 1.696c.16.12.16.36.018.497l-2.265 2.211c-.124.12-.3.12-.442.034M3.957 11.653H7.16c.16 0 .301-.12.337-.274a4.31 4.31 0 0 1 .69-1.594c.088-.137.088-.308-.036-.428L5.868 7.163c-.142-.137-.39-.137-.513.018a8.048 8.048 0 0 0-1.752 4.095.347.347 0 0 0 .354.377M8.168 14.72a4.31 4.31 0 0 1-.69-1.593.34.34 0 0 0-.336-.274H3.957c-.212 0-.371.171-.336.36a8.047 8.047 0 0 0 1.751 4.096.342.342 0 0 0 .514.017l2.264-2.194c.106-.103.106-.274.018-.411M16.855 12.853h3.202c.212 0 .371.171.336.377a8.047 8.047 0 0 1-1.752 4.096c-.123.154-.371.154-.513.017l-2.264-2.194c-.124-.12-.124-.291-.036-.428a4.31 4.31 0 0 0 .69-1.594.354.354 0 0 1 .337-.274M11.105 16.623a4.603 4.603 0 0 1-1.645-.668c-.142-.086-.319-.086-.443.034l-2.264 2.21c-.142.138-.142.378.017.498A8.593 8.593 0 0 0 11 20.393c.194.017.371-.137.371-.325v-3.12c.018-.154-.106-.29-.265-.325M16.855 11.653a.34.34 0 0 1-.336-.274 4.161 4.161 0 0 0-.673-1.594c-.088-.137-.088-.308.036-.428l2.247-2.176a.342.342 0 0 1 .513.017 8.047 8.047 0 0 1 1.751 4.095c.035.189-.124.36-.336.36zM14.997 16.006c-.124-.12-.3-.12-.442-.034a4.603 4.603 0 0 1-1.646.668c-.159.034-.283.154-.283.326v3.102c0 .205.177.36.372.325a8.594 8.594 0 0 0 4.228-1.696c.16-.12.177-.36.018-.497z"
  }));
};

const SvgPicture = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M21 19.146H3V5.003h18zm-6.334-1.389a.498.498 0 0 0 .302.103h5.249a.512.512 0 0 0 .508-.515l-.8-4.118a.516.516 0 0 0-.51-.515h-4.57a.49.49 0 0 0-.243.063.502.502 0 0 0-.243-.063H9.714c-.1-.001-.197.027-.28.08a.499.499 0 0 0-.278-.08h-4.57a.512.512 0 0 0-.508.515l-.802 4.119a.516.516 0 0 0 .509.514h5.248a.503.503 0 0 0 .338-.132.513.513 0 0 0 .343.132h4.646c.11 0 .218-.036.306-.102M9.109 6.723l-5.313 5.35h16.312l-3.614-3.08-3.405 2.038-3.973-4.308zm4.498.21a.966.966 0 0 0 0 1.928.966.966 0 0 0 .682-1.645.966.966 0 0 0-.682-.283zm6.12 10.32H18.53a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386m-2.293 0H16.24a.382.382 0 0 1-.38-.386v-1.002a.381.381 0 0 1 .38-.386h1.192a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386zm-9.672 0H6.568a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386zm-2.291 0H4.275a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.196a.384.384 0 0 1 .38.386v1.002a.384.384 0 0 1-.38.386zm8.388-.011h-1.216a.39.39 0 0 1-.387-.392V15.83a.39.39 0 0 1 .387-.392h1.216a.39.39 0 0 1 .387.392v1.018a.39.39 0 0 1-.386.393zm-2.33 0h-1.216a.39.39 0 0 1-.386-.392V15.83a.39.39 0 0 1 .386-.392h1.217a.39.39 0 0 1 .386.392v1.018a.39.39 0 0 1-.386.393zm2.343-2.027h-1.216a.39.39 0 0 1-.387-.393v-1.017a.39.39 0 0 1 .387-.393h1.216a.39.39 0 0 1 .387.393v1.018a.39.39 0 0 1-.386.393zm-2.33 0h-1.216a.39.39 0 0 1-.387-.393v-1.017a.39.39 0 0 1 .387-.393h1.216a.39.39 0 0 1 .387.393v1.018a.39.39 0 0 1-.386.393zm7.395-.041h-1.195a.384.384 0 0 1-.38-.386v-1.002a.383.383 0 0 1 .38-.386h1.195a.383.383 0 0 1 .38.386v1.002a.383.383 0 0 1-.379.386zm-2.292 0h-1.194a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386h1.194a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386zm-8.095 0H7.355a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386H8.55a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.38.386zm-2.292 0H5.064a.384.384 0 0 1-.38-.386v-1.002a.384.384 0 0 1 .38-.386h1.194a.384.384 0 0 1 .38.386v1.002a.383.383 0 0 1-.379.386z"
  }));
};

const SvgPin = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m19.3 6.75 1.1 1c.2.2.2.5-.1.6-.7.9-1.8 1.1-2.8.7l-3.6 5.1c.7.9.7 2.3-.1 3.2-.2.2-.5.2-.7 0l-1.931-1.676L4 21.25l4.563-7.836L6.3 11.45c-.2-.2-.2-.5 0-.7.9-.9 2.2-1.1 3.2-.5l4.6-4.2c-.5-.9-.4-2.1.3-2.9.2-.2.5-.2.7 0l2.7 2.3z"
  }));
};

const SvgPlankton = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M16.41 4.163a.5.5 0 0 1 .27.653l-.494 1.197c.54.313 1.048.802 1.387 1.452l1.17-.402a.5.5 0 1 1 .326.945l-1.16.398c.071.34.098.706.072 1.094h1.144a.5.5 0 0 1 0 1h-1.321a6.313 6.313 0 0 1-.411 1.058l1.157.623a.5.5 0 1 1-.475.88l-1.178-.634c-.188.288-.402.583-.645.884l1.096.896a.5.5 0 0 1-.633.774l-1.12-.915a18.097 18.097 0 0 1-1.489 1.414l.844 1.032a.5.5 0 1 1-.775.633l-.847-1.037c-.5.382-.975.698-1.427.957l.416 1.21a.5.5 0 0 1-.946.325L11 17.522a6.524 6.524 0 0 1-1.555.477v1.376a.5.5 0 0 1-1 0V18.06a3.816 3.816 0 0 1-1.865-.577L5.513 18.57a.5.5 0 1 1-.713-.701l1.009-1.025a3.58 3.58 0 0 1-.422-.55c-.42-.681-.3-1.534.232-2.26l-1.09-1.051a.5.5 0 0 1 .693-.72l1.104 1.062c.349-.266.774-.503 1.275-.697.23-.088.44-.17.633-.25l-.638-1.132a.5.5 0 1 1 .87-.49l.689 1.22c.675-.33 1.164-.678 1.78-1.29l-.923-.691a.5.5 0 1 1 .6-.8l.982.736c.17-.263.326-.582.482-.943.083-.191.169-.403.256-.62.077-.19.156-.384.236-.573l-.922-.397a.5.5 0 0 1 .396-.919l.96.414c.172-.3.374-.583.623-.805a1.78 1.78 0 0 1 1.471-.458c.052.007.104.015.156.026l.505-1.221a.5.5 0 0 1 .653-.271m-2.119 2.67c-.212.19-.409.498-.609.918-.144.302-.269.612-.4.939-.09.222-.183.452-.288.694-.241.559-.533 1.144-.94 1.582-1.028 1.102-1.717 1.592-2.908 2.114-.347.152-.736.306-1.184.48-.588.227-1.014.51-1.304.796-.598.589-.592 1.133-.42 1.413.098.158.294.423.6.671.441.357 1.11.684 2.073.617.585-.041 1.298-.23 2.15-.672.607-.315 1.282-.756 2.03-1.361.179-.145.361-.299.548-.463a16.216 16.216 0 0 0 1.528-1.512 9.7 9.7 0 0 0 1.117-1.536c.342-.594.541-1.132.636-1.61.13-.65.07-1.198-.09-1.648a2.588 2.588 0 0 0-1.466-1.53 1.754 1.754 0 0 0-.398-.104.784.784 0 0 0-.675.211",
    clipRule: "evenodd"
  }));
};

const SvgPlatformMobile = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.833 21.143a1.687 1.687 0 0 1-1.688-1.688V4.551a1.685 1.685 0 0 1 1.688-1.687h6.334a1.687 1.687 0 0 1 1.688 1.687v14.904a1.687 1.687 0 0 1-1.688 1.688zm.421-16.72a.998.998 0 0 0-.998 1v11.082c0 .551.447.998.998.998h5.492a.998.998 0 0 0 .998-.998V5.422a.998.998 0 0 0-.998-.998zM12 20.35a.886.886 0 1 0 0-1.773.886.886 0 0 0 0 1.773"
  }));
};

const SvgPlatformPc = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.467 19.717a.76.76 0 0 1-.536-1.294.76.76 0 0 1 .536-.222h2.265v-1.518h-4.93a2.127 2.127 0 0 1-2.128-2.127V6.418A2.128 2.128 0 0 1 4.802 4.29h14.397a2.127 2.127 0 0 1 2.127 2.128v8.137a2.127 2.127 0 0 1-2.127 2.128H14.27V18.2h2.267a.76.76 0 0 1 .758.758.76.76 0 0 1-.758.758zM4.691 6.637V14h14.62V6.636a1.061 1.061 0 0 0-1.065-1.064H5.755A1.061 1.061 0 0 0 4.69 6.636"
  }));
};

const SvgPlatform = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.786 19.454a.676.676 0 0 1-.676-.675v-6.372a.676.676 0 0 1 .676-.676h2.538a.676.676 0 0 1 .676.676v6.372a.676.676 0 0 1-.676.675zm.969-.443a.354.354 0 0 0 .678.135.352.352 0 0 0-.575-.384.355.355 0 0 0-.103.25m-1.15-5.806v4.068a.676.676 0 0 0 .677.676h1.547a.676.676 0 0 0 .676-.676v-4.068a.676.676 0 0 0-.676-.676h-1.545a.676.676 0 0 0-.677.677zM7.127 18.54a.654.654 0 0 1 0-1.307h1.951v-1.307H4.352A1.352 1.352 0 0 1 3 14.575v-7.97a1.352 1.352 0 0 1 1.352-1.352h13.361a1.352 1.352 0 0 1 1.352 1.352v4.42h-1.737V7.032a.676.676 0 0 0-.676-.676H5.412a.676.676 0 0 0-.676.676v7.114a.676.676 0 0 0 .676.676h10.993v1.105h-3.418v1.306h1.952a.654.654 0 0 1 0 1.307z"
  }));
};

const SvgPondStep = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.09 17.465H3V3h12.181v6.302a3.688 3.688 0 0 0-1.032.443 3.398 3.398 0 0 1-1.794.559 4.266 4.266 0 0 1-1.869-.677A2.81 2.81 0 0 0 9.449 9.2c-.243 0-.356.188-.356.592v1.584H5.03v.507h4.06v2.538H5.03v.507h4.06zM5.03 8.329v.507h8.457V8.33zm0-3.044v.507h8.457v-.507z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.578 20.724h-5.88a2.375 2.375 0 0 1-2.422-2.32v-7.288c0-.326.092-.478.288-.478.3.057.586.175.84.346.453.298.97.485 1.51.546a2.745 2.745 0 0 0 1.45-.448 2.4 2.4 0 0 1 1.166-.4h.046c.44.025.867.16 1.243.391.443.265.942.422 1.456.458h.041c.471-.046.925-.198 1.328-.445L19.81 11h.005a2.43 2.43 0 0 1 .885-.355c.205 0 .3.15.3.472v7.289a2.375 2.375 0 0 1-2.422 2.319m-3.51-3.29a.418.418 0 0 0-.374.604l.116.232-.116.23a.418.418 0 0 0 .456.597l1.018-.203a2.9 2.9 0 0 0 1.025-.209l-.689-1.123a1.051 1.051 0 0 1-.363.078l-.99-.199a.417.417 0 0 0-.083-.007m2.09-.833a1.06 1.06 0 0 1-.306.733l.717 1.173a2.934 2.934 0 0 0 1.4-1.906zm.098-3.323-.749 2.357c.252.104.453.301.563.55h1.959c0-.018 0-.035.003-.053.004-.056.007-.104.007-.158a2.925 2.925 0 0 0-1.783-2.694zm-4.485-.23a.419.419 0 0 0-.418.418 2.092 2.092 0 0 0 2.088 2.09h1.652l.77-2.409a2.933 2.933 0 0 0-.75-.1zm.625 1.04a.21.21 0 1 1 .006-.417.21.21 0 0 1-.006.418"
  }));
};

const SvgPond = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.933 20.68h-9.87A3.986 3.986 0 0 1 3 16.787V4.553c0-.55.154-.803.484-.803a3.81 3.81 0 0 1 1.407.58c.761.502 1.63.816 2.535.919a4.61 4.61 0 0 0 2.436-.757 4.026 4.026 0 0 1 1.954-.668h.077c.74.043 1.457.27 2.087.659a5.514 5.514 0 0 0 2.449.766h.069a5.244 5.244 0 0 0 2.226-.742l.279-.147.01-.005c.45-.294.954-.496 1.483-.594.343 0 .504.252.504.792v12.234a3.986 3.986 0 0 1-4.067 3.893m-5.892-5.523a.703.703 0 0 0-.627 1.015l.194.389-.194.387a.702.702 0 0 0 .765 1.003l1.709-.342a4.866 4.866 0 0 0 1.716-.35l-1.151-1.887c-.194.08-.4.124-.61.13l-1.663-.332a.705.705 0 0 0-.137-.014zm3.508-1.399a1.78 1.78 0 0 1-.512 1.23l1.202 1.97a4.926 4.926 0 0 0 2.35-3.2zm.164-5.577-1.255 3.954c.422.175.76.505.946.923h3.285c0-.03.004-.06.006-.088a3.85 3.85 0 0 0 .011-.265 4.91 4.91 0 0 0-2.992-4.522zm-7.528-.387a.703.703 0 0 0-.702.701 3.512 3.512 0 0 0 3.508 3.509h2.774l1.286-4.043a4.924 4.924 0 0 0-1.252-.167zm1.052 1.749a.351.351 0 1 1-.001-.703.351.351 0 0 1 .001.703"
  }));
};

const SvgPricePrediction = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m3.619 19.565-.169-.169a.896.896 0 0 1 0-1.27l3.758-3.753a.886.886 0 0 1 .977-.195.9.9 0 0 1 .292.195l2.82 2.819 6.278-6.28c-.183-.18-.366-.36-.545-.545l-.26-.263a.54.54 0 0 1-.164-.653.543.543 0 0 1 .113-.169.67.67 0 0 1 .48-.164c1.04-.047 2.075-.099 3.113-.146h.06a.623.623 0 0 1 .473.171.631.631 0 0 1 .15.494l-.05 1.013c-.032.678-.065 1.35-.095 2.023a.742.742 0 0 1-.193.516.697.697 0 0 1-.154.114.528.528 0 0 1-.256.068.606.606 0 0 1-.429-.226l-.801-.797-7.083 7.082a.9.9 0 0 1-1.273 0l-2.819-2.818-2.953 2.953a.895.895 0 0 1-1.27 0m4.826-7.797v-6.6h1.017l.176.596h.06a1.447 1.447 0 0 1 1.3-.68 1.487 1.487 0 0 1 1.27.626c.334.518.495 1.128.459 1.743.01.434-.063.867-.215 1.275a1.79 1.79 0 0 1-.613.824c-.273.191-.6.29-.935.283a1.52 1.52 0 0 1-1.266-.586h-.066c.044.382.066.604.066.664v1.859zm1.472-5.4a1.632 1.632 0 0 0-.222.941v.136a1.93 1.93 0 0 0 .22 1.057.783.783 0 0 0 .694.32c.56 0 .84-.461.84-1.385.022-.35-.05-.7-.207-1.015a.706.706 0 0 0-.65-.338.79.79 0 0 0-.675.284M6.379 9.751 4.948 7.453h-.675V9.75H3V3.758h1.747a2.986 2.986 0 0 1 1.805.446 1.587 1.587 0 0 1 .589 1.349c.006.336-.095.666-.289.942-.21.288-.496.512-.826.646.902 1.347 1.49 2.217 1.762 2.61zM4.273 6.419h.408c.31.023.62-.047.89-.2a.72.72 0 0 0 .287-.632.656.656 0 0 0-.294-.607 1.778 1.778 0 0 0-.908-.18h-.383z"
  }));
};

const SvgPrice = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.96 18.127a.841.841 0 0 1-.084-.906l.239-.477-.24-.474a.846.846 0 0 1 .086-.905.875.875 0 0 1 .86-.324l2.06.408c.114-.003.227-.015.339-.037v2.607c-.102.007-.194.01-.28.013l-2.119.416a.877.877 0 0 1-.86-.322m9.302.073v-5.758h.887l.154.518h.05a1.262 1.262 0 0 1 1.134-.594 1.298 1.298 0 0 1 1.108.55c.292.451.432.983.4 1.52a3.01 3.01 0 0 1-.187 1.112 1.56 1.56 0 0 1-.535.718 1.368 1.368 0 0 1-.816.244A1.327 1.327 0 0 1 18.353 16h-.057c.038.333.057.527.057.58v1.62zm1.282-4.712a1.427 1.427 0 0 0-.194.82v.116c-.025.32.041.64.192.922a.683.683 0 0 0 .606.28c.488 0 .733-.404.733-1.21a1.727 1.727 0 0 0-.184-.885.617.617 0 0 0-.567-.295.687.687 0 0 0-.584.251zm-3.085 2.95L14.21 14.43h-.59v2.007h-1.11V11.21h1.527a2.605 2.605 0 0 1 1.577.389 1.383 1.383 0 0 1 .508 1.176c.005.294-.084.582-.253.821-.183.25-.432.446-.72.563a219.17 219.17 0 0 0 1.539 2.278zm-1.838-2.906h.358c.27.02.54-.041.776-.175a.624.624 0 0 0 .25-.55.572.572 0 0 0-.256-.53 1.552 1.552 0 0 0-.793-.156h-.335zm-2.838-2.37H7.348A4.329 4.329 0 0 1 3 6.862.866.866 0 0 1 3.869 6h6.958a6.195 6.195 0 0 1 1.553.207zM4.74 7.716a.434.434 0 1 0 .032-.165.432.432 0 0 0-.033.166zm11.942 2.664h-4.735l1.256-3.902a6.109 6.109 0 0 1 3.479 3.9z"
  }));
};

const SvgPrint = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6 3h12v4H6zM5 8h14c1.66 0 3 1.34 3 3v6h-4v4H6v-4H2.002v-6c0-1.66 1.34-3 3-3zm3 11h8v-5H8zm11-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
  }));
};

const SvgPro = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.713 16.862H5.367v-2.59L3 8.026l5.568 1.553L11.86 4.5l3.052 4.837L21 8.026l-2.287 6.246zM18.7 17.411H5.31v2.14H18.7z"
  }));
};

const SvgProductCategories = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.895 21h-3.118v-3.18h1.044v1.721h1.03V17.82h1.045V21zm-5.389 0h-3.118v-3.18h1.044v1.721h1.031V17.82h1.045V21zm-5.388 0H5v-3.18h1.044v1.721h1.031V17.82H8.12V21zm8.912-1.671v-1.514h.612v1.514zm-5.389 0v-1.514h.613v1.514zm-5.387 0v-1.514h.612v1.514zm10.62-1.96v-2.245h-4.04v2.245h-1.348v-2.245h-4.04v2.245H6.099v-3.593h12.124v3.593zm-5.388-3.593V9.062h1.347v4.714zm3.401-5.244h-5.42V3h1.816v2.991h1.791V3h1.817v5.532zm-3.242-2.904V3h1.065v2.628z"
  }));
};

const SvgProduct = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m7.24 17.756-2.21.331v-3.855s2.42-.366 4.464-.544c1.14-.098 7.016-.274 7.5.25.21.223-.488 1.002-.701 1.224-.422.438-1.712.433-2.543.428h-.438c-.941.02-3.02.036-3.02.036s3.725.792 5.545.223c1.015-.318 3.38-1.825 3.892-1.934.405-.088 1.134-.306 1.244.111.19.716-.65 1.41-1.168 1.86-.865.755-4.038 3.25-4.99 3.481a2.288 2.288 0 0 1-.52.05c-2.089-.004-7.055-1.661-7.055-1.661M3 18.074v-3.837h1.625v3.837zm13.291-6.083h-7.34V4.5h2.455v4.05h2.425V4.5h2.455v7.49zm-4.39-3.933V4.5h1.443v3.557z"
  }));
};

const SvgPublic = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 12.003a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9m10.114 1.94c1.25.17.482 2.005.798 3.076.317 1.07-2.022 1.21-1.967 2.234a.85.85 0 0 0 .052.25 7.506 7.506 0 0 0 6.525-3.804c-.514-.12-1.174-.974-1.857-1.827-.857-1.07-1.745-2.143-2.412-1.761-1.36.771-2.417-.006-3.842-1.048a2.862 2.862 0 0 0-1.81-.428c-.771 0-1.31 0-1.074-1.2.208-1.07 4.935-1.32 5.251-1.873.454-.873-.092-2.207-.264-3.041a7.497 7.497 0 0 0-6.231 12.333c.286-.008.686.006 1.123.02 1.371.042 3.162.085 3.343-.515.108-.428 1.043-2.429 2.228-2.429.046.001.092.005.137.012m-5.116.208c-.96-.487-1.395-1.513-2.174-1.371-.779.142-1.09-2.148-.397-3.015.334-.417 1.42 2.159 2.236 2.297.264-.035.525-.092.78-.172.929-.23 2.314-.457 2.29.89a1.481 1.481 0 0 1-1.568 1.655 2.67 2.67 0 0 1-1.167-.284"
  }));
};

const SvgRadiobuttonUnchecked = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12m2 0c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8",
    clipRule: "evenodd"
  }));
};

const SvgReadMessage = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.62 19.207a1.97 1.97 0 0 1-1.97-1.97v-6.129c0-.045 0-.09.004-.135.205 1.318 7.275 4.06 7.346 4.087.07-.028 7.142-2.778 7.346-4.087.003.054.004.099.004.135v6.13a1.972 1.972 0 0 1-1.97 1.969zm-1.963-8.284H4.65V9.028c0-.676 1.97-1.735 3.62-2.505A58.153 58.153 0 0 1 11.89 5c.08.029 1.927.708 3.73 1.523 1.702.77 3.73 1.829 3.73 2.505v1.894h-.007c-.139-.69-2.157-1.727-3.827-2.477a62.293 62.293 0 0 0-3.623-1.475c-.018.005-1.758.66-3.521 1.477-1.62.749-3.58 1.786-3.715 2.475z"
  }));
};

const SvgRefresh = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }));
};

const SvgReminder = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.876 6.876a8.383 8.383 0 0 1 1.901 2.627 3.229 3.229 0 0 0 .98-3.756 3.226 3.226 0 0 0-5.646-.59 8.364 8.364 0 0 1 2.765 1.72M4.374 9.617A3.225 3.225 0 1 1 8.93 5.22a8.434 8.434 0 0 0-4.556 4.396"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12.106 19.774a7.179 7.179 0 0 1-5.11-2.117 7.179 7.179 0 0 1-2.116-5.109A7.18 7.18 0 0 1 6.997 7.44a7.18 7.18 0 0 1 5.108-2.117 7.18 7.18 0 0 1 5.11 2.117 7.18 7.18 0 0 1 2.116 5.11 7.18 7.18 0 0 1-2.117 5.108 7.18 7.18 0 0 1-5.108 2.117M11.81 8.102a.503.503 0 0 0-.503.503v4.523a.503.503 0 0 0 .296.457.503.503 0 0 0 .458.296h3.518a.503.503 0 0 0 0-1.005h-3.267V8.606a.503.503 0 0 0-.502-.503",
    clipRule: "evenodd"
  }));
};

const SvgRemove = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.521 13.543h4.925l3.11-.001h4.923a1.562 1.562 0 0 0 1.078-.463 1.535 1.535 0 0 0 0-2.157 1.562 1.562 0 0 0-1.078-.463H5.52a1.562 1.562 0 0 0-1.077.464 1.536 1.536 0 0 0 0 2.156c.284.289.67.455 1.077.464"
  }));
};

const SvgRfid = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.116 17.315H4.884A1.884 1.884 0 0 1 3 15.43V7.885A1.884 1.884 0 0 1 4.884 6h14.232A1.884 1.884 0 0 1 21 7.884v7.547a1.884 1.884 0 0 1-1.884 1.884m-6.032-9.257a.754.754 0 0 0-.095.006.309.309 0 0 0-.23.156.581.581 0 0 0-.034.482c.016.04.053.112.104.21.543.951.842 2.022.871 3.117a4.374 4.374 0 0 1-.975 2.912.54.54 0 0 0-.1.44.412.412 0 0 0 .198.301.456.456 0 0 0 .212.046c.248-.005.484-.1.666-.268a6.546 6.546 0 0 0 1.049-3.43 7.593 7.593 0 0 0-1.035-3.587l-.015-.027a.69.69 0 0 0-.616-.358m-1.709 1.005a.47.47 0 0 0-.197.04.393.393 0 0 0-.2.24.523.523 0 0 0 .016.394c.032.051.067.1.105.148.506.6.793 1.354.816 2.14a2.264 2.264 0 0 1-.835 1.933l-.015.012a.541.541 0 0 0-.146.42.4.4 0 0 0 .146.323c.07.044.152.066.234.063a.891.891 0 0 0 .514-.182 4.067 4.067 0 0 0 1.185-2.57 4.917 4.917 0 0 0-1.082-2.71.714.714 0 0 0-.54-.25zm-1.341 1.303a.388.388 0 0 0-.202.048.284.284 0 0 0-.122.188.542.542 0 0 0 .048.365.618.618 0 0 0 .076.079 1.377 1.377 0 0 1 .476 1.077c0 .691-.284.855-.436.942l-.042.026a.44.44 0 0 0-.14.296.41.41 0 0 0 .066.326.355.355 0 0 0 .265.09c.127 0 .252-.03.364-.09.44-.42.712-.985.767-1.59a2.717 2.717 0 0 0-.665-1.601.724.724 0 0 0-.455-.156"
  }));
};

const SvgSalinity = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "m11.645 3.554.445-.329.005.007.014.018.052.072.195.271a71.996 71.996 0 0 1 2.806 4.224c.767 1.253 1.541 2.622 2.125 3.898.574 1.255 1.002 2.497 1.002 3.467a6.645 6.645 0 0 1-13.289 0c0-.97.428-2.212 1.002-3.467.584-1.276 1.358-2.645 2.125-3.898a72.104 72.104 0 0 1 3.001-4.495l.052-.072.014-.018.005-.007zm0 0 .445-.329a.554.554 0 0 0-.891 0zm-.496 1.658a73.8 73.8 0 0 1 .496-.71 70.895 70.895 0 0 1 2.573 3.893c.755 1.234 1.504 2.562 2.062 3.781.568 1.241.902 2.294.902 3.006a5.537 5.537 0 1 1-11.075 0c0-.712.334-1.765.902-3.006.558-1.22 1.307-2.547 2.062-3.78a71.02 71.02 0 0 1 2.078-3.184m1.302 6.993V9.969h-1.612v2.236H8.602v1.612h2.237v2.236h1.612v-2.236h2.236v-1.612zm-3.849 5.782V16.77h6.085v1.216z",
    clipRule: "evenodd"
  }));
};

const SvgSampling = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.074 19.982V16.49L3 16.448l.074-.128v-.165h.094L10.334 3.75l.636.367.07-.186.96.334.96-.334.07.186.636-.367 7.166 12.405h.094v.165l.074.128-.074.042v3.49zm16.282-3.827L14.237 7.29l3.377 8.866zm-3.1 0L12 4.972 7.74 16.155zm-9.873 0L9.76 7.292l-5.117 8.863z"
  }));
};

const SvgSearch = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M6.45 17.214a7.76 7.76 0 0 0 4.311 1.307 7.71 7.71 0 0 0 4.654-1.547c.041.06.088.115.14.168l3.004 3.003a1.209 1.209 0 1 0 1.71-1.71l-3.004-3.003a1.217 1.217 0 0 0-.191-.157 7.76 7.76 0 1 0-10.625 1.939M7.84 6.39a5.257 5.257 0 0 1 2.921-.886 5.263 5.263 0 0 1 5.258 5.257A5.257 5.257 0 1 1 7.84 6.39",
    clipRule: "evenodd"
  }));
};

const SvgSetting = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.79 21.002h-2.268a.597.597 0 0 1-.597-.597v-1.797a6.912 6.912 0 0 1-1.74-.83l-1.146 1.145a.595.595 0 0 1-.845 0L4.59 17.319a.591.591 0 0 1-.13-.65.591.591 0 0 1 .13-.194l1.27-1.27a6.902 6.902 0 0 1-.645-1.818H3.597A.597.597 0 0 1 3 12.79v-2.268a.597.597 0 0 1 .597-.597h1.796a6.894 6.894 0 0 1 .831-1.742L5.08 7.039a.597.597 0 0 1 0-.845l1.603-1.603a.593.593 0 0 1 .844 0l1.27 1.272c.361-.188.738-.345 1.127-.467V3.597A.597.597 0 0 1 10.52 3h2.268a.597.597 0 0 1 .597.597v1.618c.633.13 1.245.347 1.818.646l1.27-1.271a.593.593 0 0 1 .845 0l1.603 1.603a.597.597 0 0 1 0 .844l-1.145 1.145c.357.538.637 1.125.83 1.742h1.797a.597.597 0 0 1 .597.597v2.268a.597.597 0 0 1-.597.597h-1.618a6.908 6.908 0 0 1-.645 1.817l1.27 1.27a.597.597 0 0 1 0 .845l-1.603 1.603a.595.595 0 0 1-.844 0l-1.146-1.144a6.867 6.867 0 0 1-2.433 1.008v1.618a.597.597 0 0 1-.594.599m-.786-11.77a2.773 2.773 0 0 0-2.77 2.77 2.772 2.772 0 0 0 2.77 2.767 2.771 2.771 0 0 0 2.77-2.768 2.773 2.773 0 0 0-2.772-2.769z"
  }));
};

const SvgShare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M16.04 16.89c.52-.47 1.2-.77 1.96-.77 1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-.22.03-.44.08-.65l-7.12-4.16c-.54.5-1.25.81-2.04.81-1.66 0-3-1.34-3-3s1.34-3 3-3c.79 0 1.5.31 2.04.81l7.05-4.11c-.05-.23-.09-.46-.09-.7 0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.79 0-1.5-.31-2.04-.81l-7.05 4.11c.05.23.09.46.09.7 0 .24-.04.47-.09.7zM19 5.04c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1m-13 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m11 6.02c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1",
    clipRule: "evenodd"
  }));
};

const SvgShow = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.926 13.889a2.16 2.16 0 0 0 3.432-2.422 1.433 1.433 0 0 1-1.289.796 1.44 1.44 0 0 1-1.288-2.085 2.16 2.16 0 0 0-.855 3.71"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M3 12.12c0 1.686 5.404 5.37 9.472 5.37 2.1-.107 4.12-.842 5.8-2.11C19.877 14.24 21 12.9 21 12.12c0-.778-1.122-2.119-2.728-3.26a10.515 10.515 0 0 0-5.8-2.11C8.404 6.75 3 10.435 3 12.12m7.352-2.85a3.6 3.6 0 1 1 4 5.987 3.6 3.6 0 0 1-4-5.987",
    clipRule: "evenodd"
  }));
};

const SvgShrimpWallet = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.82 5.922a3.248 3.248 0 0 0-.47-.035H5.375l11.29-2.88A2 2 0 0 1 18.82 4.79V5.92zM18.352 20.371H5.403C4.078 20.371 3 19.572 3 18.59V9.122C3 8.14 4.078 7.34 5.403 7.34h12.949c1.325 0 2.403.8 2.403 1.782v2.22h-6.582a2.532 2.532 0 1 0 0 5.064h6.581v2.184c0 .982-1.075 1.781-2.402 1.781"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M21 12.793h-6.828a1.08 1.08 0 0 0 0 2.16H21z"
  }));
};

const SvgShrimp = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.937 13.315a2.842 2.842 0 0 1-.82 1.972l1.927 3.158a7.913 7.913 0 0 0 3.767-5.13zM14.185 10.708c.677.28 1.22.81 1.514 1.481h5.273c.012-.21.028-.377.028-.566a7.889 7.889 0 0 0-4.8-7.251zM14.176 15.901c-.31.128-.641.2-.977.211l-2.67-.533a1.125 1.125 0 0 0-1.227 1.607l.31.622-.31.621a1.126 1.126 0 0 0 1.227 1.606l2.74-.548a7.828 7.828 0 0 0 2.756-.56zM15.134 4.02a7.837 7.837 0 0 0-2.008-.27H4.125A1.126 1.126 0 0 0 3 4.876a5.632 5.632 0 0 0 5.625 5.626h4.45zM5.813 6.555a.562.562 0 1 1 0-1.125.562.562 0 0 1 0 1.125"
  }));
};

const SvgSimulation = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.217 16.045v2.918a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V13.83L5.483 15.47a1.987 1.987 0 0 1-1.266.576M8.248 13.793v5.17a.326.326 0 0 0 .325.325h2.253a.326.326 0 0 0 .326-.326V15.92a1.966 1.966 0 0 1-1.357-.577zM12.278 15.598v3.365a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .325-.325v-6.209l-2.584 2.585a1.942 1.942 0 0 1-.32.259M18.997 8.938l-2.689 2.685v7.337a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V9.14c-.074-.062-.13-.118-.17-.155z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.845 4.175a.629.629 0 0 0-.475-.174h-.06c-1.05.048-2.096.1-3.146.148a.679.679 0 0 0-.484.166.551.551 0 0 0-.115.17.544.544 0 0 0 .167.659l.262.266c.182.185.366.37.551.55l-6.344 6.35-2.857-2.85a.906.906 0 0 0-1.283 0l-3.795 3.794a.907.907 0 0 0 0 1.283l.17.17a.904.904 0 0 0 1.284 0l2.984-2.984 2.848 2.85a.91.91 0 0 0 1.286 0l7.159-7.159.81.807a.614.614 0 0 0 .433.229c.09 0 .18-.025.259-.07a.704.704 0 0 0 .155-.114c.13-.143.2-.33.196-.522.03-.68.063-1.363.096-2.045l.048-1.024a.636.636 0 0 0-.15-.5"
  }));
};

const SvgSpecies = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M16.752 7.5c.366.001.73.05 1.083.145l-1.112 3.496h-2.398a3.038 3.038 0 0 1-3.035-3.034.607.607 0 0 1 .607-.607zM12.64 8.962a.301.301 0 1 0 .334-.5.301.301 0 0 0-.334.5",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.14 12.052a1.528 1.528 0 0 0-.816-.8l1.087-3.42A4.255 4.255 0 0 1 21 11.747c0 .081-.005.155-.01.239l-.005.067zM17.83 13.723c.28-.284.438-.666.442-1.064l2.63-.003a4.265 4.265 0 0 1-2.032 2.77zM17.319 14.054c-.168.069-.346.107-.527.113l-1.439-.287a.606.606 0 0 0-.662.866l.168.335-.168.335a.606.606 0 0 0 .662.867l1.479-.296a4.221 4.221 0 0 0 1.484-.3zM5.731 11.137c.004-.4.162-.78.442-1.064l-1.04-1.706a4.268 4.268 0 0 0-2.03 2.77zM5.86 11.746c.159.361.451.647.816.797L5.59 15.96A4.254 4.254 0 0 1 3 12.052c0-.081.005-.155.01-.239l.005-.067zM6.681 9.742c.167-.07.346-.109.527-.115l1.438.289a.607.607 0 0 0 .662-.867l-.168-.335.168-.335a.607.607 0 0 0-.662-.866l-1.479.295a4.222 4.222 0 0 0-1.484.301z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M7.248 16.295a4.223 4.223 0 0 1-1.084-.145l1.112-3.496h2.4a3.038 3.038 0 0 1 3.034 3.034.607.607 0 0 1-.607.607zm4.112-1.462a.3.3 0 1 0-.334.5.3.3 0 0 0 .334-.5",
    clipRule: "evenodd"
  }));
};

const SvgSrEstimation = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M11.765 3.172A4.99 4.99 0 0 0 10.485 3h-5.73a.716.716 0 0 0-.717.716A3.586 3.586 0 0 0 7.62 7.298h2.83zM5.829 4.785a.361.361 0 1 1 0-.722.361.361 0 0 1 0 .722",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.16 7.43c.431.179.776.517.964.944h3.357l.006-.087c.006-.096.012-.181.012-.275a5.022 5.022 0 0 0-3.056-4.616zM12.277 9.09c-.004.47-.192.92-.523 1.255l1.228 2.01a5.04 5.04 0 0 0 2.4-3.266zM10.533 10.87c.214-.007.424-.053.622-.134l1.178 1.927a4.984 4.984 0 0 1-1.752.357l-1.746.349a.716.716 0 0 1-.782-1.023l.198-.396-.198-.396a.716.716 0 0 1 .782-1.024z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.623 9.122c.082.03.157.076.22.137a.638.638 0 0 1 .152.498l-.048 1.023c-.036.686-.067 1.367-.096 2.047a.752.752 0 0 1-.197.521.707.707 0 0 1-.155.114.536.536 0 0 1-.259.07.615.615 0 0 1-.433-.229l-.81-.806-7.157 7.161a.91.91 0 0 1-1.287 0l-2.85-2.85-2.984 2.98a.906.906 0 0 1-1.283 0l-.17-.17a.906.906 0 0 1 0-1.284l3.797-3.792a.906.906 0 0 1 1.283 0l2.85 2.851 6.347-6.349c-.185-.18-.37-.366-.55-.55l-.263-.267a.541.541 0 0 1-.166-.657.55.55 0 0 1 .114-.17.679.679 0 0 1 .482-.167l1.573-.074 1.573-.074h.06a.628.628 0 0 1 .257.037"
  }));
};

const SvgStockAdjust = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M18.24 5.601c.07.093.111.208.111.333 0 .01-.003.02-.005.03l-.006.023V12a.554.554 0 1 1-1.103 0V6.486H4.002v12.13h8.28l.003.001a.554.554 0 0 1-.002 1.103H3.458a.554.554 0 0 1-.554-.554V5.915a.548.548 0 0 1 .038-.188.058.058 0 0 1 .008-.013c.004-.006.008-.012.008-.018l.002-.004a.548.548 0 0 1 .05-.09l1.652-2.2V3.4a.554.554 0 0 1 .443-.22h11.583c.215 0 .4.123.494.305zM5.38 4.28l-.827 1.103h12.346l-.555-1.103z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M5.652 7.589h9.93a.555.555 0 0 1 .55.55V12a.554.554 0 1 1-1.103 0V8.696h-2.205v8.272a.554.554 0 0 1-.554.555H5.652a.555.555 0 0 1-.555-.555V8.143c0-.306.249-.554.555-.554m2.76 1.102H6.207v7.72h2.207zm3.308 0H9.516l.001 7.72h2.204zM17.237 17.791a.827.827 0 1 1 0-1.654.827.827 0 0 1 0 1.654m0-1.103a.276.276 0 1 0 .276.276.276.276 0 0 0-.276-.273z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M20.494 17.515h.602v-1.103h-.602a3.035 3.035 0 0 0-.564-1.363l.424-.425-.776-.776-.425.425a3.264 3.264 0 0 0-1.343-.562l-.02-.003v-.6h-1.103v.6c-.514.089-.97.285-1.363.565l-.425-.425-.776.776.425.425a3.258 3.258 0 0 0-.563 1.343l-.002.02h-.601v1.103h.6c.09.514.286.97.566 1.363l-.425.424.777.777.424-.425c.385.277.845.476 1.343.563l.02.002v.601h1.103v-.6c.514-.09.97-.286 1.363-.566l.425.425.776-.777-.425-.424a3.27 3.27 0 0 0 .562-1.343zm-5.465-.551c0 1.218.988 2.205 2.206 2.205h.003a2.205 2.205 0 1 0-2.209-2.205",
    clipRule: "evenodd"
  }));
};

const SvgStockAsset = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m12.153 12.147.006.025 5.247.016 1.242 2.126-5.105.97-1.37-3.06.907 3.61 4.326-.884v4.866l-5.253 1.18zM6.49 19.819v-4.867l4.325.885.889-3.487-1.352 2.933-5.102-.968 1.243-2.126h5.28v.015l-.028.062V21zm6.881-8.584a.712.712 0 0 1-.711-.711V8.805a.711.711 0 0 1 .711-.712h1.72a.712.712 0 0 1 .71.712v1.719a.712.712 0 0 1-.71.711zM8.846 10.03a.712.712 0 0 1-.712-.712V7.6a.712.712 0 0 1 .712-.711h1.718a.712.712 0 0 1 .712.711v1.718a.712.712 0 0 1-.712.712zm2.263-3.888a.712.712 0 0 1-.711-.711V3.712A.712.712 0 0 1 11.108 3h1.719a.712.712 0 0 1 .712.712V5.43a.712.712 0 0 1-.712.712z"
  }));
};

const SvgStockUser = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.371 19.973h7.419v-7.57h-2.484v4.092h-2.452v-4.093h-2.483z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.352 12.403v3.596h1.458v-3.596zM4.21 19.973h7.418v-7.57H9.145v4.092H6.693v-4.093H4.209z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.19 12.403v3.596h1.458v-3.596zM8.661 11.598h7.419v-7.57h-2.484V8.12h-2.451V4.027H8.66z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.643 4.028v3.597H13.1V4.028z"
  }));
};

const SvgStock = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.791 19.788h-3.94v-4.021h1.319v2.174h1.302v-2.174h1.32zm-4.447 0h-3.94v-4.021h1.319v2.174h1.302v-2.174h1.32zm5.786-.032v-8.227L12.046 6.2l-5.169 5.351v8.205H5.815v-7.108l-.85.877H3L12.043 4 21 13.525h-1.963l-.849-.89v7.116zm-3.695-2.079v-1.91h.774v1.91zm-4.447 0v-1.91h.774v1.91zm2.357-2.333h-3.94v-4.022h1.319v2.174h1.302v-2.173h1.32zm-2.357-2.111v-1.91h.774v1.91z"
  }));
};

const SvgSubtraction = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.214 19.592a1 1 0 0 1-1 1H6.032a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h12.182a1 1 0 0 1 1 1zM7.396 17.046v.59h9.848v-.59zm0-3.545v.59h9.848V13.5zm0-3.546v.59h9.848v-.59zm0-3.545V7h9.848v-.59z"
  }));
};

const SvgSync = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.777 17.443V14.72l3.617 3.617-3.617 3.66v-2.724c-1.986 0-3.703-.709-5.15-2.128C5.21 15.7 4.5 13.982 4.5 11.997a6.89 6.89 0 0 1 1.149-3.873l1.32 1.32c-.426.765-.64 1.616-.64 2.553 0 1.503.526 2.794 1.575 3.872 1.078 1.05 2.369 1.574 3.873 1.574m0-12.723c1.985 0 3.688.723 5.106 2.17 1.447 1.419 2.17 3.12 2.17 5.107a6.89 6.89 0 0 1-1.149 3.872l-1.319-1.32c.426-.765.638-1.616.638-2.552 0-1.504-.539-2.78-1.617-3.83-1.05-1.078-2.326-1.617-3.83-1.617v2.723L8.16 5.656l3.617-3.66z"
  }));
};

const SvgTable = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.125 3.25H3.875C2.839 3.25 2 4.09 2 5.125v13.75c0 1.035.84 1.875 1.875 1.875h16.25c1.035 0 1.875-.84 1.875-1.875V5.125c0-1.036-.84-1.875-1.875-1.875m-9.375 15H4.5V14.5h6.25zm0-6.25H4.5V8.25h6.25zm8.75 6.25h-6.25V14.5h6.25zm0-6.25h-6.25V8.25h6.25z"
  }));
};

const SvgTag = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m6.247 16.761-2.88-3.822a1.825 1.825 0 0 1 .36-2.555l4.598-3.467c.059-.044.12-.085.183-.122a1.635 1.635 0 0 1 1.06-.457c.04 0 .08.003.121.009l1.588.223a1.494 1.494 0 0 0-.296.226 1.855 1.855 0 0 0-.182.122l-4.6 3.467a1.828 1.828 0 0 0-.358 2.555l2.88 3.822c.067.09.143.173.226.248l-.146.111a1.825 1.825 0 0 1-2.555-.359zm4.458 0-2.88-3.822a1.825 1.825 0 0 1 .359-2.555l4.6-3.467c.057-.044.118-.085.181-.122a1.637 1.637 0 0 1 1.06-.457c.04 0 .082.003.122.009l4.412.62a.99.99 0 0 1 .296.09l1.514-1.06.631.899-1.59 1.112a.753.753 0 0 1-.007.078l-.62 4.412a1.537 1.537 0 0 1-.745 1.001 1.758 1.758 0 0 1-.183.156l-4.6 3.467a1.825 1.825 0 0 1-2.554-.358zm4.76-7.626a1.36 1.36 0 1 0 2.697-.25l-1.135.794-.63-.899 1.144-.801a1.36 1.36 0 0 0-2.077 1.156z"
  }));
};

const SvgTemperature = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12.514 6.176h2.74v.685h-2.74zM12.514 7.546h4.111v.685h-4.111zM12.514 8.917h3.426v.685h-3.426zM10.116 3.23c-.606 0-1.097.49-1.097 1.096v12.641l-.136.103a2.056 2.056 0 1 0 2.466 0l-.137-.103V4.326c0-.606-.49-1.096-1.096-1.096M8.334 4.326a1.781 1.781 0 1 1 3.563 0v12.306a2.74 2.74 0 1 1-3.563 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.458 17.883V9.944h-.685v7.938a1.028 1.028 0 1 0 .685 0"
  }));
};

const SvgTimeDay = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 2.004c.263 0 .476.213.476.476v.952a.476.476 0 1 1-.952 0V2.48c0-.263.213-.476.476-.476M18.667 12.003a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0M12.476 20.575a.476.476 0 1 0-.952 0v.953a.476.476 0 1 0 .952 0zM22 12.004a.476.476 0 0 1-.477.476h-.952a.476.476 0 1 1 0-.953h.952c.264 0 .477.213.477.477M3.428 12.48a.476.476 0 1 0 0-.953h-.952a.476.476 0 1 0 0 .953zM19.071 19.074a.476.476 0 0 1-.674 0l-.673-.673a.476.476 0 1 1 .674-.674l.673.674a.476.476 0 0 1 0 .673M5.603 6.28a.476.476 0 1 0 .673-.674l-.673-.674a.476.476 0 1 0-.674.674zM4.93 19.074a.476.476 0 0 1 0-.673l.673-.674a.476.476 0 1 1 .673.674l-.673.673a.476.476 0 0 1-.674 0M17.724 5.606a.476.476 0 1 0 .674.673l.673-.673a.476.476 0 1 0-.674-.674z"
  }));
};

const SvgTimeNight = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.052 18.003c4.096 0 7.416-3.223 7.416-7.2 0-3.075-1.986-5.701-4.782-6.732.352-.045.71-.068 1.074-.068 4.551 0 8.24 3.582 8.24 8 0 4.419-3.689 8-8.24 8A8.343 8.343 0 0 1 5 17.725a7.64 7.64 0 0 0 2.052.28"
  }));
};

const SvgToolsParameter = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.148 17.551H4.951A1.952 1.952 0 0 1 3 15.6V8.705a1.951 1.951 0 0 1 1.951-1.952H18.15A1.951 1.951 0 0 1 20.1 8.705v1.648h.25a.65.65 0 0 1 .65.65v2.3a.65.65 0 0 1-.65.65h-.25V15.6a1.952 1.952 0 0 1-1.952 1.951M5.724 9.068v6.367H13.8V9.068z"
  }));
};

const SvgTools = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.027 19.554V9.952a3.468 3.468 0 0 1 2.896 0v9.604a1.448 1.448 0 0 1-2.896 0zm-8.147.396a2.058 2.058 0 0 1-2.046-2.067L5.25 7.597A2.058 2.058 0 0 1 7.296 5.53H9.23V3.003h8.606V5.26a1.45 1.45 0 0 1 1.086 1.402V9.13a3.466 3.466 0 0 0-2.896 0V6.664a1.45 1.45 0 0 1 .723-1.254V3.954h-6.43v1.577h2.78a2.058 2.058 0 0 1 2.045 2.067l-.542 10.286a2.059 2.059 0 0 1-2.045 2.067zm1.193-7.284a1.158 1.158 0 1 0 1.146-1.002 1.082 1.082 0 0 0-1.147 1.002zm-1.905-2.253h6.09V7.519h-6.09z"
  }));
};

const SvgTopStock = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m12.298 9.774.01.036 7.67.023 1.816 3.074-7.463 1.401-2.003-4.424 1.326 5.22 6.325-1.278v7.035l-7.68 1.706zM4.02 20.865V13.83l6.323 1.279 1.3-5.041-1.977 4.24-7.46-1.399 1.817-3.074h7.72v.022l-.04.09v12.626zM11.247 2.818a.5.5 0 0 1 .951 0l.336 1.034a.5.5 0 0 0 .476.346h1.087a.5.5 0 0 1 .293.904l-.879.64a.5.5 0 0 0-.182.558l.336 1.034a.5.5 0 0 1-.77.56l-.878-.64a.5.5 0 0 0-.588 0l-.88.64a.5.5 0 0 1-.77-.56l.337-1.034a.5.5 0 0 0-.182-.559l-.88-.639a.5.5 0 0 1 .295-.904h1.087a.5.5 0 0 0 .475-.346z"
  }));
};

const SvgTrading = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.102 13.158a.349.349 0 0 0 0 .493l1.01 1.01a.35.35 0 0 0 .495 0L11.3 8.969a.349.349 0 0 1 .494 0l.949.949c.19.19.514.103.584-.157l1.425-5.32a.349.349 0 0 0-.427-.428l-5.32 1.426a.349.349 0 0 0-.157.584l.948.948a.349.349 0 0 1 0 .494zM19.898 10.842a.349.349 0 0 0 0-.493l-1.01-1.01a.349.349 0 0 0-.495 0L12.7 15.031a.349.349 0 0 1-.494 0l-.949-.949a.349.349 0 0 0-.584.157l-1.425 5.32c-.07.26.168.497.427.428l5.32-1.426a.349.349 0 0 0 .157-.584l-.948-.948a.349.349 0 0 1 0-.494z"
  }));
};

const SvgTransparency = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12 3a8.97 8.97 0 0 1 6.364 2.636A8.972 8.972 0 0 1 21 12a8.972 8.972 0 0 1-2.776 6.5A9 9 0 1 1 12 3M6.343 17.657 12 12l5.657 5.657A7.975 7.975 0 0 0 20 12c0-2.21-.895-4.21-2.343-5.657L12 12 6.343 6.343A7.975 7.975 0 0 0 4 12c0 2.21.895 4.21 2.343 5.657",
    clipRule: "evenodd"
  }));
};

const SvgTreatmentBottle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 15.237v-3.605h1v3.605z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M10.198 12.934h3.604v1h-3.604zM8.2 4.577a.5.5 0 0 1 .5-.5h6.6a.5.5 0 0 1 .5.5v2.019a.5.5 0 0 1-.5.5H8.7a.5.5 0 0 1-.5-.5zm1 .5v1.019h5.6V5.077z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.978 6.596a.5.5 0 0 1 .5-.5h5.044a.5.5 0 0 1 .5.5v.736a2.5 2.5 0 0 1 2.415 2.498v7.592a2.5 2.5 0 0 1-2.5 2.5H9.064a2.5 2.5 0 0 1-2.5-2.5V9.83a2.5 2.5 0 0 1 2.415-2.498zm1 .5v.734a.5.5 0 0 1-.5.5h-.415a1.5 1.5 0 0 0-1.5 1.5v7.592a1.5 1.5 0 0 0 1.5 1.5h5.874a1.5 1.5 0 0 0 1.5-1.5V9.83a1.5 1.5 0 0 0-1.5-1.5h-.415a.5.5 0 0 1-.5-.5v-.734z",
    clipRule: "evenodd"
  }));
};

const SvgTreatmentInput = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.275 20.998a9.59 9.59 0 0 1-1.786-.128c-.093-.023-.144-.048-.144-.075v-.634c.648.2 1.328.269 2.003.203a5.121 5.121 0 0 0 2.003-.203v.634c0 .055-.216.104-.567.14-.35.037-.83.06-1.364.063zM5.65 20.725A1.65 1.65 0 0 1 4 19.076V7.45a1.65 1.65 0 0 1 1.65-1.649h.216V3.825A.825.825 0 0 1 6.69 3h2.082a.825.825 0 0 1 .825.825v1.974h.219a1.649 1.649 0 0 1 1.649 1.649v11.626a1.65 1.65 0 0 1-1.65 1.649zm-.824-7.64h5.771V9.787H4.825zm8.323 7.518a.837.837 0 0 1-.337-.13 1.041 1.041 0 0 1-.177-1.451l.644-.966 1.588 1.06-.646.965a1.148 1.148 0 0 1-.931.534.887.887 0 0 1-.136-.012zm2.193-.644a5.12 5.12 0 0 1 2.003-.202 5.124 5.124 0 0 1 2.003.202c-.648.2-1.329.27-2.003.204a5.112 5.112 0 0 1-2.001-.204zm-1.951-2.072.644-.964a1.04 1.04 0 0 1 1.41-.392 1.04 1.04 0 0 1 .178 1.451l-.644.966z"
  }));
};

const SvgUnpin = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 28 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m4.348 21.1 5.263-7.9 2.974 2.3z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.778 8.394 10.64 10.1c-1.144-.6-2.631-.4-3.66.5-.23.2-.23.5 0 .7l7.78 5.9c.228.2.572.2.8 0 .916-.9.916-2.3.115-3.2l.144-.179zM18.332 10.71l1.462-1.81c1.144.4 2.402.2 3.203-.7.343-.1.343-.4.115-.6l-1.259-1-1.716-1.3-3.09-2.3a.61.61 0 0 0-.8 0c-.801.8-.915 2-.344 2.9l-.183.146zM11.367 3.795c-.211-.376-.024-.813.416-.976.44-.164.969.008 1.18.384l7.012 12.517c.21.376.024.813-.417.976-.44.164-.968-.008-1.179-.384z"
  }));
};

const SvgUpload = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.857 3.75a1.416 1.416 0 0 1 1.23.668l4.772 4.773a1.42 1.42 0 1 1-2.009 2.01l-2.546-2.547v5.81a1.421 1.421 0 0 1-2.843 0V8.604L7.863 11.2a1.421 1.421 0 0 1-2.01-2.01l4.775-4.774a1.427 1.427 0 0 1 1.204-.666z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.289 19.789c.233.121.493.185.756.185l13.91.001a1.635 1.635 0 0 0 1.343-.703A1.636 1.636 0 0 0 21 17.93v-3.273a1.636 1.636 0 0 0-3.273 0v2.046H6.273v-2.046a1.636 1.636 0 0 0-3.273 0v3.273a1.636 1.636 0 0 0 .704 1.344c.15.217.35.393.585.515"
  }));
};

const SvgVendor = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.76 21V8.664a1.319 1.319 0 0 1-1.01-1.282V4.319A1.319 1.319 0 0 1 5.07 3h13.19a1.32 1.32 0 0 1 1.321 1.32v3.062a1.32 1.32 0 0 1-.974 1.273V21zm12.462-4.846v-7.96a1.314 1.314 0 0 1-.28-.813 1.32 1.32 0 1 1-2.64 0 1.318 1.318 0 1 1-2.637 0 1.319 1.319 0 0 1-2.64 0 1.32 1.32 0 1 1-2.639 0c0 .274-.085.54-.243.764v8.008H8.94a3.23 3.23 0 0 1 .834-1.775c.104-.112.216-.215.335-.31v2.085h.21v-1.015h3.098v1.015h.21v-2.074c.115.091.223.191.322.299a3.23 3.23 0 0 1 .834 1.775zm-4.22-1.225V13.66c.144.056.285.122.421.199v1.069zm-2.677 0v-1.077c.136-.075.277-.14.422-.196v1.273zm.633 0v-1.325a2.79 2.79 0 0 1 1.832.005v1.32zm-.778-3.291h3.318a1.658 1.658 0 0 1-1.658 1.578 1.658 1.658 0 0 1-1.66-1.58zm-1.055-.211 2.814-2.308 2.722 2.308z"
  }));
};

const SvgVideo = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.75 6.003h7.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.5a2.25 2.25 0 0 1 2.25-2.25M20.146 9.566c0-.725 0-1.313-.976-1.313-.97 0-2.92 1.312-2.92 1.312v5.25c0 .725 1.945 1.313 2.92 1.313.975 0 .975-.588.975-1.312z"
  }));
};

const SvgViewCard = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.563 3.25h7.5c.517 0 .937.42.937.938v6.25c0 .517-.42.937-.937.937h-7.5a.937.937 0 0 1-.938-.937v-6.25c0-.518.42-.938.938-.938m-3.126 0h-7.5A.937.937 0 0 0 2 4.188v6.25c0 .517.42.937.938.937h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938M2 13.563v6.25c0 .517.42.937.938.937h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938h-7.5a.937.937 0 0 0-.938.938m11.563 7.187h7.5c.517 0 .937-.42.937-.937v-6.25a.937.937 0 0 0-.937-.938h-7.5a.937.937 0 0 0-.938.938v6.25c0 .517.42.937.938.937"
  }));
};

const SvgViewList = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.833 10.438v3.124c0 .518-.42.938-.937.938H2.938A.937.937 0 0 1 2 13.563v-3.126c0-.517.42-.937.938-.937h3.958c.518 0 .937.42.937.938M2 16.688v3.125c0 .517.42.937.938.937h3.958c.518 0 .937-.42.937-.937v-3.125a.937.937 0 0 0-.937-.938H2.938a.937.937 0 0 0-.938.938M6.896 3.25H2.938A.937.937 0 0 0 2 4.188v3.125c0 .517.42.937.938.937h3.958c.518 0 .937-.42.937-.937V4.188a.937.937 0 0 0-.937-.938m3.125 17.5h11.042c.517 0 .937-.42.937-.937v-3.125a.937.937 0 0 0-.937-.938H10.02a.937.937 0 0 0-.938.938v3.125c0 .517.42.937.938.937M9.083 4.188v3.125c0 .517.42.937.938.937h11.042c.517 0 .937-.42.937-.937V4.188a.937.937 0 0 0-.937-.938H10.02a.937.937 0 0 0-.938.938m.938 10.312h11.042c.517 0 .937-.42.937-.937v-3.126a.937.937 0 0 0-.937-.937H10.02a.937.937 0 0 0-.938.938v3.124c0 .518.42.938.938.938"
  }));
};

const SvgWarningFill = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "m13.235 5.652 7.143 10.358c.686.995-.026 2.351-1.235 2.351H4.857c-1.21 0-1.921-1.356-1.235-2.351l7.143-10.358a1.5 1.5 0 0 1 2.47 0m-1.966 8.18h1.19l.25-4.771h-1.69zm-.05 1.049c-.146.14-.219.346-.219.62 0 .264.075.469.225.615.15.143.36.215.634.215.267 0 .476-.073.625-.22.15-.15.225-.353.225-.61 0-.267-.075-.472-.225-.615-.146-.143-.354-.215-.625-.215-.28 0-.493.07-.64.21",
    clipRule: "evenodd"
  }));
};

const SvgWarningOutline = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    opacity: 0.9
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.244 15.265a.797.797 0 0 0-.044.324.788.788 0 0 0 .221.595.85.85 0 0 0 .617.211.827.827 0 0 0 .607-.216.924.924 0 0 0 0-1.189.842.842 0 0 0-.61-.208.866.866 0 0 0-.621.204.795.795 0 0 0-.17.28M11.461 13.966h1.158l.242-4.636H11.22z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "m13.182 5.73 7.621 11.404c.42.628.123 1.7-.471 1.702l-16.663-.003c-.595 0-.892-1.075-.472-1.703l7.627-11.4a1.317 1.317 0 0 1 2.358 0M6.023 17.256h11.952c.426 0 .64-.77.338-1.22l-5.469-8.176a.944.944 0 0 0-1.692 0l-5.467 8.175c-.301.451-.088 1.221.338 1.221",
    clipRule: "evenodd"
  })));
};

const SvgWaterColor = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.791 7.707c.133.128.323.128.474.036a4.934 4.934 0 0 1 1.764-.716c.17-.037.303-.165.303-.349V3.354c0-.22-.19-.386-.398-.349a9.21 9.21 0 0 0-4.531 1.818.341.341 0 0 0-.02.533zM14.726 7.762a4.934 4.934 0 0 0-1.763-.716c-.17-.037-.304-.184-.285-.35V3.355c0-.202.19-.367.398-.349a9.21 9.21 0 0 1 4.532 1.818c.17.129.17.386.019.533L15.2 7.726c-.133.128-.322.128-.474.036M3.38 11.628h3.432a.38.38 0 0 0 .36-.293c.133-.625.38-1.194.74-1.708.095-.147.095-.331-.038-.46l-2.446-2.35c-.151-.147-.417-.147-.55.018a8.624 8.624 0 0 0-1.877 4.39.372.372 0 0 0 .38.403M7.893 14.916a4.619 4.619 0 0 1-.74-1.708.364.364 0 0 0-.36-.294H3.381c-.228 0-.399.184-.36.386a8.624 8.624 0 0 0 1.876 4.39.367.367 0 0 0 .55.017l2.427-2.35c.114-.11.114-.294.019-.441M17.202 12.914h3.432c.228 0 .398.184.36.404a8.624 8.624 0 0 1-1.877 4.39c-.132.165-.398.165-.55.018l-2.426-2.351c-.133-.129-.133-.312-.038-.46.36-.513.606-1.083.74-1.707a.38.38 0 0 1 .36-.294M11.04 16.954a4.934 4.934 0 0 1-1.763-.716c-.151-.092-.34-.092-.474.037l-2.427 2.37c-.151.146-.151.403.02.532a9.21 9.21 0 0 0 4.53 1.818c.21.018.399-.147.399-.35v-3.342c.019-.165-.114-.312-.284-.349M17.203 11.628a.364.364 0 0 1-.36-.293 4.46 4.46 0 0 0-.721-1.708c-.095-.147-.095-.331.038-.46l2.408-2.332a.367.367 0 0 1 .55.018 8.624 8.624 0 0 1 1.877 4.39c.038.202-.133.385-.36.385zM15.212 16.293c-.133-.128-.322-.128-.474-.037a4.935 4.935 0 0 1-1.763.717c-.171.037-.304.165-.304.349v3.324c0 .22.19.386.398.349a9.21 9.21 0 0 0 4.532-1.818.341.341 0 0 0 .019-.533z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12.49 9.368c.37.607 1.592 2.632 1.592 3.52 0 1.121-.933 2.009-2.075 2.009-1.141 0-2.074-.903-2.074-2.01 0-.887 1.222-2.912 1.592-3.519a.55.55 0 0 1 .482-.265.55.55 0 0 1 .483.265m-.746 2.674.006-.01c.097-.157.049-.359-.08-.437-.08-.047-.177-.062-.257-.047a.316.316 0 0 0-.21.14c-.032.047-.755 1.169-.144 2.056.064.094.16.14.273.14a.344.344 0 0 0 .177-.062.306.306 0 0 0 .145-.202.312.312 0 0 0-.048-.234c-.351-.502.079-1.242.138-1.344",
    clipRule: "evenodd"
  }));
};

const SvgWaterInput = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.242 20.985a7.452 7.452 0 0 1-4.767-1.35C6.165 18.579 5.5 16.872 5.5 14.563c0-2.565 1.834-5.572 3.37-7.643A36.832 36.832 0 0 1 12.243 3l.01.008a37.338 37.338 0 0 1 3.359 3.91c1.537 2.07 3.37 5.077 3.37 7.643 0 2.309-.664 4.016-1.974 5.073a7.451 7.451 0 0 1-4.765 1.351m4.068-8.198a9.678 9.678 0 0 1-1.091 2.495 7.427 7.427 0 0 1-1.35 1.489c-.543.5-1.012.933-.978 1.27a.441.441 0 0 0 .248.323c.272.168.584.258.904.26a2.608 2.608 0 0 0 2.104-1.497c.836-1.39.17-4.31.16-4.34z"
  }));
};

const SvgWaterQuality = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "m11.936 3.22-.436.322-.436-.322a.542.542 0 0 1 .872 0M11.5 4.47a71.69 71.69 0 0 0-2.517 3.808c-.74 1.207-1.472 2.506-2.018 3.698-.555 1.214-.882 2.244-.882 2.94a5.417 5.417 0 0 0 10.834 0c0-.696-.327-1.726-.882-2.94-.546-1.192-1.278-2.49-2.018-3.698A69.421 69.421 0 0 0 11.5 4.47m0-.928-.436-.322-.005.007-.013.018-.051.07a68.678 68.678 0 0 0-.872 1.234A70.525 70.525 0 0 0 8.06 7.712c-.75 1.226-1.508 2.565-2.079 3.814-.562 1.227-.98 2.442-.98 3.39a6.5 6.5 0 0 0 13 0c0-.948-.419-2.163-.98-3.39-.571-1.249-1.329-2.588-2.079-3.814a70.516 70.516 0 0 0-2.936-4.397l-.05-.07-.014-.018-.005-.007z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M14.632 13.807a.5.5 0 0 1 .579.405 3.407 3.407 0 0 1-1.998 3.608.5.5 0 1 1-.426-.905c1.4-.658 1.537-1.975 1.44-2.53a.5.5 0 0 1 .405-.578",
    clipRule: "evenodd"
  }));
};

exports.JalaAchievement = SvgAchievement;
exports.JalaActivity = SvgActivity;
exports.JalaActivity2 = SvgActivity2;
exports.JalaAdd = SvgAdd;
exports.JalaAge = SvgAge;
exports.JalaAiGenerate = SvgAiGenerate;
exports.JalaAnco = SvgAnco;
exports.JalaArchive = SvgArchive;
exports.JalaArrowDown = SvgArrowDown;
exports.JalaArrowUp = SvgArrowUp;
exports.JalaBiomass = SvgBiomass;
exports.JalaBookmarkChecked = SvgBookmarkChecked;
exports.JalaBookmarkUnchecked = SvgBookmarkUnchecked;
exports.JalaCalendar = SvgCalendar;
exports.JalaCheck = SvgCheck;
exports.JalaCheckboxChecked = SvgCheckboxChecked;
exports.JalaCheckboxUnchecked = SvgCheckboxUnchecked;
exports.JalaChemical = SvgChemical;
exports.JalaClock = SvgClock;
exports.JalaClose = SvgClose;
exports.JalaCoin = SvgCoin;
exports.JalaComment1 = SvgComment1;
exports.JalaComment2 = SvgComment2;
exports.JalaConfirmStep = SvgConfirmStep;
exports.JalaCopy = SvgCopy;
exports.JalaCoupon = SvgCoupon;
exports.JalaCultivationReport = SvgCultivationReport;
exports.JalaDebt = SvgDebt;
exports.JalaDelete = SvgDelete;
exports.JalaDisease = SvgDisease;
exports.JalaDiseaseInput = SvgDiseaseInput;
exports.JalaDo = SvgDo;
exports.JalaDownload = SvgDownload;
exports.JalaEdit = SvgEdit;
exports.JalaEmptyStock = SvgEmptyStock;
exports.JalaExpense = SvgExpense;
exports.JalaExpenseMenu = SvgExpenseMenu;
exports.JalaFarm = SvgFarm;
exports.JalaFarmStep = SvgFarmStep;
exports.JalaFavorite = SvgFavorite;
exports.JalaFeed = SvgFeed;
exports.JalaFeedCumulative = SvgFeedCumulative;
exports.JalaFilter = SvgFilter;
exports.JalaFinance = SvgFinance;
exports.JalaFinanceDue = SvgFinanceDue;
exports.JalaFinancialReport = SvgFinancialReport;
exports.JalaFinancialReport2 = SvgFinancialReport2;
exports.JalaFixedAssetMenuPaddleWheel = SvgFixedAssetMenuPaddleWheel;
exports.JalaHarvest = SvgHarvest;
exports.JalaHelpFill = SvgHelpFill;
exports.JalaHelpOutline = SvgHelpOutline;
exports.JalaHide = SvgHide;
exports.JalaHome = SvgHome;
exports.JalaHotNews = SvgHotNews;
exports.JalaIncome = SvgIncome;
exports.JalaIncomeMenu = SvgIncomeMenu;
exports.JalaIndeterminateCheckbox = SvgIndeterminateCheckbox;
exports.JalaInfoOutline = SvgInfoOutline;
exports.JalaInventory = SvgInventory;
exports.JalaJala = SvgJala;
exports.JalaJali = SvgJali;
exports.JalaLamp = SvgLamp;
exports.JalaLike = SvgLike;
exports.JalaLinkConnected = SvgLinkConnected;
exports.JalaLoan = SvgLoan;
exports.JalaLocation = SvgLocation;
exports.JalaLogout = SvgLogout;
exports.JalaLowStock = SvgLowStock;
exports.JalaMessage = SvgMessage;
exports.JalaMicrobiology = SvgMicrobiology;
exports.JalaMortality = SvgMortality;
exports.JalaNews = SvgNews;
exports.JalaNotification = SvgNotification;
exports.JalaOperational = SvgOperational;
exports.JalaParameter = SvgParameter;
exports.JalaPassword = SvgPassword;
exports.JalaPh = SvgPh;
exports.JalaPicture = SvgPicture;
exports.JalaPin = SvgPin;
exports.JalaPlankton = SvgPlankton;
exports.JalaPlatform = SvgPlatform;
exports.JalaPlatformMobile = SvgPlatformMobile;
exports.JalaPlatformPc = SvgPlatformPc;
exports.JalaPond = SvgPond;
exports.JalaPondStep = SvgPondStep;
exports.JalaPrice = SvgPrice;
exports.JalaPricePrediction = SvgPricePrediction;
exports.JalaPrint = SvgPrint;
exports.JalaPro = SvgPro;
exports.JalaProduct = SvgProduct;
exports.JalaProductCategories = SvgProductCategories;
exports.JalaPublic = SvgPublic;
exports.JalaRadiobuttonUnchecked = SvgRadiobuttonUnchecked;
exports.JalaReadMessage = SvgReadMessage;
exports.JalaRefresh = SvgRefresh;
exports.JalaReminder = SvgReminder;
exports.JalaRemove = SvgRemove;
exports.JalaRfid = SvgRfid;
exports.JalaSalinity = SvgSalinity;
exports.JalaSampling = SvgSampling;
exports.JalaSearch = SvgSearch;
exports.JalaSetting = SvgSetting;
exports.JalaShare = SvgShare;
exports.JalaShow = SvgShow;
exports.JalaShrimp = SvgShrimp;
exports.JalaShrimpWallet = SvgShrimpWallet;
exports.JalaSimulation = SvgSimulation;
exports.JalaSpecies = SvgSpecies;
exports.JalaSrEstimation = SvgSrEstimation;
exports.JalaStock = SvgStock;
exports.JalaStockAdjust = SvgStockAdjust;
exports.JalaStockAsset = SvgStockAsset;
exports.JalaStockUser = SvgStockUser;
exports.JalaSubtraction = SvgSubtraction;
exports.JalaSync = SvgSync;
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
exports.JalaUnpin = SvgUnpin;
exports.JalaUpload = SvgUpload;
exports.JalaVendor = SvgVendor;
exports.JalaVideo = SvgVideo;
exports.JalaViewCard = SvgViewCard;
exports.JalaViewList = SvgViewList;
exports.JalaWarningFill = SvgWarningFill;
exports.JalaWarningOutline = SvgWarningOutline;
exports.JalaWaterColor = SvgWaterColor;
exports.JalaWaterInput = SvgWaterInput;
exports.JalaWaterQuality = SvgWaterQuality;
