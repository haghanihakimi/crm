import './bootstrap';
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import GeneralLayout from './Layouts/GeneralLayout.vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
//import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const options = {
    position: "top-center",
    timeout: 5000,
    closeOnClick: false,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: false,
    draggablePercent: 0,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
    transition: "Vue-Toastification__bounce",
    maxToasts: 10,
    newestOnTop: true,
    filterBeforeCreate: (toast, toasts) => {
        if (toasts.filter(
        t => t.type === toast.type
        ).length !== 0) {
        return false;
        }
        return toast;
    }
};

const vuetify = createVuetify({
    components,
    directives,
})

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        let page = (await import(`./Pages/${name}.vue`)).default;

        page.GeneralLayout ??= GeneralLayout

        return page
    },
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(Toast, options)
            .use(vuetify)
            .use(store)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#0059bf' });
