import axios from "axios"

export default {
    state: {
        search: [],
        searchLoading: false,
        searchPanel: false,
    },
    getters: {
        search: state => {
            return state.search
        },
        searchLoading: state => {
            return state.searchLoading
        },
        searchPanel: state => {
            return state.searchPanel
        }
    },
    mutations: {
        fillSearch (state, results) {
            return state.search = results
        },
        toggleSearchLoading (state, status) {
            return state.searchLoading = status
        },
        toggleSearchPanel (state, status) {
            return state.searchPanel = status
        }
    },
    actions: {
        fillSearch ({commit}, inputs) {
            commit('toggleSearchLoading', true)
            axios.get('/dashboard/admin/search', {params: {keywords: inputs}}).then(response => {
                commit('fillSearch', response.data.results)
            })
            .finally(() => {
                commit('toggleSearchLoading', false)
            })
        },
        toggleSearchPanel ({commit}, status) {
            commit('toggleSearchPanel', status)
        }
    }
}