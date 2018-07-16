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
    currentGroup: Number,
    showAddForm: Boolean,
    showSettingBtn: Boolean
  },
  data: function () {
    return {
      canFoucusAddForm: false
    }
  }
}
</script>
