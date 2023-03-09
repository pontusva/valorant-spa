<script>
  import NavBar from './components/NavBar.vue'

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
      NavBar
    }
  }
</script>

<template>
  <NavBar />
  <!-- <Tester /> -->
</template>
