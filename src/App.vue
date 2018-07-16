<template>
  <div id="app">
    <transition
      :enter-active-class="animationActive"
      :leave-active-class="animationLeave"
    >
      <router-view/>
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
  watch: {
    '$route' (to, from) {
      if (to.name === 'group') {
        this.animationActive = 'animated slideInLeft change'
        this.animationLeave = 'animated slideOutRight change'
      } else {
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
