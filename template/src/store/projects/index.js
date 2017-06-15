// import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'

export default {
  state: {
    total: 0,
    pagesize: 10,
    page: 1,
    selection: [],
    datas: [
    ],
    editing: {
      display: false,
      object: {},
      title: ''
    }
  },
  getters: {
  },
  actions: actions,
  mutations: mutations
}
