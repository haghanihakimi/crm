<template>
    <Layout :title="'General Settings'" :auth="auth">
        <div class="w-full max-w-2xl select-none my-12 bg-white m-auto border border-black border-opacity-10 rounded shadow-sm-spread">
            <h1 class="w-full p-4 font-semibold text-lg tracking-wide text-center">
                {{`${auth.user.data.first_name} ${auth.user.data.surname}`}}
            </h1>

            <!-- Heading tabs -->
            <div class="select-none text-sm font-medium text-center text-black border-b border-black border-opacity-10 mb-3">
                <ul class="flex flex-wrap justify-center items-center">
                    <li class="mr-0">
                        <a 
                        :href="route('general.settings')" 
                        class="inline-block p-4 border-b-2 text-blue border-blue">
                            General
                        </a>
                    </li>
                    <li class="mr-0">
                        <a 
                        :href="route('security.settings')"
                        class="inline-block p-4 text-black border-b-2 border-transparent hover:text-blue hover:border-blue"
                        aria-current="page">
                            Security & Email
                        </a>
                    </li>
                </ul>
            </div>

            <!-- General settings body contents -->
            <div class="w-full relative flex flex-col gap-2">
                <form action="/" method="POST" enctype="multipart/form-data"
                class="w-full relative flex flex-col gap-0"
                @submit.prevent="updateProfile">
                    <!-- First name & surname fields -->
                    <div class="w-full flex flex-row gap-6 flex-wrap p-4">
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="first_name"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                First Name
                            </label>
                            <input type="text" placeholder="First Name" id="first_name" v-model="userData.first_name"
                            class="w-full relative border border-black border-opacity-10 rounded text-md text-black font-medium tracking-wide transition duration-200 focus:ring-warm-blue focus:ring-2">

                            <!-- Error report -->
                            <p v-if="userData.hasErrors && userData.errors.first_name" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{userData.errors.first_name}}
                            </p>
                        </div>
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="surname"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                Surname
                            </label>
                            <input type="text" placeholder="Surname" id="surname" v-model="userData.surname"
                            class="w-full relative border border-black border-opacity-10 rounded text-md text-black font-medium tracking-wide transition duration-200 focus:ring-warm-blue focus:ring-2">

                            <!-- Error report -->
                            <p v-if="userData.hasErrors && userData.errors.surname" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{userData.errors.surname}}
                            </p>
                        </div>
                    </div>

                    <!-- Gender & birthdate fields -->
                    <div class="w-full flex flex-row gap-6 flex-wrap p-4">
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="gender"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                Gender
                            </label>
                            <select 
                            v-model="userData.gender"
                            id="gender" 
                            class="w-full relative cursor-pointer border border-black border-opacity-10 rounded text-md text-black font-medium tracking-wide transition duration-200 focus:ring-warm-blue focus:ring-2">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>

                            <!-- Error report -->
                            <p v-if="userData.hasErrors && userData.errors.gender" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{userData.errors.gender}}
                            </p>
                        </div>
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="bdate"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                Birthdate
                            </label>
                            <v-date-picker v-model="userData.birth_date" mode="date">
                                <template v-slot="{ inputValue, togglePopover }">
                                    <input
                                        class="w-full min-h-[40px] cursor-pointer px-2 border border-black border-opacity-10 shadow-sm-spread rounded transition duration-200 outline-0 focus:ring-2 focus:ring-warm-blue"
                                        :value="inputValue"
                                        @click="togglePopover"
                                        readonly="true"
                                        id="bdate"
                                        placeholder="Optional"
                                    />
                                </template>
                            </v-date-picker>

                            <button
                            v-if="userData.birth_date"
                            type="button"
                            role="button"
                            @click="userData.birth_date = null"
                            class="px-1 py-0 float-left w-fit h-fit text-sm font-medium text-blue tracking-wide flex flex-row gap-1 justify-center items-center disabled:opacity-50">
                                Clear
                            </button>

                            <!-- Error report -->
                            <p v-if="userData.hasErrors && userData.errors.birth_date" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{userData.errors.birth_date}}
                            </p>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <div class="w-full flex flex-row gap-6 flex-wrap p-4">
                        <div class="w-full min-w-[200px] relative flex justify-center items-center">
                            <button
                            type="submit"
                            role="button"
                            :disabled="userData.processing"
                            class="w-full max-w-[180px] flex flex-row gap-2 justify-center items-center mx-auto rounded text-white text-md font-medium tracking-wide px-4 py-2 bg-warm-blue transition duration-200 hover:bg-blue disabled:opacity-50">
                                Save Changes
                                <Loading :width="4" :height="4" v-if="userData.processing" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { Inertia } from '@inertiajs/inertia'
    import { useStore } from 'vuex'
    import { useToast } from 'vue-toastification'
    import moment from 'moment'
    import {
        PencilIcon as Edit,
        ArrowDownTrayIcon as Download,
    } from '@heroicons/vue/24/solid'
    import { useForm } from '@inertiajs/inertia-vue3'
    import Loading from '../../Partials/Spinner'


    const props = defineProps({
        auth: Object,
    });

    const store = useStore()
    const toast = useToast()

    const userData = useForm({
        first_name: props.auth.user.data.first_name,
        surname: props.auth.user.data.surname,
        gender: props.auth.user.data.gender,
        birth_date: props.auth.user.data.bdate !== null ? moment(props.auth.user.data.bdate).format('M-D-YYYY') : null,
    })
    
    const updateProfile = () => {
        if (!userData.processing) {
            userData.patch(route('general.settings.update'), {
                onSuccess: (response) => {
                    toast.success(response.props.flash.message.general_settings_update)
                }
            })
        }
    }
</script>