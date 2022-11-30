<template>
    <Layout :title="'Invoices'" :auth="auth">
        <div class="w-full relative m-auto px-4">
            <div class="w-full max-w-7xl m-auto my-8 overflow-x-auto relative shadow-md rounded border border-black border-opacity-10">
                <table class="w-full text-sm text-left text-black">
                    <thead class="text-sm text-black uppercase bg-black bg-opacity-[0.0075]">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                ID
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Customer
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Date
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Due Date
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Total
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Status
                            </th>
                            <th 
                            v-if="$page.props.abilities.canExportInvoices && $page.props.abilities.canEditInvoices"
                            scope="col" 
                            class="py-3 px-6 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                        v-for="(invoice, i) in invoices.data" 
                        :key="i" 
                        class="bg-white border-b border-black border-opacity-5 last:border-0 transition duration-150 hover:bg-black hover:bg-opacity-[0.015]">
                            <td scope="row" class="py-4 px-6 text-black text-center border-r border-black border-opacity-5 last:border-0">
                                {{invoice.id <= 9 ? `0${invoice.id}` : invoice.id}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                {{invoice.customers.first_name}} {{invoice.customers.surname}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                {{moment(invoice.invoice_date).format('DD/MM/YYYY')}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                {{moment(invoice.invoice_due).format('DD/MM/YYYY')}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                ${{invoice.total_amount}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                <span v-if="moment(invoice.invoice_due).diff(moment(), 'minutes') < 0" class="text-red font-semibold tracking-wider">
                                    Overdue
                                </span>
                                <span v-else>
                                    {{moment(invoice.invoice_due).fromNow()}}
                                </span>
                            </td>
                            <td 
                            v-if="$page.props.abilities.canExportInvoices && $page.props.abilities.canEditInvoices"
                            class="flex items-center justify-center text-center flex-wrap py-4 px-6 space-x-2">
                                <a 
                                v-if="$page.props.abilities.canEditInvoices"
                                href="#" 
                                class="basis-1 flex justify-center items-center w-6 h-6 min-w-[24px] rounded bg-blue font-medium text-blue">
                                    <Edit class="w-4 h-4 text-white" />
                                </a>
                                <a 
                                v-if="$page.props.abilities.canExportInvoices"
                                href="#" 
                                class="basis-1 flex justify-center items-center w-6 h-6 min-w-[24px] rounded bg-green font-medium text-blue">
                                    <Download class="w-4 h-4 text-white" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Pagination section -->
            <div class="w-full flex justify-center items-center">
                <Pagination :links="invoices.links" :params="params" />
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
    import Pagination from '../../Partials/Pagination'


    const props = defineProps({
        auth: Object,
        params: Object,
        invoices: Object,
    });

    const store = useStore()
    
</script>