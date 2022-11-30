<template>
    <div class="w-full h-full p-4 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-lg fixed top-0 left-0 z-[999]">
        <div class="w-full max-w-xl flex flex-col gap-0 rounded bg-white p-2 shadow-xl animate-fadeInBounce">
            <h3 class="w-full p-2 text-black font-semibold tracking-wider text-lg border-b border-black border-opacity-10">
                {{store.getters.contents.texts.heading}}
            </h3>
            <p class="w-full p-2 text-black font-normal tracking-wide text-md" v-html="store.getters.contents.texts.paragraph"></p>
            <div class="w-full relative">
                <form action="/" method="DELETE" enctype="multipart/form-data"
                class="w-full relative p-2 mt-6 flex justify-end items-center gap-3"
                @submit.prevent="deleteRow">
                    <button 
                    @click="closeDeleteModal"
                    type="button"
                    role="button"
                    class="no-highlight px-4 py-2 rounded bg-green text-white">
                        Cancel
                    </button>
                    <button 
                    type="submit"
                    role="button"
                    :disabled="deleteForm.processing"
                    class="no-highlight px-4 py-2 rounded bg-red text-white flex justify-center items-center">
                        <span v-if="!deleteForm.processing">Delete</span>
                        <svg v-if="deleteForm.processing" aria-hidden="true" class="mr-2 w-6 h-6 text-white animate-spin fill-black fill-opacity-50" viewBox="0 0 100 101" fill="none">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span v-if="deleteForm.processing" class="sr-only">Deleting...</span>
                    </button>
                </form> 
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useForm } from '@inertiajs/inertia-vue3'
    import {useStore} from 'vuex'
    import { useToast } from "vue-toastification"

    const store = useStore()
    const toast = useToast()

    const closeDeleteModal = () => {
        store.dispatch('toggleDeleteModal', false)
        store.dispatch('fillContents', [])
    }

    const deleteForm = useForm({
        customer_id: store.getters.contents.row.id
    })

    const deleteRow = () => {
        if (!deleteForm.processing) {
            deleteForm.delete(store.getters.contents.action, {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success(`${store.getters.contents.row.name} successfully deleted from record.`)
                    closeDeleteModal()
                }
            })
        }
    }
</script>