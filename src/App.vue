<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/page-one">页面一</router-link> |
      <router-link to="/page-two">页面二</router-link> |
      <router-link to="/page-three">页面三</router-link> |
      <router-link to="/home">返回首页</router-link> |
      <router-link to="/backhome">首页别名</router-link>

      <div class="nav-item" @click="goPage">编程式导航</div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    goPage() {
      //编程式导航
      //push类似于 router-link里的to属性
      // this.$router.push('/page-two')
      // this.$router.push("/page-three", { query: { a: 1, b: 2, c: 3 } })
      // go() 方法接受一个整数参数
      // 正数表示前进
      // 负数表示后退
      this.$router.go(-1)
    }
  }
}
</script>
<style>
/* 进入动画 */
.fade-enter {
  opacity: 0;
  /* 起始状态：透明 */
}

.fade-enter-active {
  transition: opacity 0.5s ease-in-out;
  /* 过渡过程：只放 transition */
}

.fade-enter-to {
  opacity: 1;
  /* 结束状态：完全显示 */
}

/* 离开动画 */
.fade-leave {
  opacity: 1;
  /* 起始状态：完全显示 */
}

.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
  /* 过渡过程：只放 transition */
}

.fade-leave-to {
  opacity: 0;
  /* 结束状态：透明 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
