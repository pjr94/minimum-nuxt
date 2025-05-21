// @/plugins/markdownit.ts
// https://github.com/nuxt-community/markdownit-module/issues/47#issuecomment-1453684664

import md from "markdown-it"

export default defineNuxtPlugin(() => {
  const renderer = md({ html: true, breaks: true })
  return {
    provide: {
      md: renderer,
    },
  }
})
