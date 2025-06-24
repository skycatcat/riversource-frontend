<template>
  <div id="app">
    <!-- 顶部导航 -->
    <HeaderNavigation />

    <!-- 主要内容区域 -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- 底部 -->
    <FooterSection />
  </div>
</template>

<script>
import HeaderNavigation from './components/Header/HeaderNavigation.vue'
import FooterSection from './components/Footer/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeaderNavigation,
    FooterSection
  }
}
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 140px);
  /* 减去头部和底部的高度 */
}
</style>
