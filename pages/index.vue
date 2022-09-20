<template>
  <div>
    <h1>Index 1</h1>
    <button type="submit" class="btn btn-submit" @click.prevent="addCookie">
      Add cookies
    </button>
    <nuxt-link to="index2">
      <strong> index2 </strong>
    </nuxt-link>
  </div>
</template>

<script>
import Tutorial from '~/components/Tutorial'

export default {
  components: {
    Tutorial,
  },
  // middleware: 'noHomePage',
  // middleware: 'authenticated',
  async mounted() {
    // this.$cookies.set('url_redirect_portal', window.location.pathname + window.location.search)
    // this.$auth.logout()
  },
  methods: {
    addCookie() {
      this.$cookies.set('testCookie', 'test Cookie value')
      location.reload()
    },
  },
}
</script>
