import Vue from 'vue'
import Router from 'vue-router'
import group from './views/group.vue'
import groupAdd from './views/groupAdd.vue'
import groupEdit from './views/groupEdit.vue'
import place from './views/place.vue'
import choiceStart from './views/choiceStart.vue'

Vue.use(Router)

export default new Router({
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
        },
        {
          path: 'edit/:pk',
          name: 'groupEdit',
          component: groupEdit,
          props: {
            title: '編輯群組'
          }
        }
      ]
    },
    {
      path: '/place/:id',
      name: 'place',
      component: place
    },
    {
      path: '/choiceStart/:placeId',
      name: 'choiceStart',
      component: choiceStart
    }
  ]
})
