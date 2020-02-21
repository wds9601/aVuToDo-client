
import Landing from './components/Landing.vue'
import Portal from './components/Portal.vue'
// import Signup from './components/Signup.vue'
// import Slideshow from './components/Slideshow.vue'
import Profile from './components/Profile.vue'


const routes = [
    {path: '/', component: Landing},
    {path: '/portal', component: Portal},
    // {path: '/signup', component: Signup},
    // {path: '/slideshow', component: Slideshow},
    {
        path: '/profile/:id',
        component: Profile,
        props: {default:true}
    }
]

export default routes