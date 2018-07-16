<template>
  <section class="home-section">
    <section-header>
      <template slot="left">
        <router-link to="/group">
          <img src="../assets/image/left-arrow.svg" alt="返回">
        </router-link>
      </template>
      {{title}}
    </section-header>
    <section-content>
      <place-item></place-item>
    </section-content>
    <action-btn url="/about">
      <img src="../assets/image/add-check.svg" alt="新增">
    </action-btn>
  </section>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue'
import sectionContent from '@/components/sectionContent.vue'
import actionBtn from '@/components/actionBtn.vue'
import placeItem from '@/components/place/placeItem.vue'

export default {
  data: function () {
    return {
      title: '學校-早午餐'
    }
  },
  components: {
    sectionHeader,
    sectionContent,
    placeItem,
    actionBtn
  }
}
</script>
