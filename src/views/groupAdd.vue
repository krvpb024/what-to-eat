<template>
  <section class="groupadd-section">
    <section-header>{{title}}</section-header>
    <section-content>
      <h2 class="groupadd-section-h2">群組是為了區隔不同地方的選項</h2>
      <form action="get" class="groupadd-section-form">
        <label for="title" class="groupadd-section-label">群組名稱</label>
        <input type="text" id="title" name="title" placeholder="例如：學校、公司、家附近" class="groupadd-section-input" autocomplete="off">
      </form>
    </section-content>
    <action-btn>
      <img src="../assets/add-check.svg" alt="新增">
    </action-btn>
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
  display: inline-block;
  margin-bottom: 3%;
  padding: 10px;
  width: 100%;
}
</style>
