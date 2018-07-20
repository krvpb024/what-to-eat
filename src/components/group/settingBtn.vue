<template>
  <li class="listgoup-item-ngroup-item controlbtn" :key="`${currentGroup}-controlbtn`">
    <button
      type="button"
      class="listgoup-item-ngroup-item-controlbtn"
      @click="$emit('showAddFormEvent')"
    >
      <img src="../../assets/image/add-black.svg" :class="{ rotate: showAddForm }" alt="新增">
    </button>
    <button
      type="button"
      class="listgoup-item-ngroup-item-controlbtn"
      @click="$emit('showSettingBtnEvent')"
    >
      <img src="../../assets/image/settings.svg" class="gear" alt="設定">
    </button>
  </li>
</template>

<script>
export default {
  props: {
    currentGroup: {
      type: String,
      required: true
    },
    showAddForm: {
      type: Boolean,
      required: true
    },
    showSettingBtn: {
      type: Boolean,
      required: true
    }
  },
  data: function () {
    return {
      canFoucusAddForm: false
    }
  }
}
</script>

<style>
.listgoup-item-ngroup-item.controlbtn {
  user-select: none;
}
</style>
