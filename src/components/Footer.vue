<template>
  <footer class="footer">
      <ul>
          <li v-for="botNav in pathName" :key="botNav.id" :class="{ 'active' : isActive == botNav.path }" @click="router_hop">
              <router-link :to="botNav.url">
                  <font-icon :id="botNav.icon" class="icon"></font-icon>
                    <p>{{botNav.title}}</p>
              </router-link>
          </li>
          <!-- <li :class="{ 'active' : isActive == 'list' }" @click="router_hop">
              <router-link to="/list">
                  <font-icon id="icon-biaoqian" class="icon"></font-icon>
                      <p>分类</p>
              </router-link>
          </li>
          <li :class="{ 'active' : isActive == 'shop' }" @click="router_hop">
              <router-link to="/shop">
                  <font-icon id="icon-sousuo" class="icon"></font-icon>
                      <p>逛</p>
              </router-link>
          </li>
          <li :class="{ 'active' : isActive == 'cart' }" @click="router_hop">
              <router-link to="/cart">
                  <font-icon id="icon-gouwuche" class="icon"></font-icon>
                      <p>购物车</p>
              </router-link>
          </li>
          <li :class="{ 'active' : isActive == 'mine' }" @click="router_hop">
              <router-link to="/mine">
                  <font-icon id="icon-wo" class="icon"></font-icon>
                      <p>我的</p>
              </router-link>
          </li> -->
      </ul>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  props: ['pathName'],
  data () {
      return {
          isActive: null,
      }
  },
  mounted() {
      if( this.$route.path == '/boys' || this.$route.path == '/girls' ) {
                    this.isActive = 'home'
        }else if ( this.$route.path == '/list' || this.$route.path == '/list' ) {
                    this.isActive = 'list'
        }
  },
  methods: {
      router_hop () {
            // if( this.$route.path == '/boys' || this.$route.path == '/girls' ) {
            //             this.isActive = 'home'
            // }else if ( this.$route.path == '/list' || this.$route.path == '/list' ) {
            //             this.isActive = 'list'
            // }
      }
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


