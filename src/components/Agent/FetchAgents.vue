<script>
  import CarouselComponent from './CarouselComponent.vue'
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
      CarouselComponent
    }
  }
</script>

<template>
  <div v-if="agents">
    <CarouselComponent :agents="agents" />
  </div>
</template>
