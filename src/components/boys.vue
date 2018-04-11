<template>
    <!-- <home :ad=ad :nav=nav :icon_list=icon_list :pathName=pathName /> -->
    <main class="main_content">
      <SlideShow :banner=banner />
      <section class="icons-list">
        <ul>
          <li v-for="list in icon_list" :key="list.id">
            <router-link :to="'/list/'+list.type">
              <img v-lazy="'static/img/'+list.img" alt="">
              <h3>{{ list.title }}</h3>
            </router-link>
          </li>
        </ul>
      </section>
      <div class="h14"></div>
      <section class="ad">
        <router-link to="ad.url" v-for="ad in ad" :key="ad.id">
          <img v-lazy="ad.img" alt="">
        </router-link>
      </section>
      <!-- <section class="hot_brand">
        <h3>热门品类</h3>
        <ul>
          <li v-for="navLink in nav" :key="navLink.id">
            <router-link :to="'/list/'+navLink.type">
              <img :src="'static/img/'+navLink.img" alt="">
            </router-link>
          </li>
        </ul>
      </section> -->
      <HotCategory :HotCategory=HotCategory />
      <div class="h14"></div>
      <SlideShow :banner=banner />
      <HotBrand :HotBrand=HotBrand />
      <div class="h14"></div>
      <section class="ad">
        <router-link to="ad[0].url">
          <img v-lazy="ad[0].img" alt="">
        </router-link>
      </section>
      <HotRecommended />
      <div class="h14"></div>
      <YouLike />
      <Footer :pathName=pathName />
  </main>
</template>
<script>
import axios from 'axios'
import SlideShow from './SlideShow'
import Footer from './Footer'
import HotCategory from './Hot-category'
import HotBrand from './Hot-brand'
import HotRecommended from './Hot-recommended'
import YouLike from './You-like'
export default {
  name: 'Boys',
  data () {
      return {
          ad: [],
          banner: [],
          HotCategory: [],
          HotBrand: [],
          icon_list: [],
          pathName: [
            {'url': '/boys', "title": '首页', "path": "home", "icon": "icon-shouye"},
            {'url': '/list', "title": '分类', "path": "list", "icon": "icon-biaoqian" },
            {'url': '/shop', "title": '逛', "path": "shop", "icon": "icon-sousuo" },
            {'url': '/cart', "title": '购物车', "path": "cart", "icon": "icon-gouwuche" },
            {'url': '/mine', "title": '我的', "path": "mine", "icon": "icon-wo" },
          ]
      }
  },
  mounted() {
      axios.get('https://easy-mock.com/mock/5ac1e379cb45541720f42424/vue/boys')
    .then( (res)=> {
      // icon
      res.data.data.icon_list.forEach( (val, idx)=> {
        this.icon_list.push(val)
      })
      // ad 
      res.data.data.ad.forEach( (val, idx)=> {
        this.ad.push(val)
      })
      // category
      res.data.data.nav.forEach((val, idx) => {
        this.HotCategory.push(val)
      })
      // brand
      res.data.data.brand.forEach((val, idx) => {
        this.HotBrand.push(val)
      })
      // banner
      res.data.data.banner.forEach((val, idx) => {
        this.banner.push(val)
      })
    },(error) => {
      console.log(error)
    })
  },
  components: {
    'SlideShow': SlideShow,
    'Footer': Footer,
    'HotCategory': HotCategory,
    'HotBrand': HotBrand,
    'HotRecommended': HotRecommended,
    'YouLike': YouLike,
  }
}
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
  }
  a {
    color: #42b983;
  }
  .h14 {
    height: 14px;
    background: #f0f0f0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .icons-list {
    width: 100%;
    padding: 7px 0;
  }
  .icons-list ul {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icons-list ul li {
    width: 25%;
    padding: 0 22px;
  }
  .icons-list ul li img {
    max-width: 100%;
  }
  .icons-list ul li h3 {
    font-size: .75rem;
    color: #333;
    margin-top: 4px;
  }
  .ad {
    width: 100%;
    background: #f0f0f0;
  }
  .ad img {
    max-width: 100%;
  }
</style>

