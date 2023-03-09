<script>
  export default {
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.uuidFetchFromParam()
        },
        { immediate: true }
      )
    },
    data() {
      return {}
    },
    methods: {
      uuidFetchFromParam() {}
    }
  }
</script>

<style scoped></style>
