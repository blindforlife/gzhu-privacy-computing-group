<template>
<div class="people-page">
  <div class="banner">
    <a-carousel class="carousel">
      <div class="banner-item">
        <div class="title">
          <h3>{{pageBanner.title}}</h3>
          <div class="desc">{{pageBanner.desc}}</div>
        </div>
      </div>
    </a-carousel>
  </div>
  <div class="people-detail">
    <template v-for="group in staffGroup">
      <div class="title">{{group.groupTitle}}</div>
      <div class="inner-container">
        <a-card hoverable class="news-card" v-for="staff in group.members">
          <template #cover>
            <img :src='`./staffImages/${staff.imageUrl || "empty_avater.png"}`'/>
          </template>
          <a-card-meta>
            <template #title>{{staff.name}}</template>
            <template #description>
              <div class="desc">
                <div style="color: rgba(0, 0, 0, 0.88)">{{staff.desc}}</div>
                <div v-if="staff.content" v-html="staff.content.replace(/\n/g, '<br>')"></div>
              </div>
              <div class="footer">
                <div v-if="staff.email" style="color: #1677ff">
                  <MailOutlined style="margin-right: 6px" />
                  {{staff.email}}
                </div>
                <div v-if="staff.url" style="font-size: 16px; color: #1677ff">
                  <HomeOutlined style="margin-right: 6px" />
                  <a :href="staff.url" target="_blank">{{staff.url}}</a>
                </div>
                <div v-if="staff.location">
                  <EnvironmentOutlined style="margin-right: 6px" />
                  {{staff.location}}
                </div>
              </div>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </template>
  </div>
</div>
</template>
<script setup>
import { staffGroup, pageBanner } from './data.js'
import { MailOutlined, HomeOutlined, EnvironmentOutlined } from '@ant-design/icons-vue'

const getImageUrl = (imageUrl) => {
  // imageUrl ? `/src/assets/images/${imageUrl}` : '/src/assets/images/empty_avater.png'
  import (`./staffImages/${imageUrl}`)
}
</script>
<script>
export default {
  name: "People"
}
</script>
<style lang="less" scoped>
.people-page {
  .carousel {
    max-width: 1200px;
    margin: 0 auto;
  }
  .banner {
    width: 100%;
    background: #000616;
    padding: 0 20px;
    :deep(.banner-item) {
      text-align: left;
      display: flex !important;
      align-items: center;
      justify-content: center;
      height: 240px;
      background-image: url('@/assets/images/banner1.jpeg');
      background-size: cover;
      .title {
        max-width: 1200px;
        width: 100%;
        padding: 0 20px;
        .desc {
          max-width: 280px;
          color: rgba(255,255,255, 0.5);
        }
        h3 {
        font-size: 28px;
        }
      }
    }
    :deep(.slick-slide) {
      text-align: center;
      height: 240px;
      // line-height: 160px;
      background: #001529;
      overflow: hidden;
    }
    :deep(.slick-slide h3) {
      color: #fff;
    }
  }
  .people-detail {
    max-width: 1200px;
    margin: 0 auto;
    padding: 34px 20px 0 20px;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
    .inner-container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 40px;
    }
    
    .news-card {
      width: 24%;
      margin-top: 16px;
      :deep(.ant-card-cover) {
        width: 100%;
        height: 220px;
        margin-inline-start: 0;
        margin-top: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      :deep(.ant-card-actions) {
        background: #f5f5f5;
      }
      :deep(.ant-card-body) {
        padding: 12px 16px;
      }
      :deep(.desc) {
        width: 100%;
        height: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
      }
      // &:not(:nth-child(4n)) {
      //   margin-right: calc(4% / 3)
      // }
    }
    
    @media screen and (max-width: 780px) {
      .news-card {
        width: 49%;
        &:not(:nth-child(2n)) {
          margin-right: 2%;
        }
      }
    }
    @media screen and (min-width: 781px) and (max-width: 1023px) {
      .news-card {
        width: 32%;
        &:not(:nth-child(3n)) {
          margin-right: calc(4% / 2)
        }
      }
    }
    @media (min-width: 1024px) {
      .news-card {
        width: 24%;
        &:not(:nth-child(4n)) {
          margin-right: calc(4% / 3)
        }
      }
    }
  }
}
</style>