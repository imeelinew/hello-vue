<template>
    <div>
        <h1>Page Five</h1>
        <p>这是第五个页面</p>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'PageFive',
    created() {
        axios.get('http://shop-api.edu.koobietech.com/prod/tagProdList').then(res => {
            console.log(res)
        })
    }
}
</script>