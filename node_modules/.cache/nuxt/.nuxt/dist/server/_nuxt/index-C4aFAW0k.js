import { s as script$2 } from "./index-DI7ROuCk.js";
import { B as BaseStyle } from "../server.mjs";
import { renderSlot } from "vue";
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
var AccordionTabStyle = BaseStyle.extend({
  name: "accordiontab"
});
var script$1 = {
  name: "BaseAccordionTab",
  "extends": script$2,
  props: {
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  },
  style: AccordionTabStyle,
  provide: function provide() {
    return {
      $pcAccordionTab: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "AccordionTab",
  "extends": script$1,
  inheritAttrs: false,
  mounted: function mounted() {
    console.warn("Deprecated since v4. Use the new structure of Accordion instead.");
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=index-C4aFAW0k.js.map
