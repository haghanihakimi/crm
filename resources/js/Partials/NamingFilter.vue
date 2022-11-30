<template>
    <div class="w-full relative p-2 rounded bg-white border border-black border-opacity-5 shadow-sm-spread">
        <Listbox v-model="selectedFilter" class="bg-white-fc relative border border-black border-opacity-10 rounded">
            <div class="bg-white-fc relative max-w-[300px]">
                <ListboxButton
                class="relative w-full flex flex-row cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left sm:text-sm">
                    <span class="mr-3">
                        <Filter class="h-5 w-5 text-black" aria-hidden="true"/>
                    </span>
                    <span class="block truncate">{{ selectedFilter.type }}</span>
                    <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                        class="h-5 w-5 text-black"
                        aria-hidden="true"/>
                    </span>
                </ListboxButton>

                <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                    <ListboxOptions
                    class="bg-white-fc absolute mt-1 max-h-60 w-full overflow-auto rounded border border-black border-opacity-10 shadow-sm-spread py-1 text-base focus:outline-none sm:text-sm z-5">
                        <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="filter in filters"
                        :key="filter.type"
                        :value="filter"
                        as="div">
                            <ul>
                                <li
                                :class="[
                                active ? 'bg-white text-blue' : 'text-black',
                                'relative cursor-pointer select-none py-0 pl-10 pr-4 transition duration-150 z-5']">
                                    <Link  
                                    :href="params.hasOwnProperty('page') ? `?page=${params.page}&sort=${filter.keyword}` : `?sort=${filter.keyword}`" 
                                    class="w-full text-left py-2 block" target="_self">
                                        {{filter.type}}
                                    </Link>
                                    <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue">
                                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                    </span>
                                </li>
                            </ul>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>
<script setup>
    import { onMounted, ref } from '@vue/runtime-core'
    import { 
        CheckIcon, 
        ChevronUpDownIcon,
    } from '@heroicons/vue/24/solid'
    import {
        FunnelIcon as Filter
    } from '@heroicons/vue/24/outline'
    import {
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    } from '@headlessui/vue'
    
    const props = defineProps({
        params: Object
    })
    
    const filters = [
        { type: 'Default', keyword: 'default' },
        { type: 'A-Z', keyword: 'az' },
        { type: 'Z-A', keyword: 'za' },
        { type: 'Newest', keyword: 'newest' },
        { type: 'Oldest', keyword: 'oldest' },
    ]
    const selectedFilter = ref(
        filters[
            props.params.hasOwnProperty('sort') 
                ? filters.map(filter => filter.keyword).indexOf(props.params.sort) 
                : 0
        ]
    )

    onMounted(() => {
    })
</script>