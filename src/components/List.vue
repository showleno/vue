<template>
  <main class="main_content">
    <div class="list_wrapper">
        <h3>我是列表页</h3>
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
