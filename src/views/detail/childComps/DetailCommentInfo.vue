<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
      <div class="comment-title">
          <span class="comment-text">用户评价</span>
          <span class="comment-more" >更多</span>
      </div>
      <div class="comment-list">
          <div class="comment-item">
              <div class="comment-user">
                  <img :src="commentInfo.user.avatar" alt="">
                  <span class="user-name">{{commentInfo.user.uname}}</span>
              </div>
              <div class="comment-content">
                  {{commentInfo.content}}
              </div>
              <div class="time-type-size">
                  <span class="created-time">{{commentInfo.created | dateFormat}}</span>
                  <span>{{commentInfo.style}}</span>
                  
              </div>

              <div class="comment-images" v-if="commentInfo.images">
                  <img :src="image" v-for="(image, index) in commentInfo.images" :key="index">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
    props: {
        commentInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        dateFormat(val) {
            const date = new Date(val * 1000)
            return formatDate(date, 'yyyy-MM-dd hh:mm')
        }
    }
}
</script>

<style scoped>
    .comment-info {
        padding: 0 10px 20px 10px;
        border-bottom: 5px solid #ddd;
    }
    .comment-title {
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        line-height: 220%;
        color: #222;
    }
    .comment-user {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }
    .comment-user img {
        border-radius: 50%;
        overflow: hidden;
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    .comment-user span {
        font-size: 20px;
    }
    .comment-content {
        color: #555;
        line-height: 140%;
    }
    .time-type-size {
        margin: 10px 0;
        color: #555;
    }
    .created-time {
        padding-right: 10px;
    }
    .comment-images {
        display: flex;
        flex-wrap: wrap;
    }
    .comment-images img {
        width: 80px;
        height: 80px;
        margin: 0 6px 6px 0;
    }
</style>