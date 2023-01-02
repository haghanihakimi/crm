<template>
    <Layout :title="'Security Settings'" :auth="auth">
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
                        class="inline-block p-4 text-black border-b-2 border-transparent hover:text-blue hover:border-blue">
                            General
                        </a>
                    </li>
                    <li class="mr-0">
                        <a 
                        :href="route('security.settings')"
                        class="inline-block p-4 border-b-2 text-blue border-blue"
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
                @submit.prevent="updatePassword">
                    <h3 class="text-md font-bold text-black tracking-wider px-4 py-0 my-0">
                        Password
                    </h3>
                    <!-- Current password inputs -->
                    <div class="w-full flex flex-row gap-6 flex-wrap px-4 py-2">
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="current_password"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                Current Password
                            </label>
                            <input type="password" placeholder="Current Password" 
                            id="current_password" v-model="newPassword.current_password"
                            autocomplete="false"
                            class="w-full relative border border-black border-opacity-10 rounded text-md text-black font-medium tracking-wide transition duration-200 focus:ring-warm-blue focus:ring-2">

                            <!-- Send reset password link -->
                            <button
                            @click="requestPasswordReset"
                            type="button"
                            role="button"
                            :disabled="(newPassword.processing || passwordReset.processing || newEmail.processing)"
                            class="px-1 py-0 float-right w-fit h-fit text-sm font-medium text-blue tracking-wide flex flex-row gap-1 justify-center items-center disabled:opacity-50">
                                <Loading v-if="passwordReset.processing" :width="4" :height="4" :color="'blue'" />
                                Forgotten Password
                            </button>

                            <!-- Error report -->
                            <p v-if="newPassword.hasErrors && newPassword.errors.current_password" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{newPassword.errors.current_password}}
                            </p>
                        </div>
                    </div>

                    <!-- New password and new password confirmation inputs -->
                    <div class="w-full flex flex-row gap-6 flex-wrap p-4">
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="password"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                New Password
                            </label>
                            <input type="password" placeholder="New Password" 
                            id="password" v-model="newPassword.password"
                            autocomplete="false"
                            class="w-full relative border border-black border-opacity-10 rounded text-md text-black font-medium tracking-wide transition duration-200 focus:ring-warm-blue focus:ring-2">

                            <!-- Error report -->
                            <p v-if="newPassword.hasErrors && newPassword.errors.password" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{newPassword.errors.password}}
                            </p>
                        </div>
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="password_confirmation"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                Confirm Password
                            </label>
                            <input type="password" placeholder="Re-type New Password" 
                            id="password_confirmation" v-model="newPassword.password_confirmation"
                            autocomplete="false"
                            class="w-full relative border border-black border-opacity-10 rounded text-md text-black font-medium tracking-wide transition duration-200 focus:ring-warm-blue focus:ring-2">

                            <!-- Error report -->
                            <p v-if="newPassword.hasErrors && newPassword.errors.password_confirmation" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{newPassword.errors.password_confirmation}}
                            </p>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <div class="w-full flex flex-row gap-6 flex-wrap p-4">
                        <div class="w-full min-w-[200px] relative flex justify-center items-center">
                            <button
                            type="submit"
                            role="button"
                            :disabled="(newPassword.processing || passwordReset.processing || newEmail.processing) || !newPassword.isDirty"
                            class="w-full max-w-[180px] flex flex-row gap-2 justify-center items-center mx-auto rounded text-white text-md font-medium tracking-wide px-4 py-2 bg-warm-blue transition duration-200 hover:bg-blue disabled:opacity-50">
                                Update Password
                                <Loading :width="4" :height="4" v-if="newPassword.processing" />
                            </button>
                        </div>
                    </div>
                </form>

                <form action="/" method="POST" enctype="multipart/form-data"
                class="w-full relative flex flex-col gap-0"
                @submit.prevent="updateEmail">
                    <!-- Email inputs section heading -->
                    <h3 class="text-md font-bold text-black tracking-wider px-4 py-2 my-0">
                        Email Address
                    </h3>
                    <!-- New password and new password confirmation inputs -->
                    <div class="w-full flex flex-row gap-6 flex-wrap px-4 py-2">
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="email"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                Current Email
                            </label>
                            <div class="w-full relative">
                                <input type="email" placeholder="Email Address" 
                                id="email" v-model="newEmail.email"
                                :disabled="!auth.user.data.email_verified_at"
                                class="w-full relative pr-9 border border-black border-opacity-10 rounded text-md text-black font-medium tracking-wide transition duration-200 focus:ring-warm-blue focus:ring-2">
                                <span class="w-10 h-10 top-0 bottom-0 my-auto right-0 absolute flex justify-center items-center">
                                    <Tick title="Verified" v-if="auth.user.data.email_verified_at" class="w-6 -h-6 text-green" />
                                    <Cross title="Unverified" v-if="!auth.user.data.email_verified_at" class="w-6 -h-6 text-red" />
                                </span>
                            </div>
                            <!-- Verification email alert -->
                            <span v-if="!auth.user.data.email_verified_at" class="w-full px-1 text-red text-sm tracking-wider font-medium">
                                Please verify your current email before you change it.
                            </span>

                            <!-- Error report -->
                            <p v-if="updateEmail.hasErrors && updateEmail.errors.email" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{updateEmail.errors.email}}
                            </p>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <div class="w-full flex flex-row gap-6 flex-wrap p-4">
                        <div class="w-full min-w-[200px] relative flex justify-center items-center">
                            <button
                            type="submit"
                            role="button"
                            :disabled="(newPassword.processing || passwordReset.processing || newEmail.processing) || !newEmail.isDirty"
                            class="w-full max-w-[180px] flex flex-row gap-2 justify-center items-center mx-auto rounded text-white text-md font-medium tracking-wide px-4 py-2 bg-warm-blue transition duration-200 hover:bg-blue disabled:opacity-50">
                                Update Email
                                <Loading :width="4" :height="4" v-if="newEmail.processing" />
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
        CheckBadgeIcon as Tick,
        XCircleIcon as Cross
    } from '@heroicons/vue/24/solid'
    import { useForm } from '@inertiajs/inertia-vue3'
    import Loading from '../../Partials/Spinner'


    const props = defineProps({
        auth: Object,
    });

    const store = useStore()
    const toast = useToast()

    const newPassword = useForm({
        current_password: null,
        password: null,
        password_confirmation: null,
    })

    const newEmail = useForm({
        email: props.auth.user.data.email
    })
    const passwordReset = useForm()

    const updatePassword = () => {
        if (!newPassword.processing) {
            newPassword.patch(route('update.security.password'), {
                onSuccess: (response) => {
                    toast.success(response.props.flash.message.security_settings_update)
                }
            })
        }
    }
    const updateEmail = () => {
        if (!newEmail.processing) {
            newEmail.patch(route('update.security.email'), {
                onSuccess: (response) => {
                    toast.success(response.props.flash.message.security_email_update)
                }
            })
        }
    }

    const requestPasswordReset = () => {
        if (!passwordReset.processing) {
            passwordReset.post(route('password.email'), {
                onSuccess: (response) => {
                    toast.success(response.props.flash.message.status)
                }
            })
        }
    }
</script>