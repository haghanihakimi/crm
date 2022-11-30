<template>
    <Layout :title="'Roles & Permission'" :auth="auth">
        <div class="w-full h-auto relative m-auto px-4">

            <div class="w-full h-auto max-w-xl bg-white m-auto my-4 overflow-x-auto relative shadow-md rounded border border-black border-opacity-10 z-0">
                <div class="w-full h-auto flex flex-col gap-4 relative px-4 py-2">
                    <h1 class="w-full text-center font-semibold tracking-wider text-lg py-2">
                        Roles &amp; Permissions
                    </h1>
                    <h2 class="text-left text-md font-medium text-black">
                        Roles
                    </h2>
                    <select 
                    name="permissions" 
                    v-model="rolesPermissionForm.role"
                    class="w-full p-2 rounded border border-black border-opacity-10 capitalize shadow-md cursor-pointer">
                        <option 
                        v-for="(role, i) in roles"
                        :key="i"
                        :value="role.id">{{role.name}}</option>
                    </select>
                    <h2 class="text-left text-md font-medium text-black">
                        Permissions
                    </h2>
                    <v-item-group multiple v-model="rolesPermissionForm.permission" class="select-none p-0 m-0">
                        <v-container class="flex flex-row flex-wrap gap-4 p-0 m-0">
                                    <v-item 
                                    v-for="(permission, i) in permissions" 
                                    :key="i"
                                    v-slot="{ isSelected, toggle }" 
                                    :value="permission.value">
                                        <v-card
                                        :class="[isSelected ? 'bg-green' : 'bg-blue', 'w-auto px-6 py-2 rounded-full text-white color-transparent hover:bg-red']"
                                        @click="toggle">
                                            <v-scroll-y-transition>
                                                <div class="text-center capitalize">
                                                    {{ permission.label }}
                                                </div>
                                            </v-scroll-y-transition>
                                        </v-card>
                                    </v-item>
                        </v-container>
                    </v-item-group>
                   
                   
                    <!-- <div class="w-full min-h-[48px] relative">
                        <Multiselect
                            v-model="rolesPermissionForm.permission"
                            v-bind="permissionsTags"
                            class="capitalize ring-0 outline-0 focus:ring-1 focus:ring-blue"
                        ></Multiselect>
                    </div> -->

                    <div class="w-full flex flex-row gap-2 select-none">
                        <button
                        v-if="rolesPermissionForm.isDirty"
                        :disabled="rolesPermissionForm.processing || !rolesPermissionForm.isDirty"
                        type="submit"
                        role="button"
                        @click="saveChanges"
                        class="w-full mx-auto px-4 py-2 rounded bg-warm-blue text-white text-base font-medium tracking-wider transition duration-150 hover:bg-blue">
                            Save
                        </button>
                    </div>

                    <!-- Errors and messages -->
                    <p v-if="flash.message && flash.message.role_permissions_saved" 
                    class="text-green font-semibold tracking-wider text-md">
                        {{flash.message.role_permissions_saved}}
                    </p>
                </div>
            </div>
        </div>
    </Layout>
</template>
    <script setup>
        import Layout from '../../Layouts/Dashboard'
        import { onMounted, watch } from '@vue/runtime-core'
        import debounce from 'lodash/debounce'
        import { useStore } from 'vuex'
        import { useForm } from '@inertiajs/inertia-vue3'
        import moment from 'moment'
        import {
            PencilIcon as Edit,
            ArrowDownTrayIcon as Download,
        } from '@heroicons/vue/24/solid'
        import UsersFilter from '../../Partials/NamingFilter'
        import Pagination from '../../Partials/Pagination'
        import "@vueform/multiselect/themes/default.css"
        import Multiselect from '@vueform/multiselect'


        const props = defineProps({
            auth: Object,
            flash: Object,
            roles: Object,
            permissions: Object,
            role: Boolean,
        });

        const store = useStore()

        const permissionsTags = {
            mode: 'tags',
            closeOnSelect: true,
            options: props.permissions,
            searchable: true,
            createOption: false
        }

        const rolesPermissionForm = useForm({
            role: 2,
            permission: [],
        })
        
        const watchRoles = currentRole => {
            rolesPermissionForm.permission = []
            rolesPermissionForm.permission.push(...props.roles.filter(
                role => role.id == currentRole)[0].permissions.map(permission => permission.id))
        }

        const saveChanges = () => {
            if(!rolesPermissionForm.processing) {
                rolesPermissionForm.post(route('roles.permissions.changes.save'));
            }
        }

        watch(() => rolesPermissionForm.role,
            debounce (function(values) {
                watchRoles(values)
            }, 100)
        )
        
        onMounted(() => {
            watchRoles(rolesPermissionForm.role)
            store.commit('fillDbDuplicates', [])
            store.commit('toggleDbDuplicateStatus', false)
        })
    </script>