// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  hooks: {
    // 'prerender:routes' ({ routes }) {
    //   routes.clear() // Do not generate any routes (except the defaults)
    // }
    async 'nitro:config'(nitroConfig) {
      // Ensure `prerender` exists
      nitroConfig.prerender = nitroConfig.prerender || {}

      // Ensure `routes` exists as an array
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || []

      const pageRoutes = [
        '/public/privacy-policy',
        '/public/cookie-policy',
        // ...more routes
      ]


      nitroConfig.prerender.routes.push(...pageRoutes)
    }
  }
})
