<template>
  <section class="groupadd-section">
    <section-header>
      {{title}}
      <template slot="right">
        <router-link to="/group">
          <img src="../assets/image/add-close.svg" alt="關閉">
        </router-link>
      </template>
    </section-header>
    <section-content>
      <h2 class="groupadd-section-h2">群組是為了區隔不同地點的選項</h2>
      <form action="get" class="groupadd-section-form">
        <label for="place" class="groupadd-section-label">地點</label>
        <input type="text" id="place" name="place" placeholder="例如：學校、公司、家附近" class="groupadd-section-input" autocomplete="off">
        <label for="type" class="groupadd-section-label">類型</label>
        <input type="text" id="type" name="type" placeholder="例如：午晚餐、飲料" class="groupadd-section-input" autocomplete="off">
      </form>
      <action-btn>
        <img src="../assets/image/add-check.svg" alt="新增">
      </action-btn>
    </section-content>
  </section>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue'
import sectionContent from '@/components/sectionContent.vue'
import actionBtn from '@/components/actionBtn.vue'

export default {
  name: 'groupAdd',
  props: {
    title: String
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
  height: 100vh;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100vw;
  animation-duration: 0.3s;
}
.groupadd-section-h2 {
  color: #04724d;
  font-size: 1.2rem;
  font-weight: normal;
}
.groupadd-section-form {
  text-align: center;
}
.groupadd-section-label {
  display: inline-block;
  font-size: 1.1rem;
  margin-bottom: 3%;
  width: 100%;
}
.groupadd-section-input {
  border: 0;
  border-bottom: 1px solid black;
  border-radius: 0;
  display: inline-block;
  margin-bottom: 3%;
  padding: 10px;
  width: 100%;
}
</style>
