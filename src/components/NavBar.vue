<script>
  // The plan is to use the store/vuex in more components. For now it's only
  // used in this nav component to navigate to agent/detailsview.

  import { mapActions, mapGetters } from 'vuex'
  export default {
    created() {
      this.yoyo()
    },
    computed: {
      ...mapGetters(['count'])
    },
    data() {
      return {
        formSearch: null
      }
    },
    methods: {
      ...mapActions(['agentFetcher']),
      async yoyo() {
        await this.$store.dispatch('agentFetcher')
      },
      agentSearch(event) {
        event.preventDefault()
        this.$router.push({
          path: `/progress/${this.formSearch}/`,
          props: ['vmodel']
        })
      }
    },
    watch: {
      formSearch(newq, oldq) {
        console.log('old form input:', oldq)
        console.log('new form input:', newq)
      }
    }
  }
</script>

<template>
  <!-- The navbar is gotten from getbootstrap: https://getbootstrap.com/docs/5.2/components/navbar/
 Everything in this code related to Vue, Vuex and Vuerouter is written by me -->

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="container-fluid fs-5 navbar-nav d-flex align-items-center justify-content-center me-auto mb-2 mb-lg-0"
        >
          <li class="nav-item">
            <RouterLink class="navbar-brand nav-link fs-1" to="/">
              Valorant
            </RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" />
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link agent" aria-current="page" to="/agents">
              Agents
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link agent" to="/ranks">Ranks</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link agent" to="/maps">Maps</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link agent" to="/weapons">
              Weapons
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link agent" to="/gear">Gear</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">Titles</a>
                <RouterLink class="dropdown-item" to="/titles" />
              </li>
              <li>
                <a class="dropdown-item" href="#">Sprays</a>
                <RouterLink to="/grafitti" class="dropdown-item">
                  Graffiti
                </RouterLink>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">API</a>
              </li>
            </ul>
          </li>
        </ul>
        <form @submit="agentSearch" id="nav-form" class="d-flex" role="search">
          <input
            v-model="formSearch"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <input class="btn btn-outline-success" value="search" type="submit" />
        </form>
      </div>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
  $valorant-red: #ff4655;
  nav {
    .navbar-brand {
      color: $valorant-red;
    }
  }
</style>
