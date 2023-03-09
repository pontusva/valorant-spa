<script>
  import FetchAgents from '../components/Agent/FetchAgents.vue'

  export default {
    components: {
      FetchAgents
    },
    methods: {
      recievedEvent(payload) {
        console.log(payload)
      }
    }
  }
</script>

<template>
  <FetchAgents @log-this="recievedEvent" />
</template>
