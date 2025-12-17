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
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-splitterpanel", {
      "p-splitterpanel-nested": instance.isNested
    }];
  }
};
var SplitterPanelStyle = BaseStyle.extend({
  name: "splitterpanel",
  classes
});
var script$1 = {
  name: "BaseSplitterPanel",
  "extends": script$2,
  props: {
    size: {
      type: Number,
      "default": null
    },
    minSize: {
      type: Number,
      "default": null
    }
  },
  style: SplitterPanelStyle,
  provide: function provide() {
    return {
      $pcSplitterPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "SplitterPanel",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      nestedState: null
    };
  },
  computed: {
    isNested: function isNested() {
      var _this = this;
      return this.$slots["default"]().some(function(child) {
        _this.nestedState = child.type.name === "Splitter" ? true : null;
        return _this.nestedState;
      });
    },
    getPTOptions: function getPTOptions() {
      return {
        context: {
          nested: this.isNested
        }
      };
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root", $options.getPTOptions)), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=index-tt9K7CFM.js.map
