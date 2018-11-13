<template>
    <div class="headerPic">
        <div>
            
            <p class="imgTitle">{{recommendTitle}}</p>
            <a :href="recommendSrc">
                <img :src="recommendImg" class="headerImg">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'recommendImg','recommendSrc','recommendTitle',
    ]
}
</script>

<style scoped>
    .headerPic{
        width: 100%;
        height: 300px;
        background-color: antiquewhite;
    }
    .headerImg{
        width: 100%;
        height: 300px;
    }
    .imgTitle{
        z-index: 2;
        padding-left: 45%;
        padding-top: 230px;
        position: absolute;
        color: #fff;
        font-size: 20px;
    }
</style>
