<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
                <h1>{{detail.articleTitle}}</h1>
                <div>{{detail.articleTime}}</div>
                <div class="contentText">{{detail.articleContext}}</div>
        </div> 
            <comment :movie_id="article_id"></comment>
        <div>
            <common-footer></common-footer>
        </div>
    </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/CommonFooter'
import Comment from '../components/Comment'
let article_id=0
export default {
    name:'newDetail',
    data(){
        return{
            article_id:'',
            detail:{}
        }
    },
    components:{
        MovieIndexHeader,
        CommonFooter,
        Comment
    },
    created(){
        article_id=this.$route.query.id
        this.article_id=article_id
        this.axios.post(this.url+'/articleDetail',{
            article_id:article_id
        }).then((res)=>{
            console.log(res.data)
            this.detail=res.data.data
            this.detail.articleTime=new Date(parseInt(this.detail.articleTime)).toLocaleString()
        })
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        margin: 0 auto;
    }
    .contentMain{
        padding-top: 150px;
    }
    .contentText{
        font-size: 15px;
        padding-top: 20px;
    }
</style>
