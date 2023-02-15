import { createStore } from 'vuex'

const mutations = {
    agentFetcher(state, result) {
      state.agenter = result
    }
  },
  state = {
    agenter: null
  },
  actions = {
    async agentFetcher(context) {
      const response = await fetch(
        'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
      )
      const result = await response.json()
      context.commit('agentFetcher', result.data)
    }
  },
  getters = {
    count(state) {
      return state.agenter
    }
  }

export default createStore({ mutations, state, actions, getters, strict: true })
