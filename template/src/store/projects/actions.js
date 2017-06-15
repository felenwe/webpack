import constants from './constants.json'
import axios from 'axios'

export default {
  [constants.actions.getProjects] ({commit, state}, page = 1, keyword) {
    return new Promise((resolve, reject) => {
      axios.get('/api/projects', {
        params: {
          limit: state.pagesize,
          start: state.pagesize * (page - 1),
          keyword: keyword
        }
      }).then(response => {
        if (!response.data.success) {
          throw response.data.msg
        }
        commit(constants.mutations.updateProjects, response, page)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  [constants.actions.delProjects] ({commit, state}) {
    return new Promise((resolve, reject) => {
      var ids = []
      for (const row of state.selection) {
        ids[ids.length] = row.id
      }
      axios.delete('/api/projects', {
        params: {
          id: ids
        }
      }).then(response => {
        if (!response.data.success) {
          throw response.data.msg
        }
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}
