<template>
  <section class="uLike">
      <div class="title">
          <font-icon id="icon-arrow02up" class="icon"></font-icon>
          <h3>你可能喜欢</h3>
      </div>
      <ul>
            <li v-for="item in product" :key="item.id">
                <router-link :to="'/shop/'+item.type">
                    <img v-lazy="'static/img/'+item.url" alt="">
                </router-link>
                <div class="info">
                    <h3>{{ item.text }}</h3>
                    <p>
                        <span>￥{{ item.price }}</span>
                        <router-link to="/">
                            <font-icon id="icon-more" class="icon"></font-icon>
                        </router-link>
                    </p>
                </div>
            </li>
        </ul>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'YouLike',
    data () {
        return {
            product: []
        }
    },
    mounted () {
        axios.get('https://easy-mock.com/mock/5ac1e379cb45541720f42424/vue/product')
        .then( (res)=> {
            res.data.data.list.forEach( (val, idx)=> {
                this.product.push(val)
            })
        }, (error)=> {
            console.log(error)
        })
    }
}
</script>
<style scoped>
    .uLike .title {
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
    }
    .uLike .title .icon {
        margin-right: .625rem;
    }
    .uLike ul {
        padding: 0 2%;
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
    }
    .uLike ul li {
        display: inline-block;
        width: 49%;
        margin-right: 2%;
    }
    .uLike ul li:nth-child(2n+2) {
        margin-right: 0
    }
    .uLike ul li .info {
        -webkit-transform: scale(.8);
      transform: scale(.8);
      -webkit-transform-origin: 0 0 0;
      transform-origin: 0 0 0;
      width: 125%;
      padding: .65rem 0 .5rem;
      color: #666;
    }
    .uLike ul li h3 {
        font-size: .75rem;
        text-align: left;
        margin: 0;
    }
    .uLike ul li p {
        display:flex;
        display:-webkit-flex;
        justify-content: space-between;
        align-items: center;
        font-size: .875rem;
        text-align: left;
        color: #333;
    }
    .uLike ul li p a {
        color: #999;
        margin-right: 5px;
    }
    .uLike ul li p a .icon {
        font-size: 1.4rem;
    }
</style>

