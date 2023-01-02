<template>
    <Layout :title="'Brands'" :auth="auth">
        <div class="w-full relative m-auto px-4">
            <div class="w-full max-w-8xl h-auto mx-auto mt-8 mb-4 relative flex flex-col justify-center items-start gap-4 z-50">
                <h1 class="text-lg font-semibold tracking-wider capitalize">
                    All Brands
                </h1>
                <Link 
                v-if="$page.props.abilities.canCreateBrands"
                :href="route('brands.create.view')" 
                target="_self"
                class="w-full w-fit rounded text-md text-white font-normal tracking-wider p-2 px-4 bg-warm-blue transition duration-150 hover:bg-blue" >
                    Add Brand
                </Link>
                <BrandsFilter :params="params" />
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
                                Logo
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Description
                            </th>
                            <th 
                            v-if="$page.props.abilities.canExportBrands && $page.props.abilities.canEditBrands"
                            scope="col" 
                            class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(brand, i) in brands.data" :key="i" class="bg-white">
                            <td class="py-4 px-6 font-medium text-black whitespace-nowrap text-center border-r border-black border-opacity-5 last:border-0">
                                {{brand.id}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{brand.name}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                <img 
                                class="w-10 h-auto rounded m-auto"
                                v-if="brand.logo_path" 
                                :src="`/storage/brands/logo/${brand.id}/${brand.logo_path}`" />
                                <span v-else>
                                    Not Available
                                </span>
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{brand.description ? brand.description : 'Not available'}}
                            </td>
                            <td
                            v-if="$page.props.abilities.canExportBrands && $page.props.abilities.canEditBrands"
                            class="select-none flex items-center justify-center text-center flex-wrap py-4 px-6 space-x-2 border-r border-black border-opacity-5 last:border-0">
                                <a 
                                v-if="$page.props.abilities.canEditBrands"
                                :href="route('brands.edit.view', {brand: brand.id})" class="basis-1 flex justify-center items-center w-6 h-6 min-w-[24px] rounded bg-blue font-medium text-blue">
                                    <Edit class="w-4 h-4 text-white" />
                                </a>
                                <button 
                                v-if="$page.props.abilities.canExportBrands"
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
                <Pagination :links="brands.links" :params="params" />
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
    import BrandsFilter from '../../Partials/NamingFilter'
    import Pagination from '../../Partials/Pagination'


    const props = defineProps({
        auth: Object,
        params: Object,
        brands: Object,
    });

    const store = useStore()
    
    onMounted(() => {
        store.commit('fillDbDuplicates', [])
        store.commit('toggleDbDuplicateStatus', false)
    })
</script>