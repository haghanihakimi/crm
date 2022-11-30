export default {
    state: {
        signedIn: false,
        signedOut: false,
    },
    getters: {
        signedIn: state => {
            return state.signedIn
        },
        signedOut: state => {
            return state.signedOut
        }
    },
    mutations: {
        toggleSignedIn (state, status) {
            return state.signedIn = status
        },
        toggleSignedOut (state, status) {
            return state.signedOut = status
        }
    },
    actions: {
        toggleSignedIn ({commit}, status) {
            commit('toggleSignedIn', status)
        },
        toggleSignedOut ({commit}, status) {
            commit('toggleSignedOut', status)
        }
    }
}