<template>
    <Layout :title="'Change Password'" :auth="auth">
        <div class="w-full relative flex justify-center items-center py-14 px-6">
            <div class="w-full max-w-[512px] bg-white rounded border border-black border-opacity-10 shadow-sm-spread text-center m-auto px-14 py-6">
                <h2 class="w-full text-base font-medium tracking-wider leading-7">
                    Dear {{auth.user.data.first_name}}, your account is locked due to having an unverified email address.
                    <br>We have sent a verification link to your current email address at <strong>{{auth.user.data.email}}</strong>.
                    <br><span class="leading-10">In case you missed previously sent verification link, click the below button to receive another verification link.</span>
                </h2>
                <form 
                action="/" 
                method="POST" 
                enctype="multipart/form-data"
                @submit.prevent="sendLink">
                    <button
                    type="submit"
                    role="button"
                    :disabled="resendLink.processing"
                    class="w-fit flex flex-row gap-1 justify-between items-center mx-auto px-4 py-2 rounded bg-warm-blue text-white text-base font-medium tracking-wide transition duration-150 hover:bg-blue disabled:opacity-50">
                        Resend Link
                        <Loading v-if="resendLink.processing" :width="4" :height="4"/>
                    </button>
                </form>
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard.vue'
    import { useForm } from '@inertiajs/inertia-vue3';
    import {useStore} from 'vuex'
    import { useToast } from 'vue-toastification'
    import Loading from '../../Partials/Spinner'

    const props = defineProps({
        auth: Object,
        flash: Object
    });

    const store = useStore()
    const toast = useToast()

    const resendLink = useForm()

    const sendLink = () => {
        if (!resendLink.processing) {
            resendLink.post(route('verification.send'), {
                onSuccess: (response) => {
                    toast.success(response.props.flash.message.sending_link)
                },
                onError: (response) => {
                    toast.success(response.props.flash.message.sending_link)
                }
            })
        }
    }
</script>