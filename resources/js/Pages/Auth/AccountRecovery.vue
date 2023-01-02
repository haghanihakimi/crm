<template>
    <GeneralLayout :title="'Recover Account'" :auth="auth">
        <div class="w-full max-w-lg select-none my-12 bg-white m-auto border border-black border-opacity-10 rounded shadow-sm-spread">
            <div class="w-full relative flex justify-center items-center flex-col px-4 py-6">
                <span class="w-14 h-14 rounded-full bg-warm-blue flex justify-center items-center">
                    <Email class="w-8 h-8 text-white" />
                </span>
                <h1 class="text-base font-semibold tracking-wide text-black px-4 py-2 text-opacity-80">
                    Recover Account
                </h1>
            </div>

            <!-- General settings body contents -->
            <div class="w-full relative flex flex-col gap-2">
                <form action="/" method="POST" enctype="multipart/form-data"
                class="w-full relative flex flex-col gap-0"
                @submit.prevent="receiveLink">
                    <!-- New password field -->
                    <div class="w-full flex flex-row gap-2 flex-wrap p-4">
                        <div class="w-full min-w-[200px] relative flex-col gap-2 flex-1">
                            <label for="email"
                            class="w-full block text-sm font-medium tracking-wide text-black px-1 py-2">
                                Eamil Address
                            </label>
                            <input type="email" placeholder="Enter your email address" 
                            id="email" v-model="userEmail.email"
                            autocomplete="false"
                            autofocus="true"
                            class="w-full relative border border-black border-opacity-10 rounded text-md text-black font-medium tracking-wide transition duration-200 focus:ring-warm-blue focus:ring-2">

                            <!-- Error report -->
                            <p v-if="userEmail.hasErrors && userEmail.errors.email" class="w-full text-sm font-medium text-red px-1 py-2">
                                {{userEmail.errors.email}}
                            </p>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <div class="w-full flex flex-row gap-6 flex-wrap p-4">
                        <div class="w-full min-w-[200px] relative flex justify-center items-center">
                            <button
                            type="submit"
                            role="button"
                            :disabled="userEmail.processing"
                            class="w-full max-w-[180px] flex flex-row gap-2 justify-center items-center mx-auto rounded text-white text-md font-medium tracking-wide px-4 py-2 bg-warm-blue transition duration-200 hover:bg-blue disabled:opacity-50">
                                Check Account
                                <Loading :width="4" :height="4" v-if="userEmail.processing" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </GeneralLayout>
</template>
<script setup>
    import GeneralLayout from '../../Layouts/GeneralLayout.vue'
    import { Inertia } from '@inertiajs/inertia'
    import { useStore } from 'vuex'
    import { useToast } from 'vue-toastification'
    import moment from 'moment'
    import {
        EnvelopeIcon as Email
    } from '@heroicons/vue/24/solid'
    import { useForm } from '@inertiajs/inertia-vue3'
    import Loading from '../../Partials/Spinner'


    const props = defineProps({
        auth: Object,
    });

    const store = useStore()
    const toast = useToast()

    const userEmail = useForm({
        email: null,
    })

    const receiveLink = () => {
        if (!userEmail.processing) {
            userEmail.post(route('recover.account.email'), {
                onSuccess: (response) => {
                    switch(response.props.flash.message.code) {
                        case 'success':
                            toast.success(response.props.flash.message.status)
                            break;
                        case 'failure':
                            toast.error(response.props.flash.message.status)
                            break;
                        default:
                            toast.info(response.props.flash.message.status)
                            break;
                    }
                }
            })
        }
    }
</script>