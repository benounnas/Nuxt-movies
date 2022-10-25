
const apiBaseUrl = 'https://movies-proxy.vercel.app'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["animate.css/animate.min.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image-edge"],
    image: {
    provider: 'proxy',
    providers: {
      proxy: {
        provider: 'ipx',
        options: {
          baseURL: `${apiBaseUrl}/ipx`,
        },
      },
    },
  },
});
