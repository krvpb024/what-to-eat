<template>
  <header class="home-section-title">
    <h1><slot></slot></h1>
  </header>
</template>

<style>
.home-section-title{
  background-color: #b8dbd9;
  display: flex;
  flex-direction: column;
  height: 15vh;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  text-align: center;
  top: 0;
  & h1 {
    color: #586f7c;
    font-weight: normal;
  }
}
</style>
