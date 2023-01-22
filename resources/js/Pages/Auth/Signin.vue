<template>
    <GeneralLayout :title="'Sign In'" :auth="auth">
        <div class="w-full h-fit bg-clouds-100 bg-opacity-5 relative flex justify-center py-24 px-6">
            <form action="/" method="POST" enctype="multipart/form-data" 
            class="w-full bg-white border border-black border-opacity-10 p-6 rounded shadow-lg max-w-md flex flex-col gap-6"
            @submit.prevent="signin">
                <!-- Header section -->
                <div class="w-full relative flex flex-col gap-0">
                    <h1 class="w-full text-black text-2xl font-semibold tracking-wider uppercase text-center p-0">
                        Sign In
                    </h1>
                    <p class="w-full text-sm tracking-wide text-black text-opacity-70 text-center">
                        Sign in to manage your sales!
                    </p>
                </div>
                <!-- email/username input box -->
                <div class="select-none relative w-full group">
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    autocomplete="true"
                    v-model="signinForm.email"
                    class="block py-2.5 px-2 w-full text-sm text-black bg-white bg-opacity-20 rounded border border-thick-black appearance-none shadow-sm transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none focus:border-thick-black" placeholder="Email Address" required />
                </div>
                <!-- password input box -->
                <div class="select-none relative w-full group">
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    @keydown="capLock($event)"
                    @click="capLock($event)"
                    autocomplete="false"
                    v-model="signinForm.password"
                    class="block py-2.5 px-2 w-full text-sm text-smooth-black bg-white bg-opacity-20 rounded border border-thick-black appearance-none shadow-sm transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none focus:border-thick-black" placeholder="Password" required />
                    <p v-if="data.caps" class="w-full flex flex-row gap-1 text-orange text-sm py-2">
                        <Warning class="text-orange w-5 h-5"/>Caps Lock is on!
                    </p>
                </div>
                <!-- remember me checkbox -->
                <div class="select-none flex justify-between items-center">
                    <div class="flex items-center">
                        <input 
                        id="checked-checkbox" 
                        type="checkbox" 
                        name="remember_me" 
                        v-model="signinForm.remember" 
                        class="form-check-input appearance-none bg-black bg-opacity-10 h-4 w-4 border border-black border-opacity-10 rounded-sm bg-white checked:bg-blue checked:border-blue ring-0 focus:ring-0 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer">
                        <label 
                        for="checked-checkbox" 
                        class="ml-2 text-sm font-medium text-smooth-black cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <Link :href="route('forgotten.account')" class="text-[13px] font-[600] capitalize text-blue tracking-wide">
                        forgotten account
                    </Link>
                </div>
                <!-- sign in button -->
                <div class="select-none w-full relative">
                    <button type="submit" role="button"
                    class="text-base font-medium tracking-wide text-white bg-warm-blue p-2 rounded flex justify-center items-center cursor-pointer w-full capitalize transition duration-150 hover:bg-blue" >
                        sign in
                    </button>
                </div>

                <!-- Form submission output reports -->
                <div v-if="signinForm.hasErrors" class="w-full relative">
                    <ul>
                        <li v-for="(message, i) in signinForm.errors" :key="i"
                        class="text-red text-sm tracking-wider font-normal">
                            {{message}}
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </GeneralLayout>
</template>
<script setup>
    import GeneralLayout from '../../Layouts/GeneralLayout.vue'
    import { useForm } from '@inertiajs/inertia-vue3'
    import {useStore} from 'vuex'
    import { reactive } from '@vue/reactivity'
    import { ExclamationTriangleIcon as Warning } from '@heroicons/vue/24/outline'

    const props = defineProps({
        auth: Object,
        flash: Object
    });

    const store = useStore()

    const data = reactive({
        caps: false
    })

    const signinForm = useForm({
        email: null,
        password: null,
        remember: true,
    })

    const capLock = event => {
        data.caps = event.getModifierState && event.getModifierState( 'CapsLock' );
    }

    const signin = () => {
        if (!signinForm.processing) {
            signinForm.post(route('signin'), {
                onSuccess: () => {
                    store.dispatch('toggleSignedIn', true)
                    store.dispatch('toggleSignedOut', false)
                }
            })
        }
    }
</script>