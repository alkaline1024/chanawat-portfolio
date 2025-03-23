import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import LazyIcon from "../node_modules/_nuxt/icon/dist/runtime/components/index.mjs";
const lazyGlobalComponents = [
  ["Icon", LazyIcon]
];
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
export {
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 as default
};
//# sourceMappingURL=virtual_nuxt__home_alkaline1024_Documents_portfolio-chanawat_.nuxt_components.plugin.mjs.map
