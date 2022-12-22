<template>
    <Layout :title="'Invoices'" :auth="auth">
        <div v-if="invoices && Object.keys(invoices.data).length" class="w-full relative m-auto px-4 flex flex-col gap-4">
            <h1 class="text-lg font-semibold tracking-wider capitalize pt-4">
                All Invoices
            </h1>
            <Link 
            :href="route('invoice.create.view')" 
            target="_self"
            class="w-full w-fit rounded text-md text-white font-normal tracking-wider p-2 px-4 bg-warm-blue transition duration-150 hover:bg-blue" >
                Create Invoice
            </Link>
            <Filter :params="params" class="relative z-10" />
            <div class="w-full max-w-7xl m-auto mt-1 overflow-x-auto relative shadow-md rounded border border-black border-opacity-10">
                <table class="w-full text-sm text-left text-black bg-white">
                    <thead class="text-sm text-black uppercase bg-black bg-opacity-5 border-b border-black border-opacity-10">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                #
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Customers
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
                        class="bg-white text-base border-b border-black border-opacity-5 last:border-0 transition duration-150 hover:bg-black hover:bg-opacity-[0.015]">
                            <td scope="row" class="py-4 px-6 text-black text-center border-r border-black border-opacity-5 last:border-0">
                                {{ invoice.id }}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                <span v-if="invoice.customers.length < 2 && invoice.customers.length > 0">
                                    {{ invoice.customers.length < 10 ? `0${invoice.customers.length} customer` : `${invoice.customers.length} customer` }}
                                </span>
                                <span v-if="invoice.customers.length > 1">
                                    {{ invoice.customers.length < 10 ? `0${invoice.customers.length} customers` : `${invoice.customers.length} customers` }}
                                </span>
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                {{ moment(invoice.invoice_date).format('DD/MM/YYYY') }}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                <span v-if="moment(invoice.due_date).diff(moment(), 'days') <= 1" class="text-red font-semibold tracking-wider">
                                    {{ `${moment(invoice.due_date).format("DD/MM/YYYY")}` }}
                                </span>
                                <span v-else class="text-black font-medium tracking-wider">
                                    {{ `${moment(invoice.due_date).format("DD/MM/YYYY")}` }}
                                </span>
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                ${{ invoice.products.map(product => product.gst ? ((product.price * product.quantity) / 10 + (product.price * product.quantity)).toFixed(2) : (product.price * product.quantity).toFixed(2) ).map(parseFloat).reduce((sum, number) => sum + number, 0).toFixed(2) }}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5">
                                <span v-if="moment(invoice.due_date).diff(moment(), 'days') <= 1" class="text-red font-semibold tracking-wider">
                                    Overdue
                                </span>
                                <span v-else class="text-black font-medium tracking-wider">
                                    {{ moment(invoice.due_date).fromNow() }}
                                </span>
                            </td>
                            <td 
                            v-if="$page.props.abilities.canExportInvoices && $page.props.abilities.canEditInvoices"
                            class="flex items-center justify-center text-center flex-wrap py-4 px-6 space-x-2">
                                <a 
                                v-if="$page.props.abilities.canEditInvoices"
                                :href="route('invoice.edit.view', {invoice: invoice.id})" 
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
        <h2 v-else class="w-full px-4 py-12 text-center text-lg font-semibold text-black text-opacity-75 tracking-wider">
            No invoice found!
        </h2>
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
    import Filter from '../../Partials/FilterInvoices'
    import Pagination from '../../Partials/Pagination'


    const props = defineProps({
        auth: Object,
        params: Object,
        invoices: Object,
    });

    const store = useStore()
    
</script>