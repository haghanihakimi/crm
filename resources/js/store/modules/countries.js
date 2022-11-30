import axios from "axios"

export default {
    state: {
        countries: []
    },
    getters: {
        countries: state => {
            return state.countries
        }
    },
    mutations: {
        getCountries (state, countries) {
            return state.countries = countries
        }
    },
    actions: {
        async fetchCountries ({commit}) {
            await axios.get('/list/countries').then(response => {
                commit('getCountries', response.data)
            })
        }
    }
}