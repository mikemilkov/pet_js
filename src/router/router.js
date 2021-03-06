import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import vContactList from '../components/contacts/v-contact-list'
import vContactUserInfo from '../components/contacts/v-contact-user-info'


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'contacts',
            component: vContactList
        },
        {
            path: '/contact',
            name: 'contact',
            component: vContactUserInfo
        }
    ]
});

export default router;