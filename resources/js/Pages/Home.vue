<template>
    <div class="p-0 m-0 relative">
        <!-- Section: Design Block -->
        <section class="relative m-0 p-0">
            <div class="h-[500px] relative overflow-hidden bg-no-repeat bg-homeHeroImage bg-cover bg-p-50"></div>

            <div class="absolute -translate-y-[40%] animate-fadeHomeHero left-0 right-0 mx-auto container mx-auto px-32 lg:px-12 xl:px-24">
                <div class="text-center text-black">
                    <div class="block rounded-lg shadow-xl px-6 py-12 md:py-16 md:px-12 bg-white bg-opacity-70 backdrop-blur-xl">
                        <h1 class="text-2xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">The best offer on the market <br /><span class="text-warm-blue">for your business</span></h1>
                        <Link :href="route('login')" class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-warm-blue tracking-wide text-white font-medium text-base leading-snug uppercase rounded shadow-md hover:bg-blue hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">
                            Sign In
                        </Link>
                        <Link :href="route('signup')" class="inline-block px-7 py-3 text-white font-medium text-base tracking-wide leading-snug bg-transparent text-blue font-medium text-xs leading-tight uppercase rounded border border-black border-opacity-0 hover:border-opacity-5 hover:text-blue hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
</template>
<script setup>
    import GeneralLayout from '../Layouts/GeneralLayout.vue'
    import Signin from '../Pages/Auth/Signin.vue'

    const props = defineProps({
        auth: Object,
        flash: Object
    });
</script>