import { s as script$2 } from "./index-DI7ROuCk.js";
import { B as BaseStyle } from "../server.mjs";
import { createElementBlock, openBlock, mergeProps, renderSlot } from "vue";
import "@primeuix/styled";
import "@primeuix/utils/dom";
import "@primeuix/utils/object";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/hookable/dist/index.mjs";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/unctx/dist/index.mjs";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/radix3/dist/index.mjs";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/ufo/dist/index.mjs";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/klona/dist/index.mjs";
import "@primeuix/utils/eventbus";
import "@primeuix/utils";
import "@primeuix/styles/base";
import "vue/server-renderer";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/@unhead/vue/dist/index.mjs";
var classes = {
  root: "p-steplist"
};
var StepListStyle = BaseStyle.extend({
  name: "steplist",
  classes
});
var script$1 = {
  name: "BaseStepList",
  "extends": script$2,
  style: StepListStyle,
  provide: function provide() {
    return {
      $pcStepList: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "StepList",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=index-Cf0HE-Po.js.map
