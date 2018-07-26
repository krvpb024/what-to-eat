<template>
  <li class="listgoup-item">
    <ul class="listgoup-item-ngroup">
      <p v-if="currentChoice.length === 0" class="sign">該類別目前沒有任何選擇</p>
      <p v-else class="sign">請至少勾選兩個項目</p>
      <draggable
        v-if="currentChoice.length > 0"
        v-model="currentChoice"
        :options="{handle:'.listgoup-item-ngroup-item-controlbtn'}"
      >
        <li
          is="place-item-unit"
          v-for="choice in currentChoice"
          :key="choice.pk"
          :showSettingBtn="showSettingBtn"
          :pk="choice.pk"
          :placeTitle="choice.title"
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
          @addTitle="addTitle"
          placeholder="例如：便當、拉麵"
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
import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      showSettingBtn: false,
      showAddForm: false,
      canFoucusAddForm: false
    }
  },
  computed: {
    currentPlace: function () {
      return this.$route.params.id
    },
    currentChoice: {
      get: function () {
        return this.choices
          .filter(choice => choice.place === this.currentPlace)
          .sort((a, b) => {
            return Number(a.order) - Number(b.order)
          })
      },
      set: function (sortedChoices) {
        const orderdChoices = sortedChoices.map((choice, index) => {
          choice.order = index + 1
          return choice
        })
        this.$store.commit('setChoiceOrder', { orderdChoices })
      }
    },
    ...mapState([
      'choices',
      'checkedArray'
    ])
  },
  methods: {
    afterEnter () {
      this.canFoucusAddForm = true
    },
    leave () {
      this.canFoucusAddForm = false
    },
    addTitle ({title}) {
      this.$store.commit('addChoice', {
        currentPlace: this.currentPlace,
        title
      })
      this.showAddForm = !this.showAddForm
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
