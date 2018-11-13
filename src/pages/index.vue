<template>
    <div class="container">
        <!-- header组件 -->
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <!-- 用户信息组件 -->
        <div class="userMessage">
            <user-message></user-message>
        </div>
        <!-- 大图组件 -->
        <div class="contentPic">
            <index-header-pic v-for="item in headerItems" :key="item._id"
            :recommendImg="item.recommendImg"
            :recommendSrc="item.recommendSrc"
            :recommendTitle="item.recommendTitle"
            ></index-header-pic>
        </div>
        <div class="contentMain">
            <div>
                <div class="contentLeft">
                    <ul class="cont-ul">
                        <!-- 电影列表组件 -->
                        <movies-list v-for="item in moviesItems" :key="item._id" :id="item._id" 
                        :movieName="item.movieName"
                        :movieTime="item.movieTime"
                        ></movies-list>
                    </ul>
                </div>
            </div>
            <div>
                <div class="contentRight">
                    <ul class="cont-ul">
                        <!-- 新闻列表组件 -->
                        <news-list v-for="item in newsItems" :key="item._id" :id="item._id"
                        :articleTitle="item.articleTitle"
                        :articleTime="item.articleTime"
                        ></news-list>
                    </ul>
                </div>
            </div>
        </div>
        <!-- footer组件 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/CommonFooter'
import IndexHeaderPic from '../components/IndexHeaderPic'
import MoviesList from '../components/MoviesList'
import NewsList from '../components/NewsList'
import UserMessage from '../components/UserMessage'

export default {
  data() {
    return {
      headerItems: [], // 主页推荐
      newsItems: [], //主页新闻列表
      moviesItems: [] //主页电影列表
    }
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    IndexHeaderPic,
    MoviesList,
    NewsList,
    UserMessage
  },
  created() {
    //   主页推荐
    this.axios.get(this.url+'/showIndex').then(res => {
      this.headerItems = res.data.data
      console.log(res.data)
    })
    //   获取新闻列表
    this.axios.get(this.url+'/showArticle').then(res => {
      this.newsItems = res.data.data
      console.log(res.data)
    })
    //   获取电影列表
    this.axios.get(this.url+'/showRanking').then(res => {
      this.moviesItems = res.data.data
      console.log(res.data)
    })
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.contentMain {
  height: 50px;
}
.userMessage {
  padding-top: 60px;
  margin-top: -10px;
  margin-left: -10px;
}
.contentPic {
  padding-top: 5px;
}
.contentLeft {
  width: 60%;
  float: left;
  margin-top: 5px;
  border-top: 1px solid #000;
}
.contentRight {
  width: 38%;
  margin-left: 1%;
  float: left;
  margin-top: 5px;
  border-top: 1px solid #000;
}
.cont-ul {
  padding-top: 0.5rem;
  background-color: #fff;
}
.cont-ul::after {
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
</style>
