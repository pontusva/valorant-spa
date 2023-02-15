<script>
  import MapsTemplate from './MapsTemplate.vue'
  export default {
    components: {
      MapsTemplate
    },
    created() {
      this.mapsFetch()
    },
    data() {
      return {
        maps: null
      }
    },
    methods: {
      async mapsFetch() {
        const response = await fetch('https://valorant-api.com/v1/maps')
        const result = await response.json()

        this.maps = result
      }
    }
  }
</script>

<template>
  <div v-if="maps">
    <MapsTemplate :maps="maps" />
  </div>
</template>
