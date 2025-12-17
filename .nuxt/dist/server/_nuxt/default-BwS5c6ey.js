import { _ as __nuxt_component_0 } from "./nuxt-link-SH4khH6a.js";
import script from "./index-DYwQSFBL.js";
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/hookable/dist/index.mjs";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/unctx/dist/index.mjs";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/radix3/dist/index.mjs";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/klona/dist/index.mjs";
import "@primeuix/utils/eventbus";
import "@primeuix/styled";
import "@primeuix/utils";
import "@primeuix/utils/object";
import "@primeuix/styles/base";
import "@primeuix/utils/dom";
import "/home/sven/Projects/for-the-people-dot-tech/node_modules/@unhead/vue/dist/index.mjs";
import "./index-UkdBiBMI.js";
import "./index-DxKIPVaB.js";
import "./index-DI7ROuCk.js";
import "./index-BRbClZ7G.js";
import "@primeuix/styles/badge";
import "./index-BVmCEVFM.js";
import "./index-DA3RQQMs.js";
import "@primeuix/utils/uuid";
import "@primeuix/styles/ripple";
import "@primeuix/styles/button";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = ref(false);
    const toggleTheme = () => {
      isDark.value = !isDark.value;
      if (isDark.value) {
        (void 0).documentElement.classList.add("dark");
      } else {
        (void 0).documentElement.classList.remove("dark");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}><header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"><div class="section-container"><div class="flex items-center justify-between h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl"${_scopeId}><i class="pi pi-users text-primary-600"${_scopeId}></i></span><span class="font-heading font-bold text-xl"${_scopeId}>For The People</span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl" }, [
                createVNode("i", { class: "pi pi-users text-primary-600" })
              ]),
              createVNode("span", { class: "font-heading font-bold text-xl" }, "For The People")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-8"><a href="#initiatives" class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"> Initiatives </a><a href="#about" class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"> About </a><a href="#contribute" class="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"> Contribute </a></nav><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_Button, {
        icon: unref(isDark) ? "pi pi-sun" : "pi pi-moon",
        severity: "secondary",
        text: "",
        rounded: "",
        "aria-label": "Toggle theme",
        onClick: toggleTheme
      }, null, _parent));
      _push(`</div></div></div></header><main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"><div class="section-container py-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div><div class="flex items-center gap-2 mb-4"><i class="pi pi-users text-primary-600 text-xl"></i><span class="font-heading font-bold text-lg">For The People</span></div><p class="text-gray-600 dark:text-gray-400 text-sm"> Technology for citizens, by the community. Empowering people through accessible digital tools. </p></div><div><h4 class="font-semibold mb-4">Quick Links</h4><ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400"><li><a href="#initiatives" class="hover:text-primary-600">Our Initiatives</a></li><li><a href="#about" class="hover:text-primary-600">About Us</a></li><li><a href="#contribute" class="hover:text-primary-600">Get Involved</a></li></ul></div><div><h4 class="font-semibold mb-4">Connect</h4><div class="flex gap-4"><a href="#" class="text-gray-600 hover:text-primary-600 dark:text-gray-400" aria-label="GitHub"><i class="pi pi-github text-xl"></i></a><a href="#" class="text-gray-600 hover:text-primary-600 dark:text-gray-400" aria-label="Email"><i class="pi pi-envelope text-xl"></i></a></div></div></div><div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} For The People. Open source and community-driven.</p></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BwS5c6ey.js.map
