<template>
    <GeneralLayout :title="'Sign Up'">
        <div class="w-full relative">
            <!-- Section: Design Block -->
            <section class="relative m-0 p-0">
                <div class="px-6 py-12 bg-black bg-opacity-5 text-gray text-center lg:text-left">
                    <div class="container mx-auto xl:px-0">
                        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div class="mt-12 lg:mt-0">
                                <h1 class="text-2xl md:text-6xl xl:text-6xl text-black font-bold tracking-tight mb-12">The best solution <br /><span class="text-warm-blue">to manage your sales</span></h1>
                                <p class="text-black text-opacity-50">
                                    With a user-friendly interface, you have full control on customers, invoices and sales. 
                                </p>
                            </div>
                            <div class="mb-12 lg:mb-0">
                                <div class="max-w-2xl mx-auto block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                                    <form action="/" method="POST" enctype="multipart/form-data"
                                    class="flex flex-col gap-4"
                                    @submit.prevent="signup">
                                        <div class="grid md:grid-cols-2 md:gap-4">
                                            <div>
                                                <input 
                                                type="text" 
                                                autocomplete="false"
                                                v-model="signUpForm.first_name"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black border-opacity-10 rounded transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none" 
                                                placeholder="First Name"/>
                                                <p
                                                v-if="signUpForm.errors.first_name"
                                                class="w-full text-red text-sm font-semibold tracking-wide mt-2 ml-1">
                                                    {{signUpForm.errors.first_name}}
                                                </p>
                                            </div>
                                            <div>
                                                <input 
                                                type="text" 
                                                autocomplete="false"
                                                v-model="signUpForm.surname"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black border-opacity-10 rounded transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none" 
                                                placeholder="Last name"/>
                                                <p
                                                v-if="signUpForm.errors.surname"
                                                class="w-full text-red text-sm font-semibold tracking-wide mt-2 ml-1">
                                                    {{signUpForm.errors.surname}}
                                                </p>
                                            </div>
                                        </div>
                                        <input 
                                        type="email" 
                                        autocomplete="false"
                                        v-model="signUpForm.email"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black border-opacity-10 rounded transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none" 
                                        placeholder="Email address"/>
                                        <p
                                        v-if="signUpForm.errors.email"
                                        class="w-full text-red text-sm font-semibold tracking-wide ml-1">
                                            {{signUpForm.errors.email}}
                                        </p>
                                        <input 
                                        type="password" 
                                        autocomplete="false"
                                        v-model="signUpForm.password"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-black border-opacity-10 rounded transition duration-300 ease-in-out m-0 ring-4 ring-transparent focus:ring-warm-blue focus:outline-none" 
                                        placeholder="Password"/>
                                        <p
                                        v-if="signUpForm.errors.password"
                                        class="w-full text-red text-sm font-semibold tracking-wide ml-1">
                                            {{signUpForm.errors.password}}
                                        </p>
                                        <button 
                                        :disabled="signUpForm.processing || !signUpForm.isDirty"
                                        type="submit" 
                                        data-mdb-ripple="true" 
                                        data-mdb-ripple-color="light" 
                                        class="inline-block px-6 py-2.5 mb-6 cursor-pointer w-full bg-warm-blue text-white font-medium text-sm leading-tight uppercase rounded transition duration-150 shadow-md hover:bg-blue hover:shadow-lg focus:outline-none focus:ring-0 ease-in-out disabled:bg-warm-blue disabled:bg-opacity-75">Sign up</button>
                                    </form>
                                    <div class="w-full relative" v-if="$page.props.flash.message">
                                        <p class="w-full relative block text-red text-sm tracking-wide font-semibold"
                                        v-for="(message, i) in $page.props.flash.message" :key="i">
                                            &cross;&nbsp;{{message}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Section: Design Block -->
        </div>
    </GeneralLayout>
</template>
<script setup>
    import { useForm } from '@inertiajs/inertia-vue3';
    import GeneralLayout from '../../Layouts/GeneralLayout'

    const props = defineProps({
    });
    
    const signUpForm = useForm({
        first_name: null,
        surname: null,
        email: null,
        password: null
    })

    const signup = () => {
        if (!signUpForm.processing) {
            signUpForm.post(route('account.create'))
        }
    }
</script>