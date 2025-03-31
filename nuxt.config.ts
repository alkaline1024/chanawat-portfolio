import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/i18n", "@nuxt/icon", "@nuxt/ui", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  ssr: false,
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
  // fonts: {
  //   families: {
  //      sans: {
  //       name: "Noto Sans Thai",
  //       provider: "google", // โหลดจาก Google Fonts
  //     },
  //   },
  //   display: "swap",
  //   preconnect: true,
  // },
});
