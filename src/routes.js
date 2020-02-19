
import Landing from './components/Landing.vue'
import Portal from './components/Portal.vue'
import Signup from './components/Signup.vue'
import Slideshow from './components/Slideshow.vue'


const routes = [
    {path: '/', component: Landing},
    {path: '/portal', component: Portal},
    {path: '/signup', component: Signup},
    {path: '/slideshow', component: Slideshow}
]

export default routes