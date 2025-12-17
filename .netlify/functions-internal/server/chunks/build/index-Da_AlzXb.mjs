import { _ as __nuxt_component_0 } from './nuxt-link-SH4khH6a.mjs';
import script from './index-DYwQSFBL.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import '@primeuix/utils';
import './index-UkdBiBMI.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/utils/dom';
import './index-BRbClZ7G.mjs';
import './index-BVmCEVFM.mjs';
import './index-DA3RQQMs.mjs';
import '@primeuix/utils/uuid';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Our Initiatives - For The People",
      description: "Discover our community-driven initiatives that put powerful technology directly in your hands."
    });
    const initiatives = [
      {
        slug: "health-journey",
        title: "Health Journey",
        tagline: "Your path to better health, supported by community",
        description: "A personal health tracking platform with community support. Set goals, share experiences, and stay motivated together with peers on similar journeys.",
        icon: "pi-heart",
        status: "Active",
        features: [
          "Personal health tracking",
          "Community support",
          "Progress visualization",
          "Peer accountability"
        ]
      },
      {
        slug: null,
        title: "Community Ideas",
        tagline: "Help shape the future",
        description: "Have an idea for an initiative that could help people? We want to hear from you. Join our community and help build the next solution.",
        icon: "pi-lightbulb",
        status: "Open for Ideas",
        features: [
          "Submit your ideas",
          "Vote on proposals",
          "Collaborate with others",
          "See ideas come to life"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"><div class="section-container py-16 md:py-24"><div class="max-w-3xl mx-auto text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-arrow-left"${_scopeId}></i> Back to Home `);
          } else {
            return [
              createVNode("i", { class: "pi pi-arrow-left" }),
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6"> Our <span class="gradient-text">Initiatives</span></h1><p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"> Each initiative is a community-driven project designed to solve real problems. No corporate interests. No hidden agendas. Just tools that serve you. </p></div></div><div class="absolute top-10 left-10 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl"></div><div class="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"></div></section><section class="py-16 md:py-24 bg-white dark:bg-gray-950"><div class="section-container"><div class="space-y-8"><!--[-->`);
      ssrRenderList(initiatives, (initiative) => {
        _push(`<div class="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"><div class="flex flex-col lg:flex-row"><div class="lg:w-1/3 bg-gradient-to-br from-primary-500 to-emerald-500 p-8 lg:p-12 flex items-center justify-center"><div class="text-center text-white"><i class="${ssrRenderClass(`pi ${initiative.icon} text-6xl lg:text-7xl mb-4`)}"></i><span class="${ssrRenderClass([
          "inline-block px-3 py-1 rounded-full text-sm font-medium",
          initiative.status === "Active" ? "bg-white/20 text-white" : "bg-white/10 text-white/80"
        ])}">${ssrInterpolate(initiative.status)}</span></div></div><div class="lg:w-2/3 p-8 lg:p-12"><h2 class="font-heading text-2xl lg:text-3xl font-bold mb-2">${ssrInterpolate(initiative.title)}</h2><p class="text-primary-600 dark:text-primary-400 font-medium mb-4">${ssrInterpolate(initiative.tagline)}</p><p class="text-gray-600 dark:text-gray-400 mb-6">${ssrInterpolate(initiative.description)}</p><div class="grid grid-cols-2 gap-3 mb-8"><!--[-->`);
        ssrRenderList(initiative.features, (feature) => {
          _push(`<div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"><i class="pi pi-check-circle text-primary-500"></i><span>${ssrInterpolate(feature)}</span></div>`);
        });
        _push(`<!--]--></div>`);
        if (initiative.slug) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/initiatives/${initiative.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Button, {
                  label: "Learn More",
                  icon: "pi pi-arrow-right",
                  iconPos: "right",
                  severity: "primary"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Button, {
                    label: "Learn More",
                    icon: "pi pi-arrow-right",
                    iconPos: "right",
                    severity: "primary"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_Button, {
            label: "Share Your Idea",
            icon: "pi pi-send",
            iconPos: "right",
            severity: "secondary"
          }, null, _parent));
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900"><div class="section-container"><div class="max-w-3xl mx-auto text-center mb-12"><h2 class="font-heading text-3xl font-bold mb-4"> How We Build Initiatives </h2><p class="text-gray-600 dark:text-gray-400"> Every initiative follows our core principles of community-first development. </p></div><div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"><div class="text-center"><div class="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4"><i class="pi pi-users text-primary-600 dark:text-primary-400 text-2xl"></i></div><h3 class="font-heading font-semibold mb-2">Community Driven</h3><p class="text-sm text-gray-600 dark:text-gray-400"> Ideas come from real people with real needs. The community decides what gets built. </p></div><div class="text-center"><div class="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4"><i class="pi pi-code text-primary-600 dark:text-primary-400 text-2xl"></i></div><h3 class="font-heading font-semibold mb-2">Open Development</h3><p class="text-sm text-gray-600 dark:text-gray-400"> Transparent development process. Open source where possible. Everyone can contribute. </p></div><div class="text-center"><div class="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4"><i class="pi pi-heart text-primary-600 dark:text-primary-400 text-2xl"></i></div><h3 class="font-heading font-semibold mb-2">User First</h3><p class="text-sm text-gray-600 dark:text-gray-400"> No profit motives. No data harvesting. Every feature exists to benefit the user. </p></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/initiatives/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Da_AlzXb.mjs.map
