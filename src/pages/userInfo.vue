<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="userMessage">
            <user-message></user-message>
        </div>
        <div>
            <div class="box">用户名:{{detail.username}}</div>
        </div>
        <div>
            <div class="box">用户邮箱:{{detail.userMail}}</div>
        </div>
        <div>
            <div class="box">用户电话:{{detail.userPhone}}</div>
        </div>
        <div>
            <div class="box">用户状态:{{userStatus}}</div>
        </div>
        <div>
            <button @click="ShowChangeUserPassword">修改密码</button>
        </div>
        <!-- 用于密码的修改,需要在平时隐藏 -->
        <div v-show="showRePassword">
            <div class="box">
                <label for="">输入旧密码:</label>
                <input type="text" placeholder="输入旧密码">
            </div>
            <div class="box">
                    <label for="">输入新密码:</label>
                    <input type="text" placeholder="输入新密码">
            </div>
            <div>
                <button @click="changeUserPassword">确认修改</button>
            </div>
        </div>

        <div style="padding-top:10px">
            <router-link to="/sendEmail">
                <button>发送站内信</button>
            </router-link>
        </div>
        <common-footer></common-footer>
    </div>
</template> 

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/CommonFooter'
import UserMessage from '../components/UserMessage'
export default {
  name: 'userInfo',
  data() {
    return {
      items: [],
      detail: {},
      userStatus: '',
      showRePassword: false,
      password: '',
      repassword: ''
    }
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    UserMessage
  },
  created() {
    let userId = this.$route.query.id
    if (userId) {
      this.axios.post(this.url + '/showUser', { user_id: userId }).then(res => {
        console.log(res.data)
        if (res.data.status == 1) {
          alert(res.data.message)
        } else {
          this.detail = res.data.data
          if (res.data.data.userStop) {
            this.userStatus = '用户已经被封停'
          } else {
            this.userStatus = '用户状态正常'
          }
        }
      })
    } else {
      alert('用户信息错误')
    }
  },
  methods: {
    ShowChangeUserPassword() {
      this.showRePassword = true
    },
    changeUserPassword() {
      let token = localStorage.token
      let user_id = localStorage._id
      let username = localStorage.username
      this.axios
        .post(this.url + '/users/findPassword', {
          token: token,
          user_id: user_id,
          username: username,
          password: this.password,
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
  display: inline-flex;
}
.container {
  width: 100%;
  margin: 0 auto;
}
.userMessage {
  padding-top: 60px;
  margin-top: -10px;
  margin-left: -10px;
}
</style>
