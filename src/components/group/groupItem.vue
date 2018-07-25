<template>
  <li class="listgoup-item">
    <h2 class="listgoup-item-h2">{{title}}</h2>
    <ul class="listgoup-item-ngroup">
      <draggable v-model="currentPlaces" :options="{handle:'.listgoup-item-ngroup-item-controlbtn'}">
        <li
          is="group-item-unit"
          v-for="place in currentPlaces"
          :key="place.pk"
          :pk="pk"
          :placePk="place.pk"
          :showSettingBtn="showSettingBtn"
          :placeTitle="place.title"
        ></li>
      </draggable>
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        v-on:after-enter="afterEnter"
        v-on:leave="leave"
      >
        <li is="group-item-unit-add"
          :key="`${currentGroup}-addform`"
          v-if="showAddForm"
          :showAddForm="showAddForm"
          :canFoucusAddForm="canFoucusAddForm"
          @addTitle="addTitle"
        ></li>
      </transition>
      <li is="setting-btn"
        :currentGroup="currentGroup"
        :showAddForm="showAddForm"
        :showSettingBtn="showSettingBtn"
        @showAddFormEvent="showAddForm = !showAddForm"
        @showSettingBtnEvent="showSettingBtn = !showSettingBtn"
      ></li>
    </ul>
  </li>
</template>

<script>
import groupItemUnit from '@/components/group/groupItemUnit.vue'
import groupItemUnitAdd from '@/components/group/groupItemUnitAdd.vue'
import settingBtn from '@/components/group/settingBtn.vue'
import draggable from 'vuedraggable'
import { mapState } from 'vuex'

export default {
  props: {
    pk: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      currentGroup: this.pk,
      showSettingBtn: false,
      showAddForm: false,
      canFoucusAddForm: false
    }
  },
  computed: {
    currentPlaces: {
      get: function () {
        return this.places
          .filter(place => place.group === this.pk)
          .sort((a, b) => {
            return Number(a.order) - Number(b.order)
          })
      },
      set: function (sortedPlaces) {
        const orderdPlaces = sortedPlaces.map((place, index) => {
          place.order = index + 1
          return place
        })
        this.$store.commit('setPlaceOrder', { orderdPlaces })
      }
    },
    ...mapState([
      'places'
    ])
  },
  methods: {
    afterEnter: function () {
      this.canFoucusAddForm = true
    },
    leave: function () {
      this.canFoucusAddForm = false
    },
    addTitle ({title}) {
      this.$store.commit('addPlace', {
        currentGroup: this.currentGroup,
        title
      })
      this.showAddForm = !this.showAddForm
    }
  },
  created () {
    console.log(this.title)
  },
  components: {
    groupItemUnit,
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
