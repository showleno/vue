<<<<<<< HEAD
<template>
  <main class="main_content">
    <div class="list_wrapper">
        <h3>我是列表页</h3>
        <div class="search_wrapper">
            <div class="search_input">
              <font-icon id="icon--fangdajing" class="icon"></font-icon>
              <input type="text" placeholder="搜索商品" class="search">
            </div>
        </div>
        <div class="content">
          <div class="nav_tab">
            <ul>
              <li v-for="list in tabList" :key="list.id">
                <span>{{ list.text }}</span>
              </li>
            </ul>
          </div>
          <div class="list_wrapper">
            <ul class="left">
              <li></li>
            </ul>
            <ul class="right">
              <li></li>
            </ul>
          </div>
        </div>
        
    </div>
    <Footer :pathName='pathName' />
  </main>
</template>
<script>
import Footer from './Footer'
export default {
  name: 'List',
  components: {
    'Footer' : Footer
  },
  data () {
    return {
      tabList: [
        {
          "text": "Boys"
        },
        {
          "text": "Girls"
        },
        {
          "text": "Kids"
        },
        {
          "text": "Lifestyle"
        }
      ],
      pathName: [
            {'url': '/boys', "title": '首页', "path": "home", "icon": "icon-shouye"},
            {'url': '/list', "title": '分类', "path": "list", "icon": "icon-biaoqian" },
            {'url': '/shop', "title": '逛', "path": "shop", "icon": "icon-sousuo" },
            {'url': '/cart', "title": '购物车', "path": "cart", "icon": "icon-gouwuche" },
            {'url': '/mine', "title": '我的', "path": "mine", "icon": "icon-wo" },
          ]
    }
  },
  mounted () {
    console.log(this.$store.state.type)
  }
}
</script>
=======
<template>
  <main class="main_content">
    <div class="list_wrapper">
        <h3>我是列表页</h3>
        <div class="search_wrapper">
            <div class="search_input">
              <font-icon id="icon--fangdajing" class="icon"></font-icon>
              <input type="text" placeholder="搜索商品" class="search">
            </div>
        </div>
        <div class="content">
          <div class="nav_tab">
            <ul>
              <li v-for="list in tabList" :key="list.id">
                <span>{{ list.text }}</span>
              </li>
            </ul>
          </div>
          <div class="list_wrapper">
            <ul class="left">
              <li></li>
            </ul>
            <ul class="right">
              <li></li>
            </ul>
          </div>
        </div>
        
    </div>
    <Footer :pathName='pathName' />
  </main>
</template>
<script>
import Footer from './Footer'
export default {
  name: 'List',
  components: {
    'Footer' : Footer
  },
  data () {
    return {
      tabList: [
        {
          "text": "Boys"
        },
        {
          "text": "Girls"
        },
        {
          "text": "Kids"
        },
        {
          "text": "Lifestyle"
        }
      ],
      pathName: [
            {'url': '/boys', "title": '首页', "path": "home", "icon": "icon-shouye"},
            {'url': '/list', "title": '分类', "path": "list", "icon": "icon-biaoqian" },
            {'url': '/shop', "title": '逛', "path": "shop", "icon": "icon-sousuo" },
            {'url': '/cart', "title": '购物车', "path": "cart", "icon": "icon-gouwuche" },
            {'url': '/mine', "title": '我的', "path": "mine", "icon": "icon-wo" },
          ]
    }
  },
  mounted () {
  }
}
</script>
>>>>>>> 92e9c1f87ae9126d7c0ac01003a91c24eb78cd08
