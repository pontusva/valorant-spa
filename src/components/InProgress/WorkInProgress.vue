<script>
  export default {
    created() {},
    data() {
      return {}
    },
    props: {
      vmodel: String
    },
    methods: {
      toGoogle() {
        window.location.href = 'https://google.com/search?q=' + this.vmodel
      }
    }
  }
</script>

<template>
  <div>
    <h1>This feature is under construction.</h1>
    <p>
      In the meantime you can information about
      <span id="searched">{{ vmodel }}</span> on
      <span id="href" @click="toGoogle">Google</span>
    </p>
  </div>
</template>

<style scoped>
  #searched {
    font-size: 2em;
  }

  #href {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
