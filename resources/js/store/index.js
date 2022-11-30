import { createStore } from 'vuex'

import Auth from './modules/auth'
import countries from './modules/countries'
import DeleteModal from './modules/deleteModal'
import Search from './modules/search'
import FindDuplicates from './modules/FindDuplicates'
import EmailVerificationForce from './modules/EmailVerificationForce'

export default new createStore({
    modules: {
        Auth,
        countries,
        Search,
        DeleteModal,
        FindDuplicates,
        EmailVerificationForce,
    }
})