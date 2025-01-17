export default {
  data: () => ({ perPage: null }),

  methods: {
    /**
     * Sync the per page values from the query string.
     */
    initializePerPageFromQueryString() {
      this.perPage = this.currentPerPage
    },

    /**
     * Update the desired amount of resources per page.
     */
    perPageChanged() {
      this.updateQueryString({ [this.perPageParameter]: this.perPage })
    },
  },

  computed: {
    /**
     * Get the current per page value from the query string.
     */
    currentPerPage() {
      return this.$route.query[this.perPageParameter] || null
    },
  },
}
