import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import MovieList from '@/pages/movieList'
import MovieDetail from '@/pages/movieDetail'
import NewDetail from '@/pages/newDetail'
import LoginPage from '@/pages/loginPage'
import RegisterPage from '@/pages/registerPage'
import FindpasswordPage from '@/pages/findpasswordPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/movieList',
      component: MovieList
    },
    {
      path: '/movieDetail',
      component: MovieDetail
    },
    {
      path: '/newDetail',
      component: NewDetail
    },
    {
      path: '/loginPage',
      component: LoginPage
    },
    {
      path: '/registerPage',
      component: RegisterPage
    },
    {
      path: '/findpasswordPage',
      component: FindpasswordPage
    }
  ]
})
