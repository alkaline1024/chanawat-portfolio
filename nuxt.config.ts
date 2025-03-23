// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/i18n", "@nuxt/icon", "@nuxt/ui"],
    css: ["~/assets/css/main.css"],
});
