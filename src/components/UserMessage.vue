<template>
  <div v-if="!isLogin" class="header">
    <Row>
      <i-col span="2" offset="22">
        <router-link to="/loginPage">
          <div class="header_menu">
            <Icon type="person"></Icon>登录
          </div>
        </router-link>
      </i-col>
    </Row>
  </div>
  <div v-else class="header">
    <Row>
      <i-col span="2" offset="22">
        <router-link :to="{path:'/userInfo',query:{id:id}}">
          <div class="header_menu">
            <Icon type="person"></Icon>已登录:{{username}}
          </div>
        </router-link>
      </i-col>
    </Row>
  </div>
</template>

<script>
// 一开始就对session进行检测,如果存在session直接显示登录,如不存在则是跳转链接
export default {
  data() {
    return {
      isLogin: false,
      username: ""
    };
  },
  created() {
    // 此时登录成功
    let token = localStorage.getItem("token");
    // 检测是否是用户登录状态
    if (token) {
      this.isLogin = true;
      this.username = localStorage.getItem("username");
      this.id = localStorage.getItem("_id");
    } else {
      console.log("用户登录失败");
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 30px;
  left: 0;
  top: 0;
  color: #000;
  background-color: #c3bbbb;
}
.header_menu {
  padding-top: 6px;
  color: #fff;
  font-size: 12px;
}
</style>
