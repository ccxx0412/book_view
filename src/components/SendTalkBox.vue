<template>
    <div>
        <div>
            <input v-model="toUserName" placeholder="发送用户名">
        </div>
        <div>
            <input v-model="title" style="padding:10px" placeholder="发送标题">
        </div>
        <div style="padding:5px">
            <textarea v-model="context" style="width:80%;height:50px" placeholder="内容"></textarea>
        </div>
        <div style="padding-top:10px">
            <button @click="send_mail">发送站内信</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            toUserName:'',
            title:'',
            context:''
        }
    },
    methods:{
        send_mail(){
            let send_data={
               token:localStorage.token,
               user_id:localStorage._id,
               toUserName:this.toUserName,
               title:this.title,
               context:this.context 
            }
            this.axios.post(this.url+'/users/sendEmail',send_data).then((res)=>{
                console.log(res.data)
                if(res.data.status==1){
                    alert(res.data.message)
                }else{
                    alert('发送成功')
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
