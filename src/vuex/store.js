import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getField, updateField } from 'vuex-map-fields';

export default new Vuex.Store({
  state: {
    sailors: [],
    activeSailor: {
      name: '',
      role: '',
      preference: ''
    }
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    ADD_SAILOR (state) {
      const newSailor = {
        name: '',
        role: '',
        preference: ''
      }
      state.sailors.push(state.activeSailor)
      state.activeSailor = newSailor
    }
  },
  actions: {
    addSailor: ({ commit }) => {
      commit('ADD_SAILOR')
    }
  }
})
