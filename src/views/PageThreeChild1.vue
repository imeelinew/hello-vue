<template>
    <div class="child1">
        <h2>子页面 1</h2>
        <p>这是 PageThree 的第一个子页面</p>
        <p>参数a: {{ $route.query.a }}</p>
        <p>参数b: {{ $route.query.b }}</p>
        <p>参数c: {{ $route.query.c }}</p>
    </div>
</template>

<script>
export default {
    name: 'PageThreeChild1'
}
</script>

<style scoped>
.child1 h2 {
    color: #3498db;
}
</style>
