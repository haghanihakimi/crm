temp<template>
    <Layout :title="'Edit User'" :auth="auth">
        <div class="w-full m-auto flex justify-center items-center px-4 py-16">
            <div class="w-full max-w-2xl p-6 bg-white rounded border border-black border-opacity-10 shadow-md-spread">
                <!-- Page tabs - General tab is activated. -->
                <div class="select-none text-sm font-medium text-center text-black border-b border-black border-opacity-10 mb-8">
                    <ul class="flex flex-wrap">
                        <li class="mr-2">
                            <a 
                            :href="route('users.general.view.edit', {user: user.data.id})" 
                            class="inline-block p-4 text-black border-b-2 border-transparent hover:text-blue hover:border-blue"
                            aria-current="page">
                                General
                            </a>
                        </li>
                        <li class="mr-2">
                            <a 
                            :href="route('users.roles.view.edit', {user: user.data.id})" 
                            class="inline-block p-4 border-b-2 text-blue border-blue">
                                Role &amp; Permissions
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- General settings container and inputs -->
                <form
                method="post"
                enctype="multipart/form-data"
                action="/"
                class="select-none w-full flex flex-col gap-6"
                @submit.prevent="submitUserRole" >
                    <!-- Form heading -->
                    <h2 class="w-full text-center font-semibold tracking-wider text-base">
                        User Roles & Permissions
                    </h2>
                    <!-- Inputs container -->
                    <div class="w-full relative flex flex-col gap-2">
                        <select 
                        v-model="editRolesForm.roles"
                        class="w-full rounded border border-black border-opacity-10 cursor-pointer capitalize shadow-md">
                            <option 
                            v-for="(role, i) in roles"
                            :key="i"
                            :value="role.id">{{role.name}}</option>
                        </select>
                        <!-- Errors report -->
                        <div v-if="editRolesForm.hasErrors" class="w-full relative">
                            <p class="text-red font-medium tracking-wider text-md p-2">
                                {{editRolesForm.errors.roles}}
                            </p>
                        </div>
                    </div>

                    <!-- List of related permissions -->
                    <div class="w-full realtive">
                        <ul class="flex flex-row gap-2 flex-wrap">
                            <li 
                            v-for="permission of editRolesForm.permissions" 
                            :key="permission" 
                            class="select-text w-fit capitalize text-md text-black tracking-wider p-2 cursor-pointer inline-block bg-white-fc border border-black border-opacity-10 rounded-2xl">
                                <span class="text-green font-semibold">&check;&nbsp;</span>Can {{permission}}
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Submit button -->
                    <button 
                    :disabled="editRolesForm.processing && !editRolesForm.isDirty"
                    role="button"
                    type="submit"
                    class="w-full max-w-sm px-4 py-2 rounded bg-warm-blue text-white font-medium tracking-wider text-base m-auto transition duration-150 hover:bg-blue">
                        Save Changes
                    </button>

                    <!-- Message reports -->
                    <div v-if="flash.message" class="w-full relative">
                        <p class="w-full p-2 text-md font-semibold tracking-wider">
                            {{flash.message}}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { onMounted, watch } from '@vue/runtime-core'
    import debounce from 'lodash/debounce'
    import moment from 'moment'
    import { useStore } from 'vuex'
    import { useForm } from '@inertiajs/inertia-vue3'

    const props = defineProps({
        auth: Object,
        user: Object,
        flash: Object,
        roles: Object,
    });
    const store = useStore()

    const editRolesForm = useForm({
        roles: props.user.data.roles.map(role => role.id)[0],
        permissions: [],
    })

    const watchRoles = currentRole => {
        editRolesForm.permissions = props.roles.filter(
            role => role.id == currentRole)[0].permissions.map(permission => permission.name)
    }

    const submitUserRole = () => {
        if (!editRolesForm.processing) {
            editRolesForm.post(route('users.roles.view.edit.save', {user: props.user.data.id}))
        }
    }

    watch(() => editRolesForm.roles,
        debounce (function(values) {
            watchRoles(values)
        }, 100)
    )

    onMounted (() => {
        watchRoles(editRolesForm.roles)
    })
</script>