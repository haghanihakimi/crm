<template>
    <Layout :title="'Invoices'" :auth="auth">
        <div class="w-full relative m-auto p-4">
            <h1 class="w-full text-black font-semibold tracking-wider text-xl mb-4">
                Create Invoice
            </h1>
            <!-- All fields/inputs container -->
            <div class="w-full flex flex-row gap-4 mx-auto">
                <!-- All customer information inputs container -->
                <div class="w-full flex flex-col gap-6 mx-auto px-4 py-8 bg-white rounded border border-black border-opacity-10 shadow-sm-spread">
                    <!-- Customer selected input container -->
                    <div class="w-full max-w-md relative flex flex-col gap-1 select-none">
                        <label 
                        class="w-full text-sm font-medium tracking-wider text-black"
                        for="customer_id">
                            Customer
                        </label>
                        <div class="w-full relative flex flex-row gap-2 items-center">
                            <Multiselect
                                placeholder="Search by email or phone number..."
                                v-model="value"
                                mode="tags"
                                :close-on-select="false"
                                :searchable="true"
                                :create-option="true"
                                :options="invoiceForm.customers"
                                class="shrink-0 text-sm tracking-wider text-black border border-black border-opacity-10 shadow-sm-spread outline-0"
                            />
                            <label class="shrink-0 inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" v-model="invoiceForm.sendMail" class="sr-only peer">
                                <div class="w-10 h-5 bg-black bg-opacity-10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.5px] after:left-[0px] after:bg-white after:border-black after:border-opacity-10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue shadow-sm-spread border border-black border-opacity-10"></div>
                                <span class="ml-2 text-sm font-medium text-black font-semibold tracking-wide">
                                    Send invoice
                                </span>
                            </label>
                        </div>
                    </div>
                    <!-- Invoice date & due date fields container -->
                    <div class="w-full flex flex-row gap-4 relative">
                        <!-- Invoice date -->
                        <div class="w-full flex flex-col gap-1">
                            <label for="invoice_date" class="w-full text-sm text-black font-medium tracking-wider">
                                Invoice Date
                            </label>
                            <v-date-picker v-model="invoiceForm.invoiceDate" mode="date">
                                <template v-slot="{ inputValue, inputEvents }">
                                    <input
                                        class="w-full min-h-[40px] px-2 border border-black border-opacity-10 shadow-sm-spread rounded transition duration-200 outline-0 focus:ring-2 focus:ring-blue"
                                        :value="inputValue"
                                        v-on="inputEvents"
                                    />
                                </template>
                            </v-date-picker>
                        </div>
                        <!-- Invoice due date -->
                        <div class="w-full flex flex-col gap-1">
                            <label for="invoice_date" class="w-full text-sm text-black font-medium tracking-wider">
                                Invoice Due Date
                            </label>
                            <v-date-picker v-model="invoiceForm.dueDate" mode="date">
                                <template v-slot="{ inputValue, inputEvents }">
                                    <input
                                        class="w-full min-h-[40px] px-2 border border-black border-opacity-10 shadow-sm-spread rounded transition duration-200 outline-0 focus:ring-2 focus:ring-blue"
                                        :value="inputValue"
                                        v-on="inputEvents"
                                    />
                                </template>
                            </v-date-picker>
                        </div>
                    </div>
                </div>

                <!-- Service/Product information inputs container -->
                <div class="w-full mx-auto px-4 py-8 bg-white rounded border border-black border-opacity-10 shadow-sm-spread">
                    XIXI
                </div>
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
    import Multiselect from '@vueform/multiselect'
    import "@vueform/multiselect/themes/default.css"
    import { useForm } from '@inertiajs/inertia-vue3'


    const props = defineProps({
        auth: Object,
    });

    const invoiceForm = useForm({
        customers: [
            { value: 'batman', label: 'Batman' },
            { value: 'robin', label: 'Robin' },
            { value: 'joker', label: 'Joker' },
        ],
        sendMail: true,
        invoiceDate: new Date(),
        dueDate: new Date(),
    })
    
</script>