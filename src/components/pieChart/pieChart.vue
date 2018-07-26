<template>
  <div class="pie-wrap">
    <div class="pie-outer">
      <div class="unit-wrap">
        <pie-chart-canvas
          :percentage="percentage"
        ></pie-chart-canvas>
      </div>
    </div>
  </div>
</template>

<script>
import pieChartCanvas from '@/components/pieChart/pieChartCanvas.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    percentage () {
      return 360 / this.checkedArray.length
    },
    ...mapState([
      'checkedArray'
    ])
  },
  components: {
    pieChartCanvas
  }
}
</script>

<style>
.pie-wrap {
  text-align: center;
}
.pie-outer {
  background-color: #586f7c;
  border-radius: 50%;
  display: inline-block;
  height: 90vw;
  position: relative;
  text-align: left;
  width: 90vw;
  &::after {
    border-width: 0 8vw 15vw;
    border-style: solid;
    border-color: transparent transparent #586f7c;
    content: '';
    display: inline-block;
    font-size: 0;
    height: 0;
    left: 50%;
    position: absolute;
    top: 0;
    transform: rotate(180deg) translate(45%, -1vw);
    width: 0;
  }
}
.unit-wrap {
  /* background: #b8dbd9; */
  border-radius: 50%;
  left: 50%;
  height: 85%;
  position: absolute;
  overflow: hidden;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  & .content {
    background-color: #0ce;
    border: 1vw solid #0ce;
    box-sizing: border-box;
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    transform: rotate(0deg);
    transform-origin: 100% center;
    top: 0;
    width: 50%;
  }
}
</style>
