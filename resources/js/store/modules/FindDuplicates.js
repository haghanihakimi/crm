import axios from "axios"

export default {
    state: {
        dbDuplicates: [],
        dbDuplicateStatus: false,
    },
    getters: {
        dbDuplicates: state => {
            return state.dbDuplicates
        },
        dbDuplicateStatus: state => {
            return state.dbDuplicateStatus
        }
    },
    mutations: {
        fillDbDuplicates (state, contents) {
            return state.dbDuplicates = contents
        },
        toggleDbDuplicateStatus (state, status) {
            return state.dbDuplicateStatus = status
        }
    },
    actions: {
        fillDbDuplicates ({commit}, inputs) {
            axios.get(`/dashboard/admin/search/duplicate/${inputs.path}`, {params: {keywords: inputs.keyword}}).then(response => {
                if (response.data.results && response.data.results.length > 0) {
                    commit('fillDbDuplicates', response.data.results)
                    commit('toggleDbDuplicateStatus', true)
                } else {
                    commit('fillDbDuplicates', [])
                    commit('toggleDbDuplicateStatus', false)
                }
            })
        }
    }
}