import "../node_modules/_nuxt/ui/dist/runtime/components/Icon.vue.mjs";
import { defineComponent, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { useRoute, useRouter } from "../node_modules/nuxt/dist/app/composables/router.mjs";
import _sfc_main$1 from "../node_modules/_nuxt/ui/dist/runtime/components/Icon.vue2.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$1;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=AppHeader.vue2.mjs.map
