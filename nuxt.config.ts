export default defineNuxtConfig({
  devtools: { enabled: true },
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ['Slider'],
    },
  },
  css: ['~/assets/styles/main.scss'],
  modules: ['nuxt-swiper', 'nuxt-primevue'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/common.scss";`,
        },
      },
    },
  },
})
