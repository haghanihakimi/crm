<template>
    <Layout :title="'Invoices'" :auth="auth">
        <div class="w-full relative m-auto px-4">
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
    import Multiselect from '@vueform/multiselect'
    import "@vueform/multiselect/themes/default.css"


    const props = defineProps({
        auth: Object,
    });
    
</script>