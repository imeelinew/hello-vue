<template>
    <div>
        <h1>我是组件1</h1>
        <p>数字：{{ num }}</p>
        <button @click="add">add</button>
        <p>接收到的值：{{ val }}</p>
    </div>
</template>
<script>
export default {
    name: 'ComOne',
    props:["val"],
    data(){
        return{
            num:10
        }
    },
    methods:{
        add(){
            this.num++
            this.$emit('changeFun',this.num)
        }
    }
}
</script>