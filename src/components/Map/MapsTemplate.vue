<script>
  export default {
    data() {
      return {
        test: this.maps
      }
    },
    props: {
      maps: {
        type: Object,
        default: () => {
          return {
            str: ''
          }
        }
      }
    }
  }
</script>

<template>
  <div v-if="test" id="map-grid">
    <template v-for="item in test.data" :key="item.displayName">
      <div>
        <RouterLink
          class="map-name"
          :to="`/map/${item.displayName}/${item.uuid}/`"
        >
          {{ item.displayName }}
        </RouterLink>
        <img :src="item.listViewIcon" alt="" srcset="" />
      </div>
    </template>
  </div>
</template>

<style scoped>
  #map-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 3em;
    margin-top: 1.5em;
  }

  .map-name {
    display: flex;
    justify-content: center;
    text-align: center;
  }
</style>
