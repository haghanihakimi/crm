<template>
    <Layout :title="'Products'" :auth="auth">
        <div class="w-full relative m-auto px-4">
            <div class="w-full max-w-8xl h-auto mx-auto mt-8 mb-4 relative flex flex-col justify-center items-start gap-4 z-50">
                <h1 class="text-lg font-semibold tracking-wider capitalize">
                    All Products
                </h1>
                <Link 
                :href="route('product.create.view')" 
                target="_self"
                class="w-full w-fit rounded text-md text-white font-normal tracking-wider p-2 px-4 bg-warm-blue transition duration-150 hover:bg-blue" >
                    Create Product
                </Link>
                <ProductsFilter :params="params" />
            </div>
            <div class="w-full max-w-8xl m-auto my-4 overflow-x-auto relative shadow-md rounded border border-black border-opacity-10 z-0">
                <table class="w-full text-sm text-left text-black">
                    <thead class="select-none text-sm text-black uppercase bg-black bg-opacity-[0.0075]">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                ID
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                SKU
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Brand
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Description
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Regular Price
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Sale Price
                            </th>
                            <th 
                            v-if="$page.props.abilities.canExportProducts && $page.props.abilities.canEditProducts"
                            scope="col" 
                            class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, i) in products.data" :key="i" class="bg-white border-b border-black border-opacity-5 last:border-0 transition duration-150 hover:bg-black hover:bg-opacity-[0.015]">
                            <td class="py-4 px-6 font-medium text-black whitespace-nowrap text-center border-r border-black border-opacity-5 last:border-0">
                                {{product.id}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{product.name}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{product.sku}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{product.brands.name}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{product.description ? product.description : 'Not available'}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                ${{(product.price).toFixed(2)}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{product.sale_price ? `$${(product.sale_price).toFixed(2)}` : 'Not available'}}
                            </td>
                            <td 
                            v-if="$page.props.abilities.canExportInvoices && $page.props.abilities.canEditInvoices"
                            class="select-none flex items-center justify-center text-center flex-wrap py-4 px-6 space-x-2 border-r border-black border-opacity-5 last:border-0">
                                <a 
                                v-if="$page.props.abilities.canExportProducts"
                                :href="route('products.view.edit', {product: product.id})"
                                class="basis-1 flex justify-center items-center w-6 h-6 min-w-[24px] rounded bg-blue font-medium text-blue">
                                    <Edit class="w-4 h-4 text-white" />
                                </a>
                                <button 
                                v-if="$page.props.abilities.canEditProducts"
                                class="basis-1 flex justify-center items-center w-6 h-6 min-w-[24px] rounded bg-green font-medium text-blue">
                                    <Download class="w-4 h-4 text-white" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Pagination section -->
            <div class="w-full flex justify-center items-center">
                <Pagination :links="products.links" :params="params" />
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { onMounted } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    import moment from 'moment'
    import {
        PencilIcon as Edit,
        ArrowDownTrayIcon as Download,
    } from '@heroicons/vue/24/solid'
    import ProductsFilter from '../../Partials/ProductsFilter'
    import Pagination from '../../Partials/Pagination'


    const props = defineProps({
        auth: Object,
        params: Object,
        products: Object,
    });

    const store = useStore()
    
    onMounted(() => {
        store.commit('fillDbDuplicates', [])
        store.commit('toggleDbDuplicateStatus', false)
    })
</script>