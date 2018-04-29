<template>
    <!-- <home :ad=ad :nav=nav :icon_list=icon_list :pathName=pathName /> -->
    <main class="main_content">
      <SlideShow :banner=banner />
      <NavList :icon_list=icon_list />
      <section class="ad">
        <router-link to="ad.url" v-for="ad in ad" :key="ad.id">
          <img v-lazy="ad.img" alt="">
        </router-link>
      </section>
      <HotCategory :HotCategory=HotCategory />
      <SlideShow :banner=banner />
      <HotBrand :HotBrand=HotBrand />
      <section class="ad">
        <router-link to="ad[0].url">
          <img v-lazy="ad[0].img" alt="">
        </router-link>
      </section>
      <HotRecommended />
      <YouLike />
  </main>
</template>
<script>
import axios from 'axios'
import SlideShow from './SlideShow'
import NavList from './Nav-list'
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
    'HotCategory': HotCategory,
    'HotBrand': HotBrand,
    'HotRecommended': HotRecommended,
    'YouLike': YouLike,
    'NavList': NavList
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
 
  .ad {
    width: 100%;
    background: #f0f0f0;
  }
  .ad img {
    max-width: 100%;
  }
</style>

