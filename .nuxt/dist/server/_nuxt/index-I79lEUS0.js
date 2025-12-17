import { s as script$2 } from "./index-DI7ROuCk.js";
import { style } from "@primeuix/styles/card";
import { B as BaseStyle } from "../server.mjs";
import { createElementBlock, openBlock, mergeProps, createCommentVNode, createElementVNode, renderSlot } from "vue";
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
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = BaseStyle.extend({
  name: "card",
  style,
  classes
});
var script$1 = {
  name: "BaseCard",
  "extends": script$2,
  style: CardStyle,
  provide: function provide() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Card",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("body")
  }, _ctx.ptm("body")), [_ctx.$slots.title || _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("caption")
  }, _ctx.ptm("caption")), [_ctx.$slots.title ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("title")
  }, _ctx.ptm("title")), [renderSlot(_ctx.$slots, "title")], 16)) : createCommentVNode("", true), _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("subtitle")
  }, _ctx.ptm("subtitle")), [renderSlot(_ctx.$slots, "subtitle")], 16)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content")
  }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "content")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16)], 16);
}
script.render = render;
export {
  script as default
};
//# sourceMappingURL=index-I79lEUS0.js.map
