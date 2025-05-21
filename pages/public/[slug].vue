<template>
  <div>
    <h1>{{ pageContent.title }}</h1>
    <div v-html="pageContent.body"></div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// Mock CMS content
const CMS_PAGES = {
  'privacy-policy': {
    title: 'Privacy Policy',
    body: '<p>This is the privacy policy...</p>',
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    body: '<p>This is the cookie policy...</p>',
  },
}

const route = useRoute()
const pageContent = computed(() => CMS_PAGES[route.params.slug] ?? { title: 'Page Not Found', body: '' })
</script>
