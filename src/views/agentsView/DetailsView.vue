<script>
  export default {
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        { immediate: true }
      )
    },
    data() {
      return {
        yo: this.agents,
        res: null
      }
    },
    methods: {
      async fetchData() {
        const response = await fetch(
          'https://valorant-api.com/v1/agents/' + this.$route.params.uuid
        )
        const result = await response.json()
        this.res = result
        console.log(result)
        console.log(this.res)
      }
    },
    props: ['agents']
  }
</script>

<template>
  <div id="flex" v-if="res">
    <h1 id="details-abilities">
      <span>{{ res.data.displayName }}</span
      >, {{ res.data.role.displayName }}.
    </h1>
    <template v-for="agent in res">
      <img
        style="position: absolute; z-index: -1; max-width: 100%"
        :src="agent.fullPortraitV2"
        alt=""
      />
      <p id="details-description">{{ agent.description }}</p>
      <p id="role" v-if="agent.role">
        {{ agent.role.description }}
      </p>
      <div>
        <div v-if="agent && res" v-for="abilities in agent.abilities">
          <p class="abilities">{{ abilities.displayName }}</p>
          <img
            class="abilitesDisplayIcons"
            :src="abilities.displayIcon"
            alt=""
          />
          <p
            :style="{ color: '#' + res.data.backgroundGradientColors[1] }"
            class="abilities"
          >
            {{ abilities.description }}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<style land="scss">
  .abilities {
    width: 40ch;
    padding-left: 100px;
  }

  .abilitesDisplayIcons {
    width: 250px;
    padding-left: 100px;
  }

  #details-description {
    text-align: center;
    /* max-width: 50ch; */
  }

  #role {
    text-align: center;
  }

  .abilitiesName {
    padding-left: 100px;
    font-size: 4em;
  }
</style>
