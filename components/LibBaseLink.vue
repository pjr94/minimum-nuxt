<template>
  <span>
    <template v-if="isNuxtLink"
      ><NuxtLink
        v-bind="$attrs"
        :class="linkClass"
        class="focus:outline-2 focus:outline-color-outline"
        :to="nuxtLinkPath"
        ><slot
      /></NuxtLink>
    </template>
    <template v-else
      ><a
        v-bind="$attrs"
        :class="linkClass"
        class="focus:outline-2 focus:outline-color-outline"
        :target="openNewTab ? '_blank' : null"
        :href="link"
        ><slot /></a
    ></template>
  </span>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    isNuxtLink: {
      type: Boolean,
      default: true,
    },
    link: {
      type: String,
      required: true,
    },
    openNewTab: {
      type: Boolean,
      default: false,
    },
    linkClass: {
      type: String,
      default: null,
    },
  },
  emits: ["click"],
  computed: {
    nuxtLinkPath() {
      let nuxtLink = this.link
      if (this.$config.public.i18nEnabled) {
        nuxtLink = this.localePath(this.link)
      } else {
        nuxtLink = this.link
      }
      return nuxtLink
    },
  },
}
</script>

<style lang="scss" scoped></style>
