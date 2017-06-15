import Vue from 'vue'
import Vuex from 'Vuex'
import projects from './projects'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    projects
  }
})
