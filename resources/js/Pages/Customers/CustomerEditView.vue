<template>
    <Layout :title="'Edit Customer'" :auth="auth">
        <div class="w-full m-auto flex justify-center items-center px-4 py-16">
            <div class="w-full max-w-2xl p-6 bg-white rounded border border-black border-opacity-10 shadow-md-spread">
                <form action="/" method="PATCH" enctype="multipart/form-data"
                class="select-none w-full flex flex-col gap-6"
                @submit.prevent="saveEditedCustomer">
                    <!-- Form heading -->
                    <h2 class="w-full text-center font-semibold tracking-wider text-lg">
                        Edit Customer: {{customer.first_name}} {{customer.surname}}
                    </h2>

                    <!-- form inputs container - First name & surname inputs -->
                    <div class="w-full flex flex-row gap-6 flex-wrap">
                        <!-- First name input -->
                        <div class="w-full min-w-[200px] relative flex-1">
                            <label 
                            for="first_name" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                First Name
                            </label>
                            <input 
                            type="text" 
                            id="first_name" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.first_name"
                            v-model="customerEditForm.first_name">
                        </div>
                        <!-- Surname input -->
                        <div class="w-full min-w-[200px] relative flex-1">
                            <label 
                            for="surname" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                Surname
                            </label>
                            <input 
                            type="text" 
                            id="surname" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.surname"
                            v-model="customerEditForm.surname">
                        </div>
                        <!-- Field errors -->
                        <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.title" 
                        class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                            &cross;&nbsp;{{$page.props.errorBags.default.title[0]}}
                        </div>
                    </div>
                    <!-- form inputs container - Display name and name of company input -->
                    <div class="w-full flex flex-row gap-6 flex-wrap">
                        <!-- Company name input -->
                        <div class="w-full min-w-[250px] relative flex-1">
                            <label 
                            for="company" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                Company
                            </label>
                            <input 
                            type="text" 
                            id="company" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.company"
                            v-model="customerEditForm.company">
                        </div>
                    </div>
                    <Heading2>
                        Billing Address
                    </Heading2>
                    <!-- form inputs container - Street & City inputs -->
                    <div class="w-full flex flex-row gap-6 flex-wrap">
                        <!-- Street input -->
                        <div class="w-full min-w-[250px] relative flex-1">
                            <label 
                            for="street" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                Street
                            </label>
                            <input 
                            type="text" 
                            id="street" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.street"
                            v-model="customerEditForm.street">
                        </div>
                        <!-- City input -->
                        <div class="w-full min-w-[250px] relative flex-1">
                            <label 
                            for="city" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                City
                            </label>
                            <input 
                            type="text" 
                            id="city" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.city"
                            v-model="customerEditForm.city">
                        </div>
                    </div>
                    <!-- form inputs container - State & postcode inputs -->
                    <div class="w-full flex flex-row gap-6 flex-wrap">
                        <!-- State input -->
                        <div class="w-full min-w-[250px] relative flex-1">
                            <label 
                            for="state" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                State
                            </label>
                            <input 
                            type="text" 
                            id="state" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.state"
                            v-model="customerEditForm.state">
                        </div>
                        <!-- Postcode input -->
                        <div class="w-full min-w-[250px] relative flex-1">
                            <label 
                            for="postcode" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                Postcode
                            </label>
                            <input 
                            type="text" 
                            id="postcode" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.postcode"
                            v-model="customerEditForm.postcode">
                        </div>
                    </div>
                    <!-- form inputs container - Country input -->
                    <div class="w-full flex flex-row gap-6 flex-wrap">
                        <!-- Country input -->
                        <div class="w-full min-w-[250px] relative flex-1">
                            <label 
                            for="countries" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                Country
                            </label>
                            <select 
                            v-if="store.getters.countries.countries"
                            id="countries" 
                            v-model="customerEditForm.country"
                            class="block w-full p-3 cursor-pointer bg-white-fc border border-black border-opacity-10 text-black text-sm rounded focus:ring-blue focus:border-blue focus:bg-white transition duration-150">
                                <option 
                                v-for="(country, i) in store.getters.countries.countries" :key="i"
                                :value="country.id">
                                    {{country.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <Heading2>
                        Contact Info
                    </Heading2>
                    <!-- form inputs container - Email & Phone Number inputs -->
                    <div class="w-full flex flex-row gap-6 flex-wrap">
                        <!-- Email input -->
                        <div class="w-full min-w-[250px] relative flex-1">
                            <label 
                            for="email" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                Email
                            </label>
                            <input 
                            type="email" 
                            id="email" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.email"
                            v-model="customerEditForm.email">
                        </div>
                        <!-- Phone number input -->
                        <div class="w-full min-w-[250px] relative flex-1">
                            <label 
                            for="phone" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                Phone
                            </label>
                            <input 
                            type="number" 
                            id="phone" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="no-arrow block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="customerEditForm.phone"
                            v-model="customerEditForm.phone">
                        </div>
                    </div>

                    <!-- Save changes button -->
                    <button
                    type="submit"
                    role="button"
                    :disabled="!customerEditForm.isDirty || customerEditForm.processing"
                    class="w-full rounded bg-warm-blue p-3 text-white text-sm tracking-wider font-semibold transition duration-150 hover:bg-blue disabled:bg-black disabled:bg-opacity-20 disabled:shadow-sm-spread">
                        Save Changes
                    </button>
                    
                    <p v-if="flash.message && flash.message.customer_update_success" 
                    class="text-green font-semibold tracking-wider text-md">
                        {{flash.message.customer_update_success}}
                    </p>

                    <!-- Form submission output reports -->
                    <div v-if="flash.message && !flash.message.customer_update_success" class="w-full relative">
                        <ul>
                            <li v-for="(message, i) in flash.message" :key="i">
                                {{message}}
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { onMounted } from '@vue/runtime-core'
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { useForm } from '@inertiajs/inertia-vue3'
    import Heading2 from '../../Components/Elements/Headings/SidebarH2'

    const props = defineProps({
        auth: Object,
        customer: Object,
        flash: Object
    });
    const store = useStore()

    const customerEditForm = useForm({
        customer_id: props.customer.id,
        first_name: props.customer.first_name,
        surname: props.customer.surname,
        company: props.customer.company,
        street: props.customer.street,
        city: props.customer.city,
        state: props.customer.state,
        postcode: props.customer.postcode,
        country: props.customer.countries.id,
        email: props.customer.email,
        phone: props.customer.phone
    })

    const saveEditedCustomer = () => {
        if (!customerEditForm.processing) {
            customerEditForm.post(route('customers.edit', {customer_id: props.customer.id}))
        }
    }

    onMounted (() => {
        store.dispatch('fetchCountries')
    })
</script>