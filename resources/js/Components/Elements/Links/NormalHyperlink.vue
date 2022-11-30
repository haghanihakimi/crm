<template>
    <div class="w-full relative">
        <Link :href="link" :target="`_${target}`"
        class="no-highlight w-full inline-block text-sm px-2 py-0 tracking-wider font-medium text-blue">
            {{ value }}
        </Link>
    </div>
</template>
<script setup>
    defineProps({
        value: {
            type: String,
            default: ""
        },
        link: {
            type: String,
            default: "/"
        },
        target: {
            type: String,
            default: 'self'
        }
    })
</script>
