<template>
    <div class="w-full relative">
        <Link v-bind="$attrs" 
        class="no-highlight w-full inline-block text-md tracking-wider font-medium text-black block py-3">
            <slot />
        </Link>
    </div>
</template>
<script setup>
</script>
