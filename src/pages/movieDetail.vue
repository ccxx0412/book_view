<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div class="">
                <h1>电影名称</h1>
                <div class="viewNum">下载次数:</div>
            </div>
            <div class="">
                <button>点击下载</button>
            </div>
            <div>
                <img  class="headerImg" src="../assets/logo.png" alt="">
            </div>
            <div class="btnPosition">
                <div class="SupportBtn">点赞<div></div></div>
            </div>
        </div>
        <div>
            <!-- :movie_id:movie_id -->
            <comment></comment>
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
let movie_id=0
export default {
    name:'MovieDetail',
    data(){
        return{

        }
    },
    components:{
        MovieIndexHeader,
        CommonFooter,
        Comment
    }
}
</script>

<style scoped>
    .headerImg{
        height: 200px;
    }
    .container{
        width: 100%;
        margin: 0 auto;
    }
    .contentMain{
        padding-top: 150px;
    }
    .btnPosition{
        padding-left: 48%;
    }
    .SupportBtn{
        border: 1px solid #000;
        width: 60px;
    }
    .viewNum{
        font-size: 10px;
    }
</style>
