<template>
    <div v-if="!isLogin" class="header">
        <router-link to="/loginPage">
            <div class="header_menu">登录</div>
        </router-link>
    </div>
    <div v-else class="header">
        <router-link :to="{path:'/userInfo',query:{id:id}}">
            <div class="header_menu">已登录:{{username}}</div>
        </router-link>
    </div>
</template>

<script>
// 一开始就对session进行检测,如果存在session直接显示登录,如不存在则是跳转链接
export default {
  data() {
    return {
      isLogin: false,
      username: ''
    }
  },
  created() {
    // 此时登录成功
    let token = localStorage.getItem('token')
    // 检测是否是用户登录状态
    if (token) {
        this.isLogin=true
        this.username=localStorage.getItem('username')
        this.id=localStorage.getItem('id')
    }else{
        console.log('用户登录失败')
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 30px;
  left: 0;
  top: 0;
  color: #000;
  background-color: #c3bd5c;
}
.header_menu {
  padding-right: 60px;
  padding-top: 10px;
  float: right;
  color: #fff;
  font-size: 8px;
}
</style>
