<template>
  <section class="groupadd-section">
    <scroll-lock class="lock-body-scroll">
    <section-header>
      {{title}}
      <template slot="right">
        <router-link to="/group">
          <img src="../assets/image/add-close.svg" alt="關閉">
        </router-link>
      </template>
    </section-header>
    <section-content>
      <form action="get" class="groupadd-section-form" @submit.prevent="editGroup">
        <fieldset class="groupadd-section-form-fieldset">
          <legend class="groupadd-section-legend">群組是為了區隔不同地點的選項</legend>
          <label for="place" class="groupadd-section-label">地點</label>
          <input type="text" v-model="inputGroupTitle" id="place" name="place" placeholder="例如：學校、公司、家附近" class="groupadd-section-input" required autocomplete="off">
        </fieldset>
        <button type="submit" class="home-section-add spc">
          <img src="../assets/image/add-check.svg" alt="新增">
        </button>
        <button type="button" class="home-section-add spc delete" @click="deleteGroup">
          <img src="../assets/image/trash-white.svg" alt="刪除">
        </button>
      </form>
    </section-content>
    </scroll-lock>
  </section>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue'
import sectionContent from '@/components/sectionContent.vue'
import actionBtn from '@/components/actionBtn.vue'

import { mapState } from 'vuex'

export default {
  props: {
    title: String
  },
  data () {
    return {
      inputGroupTitle: '',
      pk: this.$route.params.pk
    }
  },
  created () {
    this.inputGroupTitle = this.currentGroup.title
  },
  computed: {
    currentGroup () {
      return this.groups.filter(group => group.pk === this.pk)[0]
    },
    ...mapState([
      'groups'
    ])
  },
  methods: {
    editGroup () {
      this.$store.commit('editGroup', {
        pk: this.pk,
        editTitle: this.inputGroupTitle
      })
      this.$router.push({ name: 'index' })
    },
    deleteGroup () {
      this.$store.commit('deleteGroup', {
        pk: this.pk
      })
      this.$router.push({ name: 'index' })
    }
  },
  components: {
    sectionHeader,
    sectionContent,
    actionBtn
  }
}
</script>

<style scoped>
.home-section-add.delete {
  background-color: red;
  margin-left: 5%;
  & img {
    margin: 20%;
  }
}
</style>
