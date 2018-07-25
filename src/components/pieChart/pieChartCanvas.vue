<template>
  <canvas></canvas>
</template>

<script>
import Hammer from 'hammerjs'
import { mapState } from 'vuex'

export default {
  props: {
    percentage: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      deg: 0
    }
  },
  computed: {
    ...mapState([
      'checkedArray'
    ])
  },
  mounted () {
    const canvas = document.querySelector('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const ctx = canvas.getContext('2d')

    const drawPie = () => {
      const colors = [
        '#f8fbfb',
        '#e5f1f1',
        '#d1e8e6',
        '#bededc',
        '#97b4b2'
      ]
      // translate point to center
      ctx.translate(canvas.width / 2 + 3, canvas.height / 2)

      ctx.rotate(-90 * Math.PI / 180)
      for (let i = 0; i < this.checkedArray.length; i++) {
        const getColor = () => {
          let colorIndex = i
          while (colorIndex >= colors.length) {
            colorIndex -= colors.length
          }
          return colors[colorIndex]
        }

        ctx.rotate(Math.PI / 180 * this.percentage)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(canvas.width / 2 + 3, 0)
        ctx.arc(0, 0, canvas.width / 2, 0, Math.PI / 180 * this.percentage)
        ctx.lineTo(0, 0)
        ctx.fillStyle = getColor()
        ctx.fill()
        ctx.closePath()

        ctx.save()
        ctx.rotate(Math.PI / 180 * -90)
        ctx.rotate(Math.PI / 180 * this.percentage / 2)
        ctx.beginPath()
        ctx.save()
        ctx.translate(0, canvas.width / 3.8)
        ctx.rotate(Math.PI)
        ctx.font = `${this.percentage / 15}vw Arial`
        ctx.fillStyle = 'black'
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        ctx.fillText(this.checkedArray[i], 0, 0)
        ctx.restore()
        ctx.closePath()
        ctx.restore()
      }
    }
    drawPie()
    const container = document.querySelector('canvas')
    const canvasHammer = new Hammer(container, {
      threshold: 50
    })
    canvasHammer.on('panleft panright', (ev) => {
      if (ev.direction === 4) {
        this.deg -= ev.distance / 4
      } else {
        this.deg += ev.distance / 4
      }
      canvas.style.transform = `rotate(${this.deg}deg)`
    })
    canvasHammer.on('swipeleft swiperight', (ev) => {
      // alert(ev.distance / ev.deltaTime)
      let v = ev.distance / ev.deltaTime * 100
      const momentum = setInterval(() => {
        if (ev.direction === 4) {
          this.deg -= v
        } else if (ev.direction === 2) {
          this.deg += v
        } else {
          this.deg += v
        }
        v *= 0.9
        canvas.style.transform = `rotate(${this.deg}deg)`
        if (Math.round(v) === 0) {
          clearInterval(momentum)
        }
      }, 30)
    })
  }
}
</script>
