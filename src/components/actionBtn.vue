<template>
  <div class="home-section-add">
    <router-link :to="url" class="home-section-add-link">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>

<style>
.home-section-add {
  align-items: center;
  border-radius: 50%;
  bottom: 4vh;
  background-color: #586f7c;
  color: #FFF;
  font-size: 2rem;
  height: 40px;
  justify-content: center;
  left: 50%;
  position: fixed;
  text-align: center;
  text-decoration: none;
  transform: translateX(-50%);
  width: 40px;
  & p {
    margin: 0;
  }
}
</style>
