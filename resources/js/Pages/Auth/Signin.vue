<template>
    <GeneralLayout :title="'Sign In'" :auth="auth">
        <div class="w-full relative flex justify-center items-center py-14 px-6">
            <form action="/" method="POST" enctype="multipart/form-data" 
            class="w-full max-w-md flex flex-col gap-6"
            @submit.prevent="signin">
                <!-- email/username input box -->
                <div class="select-none relative w-full group">
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    autocomplete="true"
                    autofocus="false"
                    v-model="signinForm.email"
                    class="block py-2.5 px-2 w-full text-sm text-smooth-black bg-transparent rounded border border-thick-black appearance-none focus:outline-none focus:ring-0 focus:border-thick-black peer" placeholder=" " required />
                    <label for="email" class="w-full px-2 capitalize peer-focus:font-medium absolute text-sm text-smooth-black duration-200 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                        Email address
                    </label>
                </div>
                <!-- password input box -->
                <div class="select-none relative w-full group">
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    autocomplete="false"
                    autofocus="false"
                    v-model="signinForm.password"
                    class="block py-2.5 px-2 w-full text-sm text-smooth-black bg-transparent rounded border border-thick-black appearance-none focus:outline-none focus:ring-0 focus:border-thick-black peer" placeholder=" " required />
                    <label for="password" class="w-full px-2 capitalize peer-focus:font-medium absolute text-sm text-smooth-black duration-200 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                        password
                    </label>
                </div>
                <!-- remember me checkbox -->
                <div class="select-none flex justify-between items-center">
                    <div class="flex items-center">
                        <input 
                        id="checked-checkbox" 
                        type="checkbox" 
                        name="remember_me" 
                        v-model="signinForm.remember" 
                        class="w-4 h-4 text-blue cursor-pointer rounded border-thick-black focus:border-thick-black focus:ring-0">
                        <label 
                        for="checked-checkbox" 
                        class="ml-2 text-sm font-medium text-smooth-black cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <Link href="#" class="text-[13px] font-[600] capitalize text-blue tracking-wide">
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
    import { useForm } from '@inertiajs/inertia-vue3';
    import {useStore} from 'vuex'

    const props = defineProps({
        auth: Object,
        flash: Object
    });

    const store = useStore()

    const signinForm = useForm({
        email: null,
        password: null,
        remember: true,
    })

    const signin = () => {
        if (!signinForm.processing) {
            signinForm.post('signin', {
                onSuccess: () => {
                    store.dispatch('toggleSignedIn', true)
                    store.dispatch('toggleSignedOut', false)
                }
            })
        }
    }
</script>