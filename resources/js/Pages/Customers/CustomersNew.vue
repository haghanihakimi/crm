<template>
    <Layout :title="'New Customer'" :auth="auth">
        <div class="w-full max-w-2xl mx-auto mt-8 p-4 bg-white rounded border border-black border-opacity-10 shadow-md-spread">
            <Heading2 class="w-full text-lg px-2 py-8 text-center">
                New Customer
            </Heading2>
            <!-- Customer information grid - 2 grids -->
            <div class="w-full h-auto">
                <!-- Customer name & basic info section -->
                <div class="w-full flex flex-col gap-0 px-2">
                    <!-- Basic info container -->
                    <form method="POST" action="/" enctype="multipart/form-data" 
                    class="w-full flex flex-col gap-4"
                    @submit.prevent="newCustomer">
                        <!-- Name and title -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                for="first_name" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    First Name
                                </label>
                                <input 
                                type="text"
                                id="first_name"
                                placeholder="First Name" 
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.first_name" 
                                :disabled="newCustomerForm.processing" />
                            </div>
                            <div class="w-full relative flex-1">
                                <label 
                                for="surname" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Surname
                                </label>
                                <input 
                                type="text"
                                id="surname"
                                placeholder="Surname" 
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.surname" 
                                :disabled="newCustomerForm.processing" />
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.first_name" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.first_name[0]}}
                            </div>
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.surname" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.surname[0]}}
                            </div>
                        </div>
                        <!-- Company input -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                for="company" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Company (Optional)
                                </label>
                                <input
                                type="text" 
                                id="company"
                                placeholder="Company (Optional)" 
                                class="w-full min-h-[48px] flex-1 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.company" 
                                :disabled="newCustomerForm.processing" />
                            </div>
                            <!-- Field errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.company" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.company[0]}}
                            </div>
                        </div>

                        <Heading2 class="text-md">
                            Billing Address
                        </Heading2>
                        <!-- Home Address info -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                for="street" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Street
                                </label>
                                <input
                                type="text" 
                                id="street"
                                placeholder="Street" 
                                class="w-full min-h-[48px] flex-1 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.street" />
                            </div>
                            <div class="w-full relative flex-1">
                                <label 
                                for="city" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    City
                                </label>
                                <input
                                type="text" 
                                id="city"
                                placeholder="City" 
                                class="w-full min-h-[48px] flex-1 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.city" />
                            </div>
                            <!-- Field errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.street" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.street[0]}}
                            </div>
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.city" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.city[0]}}
                            </div>
                        </div>
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                    for="state" 
                                    class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    State
                                </label>
                                <input
                                type="text" 
                                id="state"
                                :placeholder="'State'" 
                                class="w-full min-h-[48px] flex-1 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.state" />
                            </div>
                            <div class="w-full relative flex-1">
                                <label 
                                    for="postcode" 
                                    class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Postcode
                                </label>
                                <input
                                type="text" 
                                id="postcode"
                                :placeholder="'Postcode'" 
                                class="w-full min-h-[48px] flex-1 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.postcode" />
                            </div>
                            <!-- Field errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.state" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.state[0]}}
                            </div>
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.postcode" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.postcode[0]}}
                            </div>
                        </div>
                        <div class="w-full relative flex flex-row flex-wrap gap-4 z-10">
                            <div class="w-full relative">
                                <label 
                                for="country" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Country
                                </label>
                                <select 
                                v-if="store.getters.countries.countries"
                                id="countries" 
                                v-model="newCustomerForm.country"
                                class="block w-full min-h-[48px] p-3 bg-white cursor-pointer border border-black border-opacity-10 text-black text-sm rounded focus:ring-blue focus:border-blue transition duration-150">
                                    <option 
                                    v-for="(country, i) in store.getters.countries.countries" 
                                    :key="i"
                                    :value="country.id">
                                        {{country.name}}
                                    </option>
                                </select>
                            </div>
                            <!-- Field errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.country" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.country[0]}}
                            </div>
                        </div>

                        <Heading2>
                            Contact Info
                        </Heading2>
                        <!-- Email & phone -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                    for="email" 
                                    class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Email Address
                                </label>
                                <input
                                type="email" 
                                id="email"
                                placeholder="Email" 
                                class="w-full min-h-[48px] flex-1 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.email" />
                            </div>
                            <div class="w-full relative flex-1">
                                <label 
                                    for="phone" 
                                    class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Phone Number
                                </label>
                                <input 
                                type="number"
                                id="phone"
                                :placeholder="newCustomerForm.phone" 
                                pattern="[0-9].{8,}"
                                class="no-arrow w-full min-h-[48px] flex-1 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="newCustomerForm.phone" />
                            </div>
                            <!-- Field errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.email" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.email[0]}}
                            </div>
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.phone" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.phone[0]}}
                            </div>

                            <!-- Found duplicated names -->
                            <div v-if="store.getters.dbDuplicateStatus" class="w-full relative">
                                <p class="text-red font-medium tracking-wider text-sm">
                                    <span v-if="store.getters.dbDuplicates.length >= 2">Some duplicates</span>
                                    <span v-if="store.getters.dbDuplicates.length > 0 && store.getters.dbDuplicates.length < 2">One duplicate</span>
                                    found:
                                </p>
                                <ul>
                                    <li
                                    v-for="(duplicate, i) in store.getters.dbDuplicates"
                                    :key="i"
                                    class="font-medium tracking-wider text-sm block" >
                                        <a :href="route('customers.edit.view', {customer: duplicate.id})"
                                        target="_new"
                                        class="text-blue flex flex-inline gap-1">
                                            <strong>
                                                {{duplicate.first_name}} {{duplicate.surname}} - email: {{duplicate.email}} - phone: {{duplicate.phone}}
                                            </strong>
                                            <ExternalLink class="w-4 h-4" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Confirm & create -->
                        <div class="select-none w-full relative flex flex-row flex-wrap gap-4">
                            <Button 
                            :value="'Add Customer'" 
                            type="submit" 
                            role="button"
                            :disabled="newCustomerForm.processing || !newCustomerForm.isDirty"/>
                        </div>
                        <p v-if="flash.message && flash.message.new_customer_success" 
                        class="text-green font-semibold tracking-wider text-md"
                        v-html="flash.message.new_customer_success" >
                        </p>

                        <!-- Form submission errors/messages report -->
                        <div v-if="flash.message && !flash.message.new_customer_success" class="w-full relative flex flex-row flex-wrap gap-4">
                            <p v-for="(message, i) in flash.message" :key="i" v-html="message"></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { onMounted, watch } from '@vue/runtime-core'
    import debounce from 'lodash/debounce'
    import { useStore } from 'vuex'
    import { useForm } from '@inertiajs/inertia-vue3'
    import { ArrowTopRightOnSquareIcon as ExternalLink } from '@heroicons/vue/24/solid'
    import Heading2 from '../../Components/Elements/Headings/SidebarH2'
    import InputText from '../../Components/Elements/Inputs/NormalTextbox'
    import Button from '../../Components/Elements/Buttons/NormalButton.vue'

    const props = defineProps({
        auth: Object,
        flash: Object
    });
    const store = useStore()

    const newCustomerForm = useForm({
        first_name: '',
        surname: '',
        company: '',
        street: '',
        city: '',
        state: '',
        postcode: '',
        country: 1,
        email: '',
        phone: ''
    })

    const searchDuplicates = (param) => {
        if (param.length > 0 && param.length <= 64) {
            store.dispatch('fillDbDuplicates', {path: 'customer', keyword: param})
        } else {
            store.commit('fillDbDuplicates', [])
            store.commit('toggleDbDuplicateStatus', false)
        }
    }

    const newCustomer = () => {
        if (!newCustomerForm.processing) {
            newCustomerForm.post(route('customers.new'),{
                onSuccess: () => {
                    newCustomerForm.reset()
                }
            })
        }
    }

    watch(() => JSON.stringify({email: newCustomerForm.email, phone: newCustomerForm.phone}),
        debounce (function(values) {
            searchDuplicates(values)
        }, 750)
    )

    onMounted (() => {
        store.dispatch('fetchCountries')
        store.commit('fillDbDuplicates', [])
        store.commit('toggleDbDuplicateStatus', false)
    })
</script>