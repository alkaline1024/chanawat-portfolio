import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/vue/server-renderer/index.mjs';
import { f as useRoute, u as useRouter, _ as _export_sfc } from './server.mjs';
import __nuxt_component_0 from './index2.mjs';
import { useForwardProps } from 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/reka-ui/dist/index.js';
import { reactivePick } from 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/@vueuse/core/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/hookable/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/unctx/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/h3/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/radix3/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/defu/dist/defu.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/tailwindcss/dist/colors.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/klona/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/destr/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/ofetch/dist/node.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/unstorage/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/ohash/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/pathe/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/consola/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/unhead/dist/server.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/unhead/dist/utils.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/devalue/index.js';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/alkaline1024/Documents/portfolio-chanawat/node_modules/@iconify/utils/lib/css/icon.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    mode: {},
    size: {},
    customize: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const iconProps = useForwardProps(reactivePick(props, "name", "mode", "size", "customize"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Icon, mergeProps(unref(iconProps), _attrs), null, _parent));
    };
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[64px] w-full flex justify-between" }, _attrs))}><div class="${ssrRenderClass([{ "header-menu-active": unref(route).path == "/" }, "header-menu"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-2xl",
        name: "ic:round-home"
      }, null, _parent));
      _push(` Home </div><div class="${ssrRenderClass([{ "header-menu-active": unref(route).path == "/projects" }, "header-menu"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-2xl",
        name: "ic:round-star"
      }, null, _parent));
      _push(` Projects </div><div class="${ssrRenderClass([{ "header-menu-active": unref(route).path == "/resume" }, "header-menu"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-2xl",
        name: "ic:round-contact-page"
      }, null, _parent));
      _push(` Resume </div><div class="${ssrRenderClass([{ "header-menu-active": unref(route).path == "/blog" }, "header-menu"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-2xl",
        name: "ic:round-message"
      }, null, _parent));
      _push(` Blog </div><div class="${ssrRenderClass([{ "header-menu-active": unref(route).path == "/contact" }, "header-menu"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        class: "text-2xl",
        name: "ic:round-local-phone"
      }, null, _parent));
      _push(` Contact </div></div>`);
    };
  }
});

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-gray-500 px-4 h-[32px]" }, _attrs))}> © 2025 Chanawat Thuasuphap. All rights reserved. </div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$2;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<div class="min-h-[calc(100vh-96px)]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
