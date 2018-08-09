import Vue from 'vue'
import Vuex from 'vuex'
import uuidv1 from 'uuid/v1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [],
    places: [],
    choices: [],
    checkedArray: [],
    haveSeenInfo: false
  },
  getters: {
    checkedLength: state => state.checkedArray.length
  },
  mutations: {
    getInitialData (state) {
      if (!localStorage.getItem('groups')) {
        const groupArray = []
        groupArray.push({pk: 'a2c596b0-9166-11e8-8023-65aca2634d53', title: '公司（範例）', order: 1})
        localStorage.setItem('groups', JSON.stringify(groupArray))
      }
      if (!localStorage.getItem('places')) {
        const placeArray = []
        placeArray.push(
          {
            pk: 'a5490d40-9166-11e8-8023-65aca2634d53',
            group: 'a2c596b0-9166-11e8-8023-65aca2634d53',
            order: 1,
            title: '🍴晚餐'
          },
          {
            pk: '680335e0-9167-11e8-9bf0-19044503d060',
            group: 'a2c596b0-9166-11e8-8023-65aca2634d53',
            order: 2,
            title: '🥤飲料'
          }
        )
        localStorage.setItem('places', JSON.stringify(placeArray))
      }
      if (!localStorage.getItem('choices')) {
        const choiceArray = []
        choiceArray.push(
          {
            order: 1,
            pk: 'a74d1aa0-9166-11e8-8023-65aca2634d53',
            place: 'a5490d40-9166-11e8-8023-65aca2634d53',
            title: '🍜拉麵'
          },
          {
            order: 2,
            pk: 'aabfd330-9166-11e8-8023-65aca2634d53',
            place: 'a5490d40-9166-11e8-8023-65aca2634d53',
            title: '🍱便當'
          },
          {
            order: 3,
            pk: 'a16e9cc0-9167-11e8-9348-c3445e362814',
            place: 'a5490d40-9166-11e8-8023-65aca2634d53',
            title: '🍔漢堡'
          },
          {
            order: 4,
            pk: 'ace79fc0-9167-11e8-9348-c3445e362814',
            place: '680335e0-9167-11e8-9bf0-19044503d060',
            title: '二芳'
          },
          {
            order: 5,
            pk: 'bca50330-9167-11e8-9348-c3445e362814',
            place: '680335e0-9167-11e8-9bf0-19044503d060',
            title: '茶水會'
          },
          {
            order: 6,
            pk: 'dec4d260-9167-11e8-9348-c3445e362814',
            place: '680335e0-9167-11e8-9bf0-19044503d060',
            title: '珍煮母'
          }
        )
        localStorage.setItem('choices', JSON.stringify(choiceArray))
      }
      if (!localStorage.getItem('haveSeenInfo')) {
        const haveSeenInfo = false
        localStorage.setItem('haveSeenInfo', JSON.stringify(haveSeenInfo))
      }
      state.groups = JSON.parse(localStorage.getItem('groups'))
      state.places = JSON.parse(localStorage.getItem('places'))
      state.choices = JSON.parse(localStorage.getItem('choices'))
      state.haveSeenInfo = JSON.parse(localStorage.getItem('haveSeenInfo'))
    },
    clickedInfo (state) {
      state.haveSeenInfo = true
      localStorage.setItem('haveSeenInfo', JSON.stringify(state.haveSeenInfo))
    },
    checkChoice (state, payload) {
      if (state.checkedArray.indexOf(payload.title) === -1) {
        state.checkedArray.push(payload.title)
      } else {
        const removeIndex = state.checkedArray.indexOf(payload.title)
        state.checkedArray.splice(removeIndex, 1)
      }
    },
    clearCheckArray (state) {
      state.checkedArray = []
    },
    addGroup (state, payload) {
      const pk = uuidv1()
      const title = payload.groupTitle
      const order = Number(state.groups.length) + 1
      state.groups.push({
        pk,
        title,
        order
      })
      localStorage.setItem('groups', JSON.stringify(state.groups))
    },
    editGroup (state, payload) {
      const groupArray = JSON.parse(localStorage.getItem('groups'))
      const editIndex = groupArray.findIndex(group => group.pk === payload.pk)
      groupArray[editIndex].title = payload.editTitle
      state.groups = groupArray
      localStorage.setItem('groups', JSON.stringify(state.groups))
    },
    deleteGroup (state, payload) {
      const groupArray = JSON.parse(localStorage.getItem('groups'))
      const deleteIndex = groupArray.findIndex(group => group.pk === payload.pk)
      groupArray.splice(deleteIndex, 1)
      state.groups = groupArray
      localStorage.setItem('groups', JSON.stringify(state.groups))
    },
    addPlace (state, payload) {
      // { pk: '1', group: '1', title: '午晚餐', order: 1 },
      const pk = uuidv1()
      const group = payload.currentGroup
      const title = payload.title
      const placeArray = state.places.filter(place => place.group === group)
      const order = Number(placeArray.length) + 1
      state.places.push({
        pk,
        group,
        title,
        order
      })
      localStorage.setItem('places', JSON.stringify(state.places))
    },
    addChoice (state, payload) {
      // { pk: '1', place: '1', title: '便當', order: 1 }
      const pk = uuidv1()
      const place = payload.currentPlace
      const title = payload.title
      const order = Number(state.choices.length) + 1
      state.choices.push({
        pk,
        place,
        title,
        order
      })
      localStorage.setItem('choices', JSON.stringify(state.choices))
    },
    deletePlace (state, payload) {
      const deletedArray = state.places.filter(place => place.pk !== payload.pk)
      state.places = deletedArray
      localStorage.setItem('places', JSON.stringify(state.places))
    },
    deleteChoice (state, payload) {
      const deletedArray = state.choices.filter(choice => choice.pk !== payload.pk)
      state.choices = deletedArray
      state.checkedArray = state.checkedArray.filter(item => item !== payload.title)
      localStorage.setItem('choices', JSON.stringify(state.choices))
    },
    editPlace (state, payload) {
      const placeIndex = state.places.findIndex(place => place.pk === payload.pk)
      state.places[placeIndex].title = payload.title
      localStorage.setItem('places', JSON.stringify(state.places))
    },
    editChoice (state, payload) {
      const choiceIndex = state.choices.findIndex(choice => choice.pk === payload.pk)
      state.choices[choiceIndex].title = payload.title
      localStorage.setItem('choices', JSON.stringify(state.choices))
    },
    setPlaceOrder (state, payload) {
      payload.orderdPlaces.forEach((place) => {
        const placeIndex = state.places.findIndex((statePlace) => {
          return statePlace.pk === place.pk
        })
        state.places.splice(placeIndex, 1, place)
      })
      localStorage.setItem('places', JSON.stringify(state.places))
    },
    setChoiceOrder (state, payload) {
      payload.orderdChoices.forEach((choice) => {
        const choiceIndex = state.choices.findIndex((statechoice) => {
          return statechoice.pk === choice.pk
        })
        state.choices.splice(choiceIndex, 1, choice)
      })
      localStorage.setItem('choices', JSON.stringify(state.choices))
    }
  },
  actions: {

  }
})
