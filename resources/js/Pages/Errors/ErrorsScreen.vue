<template>
    <div v-if="Object.keys($page.props.errors).length <= 0" class="w-full h-full p-4 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-lg fixed top-0 left-0 z-[999]">
        <div class="w-full max-w-xl flex flex-col gap-0 rounded bg-white p-2 shadow-xl animate-fadeInBounce">
            <h3 class="w-full p-2 text-black font-semibold tracking-wider text-lg border-b border-black border-opacity-10">
                ERROR {{report.status}}
            </h3>
            <p 
            class="w-full p-2 text-black font-normal tracking-wide text-md"
            v-html="throwError">
            </p>
            <div class="w-full relative flex justify-end items-center p-2 mt-6">
                <Link 
                :href="report.page"
                class="no-highlight px-4 py-2 rounded bg-red text-white">
                    OK
                </Link>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { Inertia } from '@inertiajs/inertia'
    import { usePage } from '@inertiajs/inertia-vue3'
    import { computed, onMounted } from '@vue/runtime-core'
    import { useStore } from 'vuex'

    const props = defineProps({
        report: Object
    })
    const store = useStore()

    const throwError = computed({
        get() {
            let errorMessage = ""

            switch (props.report.status) {
                case 503:
                    errorMessage = `
                    This service is unavailable at the moment. <br />
                    If you tried many times and service is still unavailable please 
                    <a href="#" class="text-blue">report</a> it.
                    `
                    break;
                case 500:
                    errorMessage = `
                    An internal server error occured.
                    If you tried many times and you still receive this error, please 
                    <a href="#" href="_blank" class="text-blue">report</a> it.
                    `
                    break;
                case 404:
                    errorMessage = "This page is unavailable."
                    break;
                case 403:
                    errorMessage = "Unauthorized access."
                    break;
                default:
                    errorMessage = "OOPS! Something went wrong! Please try again later."
                    break;
            }
            return errorMessage
        }
    })

    onMounted(() => {
        store.dispatch('toggleDeleteModal', false)
        store.dispatch('fillContents', [])

        if (Object.keys(usePage().props.value.errors).length > 0) {
            Inertia.visit(props.report.page)
        }
    })
</script>