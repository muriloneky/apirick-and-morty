import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterDetails from '../views/CharacterDetails.vue' // Importe o componente CharacterDetails

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {  
    path: "/character/:id",
    name: 'CharacterDetails',
    component: CharacterDetails 
  }
]

const router = new VueRouter({
  routes
})


export default router