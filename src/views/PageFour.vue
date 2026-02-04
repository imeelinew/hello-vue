<template>
    <div>
        <h1>Page Four</h1>
        <p>这是第四个页面</p>
        <h1>当前count值:{{ $store.state.count }}</h1>
        <h1>计算属性count值:{{ count }}</h1>
    </div>
</template>

<script>
export default {
    name: 'PageFour',
    created() {
        console.log(this.$store.state.count)
    },
    computed: {
        count() {
            return this.$store.state.count
        }
    }
}
</script>   