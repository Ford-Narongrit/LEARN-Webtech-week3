import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NumberList from '../views/NumberList.vue'
import PokemonList from '../views/PokemonsList.vue'
import Pokedex from '../views/Pokedex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/numbers',
    name: 'NumberList',
    component: NumberList
  },
  {
    path: '/pokemons',
    name: 'PokemonList',
    component: PokemonList
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: Pokedex
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
