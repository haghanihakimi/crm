<template>
    <div class="w-full relative">
        <input 
        type="text" 
        :placeholder="placeholder" 
        :value="value" 
        @input="$emit('update:value', $event.target.checked)" v-bind="$attrs"
        class="w-full min-h-12 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 focus:ring-1 focus:ring-blue">
    </div>
</template>
<script setup>
    defineProps({
        placeholder: {
            type: String,
            default: ""
        },
        value: {
            type: Boolean,
            default: ""
        }
    })
</script>