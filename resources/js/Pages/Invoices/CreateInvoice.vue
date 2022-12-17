<template>
    <Layout :title="'Invoices'" :auth="auth">
        <div class="w-full relative m-auto p-4">
            <h1 class="w-full text-black font-semibold tracking-wider text-xl mb-4">
                Create Invoice
            </h1>
            <!-- All fields/inputs container -->
            <div class="w-full flex flex-col gap-4 mx-auto">
                <div class="w-full flex flex-row flex-wrap gap-4 mx-auto">
                    <!-- All customer information inputs container -->
                    <div class="w-full lg:max-w-full xl:max-w-full xxl:max-w-sm min-w-[700px] flex-1 flex flex-col gap-6 mx-auto px-4 py-8 bg-white rounded border border-black border-opacity-10 shadow-sm-spread">
                        <!-- Customer selected input container -->
                        <div class="w-full max-w-md relative flex flex-col gap-1 select-none">
                            <label 
                            class="w-full text-sm tracking-wider text-black"
                            for="customer_id">
                                Customer
                            </label>
                            <div class="w-full relative flex flex-col gap-2 items-start justify-center">
                                <Multiselect
                                    v-model="invoiceForm.customers"
                                    v-bind="queryCustomers"
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
                                <label for="invoice_date" class="w-full text-sm text-black tracking-wider">
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
                                <label for="invoice_date" class="w-full text-sm text-black tracking-wider">
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

                        <!-- New Section heading -->
                        <h2 class="w-full my-2 pt-4 font-semibold text-base tracking-wider text-black border-t border-black border-opacity-10">
                            Shipment
                        </h2>

                        <!-- Shipment section -->
                        <div class="w-full flex flex-row gap-4 relative">
                            <!-- shipping date -->
                            <div class="w-full flex flex-col gap-1">
                                <label for="shipping_date" class="w-full text-sm text-black tracking-wider">
                                    Shipping Date
                                </label>
                                <v-date-picker v-model="invoiceForm.shippingDate" mode="date">
                                    <template v-slot="{ inputValue, inputEvents }">
                                        <input
                                            id="shipping_date"
                                            class="w-full min-h-[40px] px-2 border border-black border-opacity-10 shadow-sm-spread rounded transition duration-200 outline-0 focus:ring-2 focus:ring-blue"
                                            :value="inputValue"
                                            v-on="inputEvents"
                                        />
                                    </template>
                                </v-date-picker>
                            </div>
                            <!-- tracking number -->
                            <div class="w-full flex flex-col gap-1">
                                <label for="tracking_number" class="w-full text-sm text-black tracking-wider">
                                    Tracking Number
                                </label>
                                <input 
                                    class="w-full min-h-[40px] no-arrow relative rounded border border-black border-opacity-10 shadow-sm-spread transition duration-200 focus:ring-1 focus:ring-blue"
                                    name="tracking_number" 
                                    id="tracking_number"
                                    type="number"
                                    placeholder="Numbers only"
                                    v-model="invoiceForm.trackingNumber"
                                />
                            </div>
                        </div>

                        <!-- Shipping address fields container -->
                        <div class="w-full flex flex-col gap-4 relative mt-4">
                            <h3 class="w-full text-base font-semibold tracking-wider text-black">
                                Shipping Address
                            </h3>
                            <!-- Country & state fields container -->
                            <div class="w-full flex flex-row gap-4 flex-wrap">
                                <div class="w-full flex flex-col gap-2 min-w-[200px] flex-1">
                                    <label for="shipping_country" class="w-full text-sm tracking-wider text-black">
                                        Country
                                    </label>
                                    <select 
                                    class="w-full min-h-[40px] relative rounded border border-black border-opacity-10 shadow-sm-spread cursor-pointer transition duration-200 focus:ring-1 focus:ring-blue"
                                    name="shipping_country" 
                                    id="shipping_country" 
                                    v-model="invoiceForm.shippingCountry">
                                        <option v-for="(country, i) in countries.original.countries" 
                                        :key="i"
                                        :value="country.id">{{country.name}}</option>
                                    </select>
                                </div>
                                <div class="w-full flex flex-col gap-2 min-w-[200px] flex-1">
                                    <label for="shipping_state" 
                                    class="w-full text-sm tracking-wider text-black">
                                        State
                                    </label>
                                    <input 
                                        class="w-full min-h-[40px] relative rounded border border-black border-opacity-10 shadow-sm-spread transition duration-200 focus:ring-1 focus:ring-blue"
                                        name="shipping_state" 
                                        id="shipping_state"
                                        type="text"
                                        placeholder="Type your current state"
                                        v-model="invoiceForm.shippingState"
                                    />
                                </div>
                            </div>
                            <!-- House address container -->
                            <div class="w-full flex flex-row gap-4 flex-wrap">
                                <div class="w-full flex flex-col gap-2 min-w-[200px] flex-1">
                                    <label for="shipping_house_address" class="w-full text-sm tracking-wider text-black">
                                        House Address
                                    </label>
                                    <input
                                        class="w-full min-h-[40px] relative rounded border border-black border-opacity-10 shadow-sm-spread transition duration-200 focus:ring-1 focus:ring-blue"
                                        name="shipping_house_address" 
                                        id="shipping_house_address"
                                        type="text"
                                        placeholder="e.g Building 2, example street"
                                        v-model="invoiceForm.shippingHouseAddress"
                                    />
                                </div>
                            </div>
                            <!-- Suburb & pincode container -->
                            <div class="w-full flex flex-row gap-4 flex-wrap">
                                <div class="w-full flex flex-col gap-2 min-w-[200px] flex-1">
                                    <label for="shipping_suburb" class="w-full text-sm tracking-wider text-black">
                                        Suburb/City
                                    </label>
                                    <input
                                        class="w-full min-h-[40px] relative rounded border border-black border-opacity-10 shadow-sm-spread transition duration-200 focus:ring-1 focus:ring-blue"
                                        name="shipping_suburb" 
                                        id="shipping_suburb"
                                        type="text"
                                        placeholder="Your current suburb or city"
                                        v-model="invoiceForm.shippingSuburb"
                                    />
                                </div>
                                <div class="w-full flex flex-col gap-2 min-w-[200px] flex-1">
                                    <label for="shipping_postcode" class="w-full text-sm tracking-wider text-black">
                                        Postcode
                                    </label>
                                    <input
                                        class="w-full  min-h-[40px] relative rounded border border-black border-opacity-10 shadow-sm-spread transition duration-200 focus:ring-1 focus:ring-blue"
                                        name="shipping_postcode" 
                                        id="shipping_postcode"
                                        type="text"
                                        placeholder="Enter postcode/zipcode"
                                        v-model="invoiceForm.shippingPostcode"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Service/Product information inputs container -->
                    <div class="w-full min-w-[700px] flex-1 mx-auto px-4 py-8 bg-white rounded border border-black border-opacity-10 shadow-sm-spread">
                        <!-- list of products and items container -->
                        <div class="w-full relative flex flex-col">
                            <h2 class="w-full mb-6 font-semibold relative text-base text-black tracking-wider">
                                Products &amp; Services
                            </h2>
                        </div>

                        <!-- Invoice Number field container -->
                        <div class="w-full relative flex flex-col gap-2">
                            <label for="invoice_number"
                            class="w-full text-sm text-black tracking-wider">
                                Invoice Number
                            </label>
                            <input type="number"
                            id="invoice_number"
                            placeholder="Numbers only"
                            class="w-full relative no-arrow transition duration-250 focus:ring-1 focus:ring-blue rounded border border-black border-opacity-10 shadow-sm-spread">
                        </div>
                        
                        <!-- Row of items and products on invoice -->
                        <div class="w-full relative flex flex-col gap-6 select-none border-b border-black border-opacity-10 py-4">
                            <table class="w-full text-sm text-left text-black">
                                <thead class="text-sm text-black uppercase bg-black bg-opacity-10 rounded">
                                    <tr>
                                        <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                            #
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                            Service
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                            Quantity
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                            Price
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                            GST(10%)
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                            Subtotal
                                        </th>
                                        <th 
                                        scope="col" 
                                        class="w-[70px] py-3 px-6 text-center">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="border border-black border-opacity-10">
                                    <tr 
                                    v-for="(input, i) in invoiceForm.inputs"
                                    :key="i"
                                    class="bg-white border-b border-black border-opacity-5 last:border-0 transition duration-150 hover:bg-black hover:bg-opacity-[0.015]">
                                        <td scope="row" class="py-4 px-6 text-black text-center border-r border-black border-opacity-5 last:border-0">
                                            {{i + 1}}
                                        </td>
                                        <td scope="row" class="py-4 px-6 text-black text-center border-r border-black border-opacity-5 last:border-0">
                                            <Multiselect
                                                v-model="input.service"
                                                v-bind="queryProducts"
                                                class="w-[300px] shrink-0 text-sm tracking-wider text-black border border-black border-opacity-10 shadow-sm-spread outline-0"
                                            />
                                        </td>
                                        <td scope="row" class="max-w-[100px] py-4 px-6 text-black text-center border-r border-black border-opacity-5 last:border-0">
                                            <input type="number"
                                            v-model="input.quantity"
                                            class="w-full no-arrow rounded border border-black border-opacity-10 transition duration-250 focus:ring-1 focus:ring-blue">
                                        </td>
                                        <td scope="row" class="w-[140px] py-4 px-6 text-black text-center border-r border-black border-opacity-5 last:border-0">
                                            <input type="number"
                                            v-model="input.price"
                                            class="w-full no-arrow rounded border border-black border-opacity-10 transition duration-250 focus:ring-1 focus:ring-blue">
                                        </td>
                                        <td scope="row" class="py-4 px-6 text-black text-center border-r border-black border-opacity-5 last:border-0">
                                            <label 
                                            :for="`gst_enable_${i}`"
                                            class="w-fit inline-flex relative items-center cursor-pointer m-auto">
                                                <input 
                                                type="checkbox"
                                                :id="`gst_enable_${i}`" 
                                                v-model="input.gst" 
                                                class="sr-only peer">
                                                <div class="w-11 h-6 bg-black bg-opacity-20 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.9px] after:left-[2px] after:bg-white after:border-black after:border-opacity-30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue"></div>
                                            </label>
                                        </td>
                                        <td scope="row" class="max-w-[100px] font-medium text-md py-4 px-6 text-black text-center border-r border-black border-opacity-5 last:border-0">
                                            ${{ (input.price * input.quantity).toFixed(2) }}
                                        </td>
                                        <td class="px-2 py-0 m-0 text-center">
                                            <button 
                                            @click="removeRows(i)"
                                            type="button" role="button"
                                            :class="[invoiceForm.inputs.length > 1 ? 'opacity-100' : 'opacity-50', 'w-full inline-flex items-center justify-center p-0']">
                                                <Remove class="w-6 h-6 text-red" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button 
                            @click="moreRows"
                            type="button" role="button"
                            class="w-fit min-h[45px] mr-0 text-sm text-white tracking-wider font-medium flex flex-row gap-1 items-center justify-center p-2 rounded bg-warm-blue transition duration-250 hover:bg-blue">
                                <More class="w-5 h-5 text-white" />
                                More Services
                            </button>
                        </div>

                        <!-- Total calculation and details container -->
                        <div class="w-full relative flex flex-col gap-2 py-2">
                            <span>
                                <strong>Total:&nbsp;&nbsp;</strong>
                                ${{ subTotalCalculator }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="w-full p-4 flex justify-start items-center bg-white rounded border border-black border-opacity-10 shadow-sm-spread">
                    <button 
                    @click="createInvoice"
                    type="button"
                    role="button"
                    :disabled="invoiceForm.processing"
                    :class="[invoiceForm.processing ? 'opacity-80' : 'opacity-100', 'w-fit rounded px-4 py-2 flex justify-center items-center gap-2 text-white text-md font-semibold tracking-wider bg-warm-blue transition duration-250 hover:bg-blue']">
                        <Spinner :width='4' :height="4" v-if="invoiceForm.processing"></Spinner>
                        Create Invoice
                    </button>
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
        ArchiveBoxXMarkIcon as Remove,
        PlusIcon as More
    } from '@heroicons/vue/24/solid'
    import Spinner from '../../Partials/Spinner'
    import Multiselect from '@vueform/multiselect'
    import "@vueform/multiselect/themes/default.css"
    import { useForm } from '@inertiajs/inertia-vue3'
    import { computed } from '@vue/runtime-core'


    const props = defineProps({
        auth: Object,
        countries: Object,
        tracking: Number
    });

    const store = useStore()

    const subTotalCalculator = computed(() => {
        if (invoiceForm.inputs.length > 1) {
            let subtotal = []

            for (let total of invoiceForm.inputs) {
                subtotal.push((total.gst ? parseFloat((total.price * total.quantity) / 10 + (total.price * total.quantity)) : parseInt((total.price * total.quantity)).toFixed(2)))
            }
            return (subtotal.map(parseFloat).reduce((partialSum, a) => partialSum + a, 0)).toFixed(2)
        } else {
            return invoiceForm.inputs.map(input => input.gst ? ((input.price * input.quantity) / 10 + (input.price * input.quantity)).toFixed(2) : (input.price * input.quantity).toFixed(2) )[0]
        }
    })

    const invoiceForm = useForm({
        customers: null,
        sendMail: true,
        invoiceDate: new Date(),
        dueDate: new Date(),
        shippingDate: new Date(),
        trackingNumber: props.tracking,
        shippingCountry: 1,
        shippingState: null,
        shippingHouseAddress: null,
        shippingSuburb: null,
        shippingPostcode: null,
        inputs: [{
            service: null,
            quantity: 0,
            price: 0,
            gst: false
        }]
    })
    
    const moreRows = () => {
        invoiceForm.inputs.push({
            service: null,
            quantity: 0,
            price: 0,
            gst: 0,
            date: new Date(),
        })
    }
    const removeRows = i => {
        if(invoiceForm.inputs.length > 1) {
            invoiceForm.inputs.splice(i, 1)
        }
    }

    const queryCustomers = {
    	mode: 'tags',
        placeholder: 'Select a customer',
        filterResults: false,
        minChars: 1,
        resolveOnLoad: false,
        delay: 600,
        searchable: true,
        options: async (query) => {
            return await axios.get('/list/customers/search', {params: {keywords: query}}).then(response => {
                return response.data.map(customer => {
                    return { value: customer.id, label: customer.first_name + ' ' + ' ' + customer.surname + ' - ' + customer.email }
                })
            })
        }
    }

    const queryProducts = {
        placeholder: 'Select a product',
        filterResults: false,
        minChars: 1,
        resolveOnLoad: false,
        delay: 600,
        searchable: true,
        options: async (query) => {
            return await axios.get('/list/products/search', {params: {keywords: query}}).then(response => {
                return response.data.map(product => {
                    return { value: product.id, label: product.name + ' - ' + product.sku }
                })
            })
        }
    }

    const createInvoice = () => {
        if (!invoiceForm.processing) {
            invoiceForm.post(route('invoice.create'))
        }
    }
</script>