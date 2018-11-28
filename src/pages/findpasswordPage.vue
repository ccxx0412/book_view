<template>
    <div>
        <div>
            <div v-show="showUserInfo">
                <div class="box">
                    <label for="">输入用户名:</label>
                    <input v-model="username" placeholder="用户名">
                </div>
                <div class="box">
                    <label for="">输入邮箱:</label>
                    <input v-model="userMail" placeholder="邮箱">
                </div>
                <div class="box">
                    <label for="">输入手机:</label>
                    <input v-model="userPhone" placeholder="手机">
                </div>
                <div class="box">
                    <button @click="checkUser">找回密码</button>
                </div>
            </div>
            <div v-show="showRepassword">
                <div class="box">
                    <label for="">输入新密码:</label>
                    <input v-model="repassword" placeholder="输入新密码">
                </div>
                <div class="box">
                    <button @click="changeUserPassword">修改密码</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showUserInfo: true,
      showRepassword: false,
      username: '',
      repassword: '',
      userMail: '',
      userPhone: ''
    }
  },
  methods: {
    checkUser() {
      this.axios
        .post(this.url + '/users/findPassword', {
          username: this.username,
          userMail: this.userMail,
          userPhone: this.userPhone
        })
        .then(res => {
          console.log(res.data)
          if (res.data.status == 1) {
            alert(res.data.message)
          } else {
            alert(res.data.message)
            this.showUserInfo = false
            this.showRepassword = true
          }
        })
    },
    // FIXME: 还有问题,应该不需要全部参数,修改后台(可以去掉这个功能)
    changeUserPassword() {
      this.axios
        .post(this.url + '/users/findPassword', {
          username: this.username,
          userMail: this.userMail,
          userPhone: this.userPhone,
          repassword: this.repassword
        })
        .then(res => {
          if (res.data.status == 1) {
            alert(res.data.message)
          } else {
            alert(res.data.message)
            this.$router.go(-1)
          }
        })
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
</style>
