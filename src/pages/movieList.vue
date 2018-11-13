<template>
    <div class="container">
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <div class="contentMain">
            <div>
                <div class="contentText">
                    <ul class="cont-ul">
                        <movies-list v-for="item in moviesItems" :key="item._id" :id="item._id" 
                        :movieName="item.movieName"
                        :movieTime="item.movieTime"
                        ></movies-list>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <common-footer></common-footer>
        </div>
    </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/CommonFooter'
import MoviesList from '../components/MoviesList'
export default {
    name:'movieList',
    data(){
        return{
            moviesItems:[]
        }
    },
    components:{
        MovieIndexHeader,
        CommonFooter,
        MoviesList
    },
    created(){
        // 获取所有电影
        this.axios.get(this.url+'/movie/list').then((res)=>{
            this.moviesItems=res.data.data
            console.log(res.data)
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
