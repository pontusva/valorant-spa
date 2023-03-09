<script>
  import WorkInProgress from '../components/InProgress/WorkInProgress.vue'
  export default {
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.loggers()
        },
        { immediate: true }
      )
    },
    data() {
      return {
        vmodel: null
      }
    },
    components: {
      WorkInProgress
    }
  }
</script>

<template>
  <WorkInProgress />
</template>
