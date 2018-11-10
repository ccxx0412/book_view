import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import MovieList from '@/pages/moviesList'
import MovieDetail from '@/pages/movieDetail'

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
    }
  ]
})
