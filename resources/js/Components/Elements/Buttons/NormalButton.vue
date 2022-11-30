<template>
    <button 
    v-bind="$attrs" 
    class="no-highlight w-full rounded bg-warm-blue text-lg text-white tracking-wider font-medium px-4 py-2 transition duration-150 hover:bg-blue disabled:bg-black disabled:bg-opacity-10 disabled:text-black disabled:text-opacity-50">
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