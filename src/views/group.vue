<template>
  <section class="home-section">
    <section-header>
      {{title}}
      <!-- <p slot="right">dd</p> -->
    </section-header>
    <section-content>
      <ul>
        <li is="group-item"
          v-for="group in groups"
          :key="group.pk"
          :pk="group.pk"
          :title="group.title"
        ></li>
      </ul>
    </section-content>
    <action-btn url="/group/add">
      <img src="../assets/image/add-btn.svg" alt="新增">
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
        { pk: 1, title: '學校' },
        { pk: 2, title: '家附近' },
        { pk: 3, title: '公司' }
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
.home-section {
  animation-duration: 0.3s;
  width: 100%;
}
ul {
  padding: 0;
}
</style>
