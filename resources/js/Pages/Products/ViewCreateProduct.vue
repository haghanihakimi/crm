<template>
    <Layout :title="'Create Product'" :auth="auth">
        <div class="w-full max-w-2xl mx-auto mt-8 p-4 bg-white rounded border border-black border-opacity-10 shadow-md-spread">
            <Heading2 class="w-full text-lg text-center px-2 py-8">
                Create Product
            </Heading2>
            <!-- Product information grid - 2 grids -->
            <div class="w-full h-auto">
                <!-- Product name & basic info section -->
                <div class="w-full flex flex-col gap-0 px-2">
                    <!-- Basic info container -->
                    <form method="POST" action="/" enctype="multipart/form-data" 
                    class="w-full flex flex-col gap-4"
                    @submit.prevent="createProduct">
                        <!-- Product Name and sku inputs -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                for="product_name" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Name
                                </label>
                                <input 
                                type="text"
                                id="product_name"
                                placeholder="Product Name" 
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createProductForm.name" 
                                :disabled="createProductForm.processing" />
                            </div>
                            <div class="w-full relative flex-1">
                                <label 
                                for="product_sku" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    SKU
                                </label>
                                <input 
                                type="text"
                                id="product_sku"
                                placeholder="Product SKU" 
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createProductForm.sku" 
                                :disabled="createProductForm.processing" />
                                <div class="w-full flex flex-row gap-1">
                                    <button 
                                    type="button"
                                    @click="createProductForm.sku = Math.floor((Math.random() * new Date().getTime()) / 1500)"
                                    class="block w-fit h-fit text-sm text-blue font-normal tracking-wider p-1">
                                        Random SKU
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.name" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.name[0]}}
                            </div>
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.sku" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.sku[0]}}
                            </div>
                        </div>
                        <!-- Product regular and sale prices inputs -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                for="regular_price" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Regular Price
                                </label>
                                <input 
                                type="number"
                                step=".01"
                                min="0"
                                id="regular_price"
                                placeholder="Regular Price" 
                                class="no-arrow w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createProductForm.price" 
                                :disabled="createProductForm.processing" />
                            </div>
                            <div class="w-full relative flex-1">
                                <label 
                                for="sale_price" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Sale Price
                                </label>
                                <input 
                                type="number"
                                step=".01"
                                min="0"
                                id="sale_price"
                                placeholder="Sale Price" 
                                class="no-arrow w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createProductForm.sale_price" 
                                :disabled="createProductForm.processing" />
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.price" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.price[0]}}
                            </div>
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.sale_price" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.sale_price[0]}}
                            </div>
                        </div>
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                for="brand" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Product Brand
                                </label>
                                <select name="brand" id="brand"
                                v-model="createProductForm.brand"
                                class="w-full rounded cursor-pointer border border-black border-opacity-10">
                                    <option 
                                    v-for="(brand, i) in brands.data"
                                    :key="i"
                                    :value="brand.id">{{brand.name}}</option>
                                </select>
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.brand" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.brand[0]}}
                            </div>
                        </div>
                        <!-- Additional Description input -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                for="description" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Descriptions
                                </label>
                                <textarea 
                                type="text"
                                id="description"
                                placeholder="Additional Descriptions (Optional)" 
                                class="w-full flex-1 min-h-[120px] max-h-52 resize-y rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="createProductForm.description" 
                                :disabled="createProductForm.processing">
                                </textarea>
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.description" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.description[0]}}
                            </div>
                        </div>

                        <!-- Confirm & create -->
                        <div class="select-none w-full relative flex flex-row flex-wrap gap-4">
                            <Button 
                            :value="'Create Product'" 
                            type="submit" 
                            role="button"
                            :disabled="createProductForm.processing || !createProductForm.isDirty"/>
                        </div>
                        <Link :href="route('product.view.list')" target="_self" class="text-blue text-base font-medium">
                            All Products
                        </Link>
                        <p 
                        v-if="flash.message && flash.message.new_customer_success" 
                        class="text-green font-semibold tracking-wider text-md"
                        v-html="flash.message.new_customer_success" >
                        </p>

                        <!-- Form submission errors/messages report -->
                        <div 
                        v-if="flash.message && !flash.message.new_customer_success" 
                        class="w-full relative flex flex-row flex-wrap gap-4">
                            <p v-for="(message, i) in flash.message" :key="i" v-html="message"></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { onMounted, watch } from '@vue/runtime-core'
    import debounce from 'lodash/debounce'
    import { useStore } from 'vuex'
    import { useForm } from '@inertiajs/inertia-vue3'
    import Heading2 from '../../Components/Elements/Headings/SidebarH2'
    import InputText from '../../Components/Elements/Inputs/NormalTextbox'
    import Button from '../../Components/Elements/Buttons/NormalButton.vue'

    const props = defineProps({
        auth: Object,
        flash: Object,
        brands: Object,
    });
    const store = useStore()

    const createProductForm = useForm({
        brand: 2,
        name: null,
        sku: null,
        description: null,
        price: 0.00,
        sale_price: 0.00
    })

    const createProduct = () => {
        if (!createProductForm.processing) {
            createProductForm.post(route('product.create.new'))
        }
    }

    onMounted(() => {
        store.commit('fillDbDuplicates', [])
        store.commit('toggleDbDuplicateStatus', false)
    })
</script>