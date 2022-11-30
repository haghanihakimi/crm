<template>
    <Layout :title="'Add Brand'" :auth="auth">
        <div class="w-full max-w-2xl mx-auto mt-8 p-4 bg-white rounded border border-black border-opacity-10 shadow-md-spread">
            <Heading2 class="w-full text-lg text-center px-2 py-8">
                Create Brand
            </Heading2>
            <!-- Customer information grid - 2 grids -->
            <div class="w-full h-auto">
                <!-- Customer name & basic info section -->
                <div class="w-full flex flex-col gap-0 px-2">
                    <!-- Basic info container -->
                    <form method="POST" action="/" enctype="multipart/form-data" 
                    class="w-full flex flex-col gap-4"
                    @submit.prevent="editBrand">
                        <!-- Brand Name input -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label 
                                for="brand_name" 
                                class="block px-1 mb-2 text-sm font-medium text-black text-opacity-80 font-semibold tracking-wide">
                                    Brand Name
                                </label>
                                <input 
                                type="text"
                                id="brand_name"
                                placeholder="Brand Name" 
                                class="w-full flex-1 min-h-[48px] rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50 invalid:shadow-red invalid:border-red" 
                                v-model="editBrandForm.name" 
                                :disabled="editBrandForm.processing" />
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.name" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.name[0]}}
                            </div>

                            <!-- Found duplicated names -->
                            <div v-if="store.getters.dbDuplicateStatus" class="w-full relative flex flex-row gap-1 items-center">
                                <p class="text-red font-medium tracking-wider text-sm">
                                    <span v-if="store.getters.dbDuplicates.length >= 2">Some duplicates</span>
                                    <span v-if="store.getters.dbDuplicates.length > 0 && store.getters.dbDuplicates.length < 2">One duplicate</span>
                                    found:
                                </p>
                                <ul>
                                    <li
                                    v-for="(duplicate, i) in store.getters.dbDuplicates"
                                    :key="i"
                                    class="text-red font-medium tracking-wider text-sm inline-block" >
                                        <strong>
                                            {{duplicate.name}}{{i === store.getters.dbDuplicates.length - 1 ? '' : ',&nbsp;'}}
                                        </strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Brand Logo file input -->
                        <div class="w-full relative flex flex-row flex-wrap gap-4">
                            <div class="w-full relative flex-1">
                                <label class="block mb-2 text-sm font-medium text-black" 
                                for="logo">Brand Logo</label>
                                <input 
                                class="block mb-5 w-full text-sm text-black bg-blue bg-opacity-5 rounded border border-black border-opacity-10 cursor-pointer focus:outline-none ring-0" 
                                id="logo" 
                                @input="editBrandForm.logo = $event.target.files[0]"
                                type="file"
                                accept="image/jpg, image/jpeg, image/png">
                            </div>
                            <!-- Field errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.logo" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.logo[0]}}
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
                                v-model="editBrandForm.description" 
                                :disabled="editBrandForm.processing">
                                </textarea>
                            </div>
                            
                            <!-- Fields errors -->
                            <div v-if="$page.props.errorBags.default && $page.props.errorBags.default.description" 
                            class="w-full flex flex-col gap-1 text-red font-normal text-sm">
                                &cross;&nbsp;{{$page.props.errorBags.default.description[0]}}
                            </div>
                        </div>
                        <!-- Current Brand Logo -->
                        <div v-if="brand.logo_path" class="w-full relative flex flex-col gap-2">
                            <span class="text-md text-black font-normal">Current Logo:</span>
                            <img 
                            :src="`/storage/brands/logo/${brand.id}/${brand.logo_path}`"
                            alt="Brand"
                            class="w-14 h-auto rounded">
                        </div>

                        <!-- Confirm & create -->
                        <div class="select-none w-full relative flex flex-row flex-wrap gap-4">
                            <Button 
                            :value="'Add Brand'" 
                            type="submit" 
                            role="button"
                            :disabled="editBrandForm.processing || !editBrandForm.isDirty"/>
                        </div>
                        <Link :href="route('brands.list.view')" target="_self" class="text-blue text-base font-medium">
                            All Brands
                        </Link>
                        <p v-if="flash.message && flash.message.new_customer_success" 
                        class="text-green font-semibold tracking-wider text-md"
                        v-html="flash.message.new_customer_success" >
                        </p>

                        <!-- Form submission errors/messages report -->
                        <div v-if="flash.message && !flash.message.new_customer_success" class="w-full relative flex flex-row flex-wrap gap-4">
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
        brand: Object
    });
    const store = useStore()

    const editBrandForm = useForm({
        id: props.brand.id,
        name: props.brand.name,
        logo_path: props.brand.logo_path,
        logo: null,
        description: props.brand.description,
    })

    const searchDuplicates = (param) => {
        if (param.length > 0 && param.length <= 64) {
            store.dispatch('fillDbDuplicates', {path: 'brand', keyword: param})
        } else {
            store.commit('fillDbDuplicates', [])
            store.commit('toggleDbDuplicateStatus', false)
        }
    }

    const editBrand = () => {
        if (!editBrandForm.processing) {
            editBrandForm.post(route('brand.edit.submit', {brand: props.brand.id}))
        }
    }
    
    watch(() => editBrandForm.name,
        debounce (function(values) {
            searchDuplicates(values)
        }, 750)
    )

    onMounted(() => {
        store.commit('fillDbDuplicates', [])
        store.commit('toggleDbDuplicateStatus', false)
    })
</script>