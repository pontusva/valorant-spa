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
    methods: {
      loggers() {
        // this.vmodel = this.$route.params
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
