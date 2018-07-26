<template>
  <li class="listgoup-item-ngroup-item">
    <form @submit.prevent="addTitle">
      <input
        ref='text'
        name="title"
        v-model="title"
        :placeholder="placeholder"
        type="text"
        autocomplete="off"
        required
      >
      <button type="submit">
        <img src="../../assets/image/send.svg" alt="送出">
      </button>
    </form>
  </li>
</template>

<script>
export default {
  props: {
    showAddForm: {
      type: Boolean,
      required: true
    },
    canFoucusAddForm: {
      type: Boolean,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      title: ''
    }
  },
  watch: {
    canFoucusAddForm: function () {
      if (this.canFoucusAddForm) {
        this.$refs.text.focus()
      }
    }
  },
  methods: {
    addTitle () {
      this.$emit('addTitle', { title: this.title })
    }
  }
}
</script>

<style>
.listgoup-item-ngroup-item {
  animation-duration: 0.3s;
  & form {
    display: flex;
    height: 100%;
    width: 100%;
    & input {
      border: 0;
      border-left: 1px solid black;
      border-right: 1px solid black;
      border-radius: 0;
      flex: 9;
      line-height: 1.5rem;
      margin: 0;
      padding: 3vh 2vh;
      width: 100%;
    }
    & button {
      background-color: black;
      border: none;
      border-radius: 0;
      flex: 1;
      white-space: nowrap;
    }
  }
}
</style>
