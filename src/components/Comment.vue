<template>
    <div>
        <label for="">评论</label>
        <hr>
        <div>
            <!-- v-for="item in items" -->
            <li>
                xxx评论:xxx
            </li>
        </div>
        <div style="padding:5px">
            <textarea v-model="context" style="width:80%;height:50px;" placeholder="内容"></textarea>
        </div>
        <div style="padding-top:10px">
            <!-- @click='send_comment' -->
            <button>评论</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
