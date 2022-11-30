<template>
    <div class="w-full h-[94px] bg-white-fc relative flex justify-center items-center p-4 border-b border-black border-opacity-5 z-10">
        <div class="w-full max-w-7xl bg-white relative">
            <!-- Searchbox form -->
            <form enctype="multipart/form-data"
            class="w-full relative"
            @submit.prevent="search">
                <TextInput 
                @click.stop="store.dispatch('toggleSearchPanel', true)"
                v-model="data.keyword" 
                :placeholder="'Search customers, invoices and others'" 
                class="w-full pl-14 peer"/>
                <Button type="button" role="button" class="peer-focus:bg-blue peer-focus:text-white">
                    <Search class="w-6 h-6" />
                </Button>
            </form>
            <!-- Search results -->
            <div 
            @click.stop="store.dispatch('toggleSearchPanel', true)"
            @keydown.esc="store.dispatch('toggleSearchPanel', false)"
            v-if="store.getters.searchPanel && store.getters.search.length > 0" 
            class="select-none w-full h-auto absolute left-0 mt-1 bg-white rounded border-black border border-opacity-5 px-2 shadow-lg px-0 overflow-auto overflow-x-hidden">
                <div class="relative w-full">
                    <div class="w-full p-4 flex justify-center items-center" v-if="store.getters.searchLoading">
                        <svg aria-hidden="true" class="mr-2 w-8 h-8 text-white-fc border animate-spin fill-blue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="stroke-black stroke-[0.5]" d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path class="stroke-black stroke-[0.5]" d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                    <ul v-if="!store.getters.searchLoading">
                        <li 
                        v-for="(result, i) in store.getters.search"
                        :key="i"
                        class="border-b border-black border-opacity-5 px-4 rounded transition duration-150 hover:bg-blue last:border-0 group">
                            <Hyperlink href="#" target="_self" class="flex flex-col no-highlight">
                                <p class="transition duration-150 group-hover:text-white">
                                    <span v-if="result.email || result.phone">
                                        <strong>Customer:</strong> {{result.first_name}} &dash;    
                                    </span> 
                                    <span v-if="result.tracking_number">
                                        <strong>Invoice:</strong> {{result.tracking_number}} &dash;    
                                    </span> 
                                    <Span class="text-black text-opacity-60 text-xs transition duration-150 group-hover:text-white group-hover:text-opacity-75">
                                        #{{result.id}}
                                    </Span>
                                </p>
                                <p class="text-black text-opacity-60 text-xs transition duration-150 group-hover:text-white group-hover:text-opacity-75">
                                    <span v-if="result.email || result.phone">
                                        {{result.phone ? `Phone: ${result.phone}` : `email: ${result.email}`}}
                                    </span>
                                    <span v-if="result.tracking_number">
                                        Invoice Due: {{moment(result.invoice_due).format('DD, MMM - YYYY')}}    
                                    </span> 
                                </p>
                                <p class="text-black text-opacity-60 text-xs transition duration-150 group-hover:text-white group-hover:text-opacity-75">
                                    <span v-if="result.name || result.price">
                                        {{`Product: ${result.name}, Price: $${result.price}`}}
                                    </span>
                                    <span v-if="result.sku">
                                        SKU: {{result.sku}}    
                                    </span> 
                                </p>
                            </Hyperlink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { computed, onMounted, reactive, watch  } from 'vue'
    import { useStore } from 'vuex'
    import moment from 'moment'
    import debounce from 'lodash/debounce'
    import { MagnifyingGlassIcon as Search } from '@heroicons/vue/24/solid'
    import TextInput from '../Components/Elements/Inputs/NormalTextbox'
    import Button from '../Components/Elements/Buttons/SearchButton'
    import Hyperlink from '../Components/Elements/Links/HyperlinkBlack'
    import Span from '../Components/Elements/Spans/SidebarSpanBlack'

    //Store/Vuex section starts
    const store = useStore()
    //Store/Vuex section ends

    //Props section starts
    const props = defineProps({
        auth: Object,
    })
    //Props section ends


    //Reactive data starts
    const data = reactive({
        keyword: ''
    })
    //Reactive data ends

    //Methods section starts

    const search = (param) => {
        if (param.length > 0 && param.length <= 64) {
            store.dispatch('fillSearch', param)
        } else {
            store.commit('fillSearch', [])
        }
    }

    //Methods section ends

    watch(() => data.keyword,
        debounce (function(values) {
            search(values)
        }, 750)
    )

    onMounted(() => {
        window.addEventListener('click', () => {
            store.dispatch('toggleSearchPanel', false)
        })
    })
</script>