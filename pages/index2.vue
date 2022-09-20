<template>
  <div>
    <h1>Index 2</h1>
    <button class="btn btn-submit" @click.prevent="removeCookie">
      remove cookies
    </button>
    <nuxt-link to="/">
      <strong> index </strong>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // middleware: 'authenticated',
  async mounted() {
    // this.$cookies.set('url_redirect_portal', window.location.pathname + window.location.search)
    // this.$auth.logout()
  },
  methods: {
    removeCookie() {
      this.$cookies.remove('testCookie')
      location.reload()
    },
  },
}
</script>
