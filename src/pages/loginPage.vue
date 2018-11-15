<template>
    <div>
        <div>
            <div>
                <div class="box">
                    <label for="">输入用户名:</label>
                    <input v-model="username" type="text" placeholder="用户名">
                </div>
                <div class="box">
                    <label for="">密码:</label>
                    <input v-model="password" type="text" placeholder="密码">
                </div>
                <div class="box">
                    <button @click="userLogin">登录</button>
                    <button @click="userLRegister" style="margin-left:10px">注册</button>
                    <button @click="findBackPassword" style="margin-left:10px">忘记密码</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        userLogin(){
            this.axios.post(this.url+'/users/login',{
                username:this.username,
                password:this.password
            }).then((res)=>{
                console.log(res.data)
                if(res.data.status==1){
                    alert(res.data.message)
                }else{
                    let save_token={
                        username:this.username,
                        token:res.data.token
                    }
                    localStorage.setItem('token',save_token.token)
                    localStorage.setItem('username',save_token.username)
                    // TODO: 存_id
                    this.$router.go(-1)
                }
            })
        },
        userLRegister(){
            this.$router.push({path:'registerPage'})
        },
        findBackPassword(){
            this.$router.push({path:'findPasswordPage'})
        }   
    }
}
</script>

<style scoped>
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
</style>
