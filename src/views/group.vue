<template>
  <section class="home-section">
    <section-header>
      {{title}}
    </section-header>
    <section-content>
      <ul v-if="groups.length > 0">
        <li is="group-item"
          v-for="group in groups"
          :key="group.pk"
          :pk="group.pk"
          :title="group.title"
        ></li>
      </ul>
      <p class="sign" v-else>目前沒有任何群組
        <br>請點選下方按鈕新增</p>
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

import { mapState } from 'vuex'

export default {
  name: 'group',
  props: {
    title: String
  },
  computed: {
    ...mapState([
      'groups'
    ])
  },
  created () {
    this.$store.commit('clearCheckArray')
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
.sign {
  color: #04724d;
  font-weight: normal;
  font-size: 1.2rem;
  text-align: center;
}
</style>
