<template>
  <section class="home-section">
    <section-header>{{title}}</section-header>
    <section-content>
      <ul>
        <li
          is="group-item"
          v-for="group in groups"
          :key="group.order"
          :order="group.order"
          :title="group.title"
        ></li>
      </ul>
    </section-content>
    <action-btn>
      <img src="../assets/add-btn.svg" alt="新增">
    </action-btn>
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
    >
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
// @ is an alias to /src
import sectionHeader from '@/components/sectionHeader.vue'
import sectionContent from '@/components/sectionContent.vue'
import actionBtn from '@/components/actionBtn.vue'
import groupItem from '@/components/group/groupItem.vue'

export default {
  name: 'group',
  props: {
    title: String
  },
  data: function () {
    return {
      groups: [
        { order: 1, title: '項目1' },
        { order: 2, title: '項目2' }
      ]
    }
  },
  components: {
    sectionHeader,
    sectionContent,
    groupItem,
    actionBtn
  }
}
</script>

<style>
ul {
  padding: 0;
}
</style>
