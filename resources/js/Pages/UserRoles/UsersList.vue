<template>
    <Layout :title="'Users'" :auth="auth">
        <div class="w-full relative m-auto px-4">
            <div class="w-full max-w-8xl h-auto mx-auto mt-8 mb-4 relative flex flex-col justify-center items-start gap-4 z-50">
                <h1 class="text-lg font-semibold tracking-wider capitalize">
                    All Users
                </h1>
                <Link 
                :href="route('view.create.user')"
                target="_self"
                class="w-full w-fit rounded text-md text-white font-normal tracking-wider p-2 px-4 bg-warm-blue transition duration-150 hover:bg-blue" >
                    Add User
                </Link>
                <UsersFilter :params="params" />
            </div>
            <div class="w-full max-w-8xl m-auto my-4 overflow-x-auto relative shadow-md rounded border border-black border-opacity-10 z-0">
                <table class="w-full text-sm text-left text-black">
                    <thead class="select-none text-sm text-black uppercase bg-black bg-opacity-[0.0075]">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                ID
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                First name
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Surname
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Email
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Verified
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Gender
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, i) in users.data" :key="i" class="bg-white border-b border-black border-opacity-5 last:border-0 transition duration-150 hover:bg-black hover:bg-opacity-[0.015]">
                            <td class="py-4 px-6 font-medium text-black whitespace-nowrap text-center border-r border-black border-opacity-5 last:border-0">
                                {{user.id}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{user.fname}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{user.sname}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{user.email}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{moment(user.email_verified_at).fromNow()}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{(user.gender).charAt(0).toUpperCase() + (user.gender).slice(1)}}
                            </td>
                            <td class="select-none flex items-center justify-center text-center flex-wrap py-4 px-6 space-x-2 border-r border-black border-opacity-5 last:border-0">
                                <a 
                                :href="route('users.general.view.edit', {user: user.id})"
                                class="basis-1 flex justify-center items-center w-6 h-6 min-w-[24px] rounded bg-blue font-medium text-blue">
                                    <Edit class="w-4 h-4 text-white" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Pagination section -->
            <div class="w-full flex justify-center items-center">
                <Pagination :links="users.links" :params="params" />
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { onMounted } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    import moment from 'moment'
    import {
        PencilIcon as Edit,
        ArrowDownTrayIcon as Download,
    } from '@heroicons/vue/24/solid'
    import UsersFilter from '../../Partials/NamingFilter'
    import Pagination from '../../Partials/Pagination'
import { useForm } from '@inertiajs/inertia-vue3'


    const props = defineProps({
        auth: Object,
        params: Object,
        users: Object,
    });

    const store = useStore()
    
    onMounted(() => {
        store.commit('fillDbDuplicates', [])
        store.commit('toggleDbDuplicateStatus', false)
    })
</script>