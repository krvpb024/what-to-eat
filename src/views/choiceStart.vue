<template>
  <section class="home-section">
    <section-header>
      <template slot="left">
        <a @click="$router.go(-1)">
          <img src="../assets/image/left-arrow.svg" alt="返回">
        </a>
      </template>
      {{title}}
    </section-header>
    <section-content>
      <h2 class="choice-title">向左或向右滑動</h2>
      <pie-chart></pie-chart>
    </section-content>
  </section>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue'
import sectionContent from '@/components/sectionContent.vue'
import pieChart from '@/components/pieChart/pieChart.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    title () {
      const place = this.places.find(place => place.pk === this.$route.params.placeId)
      return place.title
    },
    ...mapState([
      'places',
      'checkedArray'
    ])
  },
  components: {
    sectionHeader,
    sectionContent,
    pieChart
  }
}
</script>

<style>
.choice-title {
  text-align: center;
}
</style>
