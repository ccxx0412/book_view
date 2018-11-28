<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="userMessage">
            <user-message></user-message>
        </div>

        <!-- 用户的想关信息 -->
        <label for="">收件箱</label>
        <div>
            <email-list v-for="item in receive_items" :key="item._id" 
                :title="item.title"
                :fromUser="item.fromUser"
                :context="item.context">
            </email-list>
        </div>
        <label for="">发件箱</label>
        <div>
            <email-list v-for="item in send_items" :key="item._id" 
                :title="item.title"
                :fromUser="item.fromUser"
                :context="item.context">
            </email-list>
        </div>
        <send-talk-box></send-talk-box>
        <common-footer></common-footer>
    </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/CommonFooter'
import UserMessage from '../components/UserMessage'
import EmailList from '../components/EmailList'
import SendTalkBox from '../components/SendTalkBox'
export default {
    data(){
        return{
            receive_items:[],
            send_items:[],
            detail:[]
        }
    },
    components:{
        MovieIndexHeader,
        CommonFooter,
        UserMessage,
        EmailList,
        SendTalkBox,
    },
    created(){
        let userId=localStorage._id
        let send_data={
            token:localStorage.token,
            user_id:localStorage._id,
            receive:0
        }
        let receive_data={
            token:localStorage.token,
            user_id:localStorage._id,
            receive:1
        }
        if(userId){
            this.axios.post(this.url+'/users/showEmail',send_data).then((res)=>{
                console.log(res.data)
                // if(res.data.status==1){
                //     alert(res.data.message)
                // }else{
                //     this.send_items=res.data.data
                // }
            })
            this.axios.post(this.url+'/users/showEmail',receive_data).then((res)=>{
                console.log(res.data)
                if(res.data.status==1){
                    alert(res.data.message)
                }else{
                    this.receive_items=res.data.data
                }
            })
        }else{
            alert('用户信息错误')
        }
    }
}
</script>

<style scoped>
    .box{
        display: inline-flex;
    }
    .container{
        width: 100%;
        margin: 0 auto;
    }
    .userMessage{
        padding-top: 60px;
        margin-top: -10px;
        margin-left: -10px;
    }
</style>
