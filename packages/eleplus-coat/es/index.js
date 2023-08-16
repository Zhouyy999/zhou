import * as n from "./components.js";
import { default as m } from "./button/button.js";
const e = {
  install: (o) => {
    for (const s in n) {
      const t = n[s];
      "install" in t && o.use(t);
    }
    return o;
  }
};
export {
  m as ZButton,
  e as default
};
