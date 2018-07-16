<template>
  <li class="listgoup-item-ngroup-item">
    <div
      v-if="!showSettingBtn"
      class="listgoup-item-ngroup-item-link"
      :style="{ width: fixListWidth ? '30%' : '100%' }"
      @click="$emit('checkItem', { pk })"
    >
      <div class="listgoup-item-ngroup-item-link-check">
        <img src="../../assets/image/unchecked.svg" alt="unchecked" v-if="!checked">
        <img src="../../assets/image/checked.svg" alt="unchecked" v-if="checked">
      </div>
      <p class="listgoup-item-ngroup-item-link-title">{{placeTitle}}</p>
    </div>
    <edit-Btn-group :showSettingBtn="showSettingBtn" @modeChange="fixListWidth = !fixListWidth" :editPlaceTitle="editPlaceTitle"></edit-Btn-group>
  </li>
</template>

<script>
import editBtnGroup from '@/components/group/editBtnGroup.vue'

export default {
  props: {
    pk: Number,
    showSettingBtn: Boolean,
    placeTitle: String,
    checked: Boolean
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
.listgoup-item-ngroup-item-link {
  align-items: center;
  display: flex;
  padding: 3vh 2vh;
  align-content: stretch;
}
.listgoup-item-ngroup-item-link-check {
  align-items: center;
  flex: 0 0 1.5rem;
  display: flex;
  & img {
    max-width: 100%;
  }
}
.listgoup-item-ngroup-item-link-title {
  flex: 9;
  margin: 0;
  padding: 0;
}
.editing {
  background-color: color(#B8DBD9 alpha(-10%));
}
</style>
