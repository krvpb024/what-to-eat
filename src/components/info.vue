<template>
  <transition
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutDown"
  >
    <section class="groupadd-section">
      <scroll-lock class="lock-body-scroll">
      <section-header>
        關於
        <template slot="right">
          <button to="/group" @click="closeInfo">
            <img src="../assets/image/add-close.svg" alt="關閉">
          </button>
        </template>
      </section-header>
      <section-content>
        <article>
          <h2>吃什麼</h2>
          <p class="emoji">🍔🍱🥟🍜🍝</p>
          <p>
            <strong>吃什麼</strong>是一個透過機率來幫助你下決定的web app。希望至少能幫助你做決定時減少一些痛苦。
            <br>
            <br>
            <strong>吃什麼</strong>支援離線使用，資料只會儲存在你的瀏覽器裡面。你也可以把這個網頁加入手機的主畫面，之後就不用再開啟瀏覽器輸入網址就可以直接使用。
          </p>
        </article>
        <article>
          <h2>作者</h2>
          <p>
            我是<strong>吃什麼</strong>的作者Chen Yi-Chen，如果發現這個web app有bug可以到<a href="https://github.com/krvpb024/what-to-eat" target="_blank" rel="noopener">github</a>發issue給我。或是直接發信給我<address>krvpb024@protonmail.com</address>
          </p>
        </article>
      </section-content>
      </scroll-lock>
    </section>
  </transition>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue'
import sectionContent from '@/components/sectionContent.vue'
import actionBtn from '@/components/actionBtn.vue'

export default {
  methods: {
    closeInfo () {
      this.$emit('closeInfo')
    }
  },
  components: {
    sectionHeader,
    sectionContent,
    actionBtn
  }
}
</script>

<style scoped>
.lock-body-scroll {
  overflow: scroll;
}
article {
  padding: 0 7%;
  text-align: left;
  & h2 {
    text-align: center;
  }
  & p {
    line-height: 1.5rem;
    & a {
      color: #586f7c;
    }
    &.emoji {
      font-size: 3rem;
      text-align: center;
    }
  }
}
</style>
