<template>
  <li class="listgoup-item"><router-link class="listgoup-item-link" to="/about">{{title}}</router-link></li>
</template>

<style>
.listgoup-item {
  font-size: 1.3rem;
  list-style: none;
  margin-bottom: 4%;
  padding: 2% 0;
  text-align: center;
}
.listgoup-item-link {
  color: #04724d;
  text-decoration: none;
}
</style>

<script>
export default {
  props: {
    order: Number,
    title: String
  }
}
</script>
