<template>
    <Layout :title="'Edit User'" :auth="auth">
        <div class="w-full m-auto flex justify-center items-center px-4 py-16">
            <div class="w-full max-w-2xl p-6 bg-white rounded border border-black border-opacity-10 shadow-md-spread">
                <!-- Page tabs - General tab is activated. -->
                <div class="select-none text-sm font-medium text-center text-black border-b border-black border-opacity-10 mb-8">
                    <ul class="flex flex-wrap">
                        <li class="mr-2">
                            <a 
                            :href="route('users.general.view.edit', {user: user.data.id})" 
                            class="inline-block p-4 border-b-2 text-blue border-blue"
                            aria-current="page">
                                General
                            </a>
                        </li>
                        <li class="mr-2">
                            <a href="#" class="inline-block p-4 border-b-2 text-black border-opacity border-transparent hover:text-blue hover:border-blue">
                                2-FA
                            </a>
                        </li>
                        <li class="mr-2">
                            <a 
                            :href="route('users.roles.view.edit', {user: user.data.id})" 
                            class="inline-block p-4 text-black border-b-2 border-transparent hover:text-blue hover:border-blue">
                                Role & Permissions
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- General settings container and inputs -->
                <form
                action="/"
                method="patch"
                enctype="multipart/form-data"
                class="select-none w-full flex flex-col gap-6"
                @submit.prevent="saveUserChanges">
                    <!-- Form heading -->
                    <h2 class="w-full text-center font-semibold tracking-wider text-lg">
                        General Settings
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
                            autofocus="true"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="editUserForm.fname"
                            v-model="editUserForm.fname">
                        </div>
                        <!-- First name input -->
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
                            :placeholder="editUserForm.sname"
                            v-model="editUserForm.sname">
                        </div>

                        <!-- Fields errors -->
                        <div v-if="editUserForm.errors.fname" 
                        class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                            &cross;&nbsp;{{editUserForm.errors.fname}}
                        </div>
                        <div v-if="editUserForm.errors.sname" 
                        class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                            &cross;&nbsp;{{editUserForm.errors.sname}}
                        </div>
                    </div>

                    <!-- form inputs container - Email & Password inputs -->
                    <div class="w-full flex flex-row gap-6 flex-wrap">
                        <!-- Email input -->
                        <div class="w-full min-w-[200px] relative flex-1">
                            <label 
                            for="first_name" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                Email ({{editUserForm.verified ? `verified ${moment(editUserForm.verified).fromNow()}` : 'unverified'}})
                            </label>
                            <input 
                            type="text" 
                            id="email" 
                            autocomplete="true"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0" 
                            :placeholder="editUserForm.email"
                            v-model="editUserForm.email">
                            <div v-if="editUserForm.email === user.data.email" class="w-full flex flex-row gap-1">
                                <button 
                                type="button"
                                @click="store.dispatch('toggleEmailVerifyForceModal', true)"
                                class="block w-fit h-fit text-sm text-blue font-medium tracking-wider p-1">
                                    Force Verification <span v-if="flash.message && flash.message.email_verification_sent">(Link sent)</span>
                                </button>
                            </div>
                            <div v-else class="w-full flex flex-row p-1 items-center">
                                <input 
                                id="default-checkbox" 
                                type="checkbox" 
                                v-model="editUserForm.auto_verification" 
                                class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label 
                                for="default-checkbox" 
                                class="ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Auto Verification
                                </label>
                            </div>
                        </div>
                        <!-- Password input -->
                        <div v-if="editUserForm.password" class="w-full min-w-[200px] relative flex-1">
                            <label 
                            for="surname" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                User Password
                            </label>
                            <input 
                            type="text" 
                            id="password" 
                            readonly
                            autocomplete="false"
                            autofocus="false"
                            spellcheck="false"
                            class="block w-full h-auto min-h-[48px] p-3 transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded ring-0 focus:ring-0 focus:border-black focus:border-opacity-5" 
                            :placeholder="editUserForm.password"
                            v-model="editUserForm.password">
                            <div class="w-full flex flex-row gap-1">
                                <button 
                                type="button"
                                @click="randomPassword"
                                class="block w-fit h-fit text-sm text-blue font-medium tracking-wider p-1">
                                    Change Password
                                </button>
                            </div>
                        </div>
                        <!-- Gender input -->
                        <div v-if="editUserForm.password" class="w-full min-w-[200px] relative flex-1">
                            <label 
                            for="gender" 
                            class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                User Gender
                            </label>
                            <select 
                            id="gender"
                            v-model="editUserForm.gender"
                            class="block w-full h-auto min-h-[48px] p-3 cursor-pointer transition duration-150 bg-white-fc border border-black border-opacity-10 text-black text-md tracking-wide font-medium rounded focus:bg-white focus:ring-blue focus:border-opacity-0">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>

                        <!-- Fields errors -->
                        <div v-if="editUserForm.errors.email" 
                        class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                            &cross;&nbsp;{{editUserForm.errors.email}}
                        </div>
                        <div v-if="editUserForm.errors.password" 
                        class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                            &cross;&nbsp;{{editUserForm.errors.email}}
                        </div>
                        <div v-if="editUserForm.errors.gender" 
                        class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                            &cross;&nbsp;{{editUserForm.errors.gender}}
                        </div>
                    </div>

                    <!-- Save changes button -->
                    <button
                    type="submit"
                    role="button"
                    :disabled="!editUserForm.isDirty || editUserForm.processing"
                    class="w-full max-w-sm m-auto rounded bg-warm-blue p-3 text-white text-sm tracking-wider font-semibold transition duration-150 hover:bg-blue disabled:bg-black disabled:bg-opacity-20 disabled:shadow-sm-spread">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>

        <!-- Force Email Verification Approval Modal with FIXED position -->
        <ForceEmailApproval :user="user" v-if="store.getters.emailVerifyForceModal"/>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { onMounted } from '@vue/runtime-core'
    import moment from 'moment'
    import { useStore } from 'vuex'
    import { useForm } from '@inertiajs/inertia-vue3'
    import ForceEmailApproval from '../../Partials/ForceEmailModal'

    const props = defineProps({
        auth: Object,
        user: Object,
        flash: Object
    });
    const store = useStore()

    const editUserForm = useForm({
        fname: props.user.data.fname,
        sname: props.user.data.sname,
        email: props.user.data.email,
        auto_verification: false,
        verified: props.user.data.email_verified_at,
        password: props.user.data.password,
        gender: props.user.data.gender,
    })

    const forceVerificationForm = useForm({})

    const dec2hex = (dec) => {
        return dec.toString(16).padStart(2, "0")
    }

    const generateId = (len) => {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, dec2hex).join('')
    }

    const randomPassword = () => {
        editUserForm.password = generateId(16)
    }

    const saveUserChanges = () => {
        if (!editUserForm.processing) {
            editUserForm.patch(route('users.edit.save', {user: props.user.data.id}))
        }
    }

    onMounted (() => {
    })
</script>