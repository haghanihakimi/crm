<template>
    <Head :title="title" />
    <div 
    v-if="!store.getters.signedIn"
    class="w-full h-full p-0 m-0 relative antialiased box-content relative">
        <GuestNavigation :auth="auth" />
        <slot />
    </div>
</template>
<script setup>
    import { onMounted } from '@vue/runtime-core';
    import GuestNavigation from '../Partials/GuestNavigation'
    import {useStore} from 'vuex'
    import { Inertia } from '@inertiajs/inertia';

    const props = defineProps({
        auth: Object,
        title: String,
    });

    const store = useStore()

    onMounted(() => {
        if (store.getters.signedIn) {
            Inertia.visit(route('dashboard'))
        }
    })
</script>