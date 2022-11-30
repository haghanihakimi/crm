<template>
  <div v-if="params.page > 1 || links.length > 1" class="select-none">
    <div class="flex flex-wrap my-8 flex-row gap-1">
      <template v-for="(link, key) in links" :key="key">
        <div v-if="link.url === null" :class="link.active ? 'bg-blue text-white' : 'bg-white text-black'" class="text-sm w-fit min-w-[36px] h-fit py-2 px-2 font-medium rounded border border-black border-opacity-5 flex justify-center items-center shadow-sm-spread" 
        v-html="link.label" />
        <inertia-link 
        v-else
        class="no-highlight text-sm w-fit min-w-[48px] h-fit text-white font-medium p-2 rounded flex justify-center items-center border border-black border-opacity-5" 
        :class="link.active ? 'bg-green' : 'bg-blue'" 
        :href="`${params.hasOwnProperty('sort') ? `${link.url}&sort=${params.sort}` : link.url}`" 
        v-html="link.label" />
      </template>
    </div>
  </div>
</template>

<script setup>
    import { InertiaLink } from "@inertiajs/inertia-vue3";
    import { useStore } from 'vuex'

    const props = defineProps({
      links: Array,
      params: Object,
    })

    const store = useStore()
</script>