<template>
  <div class="publication-pages">
    <div class="banner">
      <a-carousel>
        <div class="banner-item">
          <div class="title">
            <h3>{{pageBanner.title}}</h3>
            <div class="desc">{{pageBanner.desc}}</div>
          </div>
        </div>
      </a-carousel>
    </div>
    <div class="publication-detail">
      <div class="menu-bar">
        <a-menu v-model:selectedKeys="currentYear" mode="horizontal" :items="years" @select="changeYear"/>
      </div>

      <div class="publication-list">
        <a-table
          :dataSource="currentPublications"
          :columns="columns"
          :showHeader="false"
          :pagination="false"
          row-class-name="publication-row"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'abbr'">
              <a-tag :color="getColor(record.abbr)">{{ record.abbr }}</a-tag>
            </template>
            <template v-else-if="column.key === 'year'">
              <div class="year-col">{{record.year}}</div>
            </template>
            <template v-else-if="column.key === 'content'">
              <div class="title">{{record.title}}</div>
              <div class="writer">{{record.writer}}</div>
              <em class="subtitle">{{record.subtitle}}</em>
              <div class="tags" v-if="record.tags && record.tags.length">
                <a-tag v-for="tag in record.tags" :color="tag.type">
                  <a v-if="tag.name==='PDF'" :href="tag.url" download>{{tag.name}}</a>
                  <a v-else-if="tag.url" :href="tag.url" target="_blank">{{tag.name}}</a>
                  <span v-else>{{tag.name}}</span>
                </a-tag>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarOutlined, LikeOutlined, MessageOutlined, RightOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { pageBanner, publications, ABBR } from './data.js'

const columns = [
  {
    title: '',
    dataIndex: 'abbr',
    key: 'abbr',
    width: '120px'
  },
  {
    title: '',
    key: 'content',
  },
  {
    title: '',
    dataIndex: 'year',
    key: 'year',
    width: '120px'
  }
]
const currentPublications = ref(publications)
const years = [{key: 'all', label: 'All', title: 'All'}]
const currentYear = ref(['all']);
const _years = []

publications.forEach((elem) => {
  if (!_years.includes(elem.year)) {
    _years.push(elem.year)
  } 
})
_years.forEach((year) => {
  years.push({
    key: year,
    label: year,
    title: year
  })
})

const changeYear = ({selectedKeys}) => {
  console.log(selectedKeys)
  const key = selectedKeys[0]
  let res = []
  if(key === 'all') {
    res = publications
  } else {
    res = publications.filter(elem => elem.year === key)
  }
  currentPublications.value = res
}

</script>

<script>
export default {
  name: "Publications",
  methods: {
    getColor(abbr) {
      for (const category in ABBR) {
        if (ABBR[category].conferences.includes(abbr)) {
          return ABBR[category].color; // 返回对应类别的颜色
        }
      }
      return null; // 默认颜色
    }
  }

}
</script>

<style lang="less" scoped>
.publication-pages {
  .banner {
    width: 100%;
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
  .publication-detail {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 20px 40px 20px;
    .menu-bar {
      margin-bottom: 20px;
    }
  }
  .publication-list {
    
    :deep(.title) {
      font-size: 18px;
    }
    :deep(.subtitle) {
      font-size: 16px;
    }
    :deep(.writer) {
      font-size: 16px;
    }
    :deep(.tags) {
      margin-top: 10px;
      margin-bottom: 6px;
    }
    :deep(.publication-row) {
      .ant-table-cell:first-child, .ant-table-cell:nth-child(3) {
        vertical-align: top;
        .ant-tag {
          margin-top: 6px;
        }
      }
      .year-col {
        padding-top: 4px;
        font-size: 18px;
      }
    }
  }
}
  

</style>