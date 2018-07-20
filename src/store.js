import Vue from 'vue'
import Vuex from 'vuex'
import uuidv1 from 'uuid/v1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [],
    places: [],
    choices: []
  },
  getter: {

  },
  mutations: {
    getInitialData (state) {
      if (!localStorage.getItem('groups')) {
        const groupArray = [
          { pk: '1', title: '學校', order: 1 },
          { pk: '2', title: '家附近', order: 2 },
          { pk: '3', title: '公司', order: 3 }
        ]
        localStorage.setItem('groups', JSON.stringify(groupArray))
      }
      if (!localStorage.getItem('places')) {
        const placeArray = [
          { pk: '1', group: '1', title: '午晚餐', order: 1 },
          { pk: '2', group: '1', title: '飲料', order: 2 },
          { pk: '3', group: '2', title: '午晚餐', order: 1 },
          { pk: '4', group: '2', title: '宵夜', order: 2 },
          { pk: '5', group: '2', title: '早餐', order: 3 },
          { pk: '6', group: '3', title: '午晚餐', order: 1 }
        ]
        localStorage.setItem('places', JSON.stringify(placeArray))
      }
      if (!localStorage.getItem('choices')) {
        const choiceArray = [
          { pk: '1', place: '1', title: '便當', checked: false, order: 1 },
          { pk: '2', place: '1', title: '牛肉麵', checked: false, order: 2 },
          { pk: '3', place: '1', title: '水餃', checked: false, order: 3 },
          { pk: '4', place: '1', title: '涼麵', checked: false, order: 4 }
        ]
        localStorage.setItem('choices', JSON.stringify(choiceArray))
      }
      state.groups = JSON.parse(localStorage.getItem('groups'))
      state.places = JSON.parse(localStorage.getItem('places'))
      state.choices = JSON.parse(localStorage.getItem('choices'))
    },
    checkChoice (state, payload) {
      const checkedIndex = state.choices.findIndex(choice => choice.pk === payload.pk)
      const editedItem = state.choices[checkedIndex]
      editedItem.checked = !editedItem.checked
      state.choices.splice(checkedIndex, 1, editedItem)
      localStorage.setItem('choices', JSON.stringify(state.choices))
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
      // { pk: '1', place: '1', title: '便當', checked: false, order: 1 }
      const pk = uuidv1()
      const place = payload.currentPlace
      const title = payload.title
      const order = Number(state.choices.length) + 1
      console.log(pk, place, title)
      state.choices.push({
        pk,
        place,
        title,
        checked: false,
        order: order
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
