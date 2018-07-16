<template>
  <li class="listgoup-item-ngroup-item">
    <router-link to="/place/1" class="listgoup-item-ngroup-item-link" v-if="!showSettingBtn" :style="{ width: fixListWidth ? '30%' : '100%' }">
      {{placeTitle}}
    </router-link>
    <edit-Btn-group :showSettingBtn="showSettingBtn" @modeChange="fixListWidth = !fixListWidth" :editPlaceTitle="editPlaceTitle"></edit-Btn-group>
  </li>
</template>

<script>
import editBtnGroup from '@/components/group/editBtnGroup.vue'

export default {
  props: {
    showSettingBtn: Boolean,
    placeTitle: String
  },
  data: function () {
    return {
      editPlaceTitle: this.placeTitle,
      fixListWidth: false
    }
  },
  components: {
    editBtnGroup
  }
}
</script>

<style>
.listgoup-item-ngroup-item {
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  display: flex;
  line-height: 1.5rem;
  margin-bottom: -1px;
  min-height: 60px;
  overflow: hidden;
  & .listgoup-item-ngroup-item-link {
    box-sizing: border-box;
    color: black;
    display: flex;
    height: 100%;
    text-decoration: none;
    padding: 3vh 2vh;
    width: 100%;
    &:active {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  &.controlbtn {
    align-items: center;
    border: none;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 2% 0;
  }
}
.editing {
  background-color: color(#B8DBD9 alpha(-10%));
}
</style>
