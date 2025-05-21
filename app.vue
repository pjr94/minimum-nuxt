<template>
  <div>
    <h1>Welcome to Nuxt 3!</h1>
    <NuxtPage />
  </div>
  <div>
    <!-- <div
    v-html="$md.render(footerContent.footerAdditionalInfo)"
    /> -->
    <p>
      hi
      <span
      v-for="footerLink in footerContent.footerLinks"
      :key="footerLink.url"
      >
      <LibBaseLink :link="footerLink.url">{{
        footerLink.title
      }}</LibBaseLink
      ><br />
    </span>
  </p>
</div>

</template>
<script>
export default {
  computed: {
    footerContent() { 
      return {"footerCol1": "Address\nAddress 1\nAddress 2\nRoad\nTown\nPO3 7LD", "footerCol2": "Telephone\n01878 999999\n\nEmail\nsite@uni.ac.uk", "footerCol3": null, "footerAdditionalInfo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis commodo mauris sit amet molestie. In id lorem ultrices, malesuada tortor vitae, molestie ipsum. Sed eget nulla a elit auctor molestie. Aliquam semper nisl velit, sit amet vestibulum turpis dignissim nec. Phasellus eleifend facilisis justo suscipit porta. Nulla libero mi, sagittis sit amet magna at, dignissim pretium massa. Proin eget sem nec nisl malesuada fringilla sit amet nec erat. Sed id accumsan orci.", "footerLinks": [ { "id": 10, "title": "Privacy policy", "url": "/public/privacy-policy", "isExternalLink": false, "opensNewTab": false }, { "id": 11, "title": "Cookie policy", "url": "/public/cookie-policy", "isExternalLink": false, "opensNewTab": false } ] }
    },
  }
}
</script>