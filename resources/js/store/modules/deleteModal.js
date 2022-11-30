import axios from "axios"

export default {
    state: {
        deleteModal: false,
        contents: []
    },
    getters: {
        deleteModal: state => {
            return state.deleteModal
        },
        contents: state => {
            return state.contents
        }
    },
    mutations: {
        toggleDeleteModal (state, status) {
            return state.deleteModal = status
        },
        fillContents (state, content) {
            return state.contents = content
        }
    },
    actions: {
        toggleDeleteModal ({commit}, status) {
            commit('toggleDeleteModal', status)
        },
        fillContents ({commit}, content) {
            commit('fillContents', content)
        }
    }
}