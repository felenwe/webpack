import constants from './constants.json'

export default {
  [constants.mutations.updateProjects] (state, {data}, page) {
    state.datas = data.data.rows
    state.page = page
    state.total = data.data.count
  }
}
