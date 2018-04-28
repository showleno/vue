<template>
  <section class="hot_brand">
        <h3>热门品牌</h3>
        <ul>
            <li v-for="navLink in HotBrand" :key="navLink.id">
                <router-link :to="'/shop/'+navLink.type">
                    <img v-lazy="'static/img/'+navLink.img" alt="">
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
  name: 'HotBrand',
  props: ['HotBrand']
}
</script>
<style scoped>
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
  .hot_brand ul li:last-child {
      width: 50%;
  }
  .hot_brand ul li img {
    width: 100%;
  }
</style>

