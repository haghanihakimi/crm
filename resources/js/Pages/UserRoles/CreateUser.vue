<template>
    <Layout :title="'Add User'" :auth="auth">
        <div class="w-full max-w-xl mx-auto mt-8 p-4 bg-white rounded border border-black border-opacity-10 shadow-md-spread">
            <h2 class="w-full text-lg text-center px-2 py-8 select-none">
                Create New User
            </h2>
            <!-- User information grid - 2 grids -->
            <div class="w-full h-auto">
                <!-- User information container -->
                <div class="w-full flex flex-col gap-0 px-2">
                    <!-- User information form -->
                    <form method="POST" action="/" enctype="multipart/form-data" 
                    class="w-full flex flex-col gap-4"
                    @submit.prevent="createUser">
                        <!-- User first name and surname -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4 select-none">
                            <div class="w-full relative flex-1">
                                <label 
                                for="firstname" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    First Name
                                </label>
                                <input 
                                type="text"
                                id="firstname"
                                placeholder="First Name" 
                                autofocus="true"
                                autocomplete="false"
                                spellcheck="false"
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createUserForm.fname" 
                                :disabled="createUserForm.processing" />
                            </div>
                            <div class="w-full relative flex-1">
                                <label 
                                for="sname" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Surname
                                </label>
                                <input 
                                type="text"
                                id="surname"
                                placeholder="Surname" 
                                autocomplete="false"
                                spellcheck="false"
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createUserForm.sname" 
                                :disabled="createUserForm.processing" />
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="createUserForm.errors.fname" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{createUserForm.errors.fname}}
                            </div>
                            <div v-if="createUserForm.errors.sname" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{createUserForm.errors.sname}}
                            </div>
                        </div>

                        <!-- User email & password fields -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4 select-none">
                            <div class="w-full relative flex-1">
                                <label 
                                for="email_address" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Email Address
                                </label>
                                <input 
                                type="email"
                                id="email_address"
                                placeholder="Email Address" 
                                autocomplete="false"
                                spellcheck="false"
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createUserForm.email" 
                                :disabled="createUserForm.processing" />
                                <input 
                                checked 
                                id="auto-verification" 
                                type="checkbox" 
                                v-model="createUserForm.auto_verification"
                                class="w-4 h-4 ml-1 cursor-pointer text-blue bg-black bg-opacity-10 rounded border border-black border-opacity-10 ring-0 focus:ring-0">
                                <label 
                                for="auto-verification" 
                                class="ml-1 text-sm font-medium text-black cursor-pointer">
                                    Auto Verification
                                </label>
                            </div>
                            <div class="w-full relative flex-1">
                                <label 
                                for="password" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Password
                                </label>
                                <input 
                                type="password"
                                id="password"
                                placeholder="Password" 
                                autocomplete="false"
                                spellcheck="false"
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createUserForm.password" 
                                :disabled="createUserForm.processing" />
                                <input 
                                checked 
                                id="secure-password" 
                                type="checkbox" 
                                v-model="createUserForm.secure_password"
                                class="w-4 h-4 ml-1 cursor-pointer text-blue bg-black bg-opacity-10 rounded border border-black border-opacity-10 ring-0 focus:ring-0">
                                <label 
                                for="secure-password" 
                                class="ml-1 text-sm font-medium text-black cursor-pointer">
                                    Secure Password
                                </label>
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="createUserForm.errors.email" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{createUserForm.errors.email}}
                            </div>
                            <div v-if="createUserForm.errors.password" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{createUserForm.errors.password}}
                            </div>
                        </div>

                        <!-- User Gender -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4 select-none">
                            <div class="w-full relative">
                                <label 
                                for="gender" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Gender
                                </label>
                                <select 
                                id="gender"
                                v-model="createUserForm.gender"
                                class="w-full min-h-[48px] capitalize cursor-pointer rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red">
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                </select>
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="createUserForm.errors.gender" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{createUserForm.errors.gender}}
                            </div>
                        </div>

                        <!-- Confirm & create -->
                        <div class="select-none w-full relative flex flex-row flex-wrap gap-4">
                            <button 
                            type="submit" 
                            role="button"
                            :disabled="createUserForm.processing || !createUserForm.isDirty"
                            class="w-full mx-auto mt-2 px-6 py-2 text-base tracking-wider font-medium text-white bg-warm-blue rounded cursor-pointer transition duration-150 hover:bg-blue disabled:bg-black disabled:bg-opacity-10 disabled:text-black disabled:text-opacity-30" >
                                Create User
                            </button>
                        </div>
                        <Link 
                        v-if="flash.message && flash.message.new_user_data"
                        :href="route('users.roles.view.edit', {user: flash.message.new_user_data.id})" 
                        target="_self" 
                        class="text-green text-base font-medium select-none">
                            Edit Roles & Permissions
                        </Link>
                        <Link :href="route('users.list')" target="_self" class="text-blue text-base font-medium select-none">
                            All Users
                        </Link>
                        <p 
                        v-if="flash.message && flash.message.new_user_success" 
                        class="text-green font-semibold tracking-wider text-md"
                        v-html="flash.message.new_user_success" >
                        </p>

                        <!-- Form submission errors/messages report -->
                        <div 
                        v-if="flash.message && !flash.message.new_user_success" 
                        class="w-full relative flex flex-row flex-wrap gap-4">
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

    const props = defineProps({
        auth: Object,
        flash: Object,
    });
    const store = useStore()

    const createUserForm = useForm({
        fname: null,
        sname: null,
        email: null,
        auto_verification: false,
        password: null,
        gender: 'female',
        secure_password: false,
    })

    const createUser = () => {
        if (!createUserForm.processing) {
            createUserForm.post(route('create.new.user'))
        }
    }

    onMounted(() => {
        store.commit('fillDbDuplicates', [])
        store.commit('toggleDbDuplicateStatus', false)
    })
</script>