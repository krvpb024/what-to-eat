import Vue from 'vue'
import Router from 'vue-router'
import group from './views/group.vue'
import groupAdd from './views/groupAdd.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/group'
    },
    {
      path: '/group',
      name: 'group',
      component: group,
      props: {
        title: '選擇群組'
      },
      children: [
        {
          path: 'add',
          name: 'groupAdd',
          component: groupAdd,
          props: {
            title: '新增群組'
          }
        }
      ]
    },

    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
