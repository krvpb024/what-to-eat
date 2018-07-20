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
      <place-item :choices="choices"></place-item>
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

import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      currentChoice: []
    }
  },
  computed: {
    title () {
      const { id } = this.$route.params
      const place = this.places.find(place => place.pk === id)
      const group = this.groups.find(group => group.pk === place.group)
      return `${group.title}-${place.title}`
    },
    ...mapState([
      'groups',
      'places',
      'choices'
    ])
  },
  created () {
    this.currentChoice = this.choices.filter(choice => choice.place === this.pk)
  },
  components: {
    sectionHeader,
    sectionContent,
    placeItem,
    actionBtn
  }
}
</script>
