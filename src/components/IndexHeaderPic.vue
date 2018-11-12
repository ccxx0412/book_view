<template>
    <div class="headerPic">
        <div>
            <!-- {{recommendTitle}} -->
            <p class="imgTitle">111</p>
            <a href="baidu.com">
                <img src="" class="headerImg">
            </a>
        </div>
    </div>
</template>

<script>
export default {

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
