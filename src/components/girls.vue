<template>
    <!-- <home :ad=ad :nav=nav :icon_list=icon_list :pathName=pathName /> -->
    <main class="main_content">
      <SlideShow/>
      <section class="icons-list">
        <ul>
          <li v-for="list in icon_list" :key="list.id">
            <router-link :to="'/list/'+list.type">
              <img :src="'static/img/'+list.img" alt="">
              <h3>{{ list.title }}</h3>
            </router-link>
          </li>
        </ul>
      </section>
      <div class="h14"></div>
      <section class="ad">
        <router-link to="ad.url" v-for="ad in ad" :key="ad.id">
          <img :src="ad.img" alt="">
        </router-link>
      </section>
      <section class="hot_brand">
        <h3>热门品牌</h3>
        <ul>
          <li v-for="navLink in nav" :key="navLink.id">
            <router-link :to="'/list/'+navLink.type">
              <img :src="'static/img/'+navLink.img" alt="">
            </router-link>
          </li>
        </ul>
      </section>
      <Footer :pathName=pathName />
  </main>
</template>
<script>
import axios from 'axios'
import SlideShow from './SlideShow'
import Footer from './Footer'
export default {
  name: 'Boys',
  data () {
      return {
          ad: [],
          nav: [],
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
      res.data.data.icon_list.forEach( (val, idx)=> {
        this.icon_list.push(val)
      })
      res.data.data.ad.forEach( (val, idx)=> {
        this.ad.push(val)
      })
      res.data.data.nav.forEach((val, idx) => {
        this.nav.push(val)
      })
      eventAllData.$emit('BoyAllData', res.data.data);
    },(error) => {
      console.log(error)
    })
  },
  components: {
    'SlideShow': SlideShow,
    'Footer': Footer,
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
  .hot_brand {
    width: 100%;
  }
  .hot_brand h3 {
    background: #f0f0f0;
    padding: 12px 0;
    margin: 0;
    font-size: .75rem;
  }
  .hot_brand ul {
    display: flex;
    display: -wekit-flex;
    justify-content:  flex-start;
    flex-wrap:  wrap;
    margin: 0;
  }
  .hot_brand ul li {
    width: 25%;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #eee;
  }
  .hot_brand ul li img {
    width: 100%;
  }
</style>

