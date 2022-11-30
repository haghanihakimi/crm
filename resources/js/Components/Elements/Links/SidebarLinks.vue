<template>
    <div class="w-full relative">
        <Link :href="link" :target="`_${target}`"
        class="no-highlight w-full inline-block text-md tracking-wider font-medium text-blue block px-4 py-2 hover:underline">
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
