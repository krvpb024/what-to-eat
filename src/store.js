import Vue from 'vue'
import Vuex from 'vuex'
import uuidv1 from 'uuid/v1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [],
    places: [],
    choices: [],
    checkedArray: []
  },
  getters: {
    checkedLength: state => state.checkedArray.length
  },
  mutations: {
    getInitialData (state) {
      if (!localStorage.getItem('groups')) {
        const groupArray = []
        localStorage.setItem('groups', JSON.stringify(groupArray))
      }
      if (!localStorage.getItem('places')) {
        const placeArray = []
        localStorage.setItem('places', JSON.stringify(placeArray))
      }
      if (!localStorage.getItem('choices')) {
        const choiceArray = []
        localStorage.setItem('choices', JSON.stringify(choiceArray))
      }
      state.groups = JSON.parse(localStorage.getItem('groups'))
      state.places = JSON.parse(localStorage.getItem('places'))
      state.choices = JSON.parse(localStorage.getItem('choices'))
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
