<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div class="">
                <h1>{{detail.movieName}}</h1>
                <div class="viewNum">下载次数:{{detail.movieNumDownload}}</div>
            </div>
            <div class="">
                <button @click="movieDownload">点击下载</button>
            </div>
            <div>
                <img  class="headerImg" :src="detail.movieImg" alt="">
            </div>
            <div class="btnPosition" @click="support">
                <div class="SupportBtn">点赞<div>{{detail.movieNumSuppose}}</div></div>
            </div>
        </div>
        <div>
            <comment :movie_id="movie_id"></comment>
        </div>
        <div>
            <common-footer></common-footer>
        </div>
    </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/CommonFooter'
import Comment from '../components/Comment'
let movie_id = 0
export default {
  name: 'MovieDetail',
  data() {
    return {
      // movie_id:'',
      detail: {}
    }
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    Comment
  },
  created() {
    //   初始化获取电影内容
    this.movie_id = this.$route.query.id
    movie_id = this.$route.query.id
    this.axios
      .post(this.url + '/movie/detail', {
        id: movie_id
      })
      .then(res => {
        this.detail = res.data.data
        console.log(res.data)
      })
  },
  methods: {
    support() {
      this.axios
        .post(this.url + '/movie/support', {
          id: movie_id
        })
        .then((res)=>{
          let that = this
          console.log(res.data)
          if (res.data.status == 0) {
            that.axios
              .post(that.url + '/movie/showNumber', {
                id: movie_id
              })
              .then((res)=>{
                that.detail.movieNumSuppose = res.data.data.movieNumSuppose
              })
          }
        })
    },
    movieDownload() {
      this.axios
        .post(this.url + '/movie/download', {
          movie_id: movie_id
        })
        .then((res)=>{
          // let that = this
          console.log(res.data)
          if (res.data.status == 1) {
            alert(res.data.message)
          }else{
            // 跳转至下载链接
            location.href=res.data.data
          }
        })
    }
  }
}
</script>

<style scoped>
.headerImg {
  height: 200px;
}
.container {
  width: 100%;
  margin: 0 auto;
}
.contentMain {
  padding-top: 150px;
}
.btnPosition {
  padding-left: 48%;
}
.SupportBtn {
  border: 1px solid #000;
  width: 60px;
}
.viewNum {
  font-size: 10px;
}
</style>
