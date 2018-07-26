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
    <action-btn :url="`/choiceStart/${id}`" v-show="checkedLength >= 2">
      <img src="../assets/image/add-check.svg" alt="送出">
    </action-btn>
  </section>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue'
import sectionContent from '@/components/sectionContent.vue'
import actionBtn from '@/components/actionBtn.vue'
import placeItem from '@/components/place/placeItem.vue'

import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    title () {
      const place = this.places.find(place => place.pk === this.id)
      const group = this.groups.find(group => group.pk === place.group)
      return `${group.title}-${place.title}`
    },
    currentChoice () {
      return this.choices.filter(choice => choice.place === this.pk)
    },
    ...mapGetters([
      'checkedLength'
    ]),
    ...mapState([
      'groups',
      'places',
      'choices'
    ])
  },
  components: {
    sectionHeader,
    sectionContent,
    placeItem,
    actionBtn
  }
}
</script>
