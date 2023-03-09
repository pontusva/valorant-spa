<script>
  export default {
    created() {
      this.fetchPictures()
    },
    data() {
      return {
        pictures: null,
        pictureArray: []
      }
    },
    methods: {
      async fetchPictures() {
        const response = await fetch('https://valorant-api.com/v1/playercards')
        const result = await response.json()
        this.pictures = result

        this.randomPictures()
      },
      randomPictures() {
        for (let i = 0; i <= 2; i++) {
          this.pictureArray.push(
            this.pictures.data[
              Math.floor(Math.random() * this.pictures.data.length)
            ]
          )
        }
      }
    }
  }
</script>

<template>
  <div id="player-cards">
    <p>
      Hi and welcome to this website about Valorant. This is what I chose to
      build for a school assignment. Please note that some links are just
      placeholders for now. Enjoy :)
    </p>
    <template :key="image.id" v-for="image in pictureArray">
      <div id="wide-art">
        <img :src="image.wideArt" />
      </div>
    </template>
  </div>
</template>

<styling scoped lang="scss">
body {
  background-color: #ece8e1;
}

#wide-art {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#player-cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</styling>
