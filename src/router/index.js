import Vue from 'vue'
import Router from 'vue-router'
import XueJi from '@/views/xueji'
import Abroad from '@/views/abroad'
import Course from '@/views/course'
import Education from '@/views/education'
import Score from '@/views/score'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: 'XueJi',
      component: XueJi
    },
    {
      path: '/abroad',
      name: 'Abroad',
      component: Abroad
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
      path:'/*',
      redirect: '/index'
    }
  ]
})
