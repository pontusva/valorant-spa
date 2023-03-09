<script>
  export default {
    data() {
      return {
        test: this.agents
      }
    },
    props: {
      agents: {
        type: Object,
        default: () => {
          // https://v2.vuejs.org/v2/guide/components-props.html
          return {
            def: ''
          }
        }
      }
    }
  }
</script>

<template>
  <div v-if="test" id="wrapper">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p>Use the arrows to see a agents one by one.</p>
          <p>
            If you want you can also click on their name to find more
            information about that specific Agent
          </p>
          <img
            src="https://media.valorant-api.com/sprays/076630c8-4bc9-d953-eb13-6e81e341840c/animation.gif"
            alt=""
          />
        </div>
        <template :key="agent.id" v-for="agent in test.data">
          <div class="carousel-item" data-bs-interval="1000000">
            <RouterLink
              :to="'/' + agent.uuid + '/'"
              id="hero"
              :style="{ color: '#' + agent.backgroundGradientColors[1] }"
            >
              {{ agent.displayName }}
            </RouterLink>

            <img :src="agent.fullPortraitV2" class="d-block w-100" alt="..." />
          </div>
        </template>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <div
          style="
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3em;
            height: 3em;
          "
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
        </div>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <div
          style="
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3em;
            height: 3em;
          "
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
        </div>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $valorant-red: #ff4655;
  #wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    // border: 5px solid green;
  }

  #hero {
    font-size: 1.5em;
    text-align: center;
    position: absolute;
    width: 100vh;
  }

  h1 {
    text-align: center;
    color: $valorant-red;
  }

  #carouselExampleControls {
    width: 100vh;
    // border: 5px solid black;
    min-height: 70vh;
  }
</style>
