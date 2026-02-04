<template>
    <div class="page-three">
        <h1>Page Three</h1>
        <p>这是第三个页面（包含子路由）</p>

        <!-- 子路由导航 -->
        <nav class="sub-nav">
            <router-link to="/page-three/child1">子页面 1</router-link>
            <router-link to="/page-three/child2">子页面 2</router-link>
            <router-link to="/page-three/child3">子页面 3</router-link>
        </nav>

        <!-- 子路由出口 -->
        <div class="child-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageThree'
}
</script>

<style scoped>
.page-three {
    padding: 20px;
}

.page-three h1 {
    color: #e74c3c;
}

.sub-nav {
    margin: 20px 0;
    display: flex;
    gap: 15px;
}

.sub-nav a {
    padding: 8px 16px;
    background: #f0f0f0;
    border-radius: 4px;
    text-decoration: none;
    color: #333;
}

.sub-nav a.router-link-active {
    background: #e74c3c;
    color: white;
}

.child-content {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
</style>
