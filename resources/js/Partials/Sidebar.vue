<template>
    <div
        class="select-none w-auto min-w-[300px] max-w-[300px] h-full relative bg-white-fc border-r border-black border-opacity-5">
        <!-- Profile Controller -->
        <div class="w-full h-auto bg-white-fc relative px-4 py-4 border-b border-black border-opacity-5 z-10">
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="no-highlight flex w-full justify-between rounded-lg px-0 py-2 text-left text-sm font-medium text-black">
                    <div class="w-full flex flex-row gap-0">
                        <User class="w-[45px] h-[45px] rounded-full text-blue" />
                        <H2 class="w-full my-auto mx-0 py-0 px-2">
                            {{ `${$page.props.auth.user.data.first_name} ${$page.props.auth.user.data.surname}` }}
                        </H2>
                    </div>
                    <ChevronUpIcon :class="open ? '' : 'rotate-180 transform'"
                        class="h-[16px] w-[20px] my-auto transition duration-150 text-black" />
                </DisclosureButton>
                <transition enter-active-class="transition duration-75 ease-out" enter-from-class="transform opacity-0"
                    enter-to-class="transform opacity-100" leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform opacity-100" leave-to-class="transform opacity-0">
                    <DisclosurePanel class="p-0 bg-white border border-black border-opacity-5 rounded">
                        <Hyperlink :value="'Settings'" :link="route('general.settings')" />
                        <form action="/" method="POST" enctype="multipart/form-data" @submit.prevent="logout">
                            <btnSignout :disabled="logoutForm.processing" type="submit" role="button"
                                :value="'Sign Out'" />
                        </form>
                    </DisclosurePanel>
                </transition>
            </Disclosure>
        </div>

        <!-- Sidebar body content -->
        <div v-if="$page.props.auth.user && !$page.props.auth.user.default_password"
            class="w-full h-full absolute top-0 left-0 pt-[94px] z-0">
            <div class="w-full h-full px-4 overflow-auto overflow-x-hidden">
                <HyperlinkBlack :href="route('dashboard')" target="_self">
                    Dashboard
                </HyperlinkBlack>
                <!-- groups -->
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        class="no-highlight flex w-full justify-between rounded-lg bg-purple-100 px-0 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <Span class="w-full flex flex-row gap-0 text-md">
                            Groups
                        </Span>
                        <ChevronUpIcon :class="open ? '' : 'rotate-180 transform'"
                            class="h-[16px] w-[20px] my-auto transition duration-150 text-purple-500" />
                    </DisclosureButton>
                    <transition enter-active-class="transition duration-75 ease-out"
                        enter-from-class="transform opacity-0" enter-to-class="transform opacity-100"
                        leave-active-class="transition duration-75 ease-in" leave-from-class="transform opacity-100"
                        leave-to-class="transform opacity-0">
                        <DisclosurePanel class="p-0 border-b border-black border-opacity-5">
                            <Hyperlink :value="'View Groups'" :link="route('users.list')" />
                            <button @click="toggleGroupCreatePopup();"
                            class="w-fit no-highlight w-full inline-block text-md tracking-wider font-medium text-blue block px-4 py-2 hover:underline">
                                Create
                            </button>
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
                <!-- Sidebar - Roles & Permissions links -->
                <HyperlinkBlack v-if="$page.props.abilities.isSuper" :href="route('roles.permissions.list')"
                    target="_self">
                    Roles &amp; Permissions
                </HyperlinkBlack>
                <!-- Sidebar - Users links -->
                <Disclosure v-if="$page.props.abilities.isSuper" v-slot="{ open }">
                    <DisclosureButton
                        class="no-highlight flex w-full justify-between rounded-lg bg-purple-100 px-0 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <Span class="w-full flex flex-row gap-0 text-md">
                            Users
                        </Span>
                        <ChevronUpIcon :class="open ? '' : 'rotate-180 transform'"
                            class="h-[16px] w-[20px] my-auto transition duration-150 text-purple-500" />
                    </DisclosureButton>
                    <transition enter-active-class="transition duration-75 ease-out"
                        enter-from-class="transform opacity-0" enter-to-class="transform opacity-100"
                        leave-active-class="transition duration-75 ease-in" leave-from-class="transform opacity-100"
                        leave-to-class="transform opacity-0">
                        <DisclosurePanel class="p-0 border-b border-black border-opacity-5">
                            <Hyperlink :value="'View Users'" :link="route('users.list')" />
                            <Hyperlink :value="'Add Users'" :link="route('view.create.user')" />
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
                <!-- Sidebar - Customers links -->
                <Disclosure v-if="$page.props.abilities.canReadCustomers || $page.props.abilities.canCreateCustomers"
                    v-slot="{ open }">
                    <DisclosureButton
                        class="no-highlight flex w-full justify-between rounded-lg bg-purple-100 px-0 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <Span class="w-full flex flex-row gap-0 text-md">
                            Customers
                        </Span>
                        <ChevronUpIcon :class="open ? '' : 'rotate-180 transform'"
                            class="h-[16px] w-[20px] my-auto transition duration-150 text-purple-500" />
                    </DisclosureButton>
                    <transition enter-active-class="transition duration-75 ease-out"
                        enter-from-class="transform opacity-0" enter-to-class="transform opacity-100"
                        leave-active-class="transition duration-75 ease-in" leave-from-class="transform opacity-100"
                        leave-to-class="transform opacity-0">
                        <DisclosurePanel class="p-0 border-b border-black border-opacity-5">
                            <Hyperlink v-if="$page.props.abilities.canReadCustomers" :value="'View Customers'"
                                :link="route('customers.view')" />
                            <Hyperlink v-if="$page.props.abilities.canCreateCustomers" :value="'Add Customer'"
                                :link="route('customers.new.view')" />
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
                <!-- Sidebar - Brands links -->
                <Disclosure v-if="$page.props.abilities.canReadBrands || $page.props.abilities.canCreateBrands"
                    v-slot="{ open }">
                    <DisclosureButton
                        class="no-highlight flex w-full justify-between rounded-lg bg-purple-100 px-0 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <Span class="w-full flex flex-row gap-0 text-md">
                            Brands
                        </Span>
                        <ChevronUpIcon :class="open ? '' : 'rotate-180 transform'"
                            class="h-[16px] w-[20px] my-auto transition duration-150 text-purple-500" />
                    </DisclosureButton>
                    <transition enter-active-class="transition duration-75 ease-out"
                        enter-from-class="transform opacity-0" enter-to-class="transform opacity-100"
                        leave-active-class="transition duration-75 ease-in" leave-from-class="transform opacity-100"
                        leave-to-class="transform opacity-0">
                        <DisclosurePanel class="p-0 border-b border-black border-opacity-5">
                            <Hyperlink v-if="$page.props.abilities.canReadBrands" :value="'View Brands'"
                                :link="route('brands.list.view')" />
                            <Hyperlink v-if="$page.props.abilities.canCreateBrands" :value="'Create Brand'"
                                :link="route('brands.create.new')" />
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
                <!-- Sidebar - Products links -->
                <Disclosure v-if="$page.props.abilities.canReadProducts || $page.props.abilities.canCreateProducts"
                    v-slot="{ open }">
                    <DisclosureButton
                        class="no-highlight flex w-full justify-between rounded-lg bg-purple-100 px-0 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <Span class="w-full flex flex-row gap-0 text-md">
                            Products
                        </Span>
                        <ChevronUpIcon :class="open ? '' : 'rotate-180 transform'"
                            class="h-[16px] w-[20px] my-auto transition duration-150 text-purple-500" />
                    </DisclosureButton>
                    <transition enter-active-class="transition duration-75 ease-out"
                        enter-from-class="transform opacity-0" enter-to-class="transform opacity-100"
                        leave-active-class="transition duration-75 ease-in" leave-from-class="transform opacity-100"
                        leave-to-class="transform opacity-0">
                        <DisclosurePanel class="p-0 border-b border-black border-opacity-5">
                            <Hyperlink v-if="$page.props.abilities.canReadProducts" :value="'View Products'"
                                :link="route('product.view.list')" />
                            <Hyperlink v-if="$page.props.abilities.canCreateProducts" :value="'Create Product'"
                                :link="route('product.create.view')" />
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
                <!-- Sidebar - Invoices links -->
                <Disclosure v-if="$page.props.abilities.canReadInvoices || $page.props.abilities.canCreateInvoices"
                    v-slot="{ open }">
                    <DisclosureButton
                        class="no-highlight flex w-full justify-between rounded-lg bg-purple-100 px-0 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <Span class="w-full flex flex-row gap-0 text-md">
                            Invoices
                        </Span>
                        <ChevronUpIcon :class="open ? '' : 'rotate-180 transform'"
                            class="h-[16px] w-[20px] my-auto transition duration-150 text-purple-500" />
                    </DisclosureButton>
                    <transition enter-active-class="transition duration-75 ease-out"
                        enter-from-class="transform opacity-0" enter-to-class="transform opacity-100"
                        leave-active-class="transition duration-75 ease-in" leave-from-class="transform opacity-100"
                        leave-to-class="transform opacity-0">
                        <DisclosurePanel class="p-0 border-b border-black border-opacity-5">
                            <Hyperlink v-if="$page.props.abilities.canReadInvoices" :value="'View Invoices'"
                                :link="route('invoice.list.view')" />
                            <Hyperlink v-if="$page.props.abilities.canCreateInvoices" :value="'Add Invoice'"
                                :link="route('invoice.create.view')" />
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
import { useStore } from 'vuex'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon, UserCircleIcon as User } from '@heroicons/vue/24/solid'
import Hyperlink from '../Components/Elements/Links/SidebarLinks'
import HyperlinkBlack from '../Components/Elements/Links/HyperlinkBlack'
import btnSignout from '../Components/Elements/Buttons/SidebarSignout'
import H2 from '../Components/Elements/Headings/SidebarH2'
import Span from '../Components/Elements/Spans/SidebarSpanBlack'

const store = useStore()

const logoutForm = useForm()

const logout = () => {
    if (!logoutForm.processing) {
        logoutForm.post(route('signout'), {
            onSuccess: () => {
                store.dispatch('toggleSignedOut', true)
                store.dispatch('toggleSignedIn', false)
            }
        })
    }
}

const toggleGroupCreatePopup = () => {
    store.dispatch('togglePopup', true);
}
</script>