<template>
    <Head :title="title" />
    <div 
    v-if="!store.getters.signedOut"
    class="w-full h-full flex flex-row gap-0 p-0 m-0 relative antialiased box-content relative overflow-hidden">
        <Sidebar />
        <div class="w-full relative">
            <div class="w-full relative z-6">
                <Search v-if="!auth.user.default_password" />
            </div>
            <div class="w-full h-full absolute top-0 left-0 pt-[94px] z-5">
                <div class="w-full h-full overflow-auto overflow-x-hidden">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { Inertia } from '@inertiajs/inertia'
    import { onMounted } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    import Sidebar from '../Partials/Sidebar'
    import Search from '../Partials/searchbar'

    const props = defineProps({
        auth: Object,
        title: String,
    });

    const store = useStore()

    onMounted(() => {
        if (store.getters.signedOut) {
            Inertia.visit(route('login'))
        }
    })


</script>