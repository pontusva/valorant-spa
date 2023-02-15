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

<template></template>

<style scoped></style>
