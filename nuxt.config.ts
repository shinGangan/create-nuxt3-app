export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: "./src",
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/storybook",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/eslint-module",
  ],
  imports: {
    dirs: ["stores"],
  },
  i18n: {
    /** @link https://v8.i18n.nuxtjs.org/guide/lazy-load-translations */
    lazy: true,
    langDir: "locales/",
    defaultLocale: "ja",
    locales: [
      {
        code: "ja",
        iso: "ja-JP",
        file: "ja.json",
        name: "日本語",
      },
    ],
  },
  pinia: {
    autoImports: [
      "createPinia",
      "defineStore",
      "storeToRefs",
      "setActivePinia",
    ],
  },
  eslint: {
    cache: false,
  },
  storybook: {
    url: "http://localhost:6006",
    port: 6006,
  },
});
