<template>
  <footer class="footer">
      <ul>
          <li :class="{ 'active' : 
          this.$route.path == '/boys' ||
           this.$route.path == '/girls' || 
           this.$route.path == '/kids'
          }">
              <router-link :to="'/'+$store.state.type">
                  <font-icon id="icon-shouye" class="icon"></font-icon>
                      <p>首页</p>
              </router-link>
          </li>
          <li :class="{ 'active' : this.$route.path == '/list' }" >
              <router-link to="/list">
                  <font-icon id="icon-biaoqian" class="icon"></font-icon>
                      <p>分类</p>
              </router-link>
          </li>
          <li :class="{ 'active' : this.$route.path == '/shop' }">
              <router-link to="/shop">
                  <font-icon id="icon-sousuo" class="icon"></font-icon>
                      <p>逛</p>
              </router-link>
          </li>
          <li :class="{ 'active' : this.$route.path == '/cart' }">
              <router-link to="/cart">
                  <font-icon id="icon-gouwuche" class="icon"></font-icon>
                      <p>购物车</p>
              </router-link>
          </li>
          <li :class="{ 'active' : this.$route.path == '/mine' }">
              <router-link to="/mine">
                  <font-icon id="icon-wo" class="icon"></font-icon>
                      <p>我的</p>
              </router-link>
          </li>
      </ul>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  mounted() {
  },
  methods: {
  }
}
</script>
<style>
    .footer {
        position: fixed;
        left: 50%;
        bottom: 0;
        margin-left: -50%;
        width: 100%;
        height: 4rem;
        /* max-width: 30rem; */
        padding-top: .5rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        border-top: 1px solid #b0b0b0;
        z-index: 3;
    }
    .footer ul {
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
    }
    .footer ul li.active a {
        color: #000;
    }
    .footer ul li a {
        color: #999;
        font-size: .75rem;
    }
    .footer ul li a .icon {
        font-size: 1.8rem;
    }
    .footer ul li a p {
        margin-top: 2px;
    }
</style>


