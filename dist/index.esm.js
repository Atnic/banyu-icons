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

const SvgBiomass = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.018 3h13.95a1.268 1.268 0 0 1 0 2.537H5.018a1.268 1.268 0 0 1 0-2.537ZM10.091 6.015h3.17V7.84h-3.17V6.015ZM12.733 12.863a4.485 4.485 0 0 0-.581-2.114 4.485 4.485 0 0 0-.582 2.114c0 1.167.259 2.113.582 2.113.323 0 .58-.947.58-2.114Z",
    fill: "#404040"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.546 21H5.44a1.693 1.693 0 0 1-1.691-1.691l1.48-9.3a1.693 1.693 0 0 1 1.69-1.691h9.934a1.693 1.693 0 0 1 1.692 1.691l1.69 9.3A1.693 1.693 0 0 1 18.546 21Zm-6.447-10.99a4.756 4.756 0 1 0 0 9.511 4.756 4.756 0 0 0 0-9.512Z",
    fill: "#404040"
  }));
};

const SvgChemical = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.126 5.3a1.3 1.3 0 0 1 1.3-1.3h1.524c.03 0 .06.003.09.008h1.443a1.3 1.3 0 0 1 1.3 1.3v.322a.977.977 0 0 1-.954.976v4.642l4.449 7.862a1 1 0 0 1-.87 1.492H11.91a.51.51 0 0 1-.09-.008H6.502a1 1 0 0 1-.87-1.492l4.45-7.862V6.598a.977.977 0 0 1-.955-.976v-.323Z",
    fill: "#404040"
  }));
};

const SvgFeed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.271 20.616H7.565a3.544 3.544 0 0 1-1.617-.393 4.27 4.27 0 0 1-1.325-1.072 5.203 5.203 0 0 1-.894-1.588 5.803 5.803 0 0 1-.247-2.887l.746-3.586h15.585l.555 3.783c.038.249.059.5.064.752.002.66-.11 1.316-.33 1.938a5.16 5.16 0 0 1-.893 1.588 4.235 4.235 0 0 1-1.325 1.072c-.499.257-1.052.391-1.613.393Zm-4.894-3.621a.394.394 0 0 0-.317.157.4.4 0 0 0-.042.422l.112.222-.112.222a.4.4 0 0 0 .042.421.4.4 0 0 0 .396.151l.98-.196c.336-.008.669-.075.982-.199l-.662-1.081c-.111.045-.23.07-.349.075l-.953-.19a.382.382 0 0 0-.077-.005Zm2.01-.8a.998.998 0 0 1-.294.703l.689 1.127a2.82 2.82 0 0 0 1.345-1.83h-1.74Zm.094-3.192-.723 2.261a.996.996 0 0 1 .542.53h1.883V15.757c.004-.06.008-.111.008-.168a2.807 2.807 0 0 0-1.713-2.587h.003Zm-4.312-.224a.403.403 0 0 0-.4.402 2.01 2.01 0 0 0 2.007 2.008h1.586l.737-2.313a2.815 2.815 0 0 0-.716-.097H9.169Zm.602 1.003a.202.202 0 0 1-.202-.202.201.201 0 1 1 .203.202h-.001Zm10.098-3.22H4.116L3 8.02h18l-1.131 2.54v.002Zm-.89-3.08H3.802l2.726-.953h.065A2.248 2.248 0 0 1 8.73 4.7c.152 0 .303.017.45.05a2.151 2.151 0 0 1 1.784-1.001c.508.001.998.19 1.376.529a2 2 0 0 1 .794-.162 2.09 2.09 0 0 1 1.453.598 2.096 2.096 0 0 1 1.692.584c.404.395.661.917.728 1.479l1.97.702.003.001Z",
    fill: "#404040"
  }));
};

exports.Biomass = SvgBiomass;
exports.Chemical = SvgChemical;
exports.Feed = SvgFeed;
