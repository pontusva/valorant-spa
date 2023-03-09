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
      },
      emitEventToParent() {
        this.$emit('log-this', this.agents)
      }
    },
    emits: ['log-this'],
    components: {
      CarouselComponent
    }
  }
</script>

<template>
  <div v-if="agents">
    <button @click="emitEventToParent">Emit</button>
    <CarouselComponent :agents="agents" />
  </div>
</template>
