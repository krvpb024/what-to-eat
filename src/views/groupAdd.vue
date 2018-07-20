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
      <form action="get" class="groupadd-section-form">
        <fieldset class="groupadd-section-form-fieldset">
          <legend class="groupadd-section-legend">群組是為了區隔不同地點的選項</legend>
          <label for="place" class="groupadd-section-label">地點</label>
          <input type="text" v-model="inputGroupTitle" id="place" name="place" placeholder="例如：學校、公司、家附近" class="groupadd-section-input">
        </fieldset>
      </form>
      <action-btn url="/" @click.native="addGroup">
        <img src="../assets/image/add-check.svg" alt="新增">
      </action-btn>
    </section-content>
    </scroll-lock>
  </section>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue'
import sectionContent from '@/components/sectionContent.vue'
import actionBtn from '@/components/actionBtn.vue'
import 'datalist-polyfill'

export default {
  name: 'groupAdd',
  props: {
    title: String
  },
  data () {
    return {
      inputGroupTitle: ''
    }
  },
  methods: {
    addGroup () {
      this.$store.commit('addGroup', {
        groupTitle: this.inputGroupTitle
      })
    }
  },
  components: {
    sectionHeader,
    sectionContent,
    actionBtn
  }
}
</script>

<style>
.groupadd-section {
  animation-duration: 0.3s;
  background-color: #fff;
  height: 120vh;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100vw;
  z-index: 110;
}
.lock-body-scroll {
  height: 100%;
  width: 100%;
}
.groupadd-section-legend {
  color: #04724d;
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 2%;
}
.groupadd-section-form {
  text-align: center;
}
.groupadd-section-form-fieldset {
  border: 0;
}
.groupadd-section-label {
  display: inline-block;
  font-size: 1.1rem;
  margin-bottom: 3%;
  width: 100%;
}
.groupadd-section-input {
  box-sizing: border-box;
  border: 0;
  border-bottom: 1px solid black;
  border-radius: 0;
  display: inline-block;
  margin-bottom: 3%;
  padding: 10px;
  width: 100%;
}
</style>
