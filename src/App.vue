<template>
  <div id="app">
    <transition
      :enter-active-class="animationActive"
      :leave-active-class="animationLeave"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      animationActive: '',
      animationLeave: ''
    }
  },
  created: function () {
    this.$store.commit('getInitialData')
  },
  watch: {
    '$route' (to, from) {
      if ((to.name === 'group' && from.name === 'place') || (to.name === 'place' && from.name === 'choiceStart')) {
        this.animationActive = 'animated slideInLeft change'
        this.animationLeave = 'animated slideOutRight change'
      } else if ((to.name === 'place' && from.name === 'group') || (to.name === 'choiceStart' && from.name === 'place')) {
        this.animationActive = 'animated slideInRight change'
        this.animationLeave = 'animated slideOutLeft change'
      }
    }
  }
}
</script>

<style>
@import "normalize.css";
@import "animate.css";

#app {
  margin: 0;
  padding: 0;
  position: relative;
}
.change {
  position: absolute;
}
</style>
