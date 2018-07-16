<template>
  <li v-if="choices.length > 0" class="listgoup-item">
    <h2 class="listgoup-item-h2">{{title}}</h2>
    <ul class="listgoup-item-ngroup">
      <draggable v-model="choices" :options="{handle:'.listgoup-item-ngroup-item-controlbtn'}">
        <li
          is="place-item-unit"
          v-for="choice in choices"
          :key="choice.pk"
          :showSettingBtn="showSettingBtn"
          :pk="choice.pk"
          :placeTitle="choice.title"
          :checked="choice.checked"
          @checkItem="checkItem"
        ></li>
      </draggable>
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        v-on:after-enter="afterEnter"
        v-on:leave="leave"
      >
        <li is="group-item-unit-add"
          :key="`${currentPlace}-addform`"
          v-if="showAddForm"
          :showAddForm="showAddForm"
          :canFoucusAddForm="canFoucusAddForm"
        ></li>
      </transition>
      <li is="setting-btn"
        :currentGroup="currentPlace"
        :showAddForm="showAddForm"
        :showSettingBtn="showSettingBtn"
        @showAddFormEvent="showAddForm = !showAddForm"
        @showSettingBtnEvent="showSettingBtn = !showSettingBtn"
      ></li>
    </ul>
  </li>
</template>

<script>
import placeItemUnit from '@/components/place/placeItemUnit.vue'
import groupItemUnitAdd from '@/components/group/groupItemUnitAdd.vue'
import settingBtn from '@/components/group/settingBtn.vue'
import draggable from 'vuedraggable'

export default {
  props: {
    pk: Number,
    title: String
  },
  data: function () {
    return {
      currentPlace: 0,
      choices: [
        { pk: 1, title: '便當', checked: false },
        { pk: 2, title: '牛肉麵', checked: false },
        { pk: 3, title: '水餃', checked: false },
        { pk: 4, title: '涼麵', checked: false }
      ],
      showSettingBtn: false,
      showAddForm: false,
      canFoucusAddForm: false
    }
  },
  created: function () {
    this.currentPlace = parseInt(this.$route.params.id)
  },
  methods: {
    afterEnter: function () {
      this.canFoucusAddForm = true
    },
    leave: function () {
      this.canFoucusAddForm = false
    },
    checkItem: function (event) {
      const choiceIndex = this.choices.findIndex(choice => choice.pk === event.pk)
      this.choices[choiceIndex].checked = !this.choices[choiceIndex].checked
    }
  },
  components: {
    placeItemUnit,
    groupItemUnitAdd,
    draggable,
    settingBtn
  }
}
</script>

<style>
.listgoup-item {
  list-style: none;
  margin-bottom: 4%;
  overflow: hidden;
  padding: 2% 0;
}
.listgoup-item-h2 {
  color: #04724d;
  padding-left: 3%;
  text-decoration: none;
}
.listgoup-item-ngroup {
  list-style: none;
  overflow: hidden;
}
</style>
