
import Landing from './components/Landing.vue'
import Portal from './components/Portal.vue'
import Profile from './components/Profile.vue'

// Declare routes and necessary components to import
const routes = [
    {
        path: '/', 
        component: Landing
    },
    {
        path: '/portal', 
        component: Portal
    },
    {
        path: '/profile/:id',
        component: Profile,
        props: {default:true}
    }
]

export default routes