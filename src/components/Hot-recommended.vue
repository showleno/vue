<template>
    <section class="hot_recommended">
        <div class="title">
            <h3>人气推荐</h3>
            <router-link to="/">
                <font-icon id="icon-more" class="icon"></font-icon>
            </router-link>
        </div>
        <img src="static/img/hot-recommended.jpg" alt="">
        <ul>
            <li v-for="item in product" :key="item.id">
                <router-link :to="'/shop/'+item.type">
                    <img v-lazy="'static/img/'+item.url" alt="">
                    <div class="info">
                        <h3>￥{{ item.price }}</h3>
                        <p>{{ item.num }}人<br />正在浏览</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HotRecommended',
  data() {
      return {
          product: []
      }
  },
  mounted () {
      axios.get('https://easy-mock.com/mock/5ac1e379cb45541720f42424/vue/boys')
      .then ( (res)=> {
          res.data.data.product.forEach( (val, idx) => {
              this.product.push(val)
          })
      }, (error) => {
          console.log(error)
      })
  }
}
</script>
<style scoped>
  .hot_recommended {
    width: 100%;
  }
  .hot_recommended .title {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      background: #f0f0f0;
  }
  .hot_recommended .title h3 {
      background: #f0f0f0;
        padding: 12px 0;
        margin: 0;
        font-size: .75rem;
        width: 100%;
  }
  .hot_recommended .title a {
      position: absolute;
        right: 5px;
  }
  .hot_recommended .title a .icon {
      font-size: 2rem;
      color: #ccc;
  }
  .hot_recommended img {
      width: 100%;
      height: 8rem;
  }
  .hot_recommended ul {
      overflow-x: scroll;
      overflow-y: hidden;
      white-space:nowrap;
  }
  .hot_recommended ul li {
      display: inline-block;
      width: 6rem;
      padding-left: .75rem;
      padding-top: .75rem;
      overflow: hidden;
  }
  .hot_recommended ul li a {
      display: block;
  }
  .hot_recommended ul li a .info {
      -webkit-transform: scale(.8);
      transform: scale(.8);
      -webkit-transform-origin: 0 0 0;
      transform-origin: 0 0 0;
      width: 125%;
      padding: .65rem 0 .5rem;
  }
  .hot_recommended ul li a h3 {
        background: none;
        font-size: 1rem;
        color: #333;
        padding: 0;
        margin: 0;
  }
  .hot_recommended ul li a p {
      margin: 0;
      color: #ccc;
      font-size: .75rem;
      
  }
</style>


