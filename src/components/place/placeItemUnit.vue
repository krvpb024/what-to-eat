<template>
  <li class="listgoup-item-ngroup-item">
    <div
      v-if="!showSettingBtn"
      class="listgoup-item-ngroup-item-link"
      :style="{ width: fixListWidth ? '30%' : '100%' }"
      @click="checkItem"
    >
      <div class="listgoup-item-ngroup-item-link-check">
        <img src="../../assets/image/unchecked.svg" alt="unchecked" v-if="!checked">
        <img src="../../assets/image/checked.svg" alt="checked" v-if="checked">
      </div>
      <p class="listgoup-item-ngroup-item-link-title">{{placeTitle}}</p>
    </div>
    <edit-Btn-group
      :showSettingBtn="showSettingBtn"
      @modeChange="fixListWidth = !fixListWidth"
      :editPlaceTitle="editPlaceTitle"
      :pk="pk"
      :model="model"
    ></edit-Btn-group>
  </li>
</template>

<script>
import editBtnGroup from '@/components/group/editBtnGroup.vue'
import { mapState } from 'vuex'

export default {
  props: {
    pk: {
      type: String,
      required: true
    },
    showSettingBtn: {
      type: Boolean,
      required: true
    },
    placeTitle: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  },
  data: function () {
    return {
      editPlaceTitle: this.placeTitle,
      fixListWidth: false,
      model: 'Choice'
    }
  },
  computed: {
    ...mapState([
      'choices'
    ])
  },
  methods: {
    checkItem () {
      this.$store.commit('checkChoice', { pk: this.pk })
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
