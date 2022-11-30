<template>
    <nav class="w-full relative px-14 py-2 border-b border-black border-opacity-10">
        <div class="w-full relative flex flex-row gap-4">
            <!-- Logo placeholder -->
            <div class="w-fit flex justify-center items-center">
                <a :href="route('account')" target="_self"
                class="w-fit p-4 flex items-center justify-center text-lg font-semibold tracking-wider text-warm-blue">
                    CRM
                </a>
            </div>
            <!-- Navigation items holder -->
            <div class="w-full flex justify-end items-center">
                <ul>
                    <li class="inline-block">
                        <a :href="route('account')" target="_self"
                        class="text-md tracking-wider font-medium text-black p-2 inline-block">
                            Sign In
                        </a>
                    </li>
                    <li class="inline-block">
                        <a :href="route('signup')" target="_self"
                        class="text-md tracking-wider font-medium text-black p-2 inline-block">
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>