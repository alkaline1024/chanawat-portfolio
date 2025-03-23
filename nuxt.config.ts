// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/i18n", "@nuxt/icon", "@nuxt/ui"],
    app: {
        baseURL: "/portfolio-chanawat",
    },
    ssr: false,
    css: ["~/assets/css/main.css"],
});
