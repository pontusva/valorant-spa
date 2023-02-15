<script>
  import Carousel from './Carousel.vue'
  export default {
    created() {
      this.agentFetch()
    },
    data() {
      return {
        agents: null
      }
    },
    methods: {
      async agentFetch() {
        const response = await fetch(
          'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
        )
        const result = await response.json()
        this.agents = result
      }
    },
    components: {
      Carousel
    }
  }
</script>

<template>
  <div v-if="agents">
    <Carousel :agents="agents" />
  </div>
</template>
