<template>
    <div>
        <label for="">评论</label>
        <hr>
        <div>
            <li v-for="item in items" :key="item._id">
                {{item.username}}评论:{{item.context}}
            </li>
        </div>
        <div style="padding:5px">
            <textarea v-model="context" style="width:80%;height:50px;" placeholder="内容"></textarea>
        </div>
        <div style="padding-top:10px">
            <button @click='send_comment'>评论</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      context: ''
    }
  },
  props: ['movie_id'],
  created() {
    this.axios
      .post(this.url + '/movie/comment', {
        id: this.movie_id
      })
      .then(res => {
        console.log(res.data)
        if(res.data.status==0){
            this.items=res.data.data
        }else{
            alert(res.data.message)
        }
      })
  },
  methods: {
    send_comment() {
      let send_data
      if (typeof localStorage.username != 'undefined') {
        send_data = {
          movie_id: this.movie_id,
          context: this.context,
          username: localStorage.username
        }
      } else {
        send_data = {
          movie_id: this.movie_id,
          context: this.context
        }
      }
      this.axios
        .post(this.url + '/users/postComment', send_data)
        .then(res => {
            alert(res.data.message)
        })
    }
  }
}
</script>

<style scoped>
</style>
