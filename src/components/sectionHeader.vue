<template>
  <header class="home-section-title">
    <div class="header-nav">
      <div class="header-nav-btn left">
        <slot name="left"></slot>
      </div>
      <h1><slot></slot></h1>
      <div class="header-nav-btn right">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<style>
.home-section-title{
  align-items: flex-end;
  background-color: #b8dbd9;
  display: flex;
  height: 12vh;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

.header-nav {
  align-items: center;
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: 3%;
  & h1 {
    color: #586f7c;
    font-size: 1.6rem;
    font-weight: normal;
    margin: 0;
  }
}

.header-nav-btn {
  color: #586f7c;
  font-size: 1rem;
  height: 45px;
  line-height: 1rem;
  width: 30px;
  white-space: nowrap;
  &.left {
    margin-left: 4%;
  }
  &.right {
    margin-right: 4%;
  }
  & a, & button {
    background-color: transparent;
    border: none;
    height: 100%;
    padding: 0;
    width: 100%;
    & img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
