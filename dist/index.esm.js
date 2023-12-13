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
    fill: "currentColor",
    d: "M12.332 17.09a.708.708 0 0 0 .448.06l1.708-.34a4.884 4.884 0 0 0 1.715-.35l-1.152-1.885c-.194.08-.4.125-.61.131l-1.66-.332a.707.707 0 0 0-.696.262.705.705 0 0 0-.07.737l.195.387-.195.388a.705.705 0 0 0 .317.941M10.641 16.914h.514v-4.621h.513v-.513h-.513a.513.513 0 0 0-.514.513zM16.839 16.158a4.921 4.921 0 0 0 2.347-3.196h-3.038c-.005.46-.188.9-.51 1.229zM16.001 12.26h3.287l.002-.029a.576.576 0 0 0 .003-.05v-.005l.001-.012c.006-.09.011-.17.011-.258a4.908 4.908 0 0 0-2.99-4.518l-1.257 3.948c.421.175.76.506.943.924"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.585 9.249c.2.2.472.313.755.313h.001a1.07 1.07 0 0 0 .754-1.824 1.07 1.07 0 0 0-1.51 0 1.07 1.07 0 0 0 0 1.51m.003-1.1a.35.35 0 0 1 .248-.103.351.351 0 0 1 0 .701.35.35 0 0 1-.248-.598",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.591 11.208h2.772l1.285-4.038A4.924 4.924 0 0 0 14.395 7H8.787a.702.702 0 0 0-.702.701 3.512 3.512 0 0 0 3.506 3.507m-2.206-3.67c.253-.253.597-.396.955-.396h.001a1.353 1.353 0 0 1 .955 2.307 1.354 1.354 0 0 1-1.911 0 1.353 1.353 0 0 1 0-1.91",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.316 16.863a.33.33 0 0 0 .394.293l.804-.16a2.29 2.29 0 0 0 .807-.165l-.542-.888a.81.81 0 0 1-.287.062l-.782-.156a.329.329 0 0 0-.36.47l.091.183-.091.183a.33.33 0 0 0-.034.178M8.296 15.183a.834.834 0 0 1-.24.58l.564.926a2.32 2.32 0 0 0 1.105-1.506zM7.78 14.423a.83.83 0 0 1 .445.434l1.547-.002.003-.041c.003-.043.006-.082.006-.125a2.314 2.314 0 0 0-1.409-2.127z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.984 13.876c.31.309.728.483 1.166.484h1.305l.605-1.901a2.295 2.295 0 0 0-.59-.08H4.83a.33.33 0 0 0-.33.33c0 .438.175.857.484 1.167m.204-.747a.165.165 0 1 1 .274-.184.165.165 0 0 1-.274.184",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.176 11.95c.022.144.053.286.092.426h.771s.05-.21.085-.426.822.16.822.16-.738-.836-.907-.836c-.169 0-.386.24-.386.24s-.204-.24-.385-.24c-.182 0-.898.838-.898.838s.775-.377.806-.162"
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
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m18.663 16.867-5.863-6.7V3h-1.6v7.166l-5.863 6.7h-.804a2.133 2.133 0 0 0 0 4.267h14.934a2.133 2.133 0 1 0 0-4.266zm-2.126 0L12 11.68l-4.537 5.186z",
    clipRule: "evenodd"
  }));
};

const SvgBar = _ref => {
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
    fill: "currentColor",
    d: "M10.085 6.145a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v14.921h-3.83zM3.434 16.927a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v4.14h-3.83zM17.736 9.377a1 1 0 0 0-1 1v10.69h3.83v-10.69a1 1 0 0 0-1-1z"
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
    fill: "currentColor",
    d: "M5.018 3h13.95a1.268 1.268 0 0 1 0 2.537H5.018a1.268 1.268 0 0 1 0-2.537M10.091 6.015h3.17V7.84h-3.17zM12.733 12.863a4.485 4.485 0 0 0-.581-2.114 4.485 4.485 0 0 0-.582 2.114c0 1.167.259 2.113.582 2.113.323 0 .58-.947.58-2.113"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18.546 21H5.44a1.693 1.693 0 0 1-1.691-1.691l1.48-9.3a1.693 1.693 0 0 1 1.69-1.691h9.934a1.693 1.693 0 0 1 1.692 1.691l1.69 9.3A1.693 1.693 0 0 1 18.546 21m-6.447-10.99a4.756 4.756 0 1 0 0 9.511 4.756 4.756 0 0 0 0-9.512",
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
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.126 5.3a1.3 1.3 0 0 1 1.3-1.3h1.524c.03 0 .06.003.09.008h1.443a1.3 1.3 0 0 1 1.3 1.3v.322a.977.977 0 0 1-.954.976v4.642l4.449 7.862a1 1 0 0 1-.87 1.492H11.91a.51.51 0 0 1-.09-.008H6.502a1 1 0 0 1-.87-1.492l4.45-7.862V6.598a.977.977 0 0 1-.955-.976z",
    clipRule: "evenodd"
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
    fill: "currentColor",
    d: "M8.56 17.283a.772.772 0 0 1-.619-.307.783.783 0 0 1-.079-.82l.216-.43-.216-.431a.783.783 0 0 1 .652-1.126l2.725 2.669c-.208.029-.418.046-.628.05l-1.896.377a.786.786 0 0 1-.155.018m4.555-2.7-.962-.943c.192-.306.295-.66.298-1.02h2.803l-2.135 1.962zm2.82-2.742h-3.65a1.97 1.97 0 0 0-1.047-1.025l1.394-4.385a5.446 5.446 0 0 1 3.32 5.016c0 .102-.006.193-.012.29 0 .026 0 .053-.005.082zm-5.464-1.168H7.394A3.894 3.894 0 0 1 3.5 6.78.78.78 0 0 1 4.28 6h6.224c.47.003.936.066 1.39.188l-1.426 4.485zM5.447 7.162a.39.39 0 1 0-.003.779.39.39 0 0 0 .003-.78"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m12.769 17.923-.175-.18a1.177 1.177 0 0 1-.327-.34L9.381 14.43c-.192-.198-.061-.747.29-1.226.352-.48.793-.707.985-.51l2.425 2.5 6.074-5.873a.894.894 0 0 1 1.357.213 1.223 1.223 0 0 1-.04 1.564l-6.805 6.582a.793.793 0 0 1-.42.216.668.668 0 0 1-.26.096.252.252 0 0 1-.218-.07"
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
    fill: "currentColor",
    d: "M13.227 2.004h-7.68a.927.927 0 0 0-.922.937v18.11c0 .518.411.936.922.936h12.902c.511 0 .922-.418.922-.937V8.25h-5.222a.932.932 0 0 1-.922-.937zm-.718 9.602c.318.002.636.044.942.127l-.966 3.041h-2.088a2.643 2.643 0 0 1-2.64-2.64.528.528 0 0 1 .527-.528zm-3.578 1.271a.268.268 0 0 1-.098-.118.267.267 0 0 1 .192-.36.264.264 0 1 1-.095.48zm4.786 2.688a1.328 1.328 0 0 0-.71-.695l.945-2.973a3.706 3.706 0 0 1 2.252 3.402c0 .067-.003.128-.009.196l-.004.07zm-.274 1.454c.244-.247.382-.578.385-.925h2.287a3.703 3.703 0 0 1-1.768 2.406zm-.441.288.868 1.419c-.412.165-.85.254-1.293.263l-1.286.258a.528.528 0 0 1-.576-.753l.146-.292-.146-.292a.531.531 0 0 1 .052-.556.525.525 0 0 1 .524-.197l1.252.25c.158-.006.313-.04.459-.1"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.183 10.653V7.796h.84L7.8 10.652h1.752c-.34-.488-1.07-1.57-2.19-3.243.442-.193.783-.46 1.024-.8.24-.342.361-.732.361-1.17 0-.75-.242-1.309-.728-1.675-.485-.37-1.234-.555-2.245-.555H3.605v7.443zm.51-4.14h-.51V4.502h.479c.51 0 .884.075 1.125.224.245.15.367.4.367.754 0 .356-.119.617-.357.784-.237.166-.606.25-1.104.25M12.272 10.026c.38.486.905.728 1.574.728a1.95 1.95 0 0 0 1.16-.35c.33-.235.583-.576.76-1.024.179-.448.269-.976.269-1.584 0-.923-.19-1.644-.57-2.164-.38-.519-.907-.779-1.579-.779-.712 0-1.25.282-1.614.845h-.07l-.22-.738H10.72v8.198h1.553V10.85c0-.075-.027-.35-.081-.825zm.275-3.574c.177-.238.457-.356.84-.356.367 0 .635.14.805.422.173.279.26.698.26 1.258 0 1.147-.348 1.72-1.044 1.72-.394 0-.682-.132-.866-.396-.18-.265-.27-.703-.27-1.314v-.168c.007-.543.099-.932.275-1.166",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.965 15.637h-1.74v3.51h1.74l6.74 1.233a1 1 0 0 0 .484-.03l5.005-1.599a.2.2 0 0 0 .126-.261l-.335-.885a1 1 0 0 0-1.165-.619l-3.57.843a1 1 0 0 1-.586-.039l-2.503-.956a.2.2 0 0 1-.129-.187v-.22c0-.11.09-.2.2-.2h1.824a1 1 0 0 0 1-1v-.603a.2.2 0 0 0-.2-.2h-4.198a1 1 0 0 0-.442.103zM3.605 15.672h1.77v3.505h-1.77z"
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
    fill: "currentColor",
    d: "M8.684 21v-5.684H3V8.685h5.684V3h6.632v5.685H21v6.631h-5.684V21z"
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
    fill: "currentColor",
    d: "m12.298 10.205.01.036 7.67.022 1.816 3.066-7.463 1.397-2.003-4.412 1.326 5.206 6.325-1.275v7.015l-7.68 1.701zM4.02 21.265v-7.016l6.323 1.275 1.3-5.027-1.977 4.229-7.46-1.395 1.817-3.066h7.72v.022l-.04.089v12.591z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "m17.52 11.102-1.415.407-.16-.558a.826.826 0 0 0-.446-1.55l-.378-1.315-.754-2.62c-.338-1.173-1.397-1.994-2.577-1.995-.04 0-.083 0-.125.002-1.142.05-2.13.85-2.458 1.99L8.074 9.4a.827.827 0 0 0-.445 1.551l-.16.558-1.414-.407.867-3.016.871-3.03c.503-1.75 2.034-2.976 3.808-3.052.064-.003.127-.005.191-.004 1.83.002 3.471 1.26 3.989 3.06z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M8.046 18.043H3V3.75h12.036v4.44H9.295a1.256 1.256 0 0 0-1.173.827H5.003v.5h3.043v2.508h-3.04v.502h3.04v2.509h-3.04v.501h3.04zM5.006 6.007v.502h8.36v-.502z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M19.364 3.863H4.636A1.649 1.649 0 0 0 3 5.514v12.933a1.649 1.649 0 0 0 1.636 1.655h14.728A1.65 1.65 0 0 0 21 18.45V5.514a1.649 1.649 0 0 0-1.636-1.651M11.62 16.909a1.235 1.235 0 0 1-1.225 1.237h-3.85A1.235 1.235 0 0 1 5.32 16.91V13.7a1.235 1.235 0 0 1 1.225-1.237h3.85a1.234 1.234 0 0 1 1.224 1.237zm.04-6.392a1.235 1.235 0 0 1-1.226 1.238h-3.85a1.234 1.234 0 0 1-1.224-1.238V7.31a1.235 1.235 0 0 1 1.225-1.235h3.849A1.234 1.234 0 0 1 11.66 7.31zm7.343 6.392a1.235 1.235 0 0 1-1.225 1.237h-3.85a1.234 1.234 0 0 1-1.224-1.237V13.7a1.235 1.235 0 0 1 1.225-1.237h3.849a1.235 1.235 0 0 1 1.225 1.237zm.042-6.392a1.235 1.235 0 0 1-1.225 1.238h-3.854a1.234 1.234 0 0 1-1.225-1.238V7.31a1.235 1.235 0 0 1 1.225-1.235h3.849a1.235 1.235 0 0 1 1.23 1.235z"
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
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M16.271 20.616H7.565a3.544 3.544 0 0 1-1.617-.393 4.27 4.27 0 0 1-1.325-1.072 5.203 5.203 0 0 1-.894-1.588 5.803 5.803 0 0 1-.247-2.887l.746-3.586h15.585l.555 3.783c.038.249.059.5.064.752.002.66-.11 1.316-.33 1.938a5.16 5.16 0 0 1-.893 1.588 4.235 4.235 0 0 1-1.325 1.072c-.499.257-1.052.391-1.613.393m-4.894-3.621a.394.394 0 0 0-.317.157.4.4 0 0 0-.042.422l.112.222-.112.222a.4.4 0 0 0 .042.421.4.4 0 0 0 .396.151l.98-.196c.336-.008.669-.075.982-.199l-.662-1.081c-.111.045-.23.07-.349.075l-.953-.19a.382.382 0 0 0-.077-.005zm2.01-.8a.998.998 0 0 1-.294.703l.689 1.127a2.82 2.82 0 0 0 1.345-1.83zm.094-3.192-.723 2.261a.996.996 0 0 1 .542.53h1.883V15.757c.004-.06.008-.111.008-.168a2.807 2.807 0 0 0-1.713-2.587zm-4.312-.224a.403.403 0 0 0-.4.402 2.01 2.01 0 0 0 2.007 2.008h1.586l.737-2.313a2.815 2.815 0 0 0-.716-.097zm.602 1.003a.202.202 0 0 1-.202-.202.201.201 0 1 1 .203.202zm10.098-3.22H4.116L3 8.02h18l-1.131 2.54zm-.89-3.08H3.802l2.726-.953h.065A2.248 2.248 0 0 1 8.73 4.7c.152 0 .303.017.45.05a2.151 2.151 0 0 1 1.784-1.001c.508.001.998.19 1.376.529a2 2 0 0 1 .794-.162 2.09 2.09 0 0 1 1.453.598 2.096 2.096 0 0 1 1.692.584c.404.395.661.917.728 1.479l1.97.702z"
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
    fill: "currentColor",
    d: "M14.268 8.094a.732.732 0 0 1 .331-.518c.184-.122.41-.16.672-.118.26.042.459.15.596.325a.744.744 0 0 1 .15.597.724.724 0 0 1-.332.51c-.183.122-.406.16-.666.118-.263-.042-.465-.149-.602-.32a.733.733 0 0 1-.15-.594M14.754 6.502l.15-1.33c.471.298.893.668 1.253 1.095l-.097.45a.347.347 0 0 1-.392.266l-.628-.103a.347.347 0 0 1-.287-.377z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19.684 19.492H4.187l1.602-2.283a3.396 3.396 0 0 0 .618-1.954V9.832c0-1.525.618-2.907 1.619-3.907a5.507 5.507 0 0 1 3.907-1.62 5.5 5.5 0 0 1 2.468.579l-.176 1.556a.873.873 0 0 0 .174.632 1.282 1.282 0 0 0-.659.932c-.06.375.028.724.26 1.012.22.277.534.453.933.516.396.065.747-.002 1.045-.2.309-.205.504-.505.566-.871a1.266 1.266 0 0 0-.328-1.094.864.864 0 0 0 .362-.534c.558.864.883 1.892.883 2.997v5.423c0 .7.216 1.381.618 1.953l1.604 2.286z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11.79 6.498h-.025a.83.83 0 0 1-.83-.83V3.9a.83.83 0 0 1 .83-.83h.024a.83.83 0 0 1 .83.83v1.768a.829.829 0 0 1-.83.83M11.801 21.21h-.05a1.69 1.69 0 0 1-1.69-1.691v-.05c0-.933.757-1.69 1.69-1.69h.05c.934 0 1.69.757 1.69 1.69v.05a1.69 1.69 0 0 1-1.69 1.69M15.867 7.781a.744.744 0 0 1 .15.597.724.724 0 0 1-.332.511c-.183.122-.406.16-.666.118-.263-.042-.465-.15-.602-.321a.73.73 0 0 1-.15-.594.732.732 0 0 1 .332-.518c.184-.121.41-.16.672-.117.262.044.459.15.596.324M16.689 3.774l-.53 2.493-.097.45a.347.347 0 0 1-.392.266l-.628-.103a.345.345 0 0 1-.286-.378l.15-1.33.192-1.658a.34.34 0 0 1 .395-.298l.917.15c.191.03.32.215.279.408"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15.867 7.781c-.137-.174-.335-.28-.596-.324-.263-.042-.488-.004-.672.117a.741.741 0 0 0-.331.518.73.73 0 0 0 .15.594c.136.17.338.277.601.32.26.043.483.005.666-.117a.735.735 0 0 0 .331-.51.739.739 0 0 0-.15-.598m.542-4.418-.916-.15a.342.342 0 0 0-.396.3l-.19 1.657-.152 1.33c-.02.181.105.348.287.378l.628.103c.181.028.353-.09.392-.267l.097-.45.53-2.492a.343.343 0 0 0-.28-.409z"
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
    fill: "currentColor",
    d: "M14.888 8.584A2.085 2.085 0 0 1 12.805 6.5V2.005h-6.93c-.691 0-1.25.558-1.25 1.25v17.5c0 .691.563 1.25 1.25 1.25h12.259c.691 0 1.25-.558 1.25-1.25V8.584zm-3.537 2.15 2.195 2.195 2.409-2.408a.414.414 0 0 1 .587 0 .42.42 0 0 1 0 .592l-2.7 2.7a.42.42 0 0 1-.592 0l-2.196-2.196-3.558 3.558a.4.4 0 0 1-.292.12.414.414 0 0 1-.295-.708l3.854-3.854a.416.416 0 0 1 .588 0m-3.234 9.604H6.292v-3.754h1.825zm3.2 0H9.494v-4.546h1.825zm3.2 0h-1.825v-2.392h1.825zm3.2 0h-1.824v-6.659h1.824z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M14.885 8.584h4.506v12.17c0 .692-.56 1.251-1.253 1.251H5.852c-.689 0-1.252-.558-1.252-1.25v-17.5c0-.691.56-1.25 1.252-1.25h6.945V6.5c0 1.15.936 2.084 2.088 2.084m-2.249 4.234v6.105l1.156-.001v-1.719c0-.055-.021-.26-.06-.614h.06a1.405 1.405 0 0 0 1.172.543c.308.007.611-.083.865-.26.26-.192.457-.457.568-.761.14-.378.207-.777.198-1.18a2.685 2.685 0 0 0-.424-1.611 1.374 1.374 0 0 0-1.175-.583 1.341 1.341 0 0 0-1.203.63h-.053l-.163-.55h-.94zm1.154 1.98v.121c-.027.339.044.679.204.979a.727.727 0 0 0 .642.296c.518 0 .777-.427.777-1.282a1.83 1.83 0 0 0-.194-.938.65.65 0 0 0-.601-.312.726.726 0 0 0-.62.266l-.003.001a1.52 1.52 0 0 0-.205.87zm-4.39.13 1.324 2.127h1.305c-.253-.364-.796-1.17-1.632-2.416a1.78 1.78 0 0 0 .763-.598c.18-.254.274-.558.27-.87a1.47 1.47 0 0 0-.54-1.248 2.765 2.765 0 0 0-1.672-.412H7.6v5.543h1.176v-2.128H9.4zm-.245-.955a1.45 1.45 0 0 0 .823-.186.662.662 0 0 0 .265-.583.605.605 0 0 0-.27-.561 1.649 1.649 0 0 0-.842-.167h-.356v1.496z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M19.759 13.14h-2.47c-.236 0-.427.171-.427.38v.075h-3.745a1.132 1.132 0 0 0-.166-.399l2.648-2.648.053.053a.353.353 0 0 0 .254.1.448.448 0 0 0 .316-.135l1.747-1.747c.166-.166.181-.422.033-.57l-.428-.427a.354.354 0 0 0-.254-.1.448.448 0 0 0-.316.135l-1.747 1.747c-.166.166-.181.421-.033.57l.053.053-2.648 2.647a1.138 1.138 0 0 0-.4-.165V8.964h.076c.21 0 .38-.191.38-.427v-2.47c0-.236-.171-.427-.38-.427H11.7c-.209 0-.378.191-.378.427v2.47c0 .236.17.427.378.427h.076v3.745c-.142.029-.278.085-.399.165l-2.648-2.647.053-.053c.149-.149.133-.404-.034-.57L7.001 7.857a.454.454 0 0 0-.316-.136.356.356 0 0 0-.254.1l-.428.428c-.148.148-.133.405.034.57l1.747 1.747a.448.448 0 0 0 .315.136.356.356 0 0 0 .255-.1l.053-.054 2.647 2.648c-.08.122-.136.257-.165.4H7.145v-.076c0-.21-.192-.38-.427-.38h-2.47c-.236 0-.427.171-.427.38v.606c0 .209.19.378.426.378h2.47c.236 0 .428-.17.428-.378v-.076h3.744c.029.142.085.278.165.399l-2.647 2.648-.053-.053a.354.354 0 0 0-.255-.1.448.448 0 0 0-.315.135l-1.747 1.747c-.167.166-.182.422-.033.57l.427.427a.352.352 0 0 0 .255.1.448.448 0 0 0 .315-.135l1.747-1.747c.167-.166.182-.421.034-.57l-.053-.053 2.648-2.647c.121.08.256.136.399.165v3.744H11.7c-.21 0-.379.192-.379.427v2.47c0 .236.17.427.38.427h.605c.21 0 .379-.191.379-.427v-2.47c0-.235-.17-.427-.379-.427h-.076v-3.744c.143-.029.279-.085.4-.165l2.648 2.647-.054.053c-.148.149-.132.404.034.57l1.747 1.747a.448.448 0 0 0 .316.136.356.356 0 0 0 .254-.1l.427-.428c.149-.148.133-.405-.033-.57l-1.747-1.747a.448.448 0 0 0-.316-.136.356.356 0 0 0-.254.1l-.053.054-2.648-2.648c.08-.122.137-.257.166-.4h3.745v.077c0 .209.19.378.426.378h2.47c.236 0 .428-.17.428-.378v-.606c0-.209-.192-.38-.427-.38"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M16.904 21h-9.45A2.455 2.455 0 0 1 5 18.546v-8.083A2.454 2.454 0 0 1 7.455 8.01h9.45a2.455 2.455 0 0 1 2.454 2.454v8.083A2.455 2.455 0 0 1 16.904 21m-5.569-5.205a.447.447 0 0 0-.402.65l.125.245-.124.245a.446.446 0 0 0 .203.603.452.452 0 0 0 .287.038l1.093-.219a3.11 3.11 0 0 0 1.097-.224l-.737-1.207a1.12 1.12 0 0 1-.39.082l-1.063-.212a.465.465 0 0 0-.089-.001m2.244-.895a1.14 1.14 0 0 1-.327.787l.77 1.259a3.148 3.148 0 0 0 1.502-2.046zm.106-3.567-.804 2.528c.27.112.486.323.604.59h2.103v-.055c0-.06.008-.112.008-.17a3.14 3.14 0 0 0-1.915-2.892zm-4.818-.245a.45.45 0 0 0-.449.448 2.247 2.247 0 0 0 2.244 2.244h1.774l.823-2.585a3.16 3.16 0 0 0-.802-.107zm.673 1.118a.225.225 0 1 1 .224-.225.224.224 0 0 1-.223.223zm5.696-4.879h-6.3v-.005a8.658 8.658 0 0 1-.746-1.666c-.25-.833-1.686-1.704-1.7-1.713A3.876 3.876 0 0 1 8.937 3a7.841 7.841 0 0 1 3.15.94A8.333 8.333 0 0 1 15.236 3a4.642 4.642 0 0 1 2.542.94c-.015.01-1.561.876-1.85 1.713a17.35 17.35 0 0 1-.693 1.671z"
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
    fill: "currentColor",
    d: "M12.456 9.434A9.195 9.195 0 0 0 12.475 12a9.977 9.977 0 0 0 2.4 5.261 2.192 2.192 0 0 1 .566 2.356 4.595 4.595 0 0 1-3.98 2.206 9.939 9.939 0 0 0 4.794-.945 5.458 5.458 0 0 0 2.669-2.466 3.443 3.443 0 0 0-.849-3.839 15.815 15.815 0 0 1-3.803-8.346 14.934 14.934 0 0 1-.03-4.073 40.988 40.988 0 0 0-5.869 5.822 17.62 17.62 0 0 0-3.136 5.394 6.05 6.05 0 0 0 .466 5.364 6.45 6.45 0 0 0 2.258 2.115c-.344-.273-.64-.6-.878-.97a3.803 3.803 0 0 1-.295-3.38c.451-1.24 1.12-2.39 1.975-3.394a26.069 26.069 0 0 1 3.686-3.664z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "m21.123 13.625-7.404 7.406a1.428 1.428 0 0 1-2.017 0L2.25 11.576a1.366 1.366 0 0 1-.241-.322c-.038.35.085.7.334.95l9.453 9.456a1.166 1.166 0 0 0 1.647 0l7.405-7.405a1.17 1.17 0 0 0 .333-.687c-.018.02-.037.04-.055.057z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M20.845 6.926a.627.627 0 0 0-.477-.175h-.06c-1.049.049-2.096.1-3.146.148a.679.679 0 0 0-.484.166.55.55 0 0 0 .052.825l.262.266c.181.185.366.37.551.551l-6.345 6.352-2.851-2.85a.905.905 0 0 0-1.283 0l-3.798 3.794a.905.905 0 0 0 0 1.283l.167.166a.908.908 0 0 0 1.283 0L7.7 14.469l2.851 2.851a.91.91 0 0 0 1.287 0l7.158-7.158.81.806a.615.615 0 0 0 .432.23.536.536 0 0 0 .262-.067.71.71 0 0 0 .155-.116.75.75 0 0 0 .196-.521c.029-.68.062-1.36.095-2.045l.049-1.024a.638.638 0 0 0-.15-.498"
  }));
};

const SvgInsight = _ref => {
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
    fill: "currentColor",
    d: "M20.708 11.583a2.292 2.292 0 1 0-1.938-1.069c-.28.422-.546.902-.801 1.36v.001c-.094.168-.186.333-.276.491-.832 1.459-1.675 2.616-3.13 2.867-.697.12-1.242-.088-1.756-.514-.548-.455-1.036-1.138-1.566-1.943l-.21-.32c-.445-.683-.936-1.434-1.478-2.01-.653-.692-1.495-1.256-2.588-1.16-.824.071-1.456.738-1.887 1.339-.462.644-.862 1.453-1.184 2.212a24.267 24.267 0 0 0-.575 1.497h-.027a2.292 2.292 0 1 0 1.58.632c.147-.42.323-.89.524-1.362.3-.706.637-1.372.985-1.856.378-.528.628-.644.716-.652.433-.038.832.156 1.303.656.426.451.816 1.048 1.27 1.742l.001.001.226.345c.524.795 1.14 1.689 1.91 2.327.805.668 1.794 1.07 3.013.86 2.247-.387 3.436-2.22 4.278-3.698.117-.205.225-.4.329-.585.26-.468.487-.876.727-1.228.178.044.363.067.554.067"
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
    fill: "currentColor",
    d: "M14.684 10.368h-5.75V4.5h1.923v3.173h1.9V4.5h1.923v5.868z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.374 4.5h-1.13v2.787h1.13zM11.628 16.855h-5.75v-5.869H7.8v3.173h1.9v-3.173h1.923v5.868z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9.317 10.987H8.188v2.787h1.13zM18.122 16.855h-5.75v-5.869h1.923v3.173h1.9v-3.173h1.923v5.868z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M18.356 19.6H4.644A2.144 2.144 0 0 1 2.5 17.457V6.144A2.144 2.144 0 0 1 4.644 4h13.712A2.144 2.144 0 0 1 20.5 6.144v11.312a2.144 2.144 0 0 1-2.144 2.145M9.26 14.23a.363.363 0 0 0-.286.181.446.446 0 0 0 .036.429c.166.162.347.307.541.433a3.855 3.855 0 0 0 1.984.613.677.677 0 0 0 .206-.04.533.533 0 0 1 .155-.032c.453-.08.876-.278 1.226-.577a2.287 2.287 0 0 0 .902-1.839V7.844a.241.241 0 0 0-.181-.253.587.587 0 0 0-.143-.02.3.3 0 0 0-.254.128v.036a.932.932 0 0 0-.04.406c0 .044.004.09.004.135v4.977c0 .01.001.02.003.029.007.039.016.087-.04.115v.035a1.831 1.831 0 0 1-.722 1.299 1.707 1.707 0 0 1-1.158.412 3.024 3.024 0 0 1-2.087-.846.19.19 0 0 0-.146-.067z"
  }));
};

const SvgLine = _ref => {
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
    fill: "currentColor",
    d: "M17.25 9.791c-.78-.368-1.6-.618-2.175-.532-.397.06-.584.214-.719.41-.17.244-.277.579-.416 1.07l-.032.116c-.245.877-.617 2.208-2.154 2.68-1.247.383-2.27-.387-2.93-.884l-.117-.087c-.343-.26-.626-.473-.915-.624-.295-.156-.528-.207-.745-.178-.736.1-1.218.764-1.502 1.781a1.93 1.93 0 1 1-1.433-.445c.336-1.163 1.077-2.597 2.733-2.822.633-.086 1.187.095 1.646.336.402.212.783.5 1.104.742l.098.074c.786.59 1.194.804 1.62.673.72-.22.898-.758 1.184-1.77l.002-.009c.127-.448.29-1.028.624-1.509.37-.534.923-.917 1.73-1.038 1.054-.157 2.23.28 3.037.66.222.104.428.21.611.31a1.93 1.93 0 1 1-.72 1.344l.003-.026c-.161-.088-.341-.18-.534-.272"
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
    fill: "currentColor",
    d: "M7.965 8.148h-1.74v-3.51h1.74l6.74-1.233a1 1 0 0 1 .484.03l5.006 1.599a.2.2 0 0 1 .126.261l-.336.885a1 1 0 0 1-1.165.619l-3.57-.843a1 1 0 0 0-.586.039l-2.503.956a.2.2 0 0 0-.13.187v.22c0 .11.09.2.2.2h1.825a1 1 0 0 1 1 1v.604a.2.2 0 0 1-.2.2h-4.198a1 1 0 0 1-.442-.103zM3.604 8.114h1.77V4.608h-1.77z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.26 18.136V15.28h.839l1.777 2.856h1.75c-.339-.489-1.068-1.57-2.188-3.242.44-.194.782-.46 1.023-.8.24-.342.361-.733.361-1.17 0-.75-.242-1.309-.728-1.675-.485-.37-1.233-.555-2.244-.555H3.68v7.442zm.508-4.138H5.26v-2.011h.479c.509 0 .884.075 1.125.224.244.15.366.4.366.753 0 .357-.119.618-.356.784-.238.167-.606.25-1.105.25M12.347 17.51c.38.485.904.728 1.572.728a1.95 1.95 0 0 0 1.161-.351c.33-.235.582-.576.758-1.024.18-.447.27-.975.27-1.583 0-.923-.19-1.644-.57-2.163-.38-.52-.906-.779-1.578-.779-.713 0-1.25.282-1.614.845h-.07l-.22-.738h-1.262v8.196h1.553v-2.306c0-.075-.028-.35-.082-.825zm.274-3.574c.177-.237.457-.356.84-.356.367 0 .635.141.805.423.173.278.26.697.26 1.257 0 1.147-.349 1.72-1.044 1.72-.394 0-.682-.132-.866-.396-.18-.265-.27-.703-.27-1.314v-.168c.007-.543.099-.931.275-1.165",
    clipRule: "evenodd"
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
    fill: "currentColor",
    d: "M11.613 6.622a.399.399 0 0 0-.022.164.395.395 0 0 0 .113.3.437.437 0 0 0 .315.107.428.428 0 0 0 .311-.109.464.464 0 0 0 0-.601.434.434 0 0 0-.312-.106.447.447 0 0 0-.318.104.403.403 0 0 0-.087.14M11.724 5.964h.593l.124-2.346h-.84z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12.605 1.797 3.9 5.77c.215.318.063.86-.241.862l-8.528-.002c-.304 0-.456-.544-.241-.862l3.903-5.768a.669.669 0 0 1 .604-.37.68.68 0 0 1 .603.37M8.941 7.629h6.116c.219 0 .328-.39.174-.618l-2.8-4.137A.48.48 0 0 0 12 2.61a.487.487 0 0 0-.433.265L8.768 7.011c-.154.228-.045.618.173.618",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m12.3 9.675.01.036 7.73.023 1.83 3.098-7.521 1.412-2.019-4.459 1.337 5.261 6.374-1.288v7.09l-7.74 1.718zM3.958 20.852v-7.09l6.372 1.288 1.31-5.08-1.992 4.274-7.518-1.41L3.96 9.736h7.78v.022l-.041.09v12.725z"
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
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M5.25 8.375H16.5V9.5H5.25zM15.376 15.125h-3.938v1.125h3.938zM11.438 12.875H16.5V14h-5.063zM16.5 10.625h-5.062v1.125H16.5zM5.25 10.625h5.063v5.625H5.25z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 5h15.75v2.25H21v10.125c0 2.215-1.688 2.25-1.688 2.25H5.25C3 19.625 3 17.375 3 17.375zm1.816 13.42c.138.056.285.083.434.08h12.755a1.627 1.627 0 0 1-.38-1.125V6.125h-13.5v11.25a1.102 1.102 0 0 0 .69 1.046",
    clipRule: "evenodd"
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
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.611 4.884a.5.5 0 0 1 .5.5v12.732H19.39a.5.5 0 1 1 0 1H4.61a.5.5 0 0 1-.5-.5V5.384a.5.5 0 0 1 .5-.5",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M17.12 8.064a.5.5 0 0 1 .043.706l-3.499 3.948a.5.5 0 0 1-.674.068l-1.77-1.327-3.622 4.42a.5.5 0 0 1-.773-.634l3.925-4.79a.5.5 0 0 1 .687-.084l1.784 1.338 3.193-3.602a.5.5 0 0 1 .706-.043",
    clipRule: "evenodd"
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
    fill: "currentColor",
    d: "M7.065 19.103a4.19 4.19 0 0 1-4.063-4.305v-1.704c0-2.377 2.395.77 4.426.77s2.702-1.53 4.392-1.578c1.69-.048 2.611 1.5 4.607 1.579a4.757 4.757 0 0 0 2.296-.824c1.254-.723 2.275-1.445 2.275.053v1.705a4.188 4.188 0 0 1-4.063 4.304zm11.182-9.627V4.5h2.75v4.976zm.241-.436h2.27V4.935h-2.27zm-4.07.436V4.5h2.752v4.976zm.242-.436h2.269V4.935h-2.27zm-4.255.436V4.5h2.945v4.976zm-3.49 0V4.5h2.75v4.976zm-3.91 0V4.5H5.95v4.976z"
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
    fill: "currentColor",
    d: "M9.006 7.994c.124.12.3.12.442.034a4.605 4.605 0 0 1 1.646-.668c.159-.034.283-.154.283-.326V3.932a.321.321 0 0 0-.372-.325 8.594 8.594 0 0 0-4.228 1.696.318.318 0 0 0-.018.497zM14.544 8.045a4.604 4.604 0 0 0-1.646-.668c-.159-.034-.283-.171-.265-.326V3.932c0-.188.177-.342.372-.325a8.594 8.594 0 0 1 4.228 1.696c.16.12.16.36.018.497l-2.265 2.211c-.124.12-.3.12-.442.034M3.957 11.653H7.16c.16 0 .301-.12.337-.274a4.31 4.31 0 0 1 .69-1.594c.088-.137.088-.308-.036-.428L5.868 7.163c-.142-.137-.39-.137-.513.018a8.048 8.048 0 0 0-1.752 4.095.347.347 0 0 0 .354.377M8.168 14.72a4.31 4.31 0 0 1-.69-1.593.34.34 0 0 0-.336-.274H3.957c-.212 0-.371.171-.336.36a8.047 8.047 0 0 0 1.751 4.096.342.342 0 0 0 .514.017l2.264-2.194c.106-.103.106-.274.018-.411M16.855 12.853h3.202c.212 0 .371.171.336.377a8.047 8.047 0 0 1-1.752 4.096c-.123.154-.371.154-.513.017l-2.264-2.194c-.124-.12-.124-.291-.036-.428a4.31 4.31 0 0 0 .69-1.594.354.354 0 0 1 .337-.274M11.105 16.623a4.603 4.603 0 0 1-1.645-.668c-.142-.086-.319-.086-.443.034l-2.264 2.21c-.142.138-.142.378.017.498A8.593 8.593 0 0 0 11 20.393c.194.017.371-.137.371-.325v-3.12c.018-.154-.106-.29-.265-.325M16.855 11.653a.34.34 0 0 1-.336-.274 4.161 4.161 0 0 0-.673-1.594c-.088-.137-.088-.308.036-.428l2.247-2.176a.342.342 0 0 1 .513.017 8.047 8.047 0 0 1 1.751 4.095c.035.189-.124.36-.336.36zM14.997 16.006c-.124-.12-.3-.12-.442-.034a4.603 4.603 0 0 1-1.646.668c-.159.034-.283.154-.283.326v3.102c0 .205.177.36.372.325a8.594 8.594 0 0 0 4.228-1.696c.16-.12.177-.36.018-.497z"
  }));
};

const SvgPie = _ref => {
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
    fill: "currentColor",
    d: "M20.997 12.23a9 9 0 1 1-5.912-8.685L12 12z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M20.119 10.998h-6.515l2.299-6.115c1.244.642 2.165 1.425 2.941 2.6.776 1.177 1.173 2.118 1.274 3.515"
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
    fill: "currentColor",
    d: "M9.09 17.465H3V3h12.181v6.302a3.688 3.688 0 0 0-1.032.443 3.398 3.398 0 0 1-1.794.559 4.266 4.266 0 0 1-1.869-.677A2.81 2.81 0 0 0 9.449 9.2c-.243 0-.356.188-.356.592v1.584H5.03v.507h4.06v2.538H5.03v.507h4.06zM5.03 8.329v.507h8.457V8.33zm0-3.044v.507h8.457v-.507z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
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
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M7.96 18.127a.841.841 0 0 1-.084-.906l.239-.477-.24-.474a.846.846 0 0 1 .086-.905.875.875 0 0 1 .86-.324l2.06.408c.114-.003.227-.015.339-.037v2.607c-.102.007-.194.01-.28.013l-2.119.416a.877.877 0 0 1-.86-.322m9.302.073v-5.758h.887l.154.518h.05a1.262 1.262 0 0 1 1.134-.594 1.298 1.298 0 0 1 1.108.55c.292.451.432.983.4 1.52a3.01 3.01 0 0 1-.187 1.112 1.56 1.56 0 0 1-.535.718 1.368 1.368 0 0 1-.816.244A1.327 1.327 0 0 1 18.353 16h-.057c.038.333.057.527.057.58v1.62zm1.282-4.712a1.427 1.427 0 0 0-.194.82v.116c-.025.32.041.64.192.922a.683.683 0 0 0 .606.28c.488 0 .733-.404.733-1.21a1.727 1.727 0 0 0-.184-.885.617.617 0 0 0-.567-.295.687.687 0 0 0-.584.251zm-3.085 2.95L14.21 14.43h-.59v2.007h-1.11V11.21h1.527a2.605 2.605 0 0 1 1.577.389 1.383 1.383 0 0 1 .508 1.176c.005.294-.084.582-.253.821-.183.25-.432.446-.72.563a219.17 219.17 0 0 0 1.539 2.278zm-1.838-2.906h.358c.27.02.54-.041.776-.175a.624.624 0 0 0 .25-.55.572.572 0 0 0-.256-.53 1.552 1.552 0 0 0-.793-.156h-.335zm-2.838-2.37H7.348A4.329 4.329 0 0 1 3 6.862.866.866 0 0 1 3.869 6h6.958a6.195 6.195 0 0 1 1.553.207zM4.74 7.716a.434.434 0 1 0 .032-.165.432.432 0 0 0-.033.166zm11.942 2.664h-4.735l1.256-3.902a6.109 6.109 0 0 1 3.479 3.9z"
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
    fill: "currentColor",
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
    fill: "currentColor",
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
    fill: "currentColor",
    d: "m7.24 17.756-2.21.331v-3.855s2.42-.366 4.464-.544c1.14-.098 7.016-.274 7.5.25.21.223-.488 1.002-.701 1.224-.422.438-1.712.433-2.543.428h-.438c-.941.02-3.02.036-3.02.036s3.725.792 5.545.223c1.015-.318 3.38-1.825 3.892-1.934.405-.088 1.134-.306 1.244.111.19.716-.65 1.41-1.168 1.86-.865.755-4.038 3.25-4.99 3.481a2.288 2.288 0 0 1-.52.05c-2.089-.004-7.055-1.661-7.055-1.661M3 18.074v-3.837h1.625v3.837zm13.291-6.083h-7.34V4.5h2.455v4.05h2.425V4.5h2.455v7.49zm-4.39-3.933V4.5h1.443v3.557z"
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
    fill: "currentColor",
    d: "M19.116 17.315H4.884A1.884 1.884 0 0 1 3 15.43V7.885A1.884 1.884 0 0 1 4.884 6h14.232A1.884 1.884 0 0 1 21 7.884v7.547a1.884 1.884 0 0 1-1.884 1.884m-6.032-9.257a.754.754 0 0 0-.095.006.309.309 0 0 0-.23.156.581.581 0 0 0-.034.482c.016.04.053.112.104.21.543.951.842 2.022.871 3.117a4.374 4.374 0 0 1-.975 2.912.54.54 0 0 0-.1.44.412.412 0 0 0 .198.301.456.456 0 0 0 .212.046c.248-.005.484-.1.666-.268a6.546 6.546 0 0 0 1.049-3.43 7.593 7.593 0 0 0-1.035-3.587l-.015-.027a.69.69 0 0 0-.616-.358m-1.709 1.005a.47.47 0 0 0-.197.04.393.393 0 0 0-.2.24.523.523 0 0 0 .016.394c.032.051.067.1.105.148.506.6.793 1.354.816 2.14a2.264 2.264 0 0 1-.835 1.933l-.015.012a.541.541 0 0 0-.146.42.4.4 0 0 0 .146.323c.07.044.152.066.234.063a.891.891 0 0 0 .514-.182 4.067 4.067 0 0 0 1.185-2.57 4.917 4.917 0 0 0-1.082-2.71.714.714 0 0 0-.54-.25zm-1.341 1.303a.388.388 0 0 0-.202.048.284.284 0 0 0-.122.188.542.542 0 0 0 .048.365.618.618 0 0 0 .076.079 1.377 1.377 0 0 1 .476 1.077c0 .691-.284.855-.436.942l-.042.026a.44.44 0 0 0-.14.296.41.41 0 0 0 .066.326.355.355 0 0 0 .265.09c.127 0 .252-.03.364-.09.44-.42.712-.985.767-1.59a2.717 2.717 0 0 0-.665-1.601.724.724 0 0 0-.455-.156"
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
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M4.217 16.045v2.918a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V13.83L5.483 15.47a1.987 1.987 0 0 1-1.266.576M8.248 13.793v5.17a.326.326 0 0 0 .325.325h2.253a.326.326 0 0 0 .326-.326V15.92a1.966 1.966 0 0 1-1.357-.577zM12.278 15.598v3.365a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .325-.325v-6.209l-2.584 2.585a1.942 1.942 0 0 1-.32.259M18.997 8.938l-2.689 2.685v7.337a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V9.14c-.074-.062-.13-.118-.17-.155z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16.752 7.5c.366.001.73.05 1.083.145l-1.112 3.496h-2.398a3.038 3.038 0 0 1-3.035-3.034.607.607 0 0 1 .607-.607zM12.64 8.962a.301.301 0 1 0 .334-.5.301.301 0 0 0-.334.5",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18.14 12.052a1.528 1.528 0 0 0-.816-.8l1.087-3.42A4.255 4.255 0 0 1 21 11.747c0 .081-.005.155-.01.239l-.005.067zM17.83 13.723c.28-.284.438-.666.442-1.064l2.63-.003a4.265 4.265 0 0 1-2.032 2.77zM17.319 14.054c-.168.069-.346.107-.527.113l-1.439-.287a.606.606 0 0 0-.662.866l.168.335-.168.335a.606.606 0 0 0 .662.867l1.479-.296a4.221 4.221 0 0 0 1.484-.3zM5.731 11.137c.004-.4.162-.78.442-1.064l-1.04-1.706a4.268 4.268 0 0 0-2.03 2.77zM5.86 11.746c.159.361.451.647.816.797L5.59 15.96A4.254 4.254 0 0 1 3 12.052c0-.081.005-.155.01-.239l.005-.067zM6.681 9.742c.167-.07.346-.109.527-.115l1.438.289a.607.607 0 0 0 .662-.867l-.168-.335.168-.335a.607.607 0 0 0-.662-.866l-1.479.295a4.222 4.222 0 0 0-1.484.301z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.765 3.172A4.99 4.99 0 0 0 10.485 3h-5.73a.716.716 0 0 0-.717.716A3.586 3.586 0 0 0 7.62 7.298h2.83zM5.829 4.785a.361.361 0 1 1 0-.722.361.361 0 0 1 0 .722",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11.16 7.43c.431.179.776.517.964.944h3.357l.006-.087c.006-.096.012-.181.012-.275a5.022 5.022 0 0 0-3.056-4.616zM12.277 9.09c-.004.47-.192.92-.523 1.255l1.228 2.01a5.04 5.04 0 0 0 2.4-3.266zM10.533 10.87c.214-.007.424-.053.622-.134l1.178 1.927a4.984 4.984 0 0 1-1.752.357l-1.746.349a.716.716 0 0 1-.782-1.023l.198-.396-.198-.396a.716.716 0 0 1 .782-1.024z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M20.623 9.122c.082.03.157.076.22.137a.638.638 0 0 1 .152.498l-.048 1.023c-.036.686-.067 1.367-.096 2.047a.752.752 0 0 1-.197.521.707.707 0 0 1-.155.114.536.536 0 0 1-.259.07.615.615 0 0 1-.433-.229l-.81-.806-7.157 7.161a.91.91 0 0 1-1.287 0l-2.85-2.85-2.984 2.98a.906.906 0 0 1-1.283 0l-.17-.17a.906.906 0 0 1 0-1.284l3.797-3.792a.906.906 0 0 1 1.283 0l2.85 2.851 6.347-6.349c-.185-.18-.37-.366-.55-.55l-.263-.267a.541.541 0 0 1-.166-.657.55.55 0 0 1 .114-.17.679.679 0 0 1 .482-.167l1.573-.074 1.573-.074h.06a.628.628 0 0 1 .257.037"
  }));
};

const SvgStackedBar = _ref => {
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
    fill: "currentColor",
    d: "M3.434 12.898h3.83v8.168h-3.83zM3.434 7.86a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1V12h-3.83zM16.914 13.05h3.83v8.016h-3.83zM16.914 5.183a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1V12.2h-3.83zM10.085 17.253h3.83v3.813h-3.83zM10.085 11.385a1 1 0 0 1 1-1h1.83a1 1 0 0 1 1 1v4.861h-3.83z"
  }));
};

const SvgStackedLine = _ref => {
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
    fill: "currentColor",
    d: "M6.415 9.56c-2.205 1.127-2.418 5.86-2.418 5.86s1.779-2.348 3.44-2.976c2.607-.984 4.46 2.683 6.976 1.488 2.184-1.037.997-5.773 3.348-5.208l2.232 1.86v-2.79s-2.28-2.475-4.185-2.511c-2.556-.05-2.501 3.56-4.955 4.278-1.663.487-2.895-.789-4.438 0"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15.25 14.955c-2.593 1.551-4.84-2.47-7.626-1.302-1.811.76-3.669 3.441-3.669 3.441v1.623h16.09v-6.831s-.954-1.415-1.912-1.674c-2.092-.566-1.023 3.63-2.883 4.743"
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
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M12.371 19.973h7.419v-7.57h-2.484v4.092h-2.452v-4.093h-2.483z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15.352 12.403v3.596h1.458v-3.596zM4.21 19.973h7.418v-7.57H9.145v4.092H6.693v-4.093H4.209z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.19 12.403v3.596h1.458v-3.596zM8.661 11.598h7.419v-7.57h-2.484V8.12h-2.451V4.027H8.66z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M15.791 19.788h-3.94v-4.021h1.319v2.174h1.302v-2.174h1.32zm-4.447 0h-3.94v-4.021h1.319v2.174h1.302v-2.174h1.32zm5.786-.032v-8.227L12.046 6.2l-5.169 5.351v8.205H5.815v-7.108l-.85.877H3L12.043 4 21 13.525h-1.963l-.849-.89v7.116zm-3.695-2.079v-1.91h.774v1.91zm-4.447 0v-1.91h.774v1.91zm2.357-2.333h-3.94v-4.022h1.319v2.174h1.302v-2.173h1.32zm-2.357-2.111v-1.91h.774v1.91z"
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
    fill: "currentColor",
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
    fill: "currentColor",
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
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 3a8.97 8.97 0 0 1 6.364 2.636A8.972 8.972 0 0 1 21 12a8.972 8.972 0 0 1-2.776 6.5A9 9 0 1 1 12 3M6.343 17.657 12 12l5.657 5.657A7.975 7.975 0 0 0 20 12c0-2.21-.895-4.21-2.343-5.657L12 12 6.343 6.343A7.975 7.975 0 0 0 4 12c0 2.21.895 4.21 2.343 5.657",
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
    fill: "currentColor",
    d: "M17.275 20.998a9.59 9.59 0 0 1-1.786-.128c-.093-.023-.144-.048-.144-.075v-.634c.648.2 1.328.269 2.003.203a5.121 5.121 0 0 0 2.003-.203v.634c0 .055-.216.104-.567.14-.35.037-.83.06-1.364.063zM5.65 20.725A1.65 1.65 0 0 1 4 19.076V7.45a1.65 1.65 0 0 1 1.65-1.649h.216V3.825A.825.825 0 0 1 6.69 3h2.082a.825.825 0 0 1 .825.825v1.974h.219a1.649 1.649 0 0 1 1.649 1.649v11.626a1.65 1.65 0 0 1-1.65 1.649zm-.824-7.64h5.771V9.787H4.825zm8.323 7.518a.837.837 0 0 1-.337-.13 1.041 1.041 0 0 1-.177-1.451l.644-.966 1.588 1.06-.646.965a1.148 1.148 0 0 1-.931.534.887.887 0 0 1-.136-.012zm2.193-.644a5.12 5.12 0 0 1 2.003-.202 5.124 5.124 0 0 1 2.003.202c-.648.2-1.329.27-2.003.204a5.112 5.112 0 0 1-2.001-.204zm-1.951-2.072.644-.964a1.04 1.04 0 0 1 1.41-.392 1.04 1.04 0 0 1 .178 1.451l-.644.966z"
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
    fill: "currentColor",
    d: "M4.76 21V8.664a1.319 1.319 0 0 1-1.01-1.282V4.319A1.319 1.319 0 0 1 5.07 3h13.19a1.32 1.32 0 0 1 1.321 1.32v3.062a1.32 1.32 0 0 1-.974 1.273V21zm12.462-4.846v-7.96a1.314 1.314 0 0 1-.28-.813 1.32 1.32 0 1 1-2.64 0 1.318 1.318 0 1 1-2.637 0 1.319 1.319 0 0 1-2.64 0 1.32 1.32 0 1 1-2.639 0c0 .274-.085.54-.243.764v8.008H8.94a3.23 3.23 0 0 1 .834-1.775c.104-.112.216-.215.335-.31v2.085h.21v-1.015h3.098v1.015h.21v-2.074c.115.091.223.191.322.299a3.23 3.23 0 0 1 .834 1.775zm-4.22-1.225V13.66c.144.056.285.122.421.199v1.069zm-2.677 0v-1.077c.136-.075.277-.14.422-.196v1.273zm.633 0v-1.325a2.79 2.79 0 0 1 1.832.005v1.32zm-.778-3.291h3.318a1.658 1.658 0 0 1-1.658 1.578 1.658 1.658 0 0 1-1.66-1.58zm-1.055-.211 2.814-2.308 2.722 2.308z"
  }));
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
    fill: "currentColor",
    d: "M8.791 7.707c.133.128.323.128.474.036a4.934 4.934 0 0 1 1.764-.716c.17-.037.303-.165.303-.349V3.354c0-.22-.19-.386-.398-.349a9.21 9.21 0 0 0-4.531 1.818.341.341 0 0 0-.02.533zM14.726 7.762a4.934 4.934 0 0 0-1.763-.716c-.17-.037-.304-.184-.285-.35V3.355c0-.202.19-.367.398-.349a9.21 9.21 0 0 1 4.532 1.818c.17.129.17.386.019.533L15.2 7.726c-.133.128-.322.128-.474.036M3.38 11.628h3.432a.38.38 0 0 0 .36-.293c.133-.625.38-1.194.74-1.708.095-.147.095-.331-.038-.46l-2.446-2.35c-.151-.147-.417-.147-.55.018a8.624 8.624 0 0 0-1.877 4.39.372.372 0 0 0 .38.403M7.893 14.916a4.619 4.619 0 0 1-.74-1.708.364.364 0 0 0-.36-.294H3.381c-.228 0-.399.184-.36.386a8.624 8.624 0 0 0 1.876 4.39.367.367 0 0 0 .55.017l2.427-2.35c.114-.11.114-.294.019-.441M17.202 12.914h3.432c.228 0 .398.184.36.404a8.624 8.624 0 0 1-1.877 4.39c-.132.165-.398.165-.55.018l-2.426-2.351c-.133-.129-.133-.312-.038-.46.36-.513.606-1.083.74-1.707a.38.38 0 0 1 .36-.294M11.04 16.954a4.934 4.934 0 0 1-1.763-.716c-.151-.092-.34-.092-.474.037l-2.427 2.37c-.151.146-.151.403.02.532a9.21 9.21 0 0 0 4.53 1.818c.21.018.399-.147.399-.35v-3.342c.019-.165-.114-.312-.284-.349M17.203 11.628a.364.364 0 0 1-.36-.293 4.46 4.46 0 0 0-.721-1.708c-.095-.147-.095-.331.038-.46l2.408-2.332a.367.367 0 0 1 .55.018 8.624 8.624 0 0 1 1.877 4.39c.038.202-.133.385-.36.385zM15.212 16.293c-.133-.128-.322-.128-.474-.037a4.935 4.935 0 0 1-1.763.717c-.171.037-.304.165-.304.349v3.324c0 .22.19.386.398.349a9.21 9.21 0 0 0 4.532-1.818.341.341 0 0 0 .019-.533z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
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
    fill: "currentColor",
    d: "M12.242 20.985a7.452 7.452 0 0 1-4.767-1.35C6.165 18.579 5.5 16.872 5.5 14.563c0-2.565 1.834-5.572 3.37-7.643A36.832 36.832 0 0 1 12.243 3l.01.008a37.338 37.338 0 0 1 3.359 3.91c1.537 2.07 3.37 5.077 3.37 7.643 0 2.309-.664 4.016-1.974 5.073a7.451 7.451 0 0 1-4.765 1.351m4.068-8.198a9.678 9.678 0 0 1-1.091 2.495 7.427 7.427 0 0 1-1.35 1.489c-.543.5-1.012.933-.978 1.27a.441.441 0 0 0 .248.323c.272.168.584.258.904.26a2.608 2.608 0 0 0 2.104-1.497c.836-1.39.17-4.31.16-4.34z"
  }));
};

exports.JalaAge = SvgAge;
exports.JalaAnco = SvgAnco;
exports.JalaBar = SvgBar;
exports.JalaBiomass = SvgBiomass;
exports.JalaChemical = SvgChemical;
exports.JalaConfirmStep = SvgConfirmStep;
exports.JalaCultivationReport = SvgCultivationReport;
exports.JalaDebt = SvgDebt;
exports.JalaDiseaseInput = SvgDiseaseInput;
exports.JalaEmptyStock = SvgEmptyStock;
exports.JalaExpense = SvgExpense;
exports.JalaExpenseMenu = SvgExpenseMenu;
exports.JalaFarm = SvgFarm;
exports.JalaFarmStep = SvgFarmStep;
exports.JalaFeed = SvgFeed;
exports.JalaFeedCumulative = SvgFeedCumulative;
exports.JalaFinanceDue = SvgFinanceDue;
exports.JalaFinancialReport = SvgFinancialReport;
exports.JalaFinancialReport2 = SvgFinancialReport2;
exports.JalaFixedAssetMenuPaddleWheel = SvgFixedAssetMenuPaddleWheel;
exports.JalaHarvest = SvgHarvest;
exports.JalaHotNews = SvgHotNews;
exports.JalaIncome = SvgIncome;
exports.JalaIncomeMenu = SvgIncomeMenu;
exports.JalaInsight = SvgInsight;
exports.JalaInventory = SvgInventory;
exports.JalaJala = SvgJala;
exports.JalaLine = SvgLine;
exports.JalaLoan = SvgLoan;
exports.JalaLowStock = SvgLowStock;
exports.JalaMortality = SvgMortality;
exports.JalaNews = SvgNews;
exports.JalaOperational = SvgOperational;
exports.JalaParameter = SvgParameter;
exports.JalaPh = SvgPh;
exports.JalaPie = SvgPie;
exports.JalaPond = SvgPond;
exports.JalaPondStep = SvgPondStep;
exports.JalaPrice = SvgPrice;
exports.JalaPricePrediction = SvgPricePrediction;
exports.JalaPro = SvgPro;
exports.JalaProduct = SvgProduct;
exports.JalaProductCategories = SvgProductCategories;
exports.JalaRfid = SvgRfid;
exports.JalaShrimp = SvgShrimp;
exports.JalaSimulation = SvgSimulation;
exports.JalaSpecies = SvgSpecies;
exports.JalaSrEstimation = SvgSrEstimation;
exports.JalaStackedBar = SvgStackedBar;
exports.JalaStackedLine = SvgStackedLine;
exports.JalaStock = SvgStock;
exports.JalaStockAsset = SvgStockAsset;
exports.JalaStockUser = SvgStockUser;
exports.JalaTopStock = SvgTopStock;
exports.JalaTrading = SvgTrading;
exports.JalaTransparency = SvgTransparency;
exports.JalaTreatmentInput = SvgTreatmentInput;
exports.JalaVendor = SvgVendor;
exports.JalaWaterColor = SvgWaterColor;
exports.JalaWaterInput = SvgWaterInput;
