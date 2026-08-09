let Component;
let IconInner;
var Icon = (React) => {
  if (!Component) {
    Component = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z",
          }),
        ),
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
            opacity: "0.2",
          }),
          /* @__PURE__ */ React.createElement("path", {
            d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z",
          }),
        ),
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z",
          }),
        ),
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z",
          }),
        ),
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z",
          }),
        ),
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z",
          }),
        ),
      ],
    ]);
    IconInner = React.forwardRef((props, ref) =>
      /* @__PURE__ */ React.createElement(
        "g",
        { ref, ...props },
        Component.get(props.weight),
      ),
    );
  }
  return IconInner;
};
const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var Minus_default = Icon;
export { __FramerMetadata__, Minus_default as default };
