<template>
  <div class="edit-btn-wrap">
    <form class="edit-btn-wrap-form" @submit.prevent="controlEdit">
      <input
        type="text"
        ref='text'
        :class="{ editing: !notEdit }"
        v-model="editPlaceTitleData"
        v-if="showSettingBtn"
        :disabled="notEdit"
        @change="hasChanged = true"
      >
    </form>
    <transition
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
    v-on:enter="controlParentWidth"
    v-on:after-leave="controlParentWidth"
    >
      <div
        class="edit-btn-group"
        v-show="showSettingBtn"
      >
        <transition
          mode="out-in"
          enter-active-class="animated slideInRight"
          leave-active-class="animated slideOutLeft"
        >
          <div class="btn-group edit-group" v-if="currentMode === 'edit'" :key="currentMode">
            <button class="listgoup-item-ngroup-item-controlbtn small" @click="controlEdit">
              <img src="../../assets/image/edit.svg" alt="編輯">
            </button>
            <button class="listgoup-item-ngroup-item-controlbtn small" @click="changeMode('delete')">
              <img src="../../assets/image/trash.svg" alt="刪除">
            </button>
            <button class="listgoup-item-ngroup-item-controlbtn">
              <img src="../../assets/image/change-order.svg" alt="排序">
            </button>
          </div>
          <div class="btn-group delete-group" v-else-if="currentMode === 'delete'" :key="currentMode">
            <button class="listgoup-item-ngroup-item-controlbtn" @click="changeMode('confirm')">
              <img src="../../assets/image/confirm.svg" alt="確認">
            </button>
            <button class="listgoup-item-ngroup-item-controlbtn" @click="changeMode">
              <img src="../../assets/image/cancel.svg" alt="取消">
            </button>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showSettingBtn: Boolean,
    editPlaceTitle: String,
    pk: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      currentMode: 'edit',
      fixListWidth: false,
      notEdit: true,
      editPlaceTitleData: this.editPlaceTitle,
      hasChanged: false
    }
  },
  methods: {
    controlEdit: function () {
      this.notEdit = !this.notEdit
      if (!this.notEdit) {
        setTimeout(() => {
          this.$refs.text.focus()
        }, 10)
      } else {
        if (this.hasChanged) {
          this.$store.commit(`edit${this.model}`, { title: this.editPlaceTitleData, pk: this.pk })
        }
      }
    },
    changeMode: function (deleteAction) {
      switch (this.currentMode) {
        case 'edit': {
          this.currentMode = 'delete'
          break
        }
        case 'delete': {
          if (deleteAction === 'confirm') {
            this.$store.commit(`delete${this.model}`, { pk: this.pk })
          }
          this.currentMode = 'edit'
          break
        }
        default: {
          this.currentMode = 'edit'
        }
      }
    },
    controlParentWidth: function () {
      this.$emit('modeChange')
    }
  }
}
</script>

<style>
.edit-btn-wrap {
  display: flex;
  flex: 1;
  user-select: none;
  & .edit-btn-wrap-form {
    flex: 9;
  }
  & .edit-btn-group {
    flex: 4;
  }
}
.edit-btn-group {
  animation-duration: 0.3s;
  display: flex;
  overflow: hidden;
  & .btn-group {
    align-items: center;
    animation-duration: 0.3s;
    display: flex;
    flex: 1;
    justify-content: space-around;
  }
}
.listgoup-item-ngroup-item-controlbtn {
  background-color: white;
  border: 0;
  height: 30px;
  margin: 0;
  width: 30px;
  padding: 0;
  & img {
    transition: 0.3s transform;
    &.gear {
      transform: scale(0.7);
    }
    &.rotate {
      transform: rotate(45deg);
    }
  }
  &.small {
    margin-left: 20px%;
    height: 25px;
    width: 25px;
  }
  &:active {
    background-color: color(#B8DBD9 alpha(-10%));
  }
}
</style>
