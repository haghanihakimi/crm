import axios from "axios"

export default {
    state: {
        emailVerifyForceModal: false
    },
    getters: {
        emailVerifyForceModal: state => {
            return state.emailVerifyForceModal
        }
    },
    mutations: {
        toggleEmailVerifyForceModal (state, status) {
            return state.emailVerifyForceModal = status
        }
    },
    actions: {
        toggleEmailVerifyForceModal({commit}, status) {
            commit('toggleEmailVerifyForceModal', status)
        }
    }
}