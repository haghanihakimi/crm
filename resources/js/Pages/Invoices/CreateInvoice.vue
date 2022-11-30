<template>
    <Layout :title="'Invoices'" :auth="auth">
        <div class="w-full relative m-auto px-4">
            <div class="w-full max-w-7xl m-auto my-8 overflow-x-auto relative shadow-md rounded border border-black border-opacity-10">
                
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { Inertia } from '@inertiajs/inertia'
    import { useStore } from 'vuex'
    import moment from 'moment'
    import {
        PencilIcon as Edit,
        ArrowDownTrayIcon as Download,
    } from '@heroicons/vue/24/solid'


    const props = defineProps({
        auth: Object,
    });

    const store = useStore()
    
</script>