<template>
    <div class="w-full h-full z-[999] top-0 left-0 fixed flex justify-center items-center px-4 py-8 bg-black bg-opacity-75 backdrop-blur-xl">
        <div class="w-full max-w-2xl rounded bg-white shadow-lg flex flex-col gap-2 animate-fadeInBounce">
            <h2 class="w-full p-4 text-black tracking-wider font-semibold text-base capitalize border-b border-black border-opacity-10">
                Force Email Verification
            </h2>
            <p class="w-full px-4 py-2 font-medium text-md text-black tracking-wider">
                Forcing email verification to {{user.data.fname}}'s account changes their account status to <strong>unverified</strong>.<br />
                An email verification link will be sent to <strong>{{user.data.email}}</strong> to verify and re-activate their account.
            </p>
            <div class="w-full p-4 relative">
                <form 
                action="/" 
                method="POST" 
                enctype="text/plain"
                class="w-full flex justify-end items-center gap-4" 
                @submit.prevent="forceEmailVerify">
                    <button 
                    @click="store.dispatch('toggleEmailVerifyForceModal', false)"
                    type="button"
                    role="button"
                    :disabled="forceEmailVerifyForm.processing"
                    :class="[forceEmailVerifyForm.processing ? 'opacity-50' : '',
                    'w-fit px-4 py-2 rounded bg-black bg-opacity-20 text-black font-medium text-md']">
                        Cancel
                    </button>
                    <button 
                    type="submit"
                    role="button"
                    :disabled="forceEmailVerifyForm.processing"
                    :class="[forceEmailVerifyForm.processing ? 'opacity-50' : '',
                    'w-fit px-4 py-2 rounded bg-orange text-md font-medium text-white tracking-wider']">
                        Force Verification
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useForm } from '@inertiajs/inertia-vue3'
    import { useStore } from 'vuex'
    import { useToast } from "vue-toastification"

    const props = defineProps({
        user: Object
    })

    const store = useStore()
    const toast = useToast()

    const forceEmailVerifyForm = useForm({})

    const forceEmailVerify = () => {
        if (!forceEmailVerifyForm.processing) {
            forceEmailVerifyForm.post(route('user.email.verification', {user: props.user.data.id}), {
                onSuccess: () => {
                    toast.success(`An email verification link has been sent to ${props.user.data.email}.`)
                    store.dispatch('toggleEmailVerifyForceModal', false)
                }
            })
        }
    }
</script>