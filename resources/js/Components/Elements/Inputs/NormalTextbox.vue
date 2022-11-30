<template>
    <input 
    type="text" 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" 
    v-bind="$attrs"
    class="min-h-12 rounded border border-black border-opacity-10 text-md tracking-wider font-medium transition duration-150 shadow-sm-spread focus:ring-1 focus:ring-blue disabled:opacity-50">
</template>
<script setup>
    defineProps({
        modelValue: {
            type: String,
            default: ""
        }
    })
</script>