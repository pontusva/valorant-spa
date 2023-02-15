<style>
  #wrappers {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 2em;
  }
</style>

<template>
  <template v-if="ranks">
    <div id="wrappers">
      <div style="text-align: center" v-for="tier in ranks.tiers">
        <div :style="{ backgroundColor: '#' + tier.backgroundColor }">
          <p :style="{ color: '#' + tier.color }">{{ tier.tierName }}</p>
        </div>
        <img :src="tier.largeIcon" />
      </div>
    </div>
  </template>
</template>

<script>
  export default {
    created() {
      this.fetchValorantRanks()
    },
    data() {
      return {
        ranks: null
      }
    },
    methods: {
      async fetchValorantRanks() {
        const response = await fetch(
          'https://valorant-api.com/v1/competitivetiers'
        )
        const result = await response.json()
        this.ranks = result.data[0]
        console.log(this.ranks.tiers)
      }
    }
  }
</script>
