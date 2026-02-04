<template>
    <div class="child3">
        <h2>子页面 3</h2>
        <p>这是 PageThree 的第三个子页面</p>
        <ComOne :val="i" @changeFun="changeVal"/>
    </div>
</template>

<script>
import ComOne from '@/components/ComOne.vue'
export default {
    name: 'PageThreeChild3',
    data(){
        return{
            i:100
        }
    },
    components: {
        //注册组件
        ComOne
    },
    methods:{
        changeVal(val){
            console.log("子组件触发了，值为：",val)
        }
    }
}
</script>

<style scoped>
.child3 h2 {
    color: #9b59b6;
}
</style>
