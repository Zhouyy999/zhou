import { defineComponent as n, computed as a, createVNode as f } from "vue";
import { ElButton as l } from "element-plus";
const d = /* @__PURE__ */ n({
  name: "ZButton",
  props: {
    size: {
      type: String,
      default: "default"
    }
  },
  setup(t, {
    slots: e
  }) {
    const u = "custom-btn", o = a(() => ({
      [u]: !0,
      [`${u}-${t.size}`]: t.size !== "default"
    }));
    return () => f(l, {
      class: o.value
    }, {
      default: () => [e.default && e.default()]
    });
  }
});
export {
  d as default
};
