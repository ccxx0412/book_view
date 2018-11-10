<template>
    <div class="header">
        <router-link to="/loginPage">
            <div class="header_menu">登录</div>
        </router-link>
    </div>
</template>

<script>
// 一开始就对session进行检测,如果存在session直接显示登录,如不存在则是跳转链接
export default {

}
</script>

<style>
    .header{
        width: 100%;
        height: 30px;
        left: 0;
        top: 0;
        color: #000;
        background-color: #c3bd5c;
    }
    .header_menu{
        padding-right: 60px;
        padding-top: 10px;
        float: right;
        color: #fff;
        font-size: 8px;
    }
</style>
