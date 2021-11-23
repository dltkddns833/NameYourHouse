import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MainForm from '@/components/form/MainForm'
import ResultForm from '@/components/form/ResultForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bain',
      name: 'MainForm',
      component: MainForm
    },
    {
      path: '/result',
      name: 'ResultForm',
      component: ResultForm,
      props: true
    }
  ]
})
