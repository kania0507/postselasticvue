import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Search from '../components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, 
    {
      path: '/addpost',
      name: 'addpost',
      component: Add
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }

  ]
})
