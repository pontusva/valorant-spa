<script>
  import Nav from './components/Nav.vue'

  export default {
    created() {
      // this.agentFetcher()
    },
    methods: {
      // async agentFetcher() {
      //   const response = await fetch(
      //     'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
      //   )
      //   const result = await response.json()
      //   this.agents = result
      // }
    },
    components: {
      Nav
    }
  }
</script>

<template>
  <Nav />
  <!-- <Tester /> -->
</template>
