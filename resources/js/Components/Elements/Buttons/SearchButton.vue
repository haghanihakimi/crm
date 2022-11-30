<template>
    <button 
    v-bind="$attrs" 
    class="no-highlight absolute w-[48px] h-[42px] top-0 left-0 bottom-0 my-auto bg-white-fc rounded-tl rounded-bl border border-black border-opacity-10 text-left text-md text-black tracking-wider font-medium p-0 flex justify-center items-center transition duration-150 disabled:bg-black disabled:bg-opacity-10 disabled:text-black disabled:text-opacity-50">
        <slot />
    </button>
</template>