import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Phase6 from './views/Phase6.vue'
import Gallery from './views/Gallery.vue'
import Dynmap from './views/Dynmap.vue'
import Raccoon from './views/Raccoon.vue'
import Zorb from './views/Zorb.vue'
import SiteNotFound from './views/SiteNotFound.vue'

Vue.use(Router)

export default  new Router( {
    routes: [
        {
            path: '/',
            name: 'Shit about ZorbSMP',
            component: Home
        },
        /*{
            path: '/phase5',
            name: 'Shit about Phase 5',
            component: Phase5
        },*/
        {
            path: '/phase6',
            name: 'Shit about Phase 6',
            component: Phase6
        },
        {
            path: '/gallery:phase',
            name: 'Gallery',
            component: Gallery
        },
        {
            path: '/dynmap',
            name: 'DynMap',
            component: Dynmap
        },
        {
            path: '/raccoon',
            name: 'Raccoon',
            component: Raccoon
        },
        {
            path: '/zorb',
            name: 'Shit about Zorb',
            component: Zorb
        },
        {
            // will match everything
            path: '*',
            name: '404',
            component: SiteNotFound
        }
    ]
})