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
      <index-header-pic
        v-for="item in headerItems"
        :key="item._id"
        :recommendImg="item.recommendImg"
        :recommendSrc="item.recommendSrc"
        :recommendTitle="item.recommendTitle"
      ></index-header-pic>
    </div>
    <div class="contentMain">
      <Row>
        <!-- 改写栅格布局 -->
        <i-col span="11" offset="1">
          <Card>
            <p slot="title">
              <Icon type="ios-film-outline"></Icon>电影
            </p>
            <ul class="cont-ul">
              <!-- 电影列表组件 -->
              <movies-list
                v-for="item in moviesItems"
                :key="item._id"
                :id="item._id"
                :movieName="item.movieName"
                :movieTime="item.movieTime"
              ></movies-list>
            </ul>
          </Card>
        </i-col>

        <i-col span="10" offset="1">
          <Card>
            <p slot="title">
              <Icon type="md-create"></Icon>新闻
            </p>
            <ul class="cont-ul">
              <!-- 新闻列表组件 -->
              <news-list
                v-for="item in newsItems"
                :key="item._id"
                :id="item._id"
                :articleTitle="item.articleTitle"
                :articleTime="item.articleTime"
              ></news-list>
            </ul>
          </Card>
        </i-col>
      </Row>
    </div>
    <!-- footer组件 -->
    <common-footer></common-footer>
  </div>
</template>

<script>
import MovieIndexHeader from "../components/MovieIndexHeader";
import CommonFooter from "../components/CommonFooter";
import IndexHeaderPic from "../components/IndexHeaderPic";
import MoviesList from "../components/MoviesList";
import NewsList from "../components/NewsList";
import UserMessage from "../components/UserMessage";

export default {
  data() {
    return {
      headerItems: [], // 主页推荐
      newsItems: [], //主页新闻列表
      moviesItems: [] //主页电影列表
    };
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
    this.axios.get(this.url + "/showIndex").then(res => {
      this.headerItems = res.data.data;
      console.log(res.data);
    });
    //   获取新闻列表
    this.axios.get(this.url + "/showArticle").then(res => {
      this.newsItems = res.data.data;
      console.log(res.data);
    });
    //   获取电影列表
    this.axios.get(this.url + "/showRanking").then(res => {
      this.moviesItems = res.data.data;
      console.log(res.data);
    });
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.contentMain {
  padding-top: 15px;
}
.userMessage {
  margin-top: 0px;
  margin-left: 0px;
}
.contentPic {
  padding-top: 5px;
}
/* .contentLeft {
  width: 60%;
  float: left;
  margin-top: 5px;
  border-top: 1px solid #000;
} */
/* .contentRight {
  width: 38%;
  margin-left: 1%;
  float: left;
  margin-top: 5px;
  border-top: 1px solid #000;
} */
.cont-ul {
  padding-top: 0.5rem;
  background-color: #fff;
}
.cont-ul::after {
  content: "";
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
</style>
