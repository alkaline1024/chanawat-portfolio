// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/icon", "@nuxt/ui", "@formkit/auto-animate"],
  // ssr: false,
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "/chanawat-portfolio",
    cdnURL: "/chanawat-portfolio",
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
  },
  i18n: {
    strategy: "prefix",
    vueI18n: "./i18n/i18n.config.ts",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.json",
      },
      {
        code: "th",
        language: "th-TH",
        file: "th.json",
      },
    ],
  },
});
