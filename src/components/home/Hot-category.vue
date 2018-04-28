<template>
  <section class="hot_category">
        <h3>热门品类</h3>
        <ul>
            <li v-for="navLink in HotCategory" :key="navLink.id">
            <router-link :to="'/list/'+navLink.type">
                <img v-lazy="'static/img/'+navLink.img" alt="">
            </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
  name: 'HotCategory',
  props: ['HotCategory'],
  data () {
      return {
      }
  },
}
</script>
<style scoped>
    .hot_category {
    width: 100%;
  }
  .hot_category h3 {
    background: #f0f0f0;
    padding: 12px 0;
    margin: 0;
    font-size: .75rem;
  }
  .hot_category ul {
    display: flex;
    display: -wekit-flex;
    justify-content:  flex-start;
    flex-wrap:  wrap;
    margin: 0;
  }
  .hot_category ul li {
    width: 25%;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #eee;
  }
  .hot_category ul li img {
    width: 100%;
  }
</style>

