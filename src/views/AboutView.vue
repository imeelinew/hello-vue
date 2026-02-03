<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  // 1. 进入路由前调用（此时组件实例还未创建，无法访问 this）
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter - 即将进入 About 页面')
    console.log('从:', from.path, '到:', to.path)
    // 如果需要访问组件实例，可以通过回调函数
    next(vm => {
      // vm 就是组件实例
      console.log('组件实例已创建:', vm.$options.name)
    })
  },

  // 2. 路由参数变化时调用（组件被复用时触发，如 /about?id=1 → /about?id=2）
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate - 路由参数发生变化')
    console.log('旧参数:', from.query, '新参数:', to.query)
    // 可以在这里根据新参数重新获取数据
    next()
  },

  // 3. 离开路由前调用（可以访问 this）
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave - 即将离开 About 页面')
    // 常用于：提示用户保存未保存的数据
    // const answer = window.confirm('确定要离开吗？未保存的数据将丢失！')
    // if (answer) {
    //   next()
    // } else {
    //   next(false) // 取消导航
    // }
    next()
  }
}
</script>
