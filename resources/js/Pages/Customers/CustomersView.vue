<template>
    <Layout :title="'Customers'" :auth="auth">
        <div class="w-full relative m-auto px-4 flex flex-col gap-1">
            <Heading2 class="text-lg px-0 pt-6">
                All Customers
            </Heading2>
            <Link 
            v-if="$page.props.abilities.canCreateCustomers"
            :href="route('customers.new.view')" 
            target="_self"
            class="w-full w-fit relative rounded text-md text-white font-normal tracking-wider mt-4 p-2 px-4 bg-warm-blue transition duration-150 hover:bg-blue" >
                Add Customer
            </Link>
            <!-- Customers List container -->
            <div class="w-full relative flex flex-col gap-6 py-6 z-5">
                <!-- Filter list of customers based on given data: 
                alphabet (a-z or z-a) or date (ascending or descending)  -->
                <CustomersFilter :params="params" />

                <table class="w-full text-sm text-left text-black shadow-sm-spread rounded">
                    <thead class="text-xs text-black uppercase bg-black bg-opacity-[0.015] rounded">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                ID
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Email
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Phone
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Company
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5">
                                Country
                            </th>
                            <th scope="col" class="py-3 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="rounded">
                        <tr v-for="(customer, i) in customers.data" :key="i" class="bg-white">
                            <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap text-center border-r border-black border-opacity-5 last:border-0">
                                {{customer.id}}
                            </th>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                <Link 
                                :href="route('customers.edit.view', {customer: customer.id})" 
                                target="_self"
                                class="text-blue font-medium" >
                                    {{customer.first_name}} {{customer.surname}}
                                </Link>
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{customer.email}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{customer.phone ? customer.phone : '&mdash;'}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{customer.company ? customer.company : '&mdash;'}}
                            </td>
                            <td class="py-4 px-6 text-center border-r border-black border-opacity-5 last:border-0">
                                {{customer.countries.name}}
                            </td>
                            <td 
                            v-if="$page.props.abilities.canExportCustomers && $page.props.abilities.canEditCustomers"
                            class="select-none flex items-center justify-center text-center flex-wrap py-4 px-6 space-x-2 border-r border-black border-opacity-5 last:border-0">
                                <a 
                                v-if="$page.props.abilities.canExportCustomers"
                                :href="route('products.view.edit', {product: customer.id})"
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
                <Pagination :links="customers.links" :params="params" />
            </div>

            <!-- Empty customers list message -->
            <strong v-if="Object.keys(customers.data).length <= 0" class="w-full block relative text-center text-xl opacity-80 text-black font-semibold tracking-wider m-auto">
                No customers found
            </strong>

            <!-- Delete Modal Component -->
            <DeleteModal v-if="store.getters.deleteModal" />
        </div>
    </Layout>
</template>
<script setup>
    import Layout from '../../Layouts/Dashboard'
    import { onMounted } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    import { 
        PencilIcon as Edit,
        ArchiveBoxXMarkIcon as Delete,
    } from '@heroicons/vue/24/solid'
    import {
        FunnelIcon as Filter
    } from '@heroicons/vue/24/outline'
    import Heading2 from '../../Components/Elements/Headings/SidebarH2'
    import CustomersFilter from '../../Partials/NamingFilter'
    import Pagination from '../../Partials/Pagination'
    import DeleteModal from '../../Partials/DeleteModal'


    const props = defineProps({
        auth: Object,
        customers: Object,
        params: Object,
        abilities: Object,
    });

    const store = useStore()

    const pagination = store.getters.pagination

    const openDeleteModal = data => {
        store.dispatch('toggleDeleteModal', true)
        store.dispatch('fillContents', {
            row: {
                id: data.id,
                name: data.first_name
            },
            texts: {
                heading: `Delete ${data.first_name}`,
                paragraph: `You're about to permanently delete ${data.first_name}.<br/><br/><strong>This action is irreversible.</strong>`
            },
            action: route('customers.delete', {customer_id: data.id}),
        })
    }

    onMounted(() => {
        store.commit('fillDbDuplicates', [])
        store.commit('toggleDbDuplicateStatus', false)
    })
    
</script>