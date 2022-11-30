<template>
    <button 
    v-bind="$attrs" 
    class="no-highlight w-full min-h-[48px] rounded text-left text-md text-blue tracking-wider font-medium px-4 py-2 disabled:bg-black disabled:bg-opacity-10 disabled:text-black disabled:text-opacity-50">
        {{ value }}
    </button>
</template>
<script setup>
    defineProps({
        value: {
            type: String,
            default: ""
        }
    })
</script>